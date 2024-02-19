struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
@vertex
fn vertexMain(
  @location(0) pos: vec2f, //xy
  @location(1) texCoords: vec2f, //rgb
) -> VertexOut
{

  var output : VertexOut;
  output.position = vec4f(pos, 0.0, 1.0);
  output.texCoords = texCoords;
  return output;
}

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

// this is our brightness blur texture
@group(1) @binding(0)
var texSampler1: sampler;

@group(1) @binding(1)
var tex1: texture_2d<f32>;

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4f
{
  var screenTexture = textureSample(tex0, texSampler0, fragData.texCoords).rgb;
  var brightnessBlurTexture = textureSample(tex1, texSampler1, fragData.texCoords).rgb;

  screenTexture *= (vec3f(1.0) - clamp(brightnessBlurTexture, vec3f(0.0), vec3f(1.0)));  

  return vec4f(screenTexture + brightnessBlurTexture, 1.0); // final color of the pixel
}