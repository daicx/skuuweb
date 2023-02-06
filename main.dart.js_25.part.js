self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aq4(d){return new B.Vv(d,J.kX(d.$1(C.Ne)))},
N7:function N7(){},
Vv:function Vv(d,e){this.c=d
this.a=e},
aFr(d){var x,w,v=new A.bb(new Float64Array(16))
v.dH()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.oU(d[x-1],v)}return v},
a83(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.a
w=e.a
if(x<w){x=y.m
g.push(x.a(A.K.prototype.gaB.call(e,e)))
return B.a83(d,x.a(A.K.prototype.gaB.call(e,e)),f,g)}else if(x>w){x=y.m
f.push(x.a(A.K.prototype.gaB.call(d,d)))
return B.a83(x.a(A.K.prototype.gaB.call(d,d)),e,f,g)}x=y.m
f.push(x.a(A.K.prototype.gaB.call(d,d)))
g.push(x.a(A.K.prototype.gaB.call(e,e)))
return B.a83(x.a(A.K.prototype.gaB.call(d,d)),x.a(A.K.prototype.gaB.call(e,e)),f,g)},
uH:function uH(){var _=this
_.b=_.a=null
_.c=!1
_.d=null},
zI:function zI(d,e,f,g,h,i){var _=this
_.p1=d
_.p2=e
_.p3=f
_.p4=g
_.rx=_.RG=_.R8=null
_.ry=!0
_.cx=_.CW=null
_.d=h
_.e=0
_.r=!1
_.w=i
_.x=0
_.y=!0
_.at=_.as=_.Q=_.z=null
_.a=0
_.c=_.b=null},
OZ:function OZ(d,e,f){var _=this
_.t=d
_.S=null
_.p$=e
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
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
_.ch=f
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
OW:function OW(d,e,f,g,h,i,j){var _=this
_.t=d
_.S=e
_.ab=f
_.bp=g
_.bX=h
_.p$=i
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
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
ae5:function ae5(d){this.a=d},
aAX(d,e,f,g){return new B.tD(e,g,f,d,null)},
pk:function pk(d,e,f){this.e=d
this.c=e
this.a=f},
tD:function tD(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.x=f
_.c=g
_.a=h},
tN(d){var x=d.L(y.p),w=x==null?null:x.f.c
return(w==null?D.cv:w).cn(d)}},A,D,C,J
B=a.updateHolder(c[35],B)
A=c[0]
D=c[2]
C=c[69]
J=c[1]
B.N7.prototype={$ibj:1}
B.Vv.prototype={
a6(d){return this.c.$1(d)}}
B.uH.prototype={
NS(d){this.a=d},
Pc(d){if(this.a===d)this.a=null},
k(d){var x=A.bI(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.zI.prototype={
Ep(d){var x,w,v,u,t=this
if(t.ry){x=t.I4()
x.toString
t.rx=A.AU(x)
t.ry=!1}if(t.rx==null)return null
w=new A.jk(new Float64Array(4))
w.vg(d.a,d.b,0,1)
x=t.rx.Z(0,w).a
v=x[0]
u=t.p4
return new A.i(v-u.a,x[1]-u.b)},
fL(d,e,f,g){var x,w=this
if(w.p1.a==null){if(w.p2)return w.lj(d,e.ah(0,w.p3),!0,g)
return!1}x=w.Ep(e)
if(x==null)return!1
return w.lj(d,x,!0,g)},
I4(){var x,w
if(this.RG==null)return null
x=this.R8
w=A.k6(-x.a,-x.b,0)
x=this.RG
x.toString
w.d1(0,x)
return w},
a49(){var x,w,v,u,t,s,r=this
r.RG=null
x=r.p1.a
if(x==null)return
w=y.A
v=A.a([x],w)
u=A.a([r],w)
B.a83(x,r,v,u)
t=B.aFr(v)
x.oU(null,t)
w=r.p4
t.aO(0,w.a,w.b)
s=B.aFr(u)
if(s.io(s)===0)return
s.d1(0,t)
r.RG=s
r.ry=!0},
gmV(){return!0},
h6(d){var x,w,v=this
if(v.p1.a==null&&!v.p2){v.R8=v.RG=null
v.ry=!0
v.sfH(null)
return}v.a49()
x=v.RG
w=y.y
if(x!=null){v.R8=v.p3
v.sfH(d.ui(x.a,w.a(v.z)))
v.iZ(d)
d.ev()}else{v.R8=null
x=v.p3
v.sfH(d.ui(A.k6(x.a,x.b,0).a,w.a(v.z)))
v.iZ(d)
d.ev()}v.ry=!0},
oU(d,e){var x=this.RG
if(x!=null)e.d1(0,x)
else{x=this.p3
e.d1(0,A.k6(x.a,x.b,0))}}}
B.OZ.prototype={
snx(d){var x=this,w=x.t
if(w===d)return
w.d=null
x.t=d
w=x.S
if(w!=null)d.d=w
x.ak()},
gj_(){return!0},
be(){var x,w=this
w.vy()
x=w.k3
x.toString
w.S=x
w.t.d=x},
av(d,e){var x=this.ch,w=x.a,v=this.t
if(w==null)x.saF(0,A.aBw(v,e))
else{y.t.a(w)
w.snx(v)
w.sf4(0,e)}x=x.a
x.toString
d.l5(x,A.eg.prototype.geL.call(this),D.h)}}
B.OW.prototype={
snx(d){if(this.t===d)return
this.t=d
this.ak()},
sWP(d){if(this.S===d)return
this.S=d
this.ak()},
sf4(d,e){if(this.ab.j(0,e))return
this.ab=e
this.ak()},
sakf(d){if(this.bp.j(0,d))return
this.bp=d
this.ak()},
said(d){if(this.bX.j(0,d))return
this.bX=d
this.ak()},
a3(d){this.ch.saF(0,null)
this.mD(0)},
gj_(){return!0},
I0(){var x=y.s.a(A.k.prototype.gaF.call(this,this))
x=x==null?null:x.I4()
if(x==null){x=new A.bb(new Float64Array(16))
x.dH()}return x},
bA(d,e){if(this.t.a==null&&!this.S)return!1
return this.cm(d,e)},
cm(d,e){return d.rz(new B.ae5(this),e,this.I0())},
av(d,e){var x,w,v,u,t=this,s=t.t.d
if(s==null)x=t.ab
else{w=t.bp.xz(s)
v=t.bX
u=t.k3
u.toString
x=w.ah(0,v.xz(u)).V(0,t.ab)}w=y.s
if(w.a(A.k.prototype.gaF.call(t,t))==null){v=new B.zI(t.t,t.S,e,x,A.D(y.e,y.k),A.aa())
v.hy()
t.ch.saF(0,v)}else{v=w.a(A.k.prototype.gaF.call(t,t))
if(v!=null){v.p1=t.t
v.p2=t.S
v.p4=x
v.p3=e}}w=w.a(A.k.prototype.gaF.call(t,t))
w.toString
d.q6(w,A.eg.prototype.geL.call(t),D.h,C.Mb)},
dc(d,e){e.d1(0,this.I0())}}
B.pk.prototype={
aq(d){var x=new B.OZ(this.e,null,A.aa())
x.ap()
x.saW(null)
return x},
ar(d,e){e.snx(this.e)}}
B.tD.prototype={
aq(d){var x=new B.OW(this.e,this.f,this.x,C.dI,C.dI,null,A.aa())
x.ap()
x.saW(null)
return x},
ar(d,e){e.snx(this.e)
e.sWP(this.f)
e.sf4(0,this.x)
e.sakf(C.dI)
e.said(C.dI)}}
var z=a.updateTypes([])
B.ae5.prototype={
$2(d,e){return this.a.qH(d,e)},
$S:5};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.N7,A.u)
x(B.Vv,B.N7)
x(B.uH,A.S)
x(B.zI,A.eo)
w(A.nS,[B.OZ,B.OW])
x(B.ae5,A.cX)
w(A.aI,[B.pk,B.tD])})()
A.c6(b.typeUniverse,JSON.parse('{"N7":{"u":[],"bj":["u"]},"Vv":{"u":[],"bj":["u"]},"zI":{"eo":[],"K":[]},"OZ":{"p":[],"ay":["p"],"k":[],"K":[],"a7":[]},"OW":{"p":[],"ay":["p"],"k":[],"K":[],"a7":[]},"pk":{"aI":[],"ag":[],"c":[]},"tD":{"aI":[],"ag":[],"c":[]}}'))
var y={A:A.z("m<eo>"),t:A.z("Al"),p:A.z("wU"),e:A.z("o"),m:A.z("eo?"),s:A.z("zI?"),y:A.z("E7?"),k:A.z("~()")};(function constants(){var x=a.makeConstList
C.dI=new A.e7(-1,-1)
C.Ca=new A.u(167772160)
C.Mb=new A.q(-1/0,-1/0,1/0,1/0)
C.I6=A.a(x([]),A.z("m<c3>"))
C.KI=new A.ba(0,{},C.I6,A.z("ba<c3,aH>"))
C.Ne=new A.cM(C.KI,A.z("cM<c3>"))})()}
$__dart_deferred_initializers__["vuGXJ63eMsayiH/6JKYccRmTNrU="] = $__dart_deferred_initializers__.current
