precision mediump float;
attribute vec3 a_position;
attribute vec2 a_texCoord;
uniform mat4 u_projectionMatrix;
uniform float amplitude;
uniform float amount; varying vec2 v_texCoord; const float rotate = 20.0; const float PI = 3.1415926; mat4 rotateX(float a) {...} mat4 rotateY(float a) {...} mat4 rotateZ(float a) {...} void main() {
    v_texCoord = a_texCoord.xy;
    vec4 pos = vec4(a_position, 1.0);
    float r = 1.0 - abs((amount - 0.5) / 0.5);
    float a = r * rotate * PI / 180.0;
    mat4 rotX = rotateX(a);
    mat4 rotY = rotateY(a / 4.0);
    mat4 rotZ = rotateZ(a / 8.0);
    float dx = 0.01 * cos(3.0 * PI * (pos.x + amount)) * r;
    float dy = 0.01 * cos(3.0 * PI * (pos.y + amount)) * r;
    float dz = 0.1 * cos(3.0 * PI * (pos.x + pos.y + amount)) * r;
    pos.x += dx;
    pos.y += dy;
    pos.z += dz;
    gl_Position = u_projectionMatrix * rotZ * rotY * rotX * pos;
}