// Layered sines rather than value noise: no texture lookups, no fbm loop, and the
// derivative is cheap enough to evaluate three times per vertex for the normal.
const SURFACE_FN = /* glsl */ `
  float surface(vec2 p, float t) {
    float h = sin(p.x * 1.10 + t * 0.55) * 0.50;
    h += sin(p.y * 1.40 - t * 0.42) * 0.38;
    h += sin((p.x + p.y) * 0.90 + t * 0.31) * 0.30;
    h += sin((p.x - p.y) * 1.70 - t * 0.24) * 0.18;
    return h / 1.36;
  }
`;

export const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uAspect;

  varying vec2 vUv;

  const float DOMAIN = 2.6;
  const float AMPLITUDE = 34.0;

  ${SURFACE_FN}

  void main() {
    vUv = uv;

    // The displacement only shapes the silhouette now; the contour itself is solved in the fragment.
    vec2 p = vec2(uv.x * uAspect, uv.y) * DOMAIN;
    vec3 displaced = position;
    displaced.z += surface(p, uTime) * AMPLITUDE;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

export const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uTextEdge;
  uniform float uTime;
  uniform float uAspect;

  varying vec2 vUv;

  const float DOMAIN = 2.6;
  const float DENSITY = 3.4;

  ${SURFACE_FN}

  void main() {
    // The height is recomputed per pixel, not interpolated from the vertices: a contour drawn from a
    // linearly interpolated varying is piecewise linear, which shows up as kinks along every triangle.
    vec2 p = vec2(vUv.x * uAspect, vUv.y) * DOMAIN;
    float h = surface(p, uTime) * DENSITY;

    float edge = min(fract(h), 1.0 - fract(h));
    float line = 1.0 - smoothstep(0.0, fwidth(h) * 1.1, edge);

    // The text owns the left column, and anything behind it costs contrast.
    float clear = smoothstep(uTextEdge - 0.08, uTextEdge + 0.08, vUv.x);
    float tail = 1.0 - smoothstep(0.92, 1.04, vUv.x);
    float fadeY = 1.0 - smoothstep(0.10, 0.96, abs(vUv.y - 0.5) * 2.0);

    float alpha = uOpacity * line * clear * tail * fadeY;

    // The drawing buffer is premultiplied, so the colour has to carry alpha too.
    gl_FragColor = vec4(uColor * alpha, alpha);
  }
`;
