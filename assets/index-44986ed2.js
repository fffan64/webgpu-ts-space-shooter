var W=Object.defineProperty;var X=(i,e,t)=>e in i?W(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(X(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class K{constructor(e,t,n,r){this.topLeft=e,this.topRight=t,this.bottomRight=n,this.bottomLeft=r}}class G{constructor(e,t,n,r){this.x=e,this.y=t,this.width=n,this.height=r}copy(){return new G(this.x,this.y,this.width,this.height)}}class ${constructor(e,t,n){this.texture=e,this.drawRect=t,this.sourceRect=n}}class Q{constructor(e,t,n,r){this.textureCoords=e,this.size=t,this.advance=n,this.offset=r}}class J{constructor(e,t){a(this,"chars",{});this.texture=e,this.lineHeight=t}getChar(e){return this.chars[e]}createChar(e,t,n,r,s){this.chars[e]=new Q(t,n,r,s)}}class b{constructor(){a(this,"texture");a(this,"sampler");a(this,"id");a(this,"width");a(this,"height")}static async createTexture(e,t){const n=e.createTexture({size:{width:t.width,height:t.height},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),r=await createImageBitmap(t);e.queue.copyExternalImageToTexture({source:r},{texture:n},{width:t.width,height:t.height});const s=e.createSampler({magFilter:"nearest",minFilter:"nearest"});return{texture:n,sampler:s,id:t.src,width:t.width,height:t.height}}static async createEmptyTexture(e,t,n,r="rgba8unorm"){const s=e.createTexture({size:{width:t,height:n},format:r,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),c=e.createSampler({magFilter:"nearest",minFilter:"nearest"});return{texture:s,sampler:c,id:"",width:t,height:n}}static async createtextureFromURL(e,t){const r=await new Promise((s,c)=>{const d=new Image;d.src=t,d.onload=()=>s(d),d.onerror=()=>{console.error(`Failed to load image ${t}`),c()}});return b.createTexture(e,r)}}var N=1e-6,L=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var i=0,e=arguments.length;e--;)i+=arguments[e]*arguments[e];return Math.sqrt(i)});function z(){var i=new L(16);return L!=Float32Array&&(i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0),i[0]=1,i[5]=1,i[10]=1,i[15]=1,i}function Z(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function ee(i,e,t){var n=e[0],r=e[1],s=e[2],c=e[3],d=e[4],o=e[5],u=e[6],l=e[7],p=e[8],f=e[9],h=e[10],w=e[11],T=e[12],P=e[13],B=e[14],R=e[15],g=t[0],x=t[1],v=t[2],m=t[3];return i[0]=g*n+x*d+v*p+m*T,i[1]=g*r+x*o+v*f+m*P,i[2]=g*s+x*u+v*h+m*B,i[3]=g*c+x*l+v*w+m*R,g=t[4],x=t[5],v=t[6],m=t[7],i[4]=g*n+x*d+v*p+m*T,i[5]=g*r+x*o+v*f+m*P,i[6]=g*s+x*u+v*h+m*B,i[7]=g*c+x*l+v*w+m*R,g=t[8],x=t[9],v=t[10],m=t[11],i[8]=g*n+x*d+v*p+m*T,i[9]=g*r+x*o+v*f+m*P,i[10]=g*s+x*u+v*h+m*B,i[11]=g*c+x*l+v*w+m*R,g=t[12],x=t[13],v=t[14],m=t[15],i[12]=g*n+x*d+v*p+m*T,i[13]=g*r+x*o+v*f+m*P,i[14]=g*s+x*u+v*h+m*B,i[15]=g*c+x*l+v*w+m*R,i}function te(i,e,t,n,r,s,c){var d=1/(e-t),o=1/(n-r),u=1/(s-c);return i[0]=-2*d,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*o,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*u,i[11]=0,i[12]=(e+t)*d,i[13]=(r+n)*o,i[14]=(c+s)*u,i[15]=1,i}var re=te;function ie(i,e,t,n){var r,s,c,d,o,u,l,p,f,h,w=e[0],T=e[1],P=e[2],B=n[0],R=n[1],g=n[2],x=t[0],v=t[1],m=t[2];return Math.abs(w-x)<N&&Math.abs(T-v)<N&&Math.abs(P-m)<N?Z(i):(l=w-x,p=T-v,f=P-m,h=1/Math.hypot(l,p,f),l*=h,p*=h,f*=h,r=R*f-g*p,s=g*l-B*f,c=B*p-R*l,h=Math.hypot(r,s,c),h?(h=1/h,r*=h,s*=h,c*=h):(r=0,s=0,c=0),d=p*c-f*s,o=f*r-l*c,u=l*s-p*r,h=Math.hypot(d,o,u),h?(h=1/h,d*=h,o*=h,u*=h):(d=0,o=0,u=0),i[0]=r,i[1]=d,i[2]=l,i[3]=0,i[4]=s,i[5]=o,i[6]=p,i[7]=0,i[8]=c,i[9]=u,i[10]=f,i[11]=0,i[12]=-(r*w+s*T+c*P),i[13]=-(d*w+o*T+u*P),i[14]=-(l*w+p*T+f*P),i[15]=1,i)}function C(){var i=new L(2);return L!=Float32Array&&(i[0]=0,i[1]=0),i}function D(i,e){var t=new L(2);return t[0]=i,t[1]=e,t}function ne(i,e){return i[0]=e[0],i[1]=e[1],i}function ae(i,e){var t=e[0],n=e[1],r=t*t+n*n;return r>0&&(r=1/Math.sqrt(r)),i[0]=e[0]*r,i[1]=e[1]*r,i}function F(i,e,t,n){var r=e[0]-t[0],s=e[1]-t[1],c=Math.sin(n),d=Math.cos(n);return i[0]=r*d-s*c+t[0],i[1]=r*c+s*d+t[1],i}(function(){var i=C();return function(e,t,n,r,s,c){var d,o;for(t||(t=2),n||(n=0),r?o=Math.min(r*t+n,e.length):o=e.length,d=n;d<o;d+=t)i[0]=e[d],i[1]=e[d+1],s(i,i,c),e[d]=i[0],e[d+1]=i[1];return e}})();class E{static async initialize(e){this.playerTexture=await b.createtextureFromURL(e,"./assets/PNG/playerShip1_blue.png"),this.ufoTexture=await b.createtextureFromURL(e,"./assets/PNG/ufoRed.png"),this.uvTexture=await b.createtextureFromURL(e,"./assets/uv_test.png"),this.spriteSheetTexture=await b.createtextureFromURL(e,"./assets/Spritesheet/sheet.png"),this.backgroundTexture=await b.createtextureFromURL(e,"./assets/Backgrounds/purple.png"),this.explosionTexture=await b.createtextureFromURL(e,"./assets/explosion.png"),this.iceTexture=await b.createtextureFromURL(e,"./assets/ice03.jpg"),await this.loadSpriteSheet(),this.spriteFont=await this.loadSnowBSpriteFont(e,"./assets/SpriteFont.xml","./assets/SpriteFont.png")}static async loadSpriteSheet(){const t=await(await fetch("./assets/Spritesheet/sheet.xml")).text();new DOMParser().parseFromString(t,"text/xml").querySelectorAll("SubTexture").forEach(s=>{const c=s.getAttribute("name").replace(".png",""),d=parseInt(s.getAttribute("x")),o=parseInt(s.getAttribute("y")),u=parseInt(s.getAttribute("width")),l=parseInt(s.getAttribute("height")),p=new G(0,0,u,l),f=new G(d,o,u,l);this.sprites[c]=new $(this.spriteSheetTexture,p,f)})}static async loadSnowBSpriteFont(e,t,n){const r=await b.createtextureFromURL(e,n),c=await(await fetch(t)).text(),o=new DOMParser().parseFromString(c,"text/xml"),u=parseInt(o.querySelector("font").getAttribute("height")),l=new J(r,u);return o.querySelectorAll("char").forEach(p=>{const f=parseInt(p.getAttribute("id")),h=parseInt(p.getAttribute("x")),w=parseInt(p.getAttribute("y")),T=parseInt(p.getAttribute("width")),P=parseInt(p.getAttribute("height")),B=parseInt(p.getAttribute("xoffset")),R=parseInt(p.getAttribute("yoffset")),g=parseInt(p.getAttribute("xadvance")),x=h/r.width,v=w/r.height,m=(h+T)/r.width,q=(w+P)/r.height,k=new K(D(x,v),D(m,v),D(m,q),D(x,q));l.createChar(f,k,D(T,P),g,D(B,R))}),l}}a(E,"spriteFont"),a(E,"playerTexture"),a(E,"ufoTexture"),a(E,"uvTexture"),a(E,"spriteSheetTexture"),a(E,"backgroundTexture"),a(E,"explosionTexture"),a(E,"iceTexture"),a(E,"sprites",{});class S{static createVertexBuffer(e,t){const n=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return new Float32Array(n.getMappedRange()).set(t),n.unmap(),n}static createIndexBuffer(e,t){const n=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return new Uint16Array(n.getMappedRange()).set(t),n.unmap(),n}static createUniformBuffer(e,t){return e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}class se{constructor(e,t){a(this,"projection");a(this,"view");a(this,"projectionViewMatrix");this.width=e,this.height=t,this.projectionViewMatrix=z()}update(){this.projection=re(z(),0,this.width,this.height,0,-1,1),this.view=ie(z(),[0,0,1],[0,0,0],[0,1,0]),ee(this.projectionViewMatrix,this.projection,this.view)}}class oe{constructor(e=1,t=1,n=1){this.r=e,this.g=t,this.b=n}}const ce=`struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
  @location(1) color : vec4f,
}

@group(0) @binding(0)
var<uniform> projectionViewMatrix: mat4x4f;

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
@vertex
fn vertexMain(
  @location(0) pos: vec2f, //xy
  @location(1) texCoords: vec2f, //rgb
  @location(2) color: vec3f, //rgb
) -> VertexOut
{

  var output : VertexOut;
  output.position = projectionViewMatrix * vec4f(pos, 0.0, 1.0);
  output.color = vec4f(color, 1.0);
  output.texCoords = texCoords;
  return output;
}

@group(1) @binding(0)
var texSampler: sampler;

@group(1) @binding(1)
var tex: texture_2d<f32>;

struct FragmentOut {
  @location(0) color: vec4f,
  @location(1) brightness: vec4f,
}

const brightnessthreshold: f32 = 0.4;

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> FragmentOut
{
  var out: FragmentOut;
  var textureColor = textureSample(tex, texSampler, fragData.texCoords) * fragData.color;

  out.color = textureColor;

  var l = dot(textureColor.xyz, vec3f(0.299, 0.587, 0.114));

  if(l > brightnessthreshold) {
    out.brightness = textureColor;
  } else {
    out.brightness = vec4f(0.0, 0.0, 0.0, textureColor.a);
  }

  return out; // final color of the pixel
}`;class A{constructor(){a(this,"pipeline");a(this,"textureBindGroup");a(this,"projectionViewBindGroup")}static create(e,t,n){const r=new A;return r.initialize(e,t,n),r}initialize(e,t,n){const r=e.createShaderModule({code:ce}),s={arrayStride:7*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"},{shaderLocation:2,offset:4*Float32Array.BYTES_PER_ELEMENT,format:"float32x3"}],stepMode:"vertex"},c={module:r,entryPoint:"vertexMain",buffers:[s]},d={module:r,entryPoint:"fragmentMain",targets:[{format:navigator.gpu.getPreferredCanvasFormat(),blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}},{format:navigator.gpu.getPreferredCanvasFormat(),blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]}),l=e.createPipelineLayout({bindGroupLayouts:[o,u]});this.textureBindGroup=e.createBindGroup({layout:u,entries:[{binding:0,resource:t.sampler},{binding:1,resource:t.texture.createView()}]}),this.projectionViewBindGroup=e.createBindGroup({layout:o,entries:[{binding:0,resource:{buffer:n}}]}),this.pipeline=e.createRenderPipeline({vertex:c,fragment:d,primitive:{topology:"triangle-list"},layout:l})}}const _=1e3,he=7,O=4*he,M=6;class V{constructor(e){a(this,"vertexData",new Float32Array(_*O));a(this,"instanceCount",0);this.pipeline=e}}class ue{constructor(e,t,n){a(this,"defaultColor",new oe);a(this,"currentTexture",null);a(this,"indexBuffer");a(this,"projectionViewMatrixBuffer");a(this,"camera");a(this,"passEncoder");a(this,"v0",C());a(this,"v1",C());a(this,"v2",C());a(this,"v3",C());a(this,"rotationOrigin",C());a(this,"pipelinesPerTexture",{});a(this,"batchDrawCallPerTexture",{});a(this,"allocatedVertexBuffers",[]);this.device=e,this.width=t,this.height=n,this.camera=new se(this.width,this.height)}setupIndexBuffer(){const e=new Uint16Array(_*M);for(let t=0;t<_;t++)e[t*M+0]=t*4+0,e[t*M+1]=t*4+1,e[t*M+2]=t*4+2,e[t*M+3]=t*4+2,e[t*M+4]=t*4+3,e[t*M+5]=t*4+0;this.indexBuffer=S.createIndexBuffer(this.device,e)}initialize(){this.projectionViewMatrixBuffer=S.createUniformBuffer(this.device,new Float32Array(16)),this.setupIndexBuffer()}framePass(e){this.passEncoder=e,this.batchDrawCallPerTexture={},this.currentTexture=null,this.camera.update(),this.device.queue.writeBuffer(this.projectionViewMatrixBuffer,0,this.camera.projectionViewMatrix)}drawSprite(e,t){if(this.currentTexture!==e){this.currentTexture=e;let c=this.pipelinesPerTexture[e.id];c||(c=A.create(this.device,e,this.projectionViewMatrixBuffer),this.pipelinesPerTexture[e.id]=c),this.batchDrawCallPerTexture[e.id]||(this.batchDrawCallPerTexture[e.id]=[])}const n=this.batchDrawCallPerTexture[e.id];let r=n[n.length-1];r||(r=new V(this.pipelinesPerTexture[e.id]),this.batchDrawCallPerTexture[e.id].push(r));let s=r.instanceCount*O;if(r.vertexData[0+s]=t.x,r.vertexData[1+s]=t.y,r.vertexData[2+s]=0,r.vertexData[3+s]=0,r.vertexData[4+s]=1,r.vertexData[5+s]=1,r.vertexData[6+s]=1,r.vertexData[7+s]=t.x+t.width,r.vertexData[8+s]=t.y,r.vertexData[9+s]=1,r.vertexData[10+s]=0,r.vertexData[11+s]=1,r.vertexData[12+s]=1,r.vertexData[13+s]=1,r.vertexData[14+s]=t.x+t.width,r.vertexData[15+s]=t.y+t.height,r.vertexData[16+s]=1,r.vertexData[17+s]=1,r.vertexData[18+s]=1,r.vertexData[19+s]=1,r.vertexData[20+s]=1,r.vertexData[21+s]=t.x,r.vertexData[22+s]=t.y+t.height,r.vertexData[23+s]=0,r.vertexData[24+s]=1,r.vertexData[25+s]=1,r.vertexData[26+s]=1,r.vertexData[27+s]=1,r.instanceCount++,r.instanceCount>=_){const c=new V(this.pipelinesPerTexture[e.id]);this.batchDrawCallPerTexture[e.id].push(c)}}drawSpriteSource(e,t,n,r=this.defaultColor,s=0,c=null){if(this.currentTexture!==e){this.currentTexture=e;let w=this.pipelinesPerTexture[e.id];w||(w=A.create(this.device,e,this.projectionViewMatrixBuffer),this.pipelinesPerTexture[e.id]=w),this.batchDrawCallPerTexture[e.id]||(this.batchDrawCallPerTexture[e.id]=[])}const d=this.batchDrawCallPerTexture[e.id];let o=d[d.length-1];o||(o=new V(this.pipelinesPerTexture[e.id]),this.batchDrawCallPerTexture[e.id].push(o));let u=o.instanceCount*O,l=n.x/e.width,p=n.y/e.height,f=(n.x+n.width)/e.width,h=(n.y+n.height)/e.height;if(this.v0[0]=t.x,this.v0[1]=t.y,this.v1[0]=t.x+t.width,this.v1[1]=t.y,this.v2[0]=t.x+t.width,this.v2[1]=t.y+t.height,this.v3[0]=t.x,this.v3[1]=t.y+t.height,s!==0&&(c===null?ne(this.rotationOrigin,this.v0):(this.rotationOrigin[0]=this.v0[0]+c[0]*t.width,this.rotationOrigin[1]=this.v0[1]+c[1]*t.height),F(this.v0,this.v0,this.rotationOrigin,s),F(this.v1,this.v1,this.rotationOrigin,s),F(this.v2,this.v2,this.rotationOrigin,s),F(this.v3,this.v3,this.rotationOrigin,s)),o.vertexData[0+u]=this.v0[0],o.vertexData[1+u]=this.v0[1],o.vertexData[2+u]=l,o.vertexData[3+u]=p,o.vertexData[4+u]=r.r,o.vertexData[5+u]=r.g,o.vertexData[6+u]=r.b,o.vertexData[7+u]=this.v1[0],o.vertexData[8+u]=this.v1[1],o.vertexData[9+u]=f,o.vertexData[10+u]=p,o.vertexData[11+u]=r.r,o.vertexData[12+u]=r.g,o.vertexData[13+u]=r.b,o.vertexData[14+u]=this.v2[0],o.vertexData[15+u]=this.v2[1],o.vertexData[16+u]=f,o.vertexData[17+u]=h,o.vertexData[18+u]=r.r,o.vertexData[19+u]=r.g,o.vertexData[20+u]=r.b,o.vertexData[21+u]=this.v3[0],o.vertexData[22+u]=this.v3[1],o.vertexData[23+u]=l,o.vertexData[24+u]=h,o.vertexData[25+u]=r.r,o.vertexData[26+u]=r.g,o.vertexData[27+u]=r.b,o.instanceCount++,o.instanceCount>=_){const w=new V(this.pipelinesPerTexture[e.id]);this.batchDrawCallPerTexture[e.id].push(w)}}drawString(e,t,n,r=this.defaultColor,s=1){const c=e.texture;if(this.currentTexture!==c){this.currentTexture=c;let l=this.pipelinesPerTexture[c.id];l||(l=A.create(this.device,c,this.projectionViewMatrixBuffer),this.pipelinesPerTexture[c.id]=l),this.batchDrawCallPerTexture[c.id]||(this.batchDrawCallPerTexture[c.id]=[])}const d=this.batchDrawCallPerTexture[c.id];let o=d[d.length-1];o||(o=new V(this.pipelinesPerTexture[c.id]),this.batchDrawCallPerTexture[c.id].push(o));let u=0;for(let l=0;l<t.length;l++){const p=t[l].charCodeAt(0),f=e.getChar(p);let h=o.instanceCount*O;const w=n[0]+(f.offset[0]+u)*s,T=n[1]+f.offset[1]*s,P=f.size[0]*s,B=f.size[1]*s;this.v0[0]=w,this.v0[1]=T,this.v1[0]=w+P,this.v1[1]=T,this.v2[0]=w+P,this.v2[1]=T+B,this.v3[0]=w,this.v3[1]=T+B;const R=f.textureCoords.topLeft,g=f.textureCoords.topRight,x=f.textureCoords.bottomRight,v=f.textureCoords.bottomLeft;o.vertexData[0+h]=this.v0[0],o.vertexData[1+h]=this.v0[1],o.vertexData[2+h]=R[0],o.vertexData[3+h]=R[1],o.vertexData[4+h]=r.r,o.vertexData[5+h]=r.g,o.vertexData[6+h]=r.b,o.vertexData[7+h]=this.v1[0],o.vertexData[8+h]=this.v1[1],o.vertexData[9+h]=g[0],o.vertexData[10+h]=g[1],o.vertexData[11+h]=r.r,o.vertexData[12+h]=r.g,o.vertexData[13+h]=r.b,o.vertexData[14+h]=this.v2[0],o.vertexData[15+h]=this.v2[1],o.vertexData[16+h]=x[0],o.vertexData[17+h]=x[1],o.vertexData[18+h]=r.r,o.vertexData[19+h]=r.g,o.vertexData[20+h]=r.b,o.vertexData[21+h]=this.v3[0],o.vertexData[22+h]=this.v3[1],o.vertexData[23+h]=v[0],o.vertexData[24+h]=v[1],o.vertexData[25+h]=r.r,o.vertexData[26+h]=r.g,o.vertexData[27+h]=r.b,u+=f.advance,o.instanceCount++,o.instanceCount>=_&&(o=new V(this.pipelinesPerTexture[c.id]),this.batchDrawCallPerTexture[c.id].push(o))}}frameEnd(){let e=[];for(const t in this.batchDrawCallPerTexture){const n=this.batchDrawCallPerTexture[t];for(const r of n){if(r.instanceCount===0)continue;let s=this.allocatedVertexBuffers.pop();s?this.device.queue.writeBuffer(s,0,r.vertexData):s=S.createVertexBuffer(this.device,r.vertexData),e.push(s);const c=r.pipeline;this.passEncoder.setPipeline(c.pipeline),this.passEncoder.setIndexBuffer(this.indexBuffer,"uint16"),this.passEncoder.setVertexBuffer(0,s),this.passEncoder.setBindGroup(0,c.projectionViewBindGroup),this.passEncoder.setBindGroup(1,c.textureBindGroup),this.passEncoder.drawIndexed(6*r.instanceCount)}}for(let t of e)this.allocatedVertexBuffers.push(t)}}class de{constructor(){a(this,"keyDown",{});window.addEventListener("keydown",e=>this.keyDown[e.key]=!0),window.addEventListener("keyup",e=>this.keyDown[e.key]=!1)}isKeyDown(e){return this.keyDown[e]}isKeyUp(e){return!this.keyDown[e]}}const le=`struct VertexOut {
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
}`,U=`struct VertexOut {
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

@group(0) @binding(0)
var texSampler: sampler;

@group(0) @binding(1)
var tex: texture_2d<f32>;

var<private> weights: array<f32, 5> = array(
  0.204163688,  // this is sampled only once, middle pixel
  0.180173822,  // this is sampled twice, left and right pixel from middle
  0.123831536, 
  0.066282245, 
  0.027630550
);

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMainHorizontal(fragData: VertexOut) -> @location(0) vec4f
{
  var horizontalTexel = 1.0 / f32(textureDimensions(tex).x);
  var result = textureSample(tex, texSampler, fragData.texCoords) * weights[0];

  for(var i = 1; i < 5; i++) {
    var offset = vec2f(horizontalTexel * f32(i), 0.0);
    var sampleCoordsRight = fragData.texCoords + offset;
    var sampleCoordsLeft = fragData.texCoords - offset;

    result += textureSample(tex, texSampler, sampleCoordsRight) * weights[i]; // smple to the right
    result += textureSample(tex, texSampler, sampleCoordsLeft) * weights[i]; // smple to the left
  }

  return vec4f(result.xyz, 1.0); // final color of the pixel
}

@fragment
fn fragmentMainVertical(fragData: VertexOut) -> @location(0) vec4f
{
  var verticalTexel = 1.0 / f32(textureDimensions(tex).y);
  var result = textureSample(tex, texSampler, fragData.texCoords) * weights[0];

  for(var i = 1; i < 5; i++) {
    var offset = vec2f(0.0, verticalTexel * f32(i));
    var sampleCoordsUp = fragData.texCoords + offset;
    var sampleCoordsDown = fragData.texCoords - offset;

    result += textureSample(tex, texSampler, sampleCoordsUp) * weights[i]; // smple to the right
    result += textureSample(tex, texSampler, sampleCoordsDown) * weights[i]; // smple to the left
  }
  
  return vec4f(result.xyz, 1.0); // final color of the pixel
}`;class pe{constructor(e,t,n){a(this,"horizontalPassPipeline");a(this,"verticalPassPipeline");a(this,"pingPongTexture");a(this,"pingPongBindGroup");a(this,"gpuBuffer");this.device=e,this.width=t,this.height=n}createPipeline(e,t,n){const r=this.device.createShaderModule({code:e}),s={layout:this.device.createPipelineLayout({bindGroupLayouts:[t]}),vertex:{module:r,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:r,entryPoint:n?"fragmentMainHorizontal":"fragmentMainVertical",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};return this.device.createRenderPipeline(s)}async initialize(){this.pingPongTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=S.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.pingPongBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.pingPongTexture.sampler},{binding:1,resource:this.pingPongTexture.texture.createView()}]}),this.horizontalPassPipeline=this.createPipeline(U,e,!0),this.verticalPassPipeline=this.createPipeline(U,e,!1)}draw(e,t){const n=this.device.createCommandEncoder(),r=n.beginRenderPass({colorAttachments:[{view:this.pingPongTexture.texture.createView(),loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.horizontalPassPipeline),r.setVertexBuffer(0,this.gpuBuffer),r.setBindGroup(0,t),r.draw(6,1,0,0),r.end(),this.device.queue.submit([n.finish()]);const s=this.device.createCommandEncoder(),c=s.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});c.setPipeline(this.verticalPassPipeline),c.setVertexBuffer(0,this.gpuBuffer),c.setBindGroup(0,this.pingPongBindGroup),c.draw(6,1,0,0),c.end(),this.device.queue.submit([s.finish()])}}class fe{constructor(e,t,n){a(this,"gpuPipeline");a(this,"gpuBuffer");a(this,"sceneTexture");a(this,"sceneTextureBindGroup");a(this,"brightnessTexture");a(this,"brightnessTextureBindGroup");a(this,"blurEffect");this.device=e,this.width=t,this.height=n}async initialize(){this.sceneTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.brightnessTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=S.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.sceneTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.sceneTexture.sampler},{binding:1,resource:this.sceneTexture.texture.createView()}]}),this.brightnessTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.brightnessTexture.sampler},{binding:1,resource:this.brightnessTexture.texture.createView()}]});const t=this.device.createShaderModule({code:le}),n={layout:this.device.createPipelineLayout({bindGroupLayouts:[e,e]}),vertex:{module:t,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:t,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(n),this.blurEffect=new pe(this.device,this.width,this.height),await this.blurEffect.initialize()}draw(e){this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup);const t=this.device.createCommandEncoder(),n=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});n.setPipeline(this.gpuPipeline),n.setVertexBuffer(0,this.gpuBuffer),n.setBindGroup(0,this.sceneTextureBindGroup),n.setBindGroup(1,this.brightnessTextureBindGroup),n.draw(6,1,0,0),n.end(),this.device.queue.submit([t.finish()])}}class xe{constructor(e,t,n){a(this,"horizontalPassPipeline");a(this,"horizontalPassRenderTexture");a(this,"horizontalPassBindGroup");a(this,"verticalPassPipeline");a(this,"verticalPassRenderTexture");a(this,"verticalPassBindGroup");a(this,"doHorizontalPass",!0);a(this,"doVerticalPass",!0);a(this,"gpuBuffer");this.device=e,this.width=t,this.height=n}createPipeline(e,t,n){const r=this.device.createShaderModule({code:e}),s={layout:this.device.createPipelineLayout({bindGroupLayouts:[t]}),vertex:{module:r,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:r,entryPoint:n?"fragmentMainHorizontal":"fragmentMainVertical",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};return this.device.createRenderPipeline(s)}getRenderTexture(){return this.doHorizontalPass?this.horizontalPassRenderTexture:this.doVerticalPass?this.verticalPassRenderTexture:null}async initialize(){this.horizontalPassRenderTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.verticalPassRenderTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=S.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.horizontalPassBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.horizontalPassRenderTexture.sampler},{binding:1,resource:this.horizontalPassRenderTexture.texture.createView()}]}),this.verticalPassBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.verticalPassRenderTexture.sampler},{binding:1,resource:this.verticalPassRenderTexture.texture.createView()}]}),this.horizontalPassPipeline=this.createPipeline(U,e,!0),this.verticalPassPipeline=this.createPipeline(U,e,!1)}draw(e){if(this.doHorizontalPass){const t=this.doVerticalPass?this.verticalPassRenderTexture.texture.createView():e,n=this.device.createCommandEncoder(),r=n.beginRenderPass({colorAttachments:[{view:t,loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.horizontalPassPipeline),r.setVertexBuffer(0,this.gpuBuffer),r.setBindGroup(0,this.horizontalPassBindGroup),r.draw(6,1,0,0),r.end(),this.device.queue.submit([n.finish()])}if(this.doVerticalPass){const t=this.device.createCommandEncoder(),n=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});n.setPipeline(this.verticalPassPipeline),n.setVertexBuffer(0,this.gpuBuffer),n.setBindGroup(0,this.verticalPassBindGroup),n.draw(6,1,0,0),n.end(),this.device.queue.submit([t.finish()])}}}const ve=`const CURVATURE: vec2<f32> = vec2<f32>(3.0, 3.0);
const RESOLUTION: vec2<f32> = vec2<f32>(100.0, 100.0);
const BRIGHTNESS: f32 = 4.0;

const PI: f32 = 3.14159;

struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

fn curveRemapUV(uv_in: vec2<f32>) -> vec2<f32> {
    var uv_out: vec2<f32>;

    // as we near the edge of our screen apply greater distortion using a cubic function
    uv_out = uv_in * 2.0 - 1.0;
    var offset: vec2<f32> = abs(uv_out.yx) / CURVATURE;

    uv_out = uv_out + uv_out * offset * offset;
    return uv_out * 0.5 + 0.5;
}

fn scanLineIntensity(uv_in: f32, resolution: f32, opacity: f32) -> vec4<f32> {
     var intensity: f32 = sin(uv_in * resolution * PI * 2.0);
     intensity = ((0.5 * intensity) + 0.5) * 0.9 + 0.1;
     return vec4<f32>(vec3<f32>(pow(intensity, opacity)), 1.0);
 }

fn vignetteIntensity(uv_in: vec2<f32>, resolution: vec2<f32>, opacity: f32, roundness: f32) -> vec4<f32> {
    var intensity: f32 = uv_in.x * uv_in.y * (1.0 - uv_in.x) * (1.0 - uv_in.y);
    return vec4<f32>(vec3<f32>(clamp(pow((resolution.x / roundness) * intensity, opacity), 0.0, 1.0)), 1.0);
}

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

@fragment
fn fragmentMain(
    vs_out: VertexOut
) -> @location(0) vec4<f32> {
    // // Apply barrel distortion (CRT curvature)
    // var curvatureAmount: f32 = 0.22; // Adjust for desired curvature
    // var center: vec2<f32> = vec2<f32>(0.5, 0.5); // Center of distortion
    // var delta: vec2<f32> = vs_out.texCoords.xy - center;
    // var r2: f32 = dot(delta, delta);
    // var distortion: f32 = 1.0 + curvatureAmount * r2;
    // var distortedCoords: vec2<f32> = center + delta * distortion;

    // // Sample the scene texture with curvature
    // var sceneColor: vec3<f32> = textureSample(tex0, texSampler0, distortedCoords).rgb;

    // // Simulate scanlines
    // var scanlineIntensity: f32 = 0.3; // Adjust as needed
    // var scanlineFrequency: f32 = 1000.0; // Increase for denser scanlines
    // var scanlineOffset: f32 = 0.0; // Adjust for scanline phase
    // var scanlineValue: f32 = sin(distortedCoords.y * scanlineFrequency + scanlineOffset);
    // sceneColor -= scanlineIntensity * vec3<f32>(scanlineValue);

    // // Simulate phosphor glow (bloom)
    // var bloomIntensity: f32 = 0.3; // Adjust as needed
    // var bloomColor: vec3<f32> = vec3<f32>(1.0, 1.0, 0.8); // Yellowish glow
    // sceneColor += bloomIntensity * bloomColor;

    // // Add vignetting effect
    // var vignetteIntensity: f32 = 0.00001; // Adjust for desired strength
    // var vignetteDistance: f32 = length(distortedCoords.xy - center);
    // var vignetteFactor: f32 = smoothstep(1.0, vignetteIntensity, vignetteDistance);
    // sceneColor *= vignetteFactor * 1.1;

    // return vec4<f32>(sceneColor, 1.0);




    var remapped_tex_coords = curveRemapUV(vs_out.texCoords);
    var color: vec4<f32> = textureSample(tex0, texSampler0, remapped_tex_coords);
    
    color *= vignetteIntensity(remapped_tex_coords, RESOLUTION, 1.0, 2.0);
    
    color *= scanLineIntensity(remapped_tex_coords.x, RESOLUTION.y, 1.0);
    color *= scanLineIntensity(remapped_tex_coords.y, RESOLUTION.x, 1.0);
    
    return vec4<f32>(color.rgb * BRIGHTNESS, 1.0);
}`;class ge{constructor(e,t,n){a(this,"gpuPipeline");a(this,"gpuBuffer");a(this,"screenTexture");a(this,"screenTextureBindGroup");this.device=e,this.width=t,this.height=n}async initialize(){this.screenTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=S.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.screenTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.screenTexture.sampler},{binding:1,resource:this.screenTexture.texture.createView()}]});const t=this.device.createShaderModule({code:ve}),n={layout:this.device.createPipelineLayout({bindGroupLayouts:[e]}),vertex:{module:t,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:t,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(n)}draw(e){const t=this.device.createCommandEncoder(),n=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});n.setPipeline(this.gpuPipeline),n.setVertexBuffer(0,this.gpuBuffer),n.setBindGroup(0,this.screenTextureBindGroup),n.draw(6,1,0,0),n.end(),this.device.queue.submit([t.finish()])}}const me=`struct VertexOut {
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

@group(0) @binding(0)
var texSampler: sampler;

@group(0) @binding(1)
var tex: texture_2d<f32>;

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4f
{
  var screenTexture = textureSample(tex, texSampler, fragData.texCoords);
  var average = (screenTexture.r + screenTexture.g + screenTexture.b) / 3.0;
  return vec4f(average, average, average, 1.0); // final color of the pixel
}`;class we{constructor(e,t,n){a(this,"texture");a(this,"gpuPipeline");a(this,"gpuBuffer");a(this,"textureBindGroup");this.device=e,this.width=t,this.height=n}async initialize(){this.texture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=S.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.textureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.texture.sampler},{binding:1,resource:this.texture.texture.createView()}]});const t=this.device.createShaderModule({code:me}),n={layout:this.device.createPipelineLayout({bindGroupLayouts:[e]}),vertex:{module:t,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:t,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(n)}draw(e){const t=this.device.createCommandEncoder(),n=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});n.setPipeline(this.gpuPipeline),n.setVertexBuffer(0,this.gpuBuffer),n.setBindGroup(0,this.textureBindGroup),n.draw(6,1,0,0),n.end(),this.device.queue.submit([t.finish()])}}const ye=`struct VertexOut {
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

// this is our combine texture
@group(1) @binding(0)
var texSampler1: sampler;

@group(1) @binding(1)
var tex1: texture_2d<f32>;

// mix value
@group(2) @binding(0)
var<uniform> mixValue: f32;


// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4f
{
  var screenTexture = textureSample(tex0, texSampler0, fragData.texCoords);
  var combineTexture = textureSample(tex1, texSampler1, fragData.texCoords);
  var mixColor = mix(screenTexture.xyz, combineTexture.xyz, mixValue);
  return vec4f(mixColor, 1.0); // final color of the pixel
}`;class Te{constructor(e,t,n){a(this,"gpuPipeline");a(this,"gpuBuffer");a(this,"screenTexture");a(this,"screenTextureBindGroup");a(this,"combineTexture");a(this,"combineTextureBindGroupLayout");a(this,"combineTextureBindGroup");a(this,"mixValue",.5);a(this,"mixValueBuffer");a(this,"mixValueBindGroup");this.device=e,this.width=t,this.height=n}setCombineTexture(e){this.combineTexture=e,this.combineTextureBindGroup=this.device.createBindGroup({layout:this.combineTextureBindGroupLayout,entries:[{binding:0,resource:this.combineTexture.sampler},{binding:1,resource:this.combineTexture.texture.createView()}]})}async initialize(){this.screenTexture=await b.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=S.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1])),this.mixValueBuffer=S.createUniformBuffer(this.device,new Float32Array([this.mixValue]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.combineTextureBindGroupLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{}}]});this.screenTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.screenTexture.sampler},{binding:1,resource:this.screenTexture.texture.createView()}]}),this.mixValueBindGroup=this.device.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:this.mixValueBuffer,offset:0,size:Float32Array.BYTES_PER_ELEMENT}}]});const n=this.device.createShaderModule({code:ye}),r={layout:this.device.createPipelineLayout({bindGroupLayouts:[e,this.combineTextureBindGroupLayout,t]}),vertex:{module:n,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:n,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(r)}draw(e){const t=this.device.createCommandEncoder(),n=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});this.device.queue.writeBuffer(this.mixValueBuffer,0,new Float32Array([this.mixValue])),n.setPipeline(this.gpuPipeline),n.setVertexBuffer(0,this.gpuBuffer),n.setBindGroup(0,this.screenTextureBindGroup),n.setBindGroup(1,this.combineTextureBindGroup),n.setBindGroup(2,this.mixValueBindGroup),n.draw(6,1,0,0),n.end(),this.device.queue.submit([t.finish()])}}class be{constructor(e,t,n){this.device=e,this.width=t,this.height=n}async createPostProcessEffect(){const e=new we(this.device,this.width,this.height);return await e.initialize(),e}async createTextureEffect(){const e=new Te(this.device,this.width,this.height);return await e.initialize(),e}async createBlurEffect(){const e=new xe(this.device,this.width,this.height);return await e.initialize(),e}async createBloomEffect(){const e=new fe(this.device,this.width,this.height);return await e.initialize(),e}async createCrtEffect(){const e=new ge(this.device,this.width,this.height);return await e.initialize(),e}}class Ee{constructor(){a(this,"lastTime",0);a(this,"canvas");a(this,"context");a(this,"device");a(this,"passEncoder");a(this,"spriteRenderer");a(this,"inputManager");a(this,"effectsFactory");a(this,"gameBounds",C());a(this,"onUpdate",()=>{});a(this,"onDraw",()=>{});a(this,"destinationTexture",null);a(this,"destinationTexture2",null)}setDestinationTexture(e){this.destinationTexture=e}setDestinationTexture2(e){this.destinationTexture2=e}getCanvasTexture(){return this.context.getCurrentTexture()}async initialize(){if(this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("webgpu"),this.gameBounds[0]=this.canvas.width,this.gameBounds[1]=this.canvas.height,!this.context){console.error("WebGPU not supported"),alert("WebGPU not supported");return}const e=await navigator.gpu.requestAdapter();if(!e){console.error("No adapter found"),alert("No adapter found");return}this.device=await e.requestDevice(),await E.initialize(this.device),this.context.configure({device:this.device,format:navigator.gpu.getPreferredCanvasFormat()}),this.spriteRenderer=new ue(this.device,this.canvas.width,this.canvas.height),this.spriteRenderer.initialize(),this.inputManager=new de,this.effectsFactory=new be(this.device,this.canvas.width,this.canvas.height),this.destinationTexture2=(await b.createEmptyTexture(this.device,this.canvas.width,this.canvas.height,"bgra8unorm")).texture}draw(){const e=performance.now(),t=e-this.lastTime;this.lastTime=e,this.onUpdate(t);const n=this.device.createCommandEncoder(),r=this.destinationTexture!==null?this.destinationTexture.createView():this.context.getCurrentTexture().createView(),s={colorAttachments:[{clearValue:{r:.8,g:.8,b:.8,a:1},loadOp:"clear",storeOp:"store",view:r},{clearValue:{r:.8,g:.8,b:.8,a:1},loadOp:"clear",storeOp:"store",view:this.destinationTexture2.createView()}]};this.passEncoder=n.beginRenderPass(s),this.spriteRenderer.framePass(this.passEncoder),this.onDraw(),this.spriteRenderer.frameEnd(),this.passEncoder.end(),this.device.queue.submit([n.finish()]),window.requestAnimationFrame(()=>this.draw())}}const Pe=.25;class Be{constructor(e,t){a(this,"drawRect");a(this,"drawRect2");this.gameWidth=e,this.gameHeight=t,this.drawRect=new G(0,0,this.gameWidth,this.gameHeight),this.drawRect2=new G(0,-this.gameHeight,this.gameWidth,this.gameHeight)}update(e){if(this.drawRect.y+=Pe*e,this.drawRect2.y=this.drawRect.y-this.gameHeight,this.drawRect.y>this.gameHeight){const t=this.drawRect;this.drawRect=this.drawRect2,this.drawRect2=t}}draw(e){e.drawSprite(E.backgroundTexture,this.drawRect),e.drawSprite(E.backgroundTexture,this.drawRect2)}}class I{constructor(){a(this,"radius",0);a(this,"x",0);a(this,"y",0)}update(e){let t=e.width/2;e.height<e.width&&(t=e.height/2),this.x=e.x+this.radius,this.y=e.y+this.radius,this.radius=t}intersects(e){const t=this.x-e.x,n=this.y-e.y,r=Math.sqrt(t*t+n*n),s=this.radius+e.radius;return r<s}}const Re=.75;class Se{constructor(){a(this,"drawRect");a(this,"sourceRect");a(this,"texture");a(this,"active",!0);a(this,"collider",new I);const e=E.sprites.laserBlue01;this.texture=e.texture,this.drawRect=e.drawRect.copy(),this.sourceRect=e.sourceRect.copy()}spawn(e){this.active=!0,this.drawRect.x=e.drawRect.x+e.drawRect.width/2-this.drawRect.width/2,this.drawRect.y=e.drawRect.y-this.drawRect.height}update(e){this.drawRect.y-=Re*e,this.collider.update(this.drawRect),this.drawRect.y+this.drawRect.height<0&&(this.active=!1)}draw(e){e.drawSpriteSource(this.texture,this.drawRect,this.sourceRect)}}const De=250;class Ce{constructor(e){a(this,"pool",[]);a(this,"timeToSpawn",0);this.player=e}create(){let e=this.pool.find(t=>!t.active);e||(e=new Se,this.pool.push(e)),e.spawn(this.player)}intersectsEnemy(e){for(const t of this.pool)if(t.active&&t.collider.intersects(e.collider))return t.active=!1,!0;return!1}update(e){this.timeToSpawn+=e,this.timeToSpawn>De&&(this.timeToSpawn=0,this.create());for(const t of this.pool)t.active&&t.update(e)}draw(e){for(const t of this.pool)t.active&&t.draw(e)}}const j=["meteorBrown_big1","meteorBrown_big2","meteorBrown_big3","meteorBrown_big4","meteorBrown_med1","meteorBrown_med3","meteorGrey_big1","meteorGrey_big2","meteorGrey_big3","meteorGrey_big4","meteorGrey_med1","meteorGrey_med2"],Y=.05,Ge=.25;class Me{constructor(){a(this,"active",!0);a(this,"drawRect");a(this,"texture");a(this,"sourceRect");a(this,"speed",0);a(this,"rotation",0);a(this,"rotationSpeed",0);a(this,"rotationOrigin",D(.5,.5));a(this,"collider",new I);const e=j[Math.floor(Math.random()*j.length)],t=E.sprites[e];this.texture=t.texture,this.drawRect=t.drawRect.copy(),this.sourceRect=t.sourceRect.copy(),this.speed=Math.random()*(Ge-Y)+Y,this.rotationSpeed=(Math.random()-.5)*.005}update(e){this.drawRect.y+=this.speed*e,this.rotation+=this.rotationSpeed*e,this.collider.update(this.drawRect)}draw(e){e.drawSpriteSource(this.texture,this.drawRect,this.sourceRect,void 0,this.rotation,this.rotationOrigin)}}const Ve=1e3;class _e{constructor(e,t,n,r,s,c){a(this,"timeToSpawn",0);a(this,"pool",[]);this.player=e,this.explosionManager=t,this.bulletManager=n,this.gameWidth=r,this.gameHeight=s,this.highScore=c}spawnEnemy(){if(this.timeToSpawn>Ve){this.timeToSpawn=0;let e=this.pool.find(t=>!t.active);e||(e=new Me,this.pool.push(e)),e.active=!0,e.drawRect.x=Math.random()*(this.gameWidth-e.drawRect.width),e.drawRect.y=-e.drawRect.height}}update(e){this.timeToSpawn+=e,this.spawnEnemy();for(const t of this.pool)t.active&&(t.update(e),t.collider.intersects(this.player.collider)&&(t.active=!1,this.explosionManager.create(t.drawRect)),this.bulletManager.intersectsEnemy(t)&&(t.active=!1,this.explosionManager.create(t.drawRect),this.highScore.currentScore+=10),t.drawRect.y>this.gameHeight&&(t.active=!1))}draw(e){for(const t of this.pool)t.active&&t.draw(e)}}const Ae=1e3/30;class Le{constructor(){a(this,"playing",!1);a(this,"timeToNextFrame",0);a(this,"sourceRect");a(this,"drawRect");a(this,"currentCol",0);a(this,"currentRow",0);a(this,"cols",4);a(this,"rows",4);this.sourceRect=new G(0,0,64,64),this.drawRect=new G(0,0,64,64)}play(e){this.playing=!0,this.timeToNextFrame=0,this.currentCol=0,this.currentRow=0,this.drawRect=e.copy()}update(e){this.playing&&(this.timeToNextFrame+=e,this.timeToNextFrame>Ae&&(this.timeToNextFrame=0,this.currentCol++,this.currentCol>=this.cols&&(this.currentCol=0,this.currentRow++,this.currentRow>=this.rows&&(this.currentRow=0,this.playing=!1))))}draw(e){this.sourceRect.x=this.currentCol*this.sourceRect.width,this.sourceRect.y=this.currentRow*this.sourceRect.height,e.drawSpriteSource(E.explosionTexture,this.drawRect,this.sourceRect)}}class Fe{constructor(){a(this,"pool",[])}create(e){let t=this.pool.find(n=>!n.playing);t||(t=new Le,this.pool.push(t)),t.play(e)}update(e){for(const t of this.pool)t.playing&&t.update(e)}draw(e){for(const t of this.pool)t.playing&&t.draw(e)}}const H=.25;class Oe{constructor(e,t,n){a(this,"movementDirection",C());a(this,"drawRect");a(this,"sourceRect");a(this,"texture");a(this,"collider",new I);this.inputManager=e,this.gameWidth=t,this.gameHeight=n;const r=E.sprites.playerShip1_blue;this.texture=r.texture,this.drawRect=r.drawRect.copy(),this.sourceRect=r.sourceRect.copy()}clampToBounds(){this.drawRect.x<0?this.drawRect.x=0:this.drawRect.x+this.drawRect.width>this.gameWidth&&(this.drawRect.x=this.gameWidth-this.drawRect.width),this.drawRect.y<0?this.drawRect.y=0:this.drawRect.y+this.drawRect.height>this.gameHeight&&(this.drawRect.y=this.gameHeight-this.drawRect.height)}update(e){this.movementDirection[0]=0,this.movementDirection[1]=0,this.inputManager.isKeyDown("ArrowLeft")?this.movementDirection[0]=-1:this.inputManager.isKeyDown("ArrowRight")&&(this.movementDirection[0]=1),this.inputManager.isKeyDown("ArrowUp")?this.movementDirection[1]=-1:this.inputManager.isKeyDown("ArrowDown")&&(this.movementDirection[1]=1),ae(this.movementDirection,this.movementDirection),this.drawRect.x+=this.movementDirection[0]*H*e,this.drawRect.y+=this.movementDirection[1]*H*e,this.clampToBounds(),this.collider.update(this.drawRect)}draw(e){e.drawSpriteSource(this.texture,this.drawRect,this.sourceRect)}}class Ue{constructor(){a(this,"position",D(10,10));a(this,"currentScore",0)}draw(e){e.drawString(E.spriteFont,`Score: ${this.currentScore}`,this.position,void 0,.5)}}const y=new Ee;y.initialize().then(async()=>{const i=new Oe(y.inputManager,y.gameBounds[0],y.gameBounds[1]),e=new Be(y.gameBounds[0],y.gameBounds[1]),t=new Fe,n=new Ce(i),r=new Ue,s=new _e(i,t,n,y.gameBounds[0],y.gameBounds[1],r),c=await y.effectsFactory.createBloomEffect(),d=await y.effectsFactory.createCrtEffect();y.onUpdate=o=>{i.update(o),e.update(o),s.update(o),n.update(o),t.update(o)},y.onDraw=()=>{e.draw(y.spriteRenderer),i.draw(y.spriteRenderer),s.draw(y.spriteRenderer),n.draw(y.spriteRenderer),t.draw(y.spriteRenderer),r.draw(y.spriteRenderer),y.setDestinationTexture(c.sceneTexture.texture),y.setDestinationTexture2(c.brightnessTexture.texture),c.draw(y.getCanvasTexture().createView()),y.setDestinationTexture(d.screenTexture.texture),d.draw(c.sceneTexture.texture.createView())},y.draw()});
