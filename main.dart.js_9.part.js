self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ajc:function ajc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ajd:function ajd(){},Ql:function Ql(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Qk:function Qk(){},vT:function vT(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.ck$=d
_.aQ$=e
_.O$=f
_.a=null},Pe:function Pe(d,e,f,g,h,i,j){var _=this
_.d_=d
_.bo=e
_.p=f
_.G=$
_.cI=!0
_.bl$=g
_.F$=h
_.b7$=i
_.id=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
um(d,e,f,g,h){var x,w=null
if(h==null){x=!0
x=x?C.f5:w}else x=h
return new A.Mw(d,new D.vS(e,f,!0,!0,!0,w),g,C.a5,!1,w,w,x,w,!1,w,0,w,f,C.D,C.dz,w,C.G,w)},
Mw:function Mw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.p3=d
_.p4=e
_.cx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.a=v},
Qj:function Qj(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D
A=a.updateHolder(c[34],A)
C=c[2]
B=c[0]
D=c[41]
A.ajc.prototype={
Vv(d){var x=this.c
return d.mY(this.d,x,x)},
k(d){var x=this
return"SliverGridGeometry("+C.b.bY(B.a(["scrollOffset: "+B.j(x.a),"crossAxisOffset: "+B.j(x.b),"mainAxisExtent: "+B.j(x.c),"crossAxisExtent: "+B.j(x.d)],y.x),", ")+")"}}
A.ajd.prototype={}
A.Ql.prototype={
VD(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.dv(d/x)-1)
return 0},
a5h(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ao(d){var x=this,w=x.a,v=C.f.dg(d,w)
return new A.ajc(C.f.i2(d,w)*x.b,x.a5h(v*x.c),x.d,x.e)},
QW(d){var x=this.b
return x*(C.f.i2(d-1,this.a)+1)-(x-this.d)}}
A.Qk.prototype={}
A.vT.prototype={
k(d){return"crossAxisOffset="+B.j(this.w)+"; "+this.JO(0)}}
A.Pe.prototype={
d3(d){if(!(d.e instanceof A.vT))d.e=new A.vT(!1,null,null)},
sAy(d){var x=this
if(x.d_===d)return
if(B.A(d)!==B.A(x.d_)||d.i_(x.d_))x.T()
x.d_=d},
n1(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
be(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.k.prototype.gK.call(a4)),a7=a4.bo
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.d_.Ar(a6)
t=u.b
s=t>1e-10?u.a*C.d.i2(w,t):0
r=isFinite(v)?u.VD(v):a5
t=a4.F$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.b7$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.eZ(s-t,0,a4.bl$)
a4.hH(o,r==null?0:C.f.eZ(p-r,0,a4.bl$))}else a4.hH(0,0)
n=u.Ao(s)
if(a4.F$==null)if(!a4.xo(s,n.a)){m=u.QW(a7.grI())
a4.id=B.dI(a5,!1,a5,a5,m,0,0,0,m,a5,a5)
a7.jK()
return}l=n.a
k=l+n.c
t=a4.F$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.Ao(j)
p=h.c
g=a4.T_(a6.mY(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.F$
p.toString
p.eq(n.Vv(a6))
i=a4.F$
p=i.e
p.toString
t.a(p)
p.a=l
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.l(a4).i("V.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Ao(j)
e=h.c
d=a6.mY(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).O$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.SZ(d,i)
if(g==null)break}else g.eq(d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
k=Math.max(k,a0+e);++j
i=g}t=a4.b7$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a7.yy(a6,s,t,l,k)
a2=a4.h7(a6,Math.min(x,l),k)
a3=a4.lG(a6,l,k)
a4.id=B.dI(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,0,a2,0,a1,a5,a5)
if(a1===k)a7.R8=!0
a7.jK()}}
A.Mw.prototype={
F7(d){return new A.Qj(this.p3,this.p4,null)}}
A.Qj.prototype={
aq(d){var x=new A.Pe(this.f,y.v.a(d),B.D(y.e,y.g),0,null,null,B.aa())
x.ap()
return x},
ar(d,e){e.sAy(this.f)},
G3(d,e,f,g,h){var x,w
this.ZL(d,e,f,g,h)
x=this.f.Ar(d)
w=this.d.gpw()
w.toString
w=x.QW(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.S,[A.ajc,A.ajd,A.Qk])
w(A.Ql,A.ajd)
w(A.vT,B.d8)
w(A.Pe,B.he)
w(A.Mw,B.to)
w(A.Qj,B.hR)})()
B.c6(b.typeUniverse,JSON.parse('{"vT":{"d8":[],"kr":[],"dq":["p"],"i8":[],"c4":[]},"Pe":{"he":[],"bw":[],"V":["p","d8"],"k":[],"K":[],"a7":[],"V.1":"d8","V.0":"p"},"Mw":{"a9":[],"c":[]},"Qj":{"hR":[],"ag":[],"c":[]}}'))
var y={x:B.z("m<n>"),g:B.z("p"),z:B.z("jf"),t:B.z("vT"),v:B.z("o7"),c:B.z("d8"),e:B.z("o")}}
$__dart_deferred_initializers__["4BLyk+vhoiUuR8yoRHOrYEPyG4c="] = $__dart_deferred_initializers__.current
