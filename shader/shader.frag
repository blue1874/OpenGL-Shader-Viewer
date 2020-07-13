#version 330 core
out vec4 FragColor;
in vec3 FragPos;
in vec2 TexCoord;
in vec3 Normal; 

uniform vec3 viewPos;

#include "material.header.frag"
#include "phong.header.frag"

void main()
{
	FragColor = vec4(calLight(material), 1.0);
//    float depth = LinearizeDepth(gl_FragCoord.z) / far; // Ϊ����ʾ���� far
//    FragColor = vec4(vec3(depth), 1.0);
} 