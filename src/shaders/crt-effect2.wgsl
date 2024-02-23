struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

// time value
@group(1) @binding(0)
var<uniform> timeValue: f32;

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


fn brownConradyDistortion(uv: vec2<f32>, scalar: f32) -> vec2<f32>
{
// AH!!!    uv = uv * 2.0 - 1.0;
    var uvv = (uv - 0.5 ) * 2.0;
    
    if( true )
    {
        // positive values of K1 give barrel distortion, negative give pincushion
        var barrelDistortion1 = -0.02 * scalar; // K1 in text books
        var barrelDistortion2 = 0.0 * scalar; // K2 in text books

        var r2 = dot(uvv,uvv);
        uvv *= 1.0 + barrelDistortion1 * r2 + barrelDistortion2 * r2 * r2;
        //uv *= 1.0 + barrelDistortion1 * r2;
    }
    
    // tangential distortion (due to off center lens elements)
    // is not modeled in this function, but if it was, the terms would go here
//    return uv * 0.5 + 0.5;
   return (uvv / 2.0) + 0.5;
}

fn barrelDistortion(p: vec2<f32>, amt: vec2<f32> ) -> vec2<f32>
{
    var pp = 2.0 * p - 1.0;

    var maxBarrelPower = sqrt(5.0);
    var radius = dot(pp,pp); //faster but doesn't match above accurately
    pp *= pow(vec2(radius), maxBarrelPower * amt);

    return pp * 0.5 + 0.5;
}


// var NoiseSeed: f32;

fn randomFloat() -> f32 {
  var NoiseSeed: f32;
  NoiseSeed = sin(NoiseSeed) * 84522.13219145687;
  return fract(NoiseSeed);
}

fn ACESFilm(x: vec3<f32>) -> vec3<f32>
{
    var a = 2.51;
    var b = 0.03;
    var c = 2.43;
    var d = 0.59;
    var e = 0.14;
    return (x*(a*x+b))/(x*(c*x+d)+e);
}

@fragment
fn fragmentMain(
    vs_out: VertexOut
) -> @location(0) vec4<f32> {
    // Apply barrel distortion (CRT curvature)
    var curvatureAmount: f32 = 0.22; // Adjust for desired curvature
    var center: vec2<f32> = vec2<f32>(0.5, 0.5); // Center of distortion
    var delta: vec2<f32> = vs_out.texCoords.xy - center;
    var r2: f32 = dot(delta, delta);
    var distortion: f32 = 1.0 + curvatureAmount * r2;
    var distortedCoords: vec2<f32> = center + delta * distortion;

    // Sample the scene texture with curvature
    var sceneColor: vec3<f32> = textureSample(tex0, texSampler0, distortedCoords).rgb;

    // Simulate scanlines
    var scanlineIntensity: f32 = 0.3; // Adjust as needed
    var scanlineFrequency: f32 = 1000.0; // Increase for denser scanlines
    var scanlineOffset: f32 = sin(timeValue) * 5; // Oscillate the scanline phase
    var scanlineValue: f32 = sin(distortedCoords.y * scanlineFrequency + scanlineOffset);
    sceneColor -= scanlineIntensity * vec3<f32>(scanlineValue);

    // Simulate phosphor glow (bloom)
    var bloomIntensity: f32 = 0.3; // Adjust as needed
    var bloomColor: vec3<f32> = vec3<f32>(1.0, 1.0, 0.8); // Yellowish glow
    sceneColor += bloomIntensity * bloomColor;

    // Add vignetting effect
    var vignetteIntensity: f32 = 0.00001; // Adjust for desired strength
    var vignetteDistance: f32 = length(distortedCoords.xy - center);
    var vignetteFactor: f32 = smoothstep(1.0, vignetteIntensity, vignetteDistance);
    sceneColor *= vignetteFactor * 1.1;

    return vec4<f32>(sceneColor, 1.0);
}