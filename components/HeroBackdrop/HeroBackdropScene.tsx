'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Color, LinearSRGBColorSpace, ShaderMaterial } from 'three';
import { FRAGMENT_SHADER, VERTEX_SHADER } from './heroBackdropShader';

const SEGMENTS = 64;
const OVERSCAN = 1.08;
// Orthographic projection flattens pure z displacement, so the plane leans just enough to show it.
const TILT = 0.07;

// The wash sits on empty ground, not behind text, so it can be strong enough to actually see.
const LIGHT_OPACITY = 0.55;
const DARK_OPACITY = 0.9;

// Below this the text fills the full width and there is no empty ground left to paint.
const MIN_WIDTH = 760;
const TEXT_EDGE = 0.6;

type BackdropUniforms = {
  uTime: { value: number };
  uAspect: { value: number };
  uColor: { value: Color };
  uOpacity: { value: number };
  uTextEdge: { value: number };
};

type SurfaceProps = {
  accent: string;
  animate: boolean;
  isDark: boolean;
};

function Surface({ accent, animate, isDark }: SurfaceProps) {
  const viewport = useThree((state) => state.viewport);
  const canvasWidth = useThree((state) => state.size.width);
  const invalidate = useThree((state) => state.invalidate);
  const elapsed = useRef(0);

  // Built here, not passed as a <shaderMaterial uniforms> prop: R3F deep-clones that prop,
  // which would leave every per-frame write landing on an object the GPU never reads.
  const { material, uniforms } = useMemo(() => {
    const owned: BackdropUniforms = {
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uColor: { value: new Color() },
      uOpacity: { value: 0 },
      uTextEdge: { value: TEXT_EDGE },
    };

    return {
      uniforms: owned,
      material: new ShaderMaterial({
        uniforms: owned,
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      }),
    };
  }, []);

  const width = viewport.width * OVERSCAN;
  const height = viewport.height * OVERSCAN;

  useEffect(() => {
    uniforms.uAspect.value = width / height;
    invalidate();
  }, [uniforms, width, height, invalidate]);

  useEffect(() => {
    // A raw ShaderMaterial writes straight to the sRGB buffer, so the accent must stay unconverted.
    uniforms.uColor.value.setStyle(accent, LinearSRGBColorSpace);
    const roomToPaint = canvasWidth >= MIN_WIDTH;
    uniforms.uOpacity.value = roomToPaint ? (isDark ? DARK_OPACITY : LIGHT_OPACITY) : 0;
    invalidate();
  }, [uniforms, accent, isDark, invalidate, canvasWidth]);

  useFrame((_, delta) => {
    if (!animate) return;
    elapsed.current += delta;
    uniforms.uTime.value = elapsed.current;
  });

  return (
    <mesh material={material} rotation={[TILT, 0, 0]} scale={[width, height, 1]}>
      <planeGeometry args={[1, 1, SEGMENTS, SEGMENTS]} />
    </mesh>
  );
}

function ContextGuard({ onLost }: { onLost: () => void }) {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('webglcontextlost', onLost);
    return () => canvas.removeEventListener('webglcontextlost', onLost);
  }, [gl, onLost]);

  return null;
}

type HeroBackdropSceneProps = SurfaceProps & {
  onLost: () => void;
};

export default function HeroBackdropScene({
  accent,
  animate,
  isDark,
  onLost,
}: HeroBackdropSceneProps) {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 200], zoom: 1, near: 1, far: 1000 }}
      dpr={[1, 2]}
      frameloop={animate ? 'always' : 'demand'}
      gl={{ antialias: false, powerPreference: 'low-power' }}
      style={{ pointerEvents: 'none' }}
    >
      <ContextGuard onLost={onLost} />
      <Surface accent={accent} animate={animate} isDark={isDark} />
    </Canvas>
  );
}
