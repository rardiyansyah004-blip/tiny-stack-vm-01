import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const T="$5e(*./3########-------)---)---#---#############DHHD$###########),##############((%(",I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output';
function run(p,q){
let n=p.length,D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,M=new Int32Array(256),o=Buffer.alloc(65536),l=0,j=0,pc=0,t=0;
const d=e=>[o.slice(0,l),e];
for(;;){
if(t===1e6)return d(10);
if(pc<0||pc>=n)return d(9);
let b=p[pc],m=T.charCodeAt(b)-35;
if(!m)return d(5);
m--;
let f=m>>4,g=(m>>2)&3,h=m&3,x=pc+1+f;
if(pc+f>=n)return d(9);
t++;
if(s<g)return d(2);
if(s-g+h>256)return d(3);
pc=x;
switch(b){
case 0:return d(0);
case 1:D[s++]=(p[x-1]<<24)>>24;break;
case 2:D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{let v=D[s-1];D[s-1]=D[s-2];D[s-2]=v;break;}
case 6:D[s]=D[s-2];s++;break;
case 7:{let v=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=v;break;}
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
let y=D[s-1],a=D[s-2],r;
switch(b){
case 16:r=a+y|0;break;
case 17:r=a-y|0;break;
case 18:r=Math.imul(a,y);break;
case 19:if(!y)return d(4);r=a===-2147483648&&y===-1?a:a/y|0;break;
case 20:if(!y)return d(4);r=y===-1?0:a%y|0;break;
case 21:if(!y)return d(4);r=(a>>>0)/(y>>>0)|0;break;
case 22:if(!y)return d(4);r=(a>>>0)%(y>>>0)|0;break;
case 24:r=a&y;break;
case 25:r=a|y;break;
case 26:r=a^y;break;
case 28:r=a<<(y&31);break;
case 29:r=a>>(y&31);break;
case 30:r=(a>>>(y&31))|0;break;
case 32:r=a===y?1:0;break;
case 33:r=a<y?1:0;break;
default:r=(a>>>0)<(y>>>0)?1:0;
}
s-=2;D[s++]=r;break;}
case 48:case 49:case 50:{
let r=((p[x-2]|p[x-1]<<8)<<16)>>16,k=1;
if(b!==48){let v=D[--s];k=b===49?v===0:v!==0;}
if(k)pc=x+r;
break;}
case 51:if(c===64)return d(7);C[c++]=x;pc=p[x-2]|p[x-1]<<8;break;
case 52:if(!c)return d(8);pc=C[--c];break;
case 64:{let a=D[s-1];if(a<0||a>255)return d(6);D[s-1]=M[a];break;}
case 65:{let a=D[s-1],v=D[s-2];if(a<0||a>255)return d(6);s-=2;M[a]=v;break;}
case 80:{let v=''+D[s-1];if(l+v.length>65536)return d(11);s--;o.set(Buffer.from(v),l);l+=v.length;break;}
case 81:if(l+1>65536)return d(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=j<q.length?q[j++]:-1;break;
case 83:return d(D[--s]&255);
}
}
}
for(const id of readdirSync(I).sort()){
let g=I+'/'+id,u=run(readFileSync(g+'/program.bin'),readFileSync(g+'/input.bin'));
mkdirSync(O+'/'+id,{recursive:!0});
writeFileSync(O+'/'+id+'/stdout.bin',u[0]);
writeFileSync(O+'/'+id+'/exit.txt',u[1]+'\n');
}
