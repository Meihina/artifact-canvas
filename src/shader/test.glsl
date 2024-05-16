precision lowp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_random;

void main(){
  vec2 uv=gl_FragCoord.xy/u_resolution.xy;

  vec3 color=.5+.5*cos(u_time+uv.xyx+vec3(0,2,4))*u_random;

  gl_FragColor=vec4(color,1.);
}
