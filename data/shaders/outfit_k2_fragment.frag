uniform mat4 u_Color;
varying vec2 v_TexCoord;
varying vec2 v_TexCoord2;
uniform sampler2D u_Tex0;

varying vec2 v_TexCoord3;
uniform sampler2D u_Tex1;

void main()
{
    gl_FragColor = texture2D(u_Tex0, v_TexCoord);
    vec4 texcolor = texture2D(u_Tex0, v_TexCoord2);

    vec4 effectColor = texture2D(u_Tex1, v_TexCoord3);

    if(texcolor.a > 0.1) {
        gl_FragColor *= effectColor;
    }

    if(texcolor.r > 0.9) {
        gl_FragColor *= texcolor.g > 0.9 ? u_Color[0] : u_Color[1];
    } else if(texcolor.g > 0.9) {
        gl_FragColor *= u_Color[2];
    } else if(texcolor.b > 0.9) {
        gl_FragColor *= u_Color[3];
    }
    if(gl_FragColor.a < 0.01) discard;


}
