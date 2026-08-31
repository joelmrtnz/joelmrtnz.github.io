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
  varying float vHeight;
  varying vec3 vRelief;

  const float DOMAIN = 2.6;
  const float AMPLITUDE = 34.0;
  const float EPSILON = 0.035;

  ${SURFACE_FN}

  void main() {
    vUv = uv;

    vec2 p = vec2(uv.x * uAspect, uv.y) * DOMAIN;
    float h = surface(p, uTime);
    vHeight = h;

    // Sampled in the noise domain, not in world units, so relief reads the same at any plane size.
    float hx = surface(p + vec2(EPSILON, 0.0), uTime);
    float hy = surface(p + vec2(0.0, EPSILON), uTime);
    vRelief = normalize(vec3((h - hx) / EPSILON, (h - hy) / EPSILON, 3.0));

    vec3 displaced = position;
    displaced.z += h * AMPLITUDE;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

export const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uTextEdge;

  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vRelief;

  const float DENSITY = 3.4;

  void main() {
    // Iso-lines of the height field. fwidth holds them at one pixel wherever the gradient steepens,
    // so on paper this reads as drawn contour lines: a translucent wash there only reads as a stain.
    float h = vHeight * DENSITY;
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
