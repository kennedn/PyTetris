$pyjs.loaded_modules["pyjsdl.font"]=function(C){if($pyjs.loaded_modules["pyjsdl.font"].__was_initialized__)return $pyjs.loaded_modules["pyjsdl.font"];"undefined"!=typeof $pyjs.loaded_modules.pyjsdl&&$pyjs.loaded_modules.pyjsdl.__was_initialized__||$p.___import___("pyjsdl",null);var b=$pyjs.loaded_modules["pyjsdl.font"];b.__repr__=function(){return"<module: pyjsdl.font>"};b.__was_initialized__=!0;if(null===C||"undefined"==typeof C)C="pyjsdl.font";b.__name__=C;$pyjs.loaded_modules.pyjsdl.font=$pyjs.loaded_modules["pyjsdl.font"];
b._ceil=$p.___import___("math.ceil","pyjsdl",null,!1);b.Surface=$p.___import___("pyjsdl.surface.Surface","pyjsdl",null,!1);b.Color=$p.___import___("pyjsdl.color.Color","pyjsdl",null,!1);b.HTML5Canvas=$p.___import___("pyjsdl.pyjsobj.HTML5Canvas","pyjsdl",null,!1);b.__docformat__="restructuredtext";b._initialized=!1;b._surf=null;b.init=function(){var h;if(null===(h=b._initialized)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?
0<h.__len__():1:1)return null;try{b._surf=b.HTML5Canvas(1,1),b._surf.measureText("x")}catch(g){$pyjs.__last_exception__={error:g,module:b},b._surf=null}b._initialized=!0;return null};b.init.__name__="init";b.init.__bind_type__=0;b.init.__args__=[null,null];b.init();b.quit=function(){b._surf=null;b._initialized=!1;return null};b.quit.__name__="quit";b.quit.__bind_type__=0;b.quit.__args__=[null,null];b.get_init=function(){return b._initialized};b.get_init.__name__="get_init";b.get_init.__bind_type__=
0;b.get_init.__args__=[null,null];b.get_default_font=function(){var h;return"undefined"!=typeof(h=b.Font._font).__array?"undefined"!=typeof h.__array[0]?h.__array[0]:h.__getitem__(0):h.__getitem__(0)};b.get_default_font.__name__="get_default_font";b.get_default_font.__bind_type__=0;b.get_default_font.__args__=[null,null];b.get_fonts=function(){return b.Font._font};b.get_fonts.__name__="get_fonts";b.get_fonts.__bind_type__=0;b.get_fonts.__args__=[null,null];b.match_font=function(h){var g,w,q,k,a,n,
e,d,f,c,D,u,l,m,p,r,y,t,z,s,S,Q,v,A,K;A=!1;q=function(){var a,b,e,k,f,d;e=$p.list();k=h.$$split(",");"undefined"!=typeof(d=k.__array)?b=0:(k=k.__iter__(),b="undefined"!=typeof(d=k.__array)?0:"function"==typeof k.$genfunc?1:-1);for(f=0;"undefined"!=typeof(a=b?0<b?k.next(!0,!1):$p.wrapped_next(k):d[f++]);)e.append(a.strip().lower());return e}();a=$p.enumerate(q);"undefined"!=typeof(K=a.__array)?f=0:(a=a.__iter__(),f="undefined"!=typeof(K=a.__array)?0:"function"==typeof a.$genfunc?1:-1);for(l=0;"undefined"!=
typeof(Q=f?0<f?a.next(!0,!1):$p.wrapped_next(a):K[l++]);)if(v=$p.__ass_unpack(Q,2,null),Q=v[0],s=v[1],null===(D=b.Font._font.__contains__(s))||!1===D||0===D||""===D?0:"object"==typeof D?"function"==typeof D.__nonzero__?D.__nonzero__():"function"==typeof D.__len__?0<D.__len__():1:1)A=!0;else if(v="".join(function(){var a=[0],b=null,e=null,f=!1,c=function(){};c.next=function(k){var d;b=e=null;try{if(d=c.$genfunc(),f=!1,"undefined"==typeof d){if(!0===k){a[0]=-1;return}throw $p.StopIteration();}}catch(n){f=
!1;a[0]=-1;if(!0===k&&$p.isinstance(n,$p.StopIteration))return;throw n;}return d};c.__iter__=function(){return c};c.send=function(k){b=k;e=null;try{var d=c.$genfunc();if("undefined"==typeof d)throw $p.StopIteration();}catch(n){throw a[0]=-1,f=!1,n;}f=!1;return d};c.$$throw=function(k,d){b=null;e="undefined"==typeof d?k():$p.isinstance(d,k)?d:k(d);try{var n=c.$genfunc()}catch(l){throw a[0]=-1,f=!1,l;}f=!1;return n};c.close=function(){b=null;e=$p.GeneratorExit();try{var k=c.$genfunc();f=!1;if("undefined"!=
typeof k)throw $p.RuntimeError("generator ignored GeneratorExit");}catch(d){a[0]=-1;f=!1;if($p.isinstance(d,$p.StopIteration)||$p.isinstance(d,$p.GeneratorExit))return null;throw d;}return null};c.$genfunc=function(){if(f)throw $p.ValueError("generator already executing");f=!0;if("undefined"==typeof a[0]||0===a[0]){for(var c=0;c<(2>a.length?2:a.length);c++)a[c]=0;if("undefined"!=typeof e&&null!==e)throw a[0]=-1,e;d=s;"undefined"!=typeof(r=d.__array)?g=0:(d=d.__iter__(),g="undefined"!=typeof(r=d.__array)?
0:"function"==typeof d.$genfunc?1:-1);k=0;a[0]=1}1==a[0]&&(a[1]=0,a[0]=2);if(2==a[0]){for(;0<a[1]||"undefined"!=typeof(n=g?0<g?d.next(!0,!1):$p.wrapped_next(d):r[k++]);a[1]=0){if("undefined"==typeof a[1]||0===a[1]){for(c=1;c<(3>a.length?3:a.length);c++)a[c]=0;S=n;a[3]=0;a[1]=1}if(1==a[1]){if(1==a[2]||1>a[2]&&(null===(u=S.isalnum())||!1===u||0===u||""===u?0:"object"==typeof u?"function"==typeof u.__nonzero__?u.__nonzero__():"function"==typeof u.__len__?0<u.__len__():1:1)){a[2]=1;if("undefined"==typeof a[3]||
0===a[3]){for(c=3;c<(5>a.length?5:a.length);c++)a[c]=0;b=S;a[3]=1;return b}if(1==a[3]){if("undefined"!=typeof e&&null!==e)throw a[3]=-1,e;a[3]=2}}a[2]=0;a[1]=2}}a[0]=3}3==a[0]&&(a[0]=4)};return c}()),null===(p=b.Font._font_alt.__contains__(v))||!1===p||0===p||""===p?0:"object"==typeof p?"function"==typeof p.__nonzero__?p.__nonzero__():"function"==typeof p.__len__?0<p.__len__():1:1)q.__setitem__(Q,"undefined"!=typeof(z=b.Font._font).__array?"undefined"!=typeof z.__array[y="undefined"!=typeof(e=b.Font._font_alt).__array?
"undefined"!=typeof e.__array[t=v]?e.__array[t]:e.__getitem__(t):e.__getitem__(v)]?z.__array[y]:z.__getitem__(y):z.__getitem__("undefined"!=typeof(e=b.Font._font_alt).__array?"undefined"!=typeof e.__array[t=v]?e.__array[t]:e.__getitem__(t):e.__getitem__(v))),A=!0;(null===(m=!(null===(c=A)||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1))||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?
m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)&&q.append("undefined"!=typeof(w=b.Font._font).__array?"undefined"!=typeof w.__array[0]?w.__array[0]:w.__getitem__(0):w.__getitem__(0));return q=",".join(q)};b.match_font.__name__="match_font";b.match_font.__bind_type__=0;b.match_font.__args__=[null,null,["name"]];b.Font=function(){var h={},g;h.__module__="pyjsdl.font";h._font=$p.list("arial;bitstream vera sans;bitstream vera serif;book antiqua;comic sans ms;courier new;courier;dejavu sans;dejavu sans mono;dejavu serif;freesans;garamond;georgia;helvetica;impact;liberation sans;liberation serif;lucida console;lucida serif;nimbus mono l;nimbus roman no9 l;nimbus sans l;palatino;times new roman;times;tahoma;verdana;cursive;monospace;sans-serif;serif".split(";"));
h._font_alt=$p.dict([["arial",0],["bitstreamverasans",1],["bitstreamveraserif",2],["bookantiqua",3],["comicsansms",4],["couriernew",5],["courier",6],["dejavusans",7],["dejavusansmono",8],["dejavuserif",9],["freesans",10],["garamond",11],["georgia",12],["helvetica",13],["impact",14],["liberationsans",15],["liberationserif",16],["lucidaconsole",17],["lucidaserif",18],["nimbusmonol",19],["nimbusromanno9l",20],["nimbussansl",21],["palatino",22],["timesnewroman",23],["times",24],["tahoma",25],["verdana",
26],["cursive",27],["monospace",28],["sansserif",29],["serif",30]]);h._font_family=$p.list([$p.list("arial;helvetica;liberation sans;nimbus sans l;freesans;tahoma;sans-serif".split(";")),$p.list(["verdana","bitstream vera sans","dejavu sans","sans-serif"]),$p.list(["impact","sans-serif"]),$p.list(["comic sans ms","cursive","sans-serif"]),$p.list(["courier new","courier","lucida console","dejavu sans mono","monospace"]),$p.list(["times new roman","times","liberation serif","nimbus roman no9 l","serif"]),
$p.list("garamond;book antiqua;palatino;liberation serif;nimbus roman no9 l;serif".split(";")),$p.list("georgia;bitstream vera serif;lucida serif;liberation serif;dejavu serif;serif".split(";"))]);g=$pyjs__bind_method2("__init__",function(k,a,n){if(!0===this.__is_instance__)var e=this;else e=k,k=a,a=n;var d,f,c,h,g,l,m,p,r,y,t,z,s,q,w,v,A,K,C,I,T,Y,E,Z,$,R,U,V,F,x,G,J,M,L,N,W,O,H,B,X,P;A=(null===(s=!(null===(x=k)||!1===x||0===x||""===x?0:"object"==typeof x?"function"==typeof x.__nonzero__?x.__nonzero__():
"function"==typeof x.__len__?0<x.__len__():1:1))||!1===s||0===s||""===s?0:"object"==typeof s?"function"==typeof s.__nonzero__?s.__nonzero__():"function"==typeof s.__len__?0<s.__len__():1:1)?$p.list(["undefined"!=typeof(l=b.Font._font).__array?"undefined"!=typeof l.__array[0]?l.__array[0]:l.__getitem__(0):l.__getitem__(0)]):function(){var a,b,e,d,c,f;b=$p.list();f=k.$$split(",");"undefined"!=typeof(c=f.__array)?d=0:(f=f.__iter__(),d="undefined"!=typeof(c=f.__array)?0:"function"==typeof f.$genfunc?
1:-1);for(e=0;"undefined"!=typeof(a=d?0<d?f.next(!0,!1):$p.wrapped_next(f):c[e++]);)b.append(a.strip().lower());return b}();n=!1;x=null;s=$p.enumerate(A);"undefined"!=typeof(T=s.__array)?w=0:(s=s.__iter__(),w="undefined"!=typeof(T=s.__array)?0:"function"==typeof s.$genfunc?1:-1);for(l=0;"undefined"!=typeof(d=w?0<w?s.next(!0,!1):$p.wrapped_next(s):T[l++]);){var aa=$p.__ass_unpack(d,2,null);d=aa[0];J=aa[1];if(null===(G=J.__contains__("."))||!1===G||0===G||""===G?0:"object"==typeof G?"function"==typeof G.__nonzero__?
G.__nonzero__():"function"==typeof G.__len__?0<G.__len__():1:1)J="undefined"!=typeof(M=J.$$split(".")).__array?"undefined"!=typeof M.__array[0]?M.__array[0]:M.__getitem__(0):M.__getitem__(0),A.__setitem__(d,J),n=!0;if(null===(c=b.Font._font.__contains__(J))||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1){if(null===(m=!(null===(F=x)||!1===F||0===F||""===F?0:"object"==typeof F?"function"==typeof F.__nonzero__?
F.__nonzero__():"function"==typeof F.__len__?0<F.__len__():1:1))||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)x=J}else if(H="".join(function(){var a=[0],b=null,e=null,k=!1,d=function(){};d.next=function(f){var c;b=e=null;try{if(c=d.$genfunc(),k=!1,"undefined"==typeof c){if(!0===f){a[0]=-1;return}throw $p.StopIteration();}}catch(n){k=!1;a[0]=-1;if(!0===f&&$p.isinstance(n,$p.StopIteration))return;throw n;
}return c};d.__iter__=function(){return d};d.send=function(f){b=f;e=null;try{var c=d.$genfunc();if("undefined"==typeof c)throw $p.StopIteration();}catch(n){throw a[0]=-1,k=!1,n;}k=!1;return c};d.$$throw=function(f,c){b=null;e="undefined"==typeof c?f():$p.isinstance(c,f)?c:f(c);try{var n=d.$genfunc()}catch(g){throw a[0]=-1,k=!1,g;}k=!1;return n};d.close=function(){b=null;e=$p.GeneratorExit();try{var f=d.$genfunc();k=!1;if("undefined"!=typeof f)throw $p.RuntimeError("generator ignored GeneratorExit");
}catch(c){a[0]=-1;k=!1;if($p.isinstance(c,$p.StopIteration)||$p.isinstance(c,$p.GeneratorExit))return null;throw c;}return null};d.$genfunc=function(){if(k)throw $p.ValueError("generator already executing");k=!0;if("undefined"==typeof a[0]||0===a[0]){for(var d=0;d<(2>a.length?2:a.length);d++)a[d]=0;if("undefined"!=typeof e&&null!==e)throw a[0]=-1,e;v=J;"undefined"!=typeof(V=v.__array)?C=0:(v=v.__iter__(),C="undefined"!=typeof(V=v.__array)?0:"function"==typeof v.$genfunc?1:-1);$=0;a[0]=1}1==a[0]&&
(a[1]=0,a[0]=2);if(2==a[0]){for(;0<a[1]||"undefined"!=typeof(Y=C?0<C?v.next(!0,!1):$p.wrapped_next(v):V[$++]);a[1]=0){if("undefined"==typeof a[1]||0===a[1]){for(d=1;d<(3>a.length?3:a.length);d++)a[d]=0;W=Y;a[3]=0;a[1]=1}if(1==a[1]){if(1==a[2]||1>a[2]&&(null===(p=W.isalnum())||!1===p||0===p||""===p?0:"object"==typeof p?"function"==typeof p.__nonzero__?p.__nonzero__():"function"==typeof p.__len__?0<p.__len__():1:1)){a[2]=1;if("undefined"==typeof a[3]||0===a[3]){for(d=3;d<(5>a.length?5:a.length);d++)a[d]=
0;b=W;a[3]=1;return b}if(1==a[3]){if("undefined"!=typeof e&&null!==e)throw a[3]=-1,e;a[3]=2}}a[2]=0;a[1]=2}}a[0]=3}3==a[0]&&(a[0]=4)};return d}()),null===(r=b.Font._font_alt.__contains__(H))||!1===r||0===r||""===r?0:"object"==typeof r?"function"==typeof r.__nonzero__?r.__nonzero__():"function"==typeof r.__len__?0<r.__len__():1:1)if(A.__setitem__(d,"undefined"!=typeof(N=b.Font._font).__array?"undefined"!=typeof N.__array[U="undefined"!=typeof(B=b.Font._font_alt).__array?"undefined"!=typeof B.__array[L=
H]?B.__array[L]:B.__getitem__(L):B.__getitem__(H)]?N.__array[U]:N.__getitem__(U):N.__getitem__("undefined"!=typeof(B=b.Font._font_alt).__array?"undefined"!=typeof B.__array[L=H]?B.__array[L]:B.__getitem__(L):B.__getitem__(H))),null===(t=!(null===(y=x)||!1===y||0===y||""===y?0:"object"==typeof y?"function"==typeof y.__nonzero__?y.__nonzero__():"function"==typeof y.__len__?0<y.__len__():1:1))||!1===t||0===t||""===t?0:"object"==typeof t?"function"==typeof t.__nonzero__?t.__nonzero__():"function"==typeof t.__len__?
0<t.__len__():1:1)x="undefined"!=typeof(O=A).__array?"undefined"!=typeof O.__array[X=d]?O.__array[X]:O.__getitem__(X):O.__getitem__(d)}if(null===(z=x)||!1===z||0===z||""===z?0:"object"==typeof z?"function"==typeof z.__nonzero__?z.__nonzero__():"function"==typeof z.__len__?0<z.__len__():1:1)for(r=b.Font._font_family,"undefined"!=typeof(c=r.__array)?t=0:(r=r.__iter__(),t="undefined"!=typeof(c=r.__array)?0:"function"==typeof r.$genfunc?1:-1),y=0;"undefined"!=typeof(m=t?0<t?r.next(!0,!1):$p.wrapped_next(r):
c[y++]);){if(h=m,null===(f=h.__contains__(x))||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1){A.extend(function(){var a=[0],d=null,b=null,e=!1,k=function(){};k.next=function(c){var f;d=b=null;try{if(f=k.$genfunc(),e=!1,"undefined"==typeof f){if(!0===c){a[0]=-1;return}throw $p.StopIteration();}}catch(n){e=!1;a[0]=-1;if(!0===c&&$p.isinstance(n,$p.StopIteration))return;throw n;}return f};k.__iter__=function(){return k};
k.send=function(f){d=f;b=null;try{var c=k.$genfunc();if("undefined"==typeof c)throw $p.StopIteration();}catch(n){throw a[0]=-1,e=!1,n;}e=!1;return c};k.$$throw=function(c,f){d=null;b="undefined"==typeof f?c():$p.isinstance(f,c)?f:c(f);try{var n=k.$genfunc()}catch(g){throw a[0]=-1,e=!1,g;}e=!1;return n};k.close=function(){d=null;b=$p.GeneratorExit();try{var f=k.$genfunc();e=!1;if("undefined"!=typeof f)throw $p.RuntimeError("generator ignored GeneratorExit");}catch(c){a[0]=-1;e=!1;if($p.isinstance(c,
$p.StopIteration)||$p.isinstance(c,$p.GeneratorExit))return null;throw c;}return null};k.$genfunc=function(){if(e)throw $p.ValueError("generator already executing");e=!0;if("undefined"==typeof a[0]||0===a[0]){for(var c=0;c<(2>a.length?2:a.length);c++)a[c]=0;if("undefined"!=typeof b&&null!==b)throw a[0]=-1,b;I=h;"undefined"!=typeof(K=I.__array)?R=0:(I=I.__iter__(),R="undefined"!=typeof(K=I.__array)?0:"function"==typeof I.$genfunc?1:-1);Z=0;a[0]=1}1==a[0]&&(a[1]=0,a[0]=2);if(2==a[0]){for(;0<a[1]||"undefined"!=
typeof(q=R?0<R?I.next(!0,!1):$p.wrapped_next(I):K[Z++]);a[1]=0){if("undefined"==typeof a[1]||0===a[1]){for(c=1;c<(3>a.length?3:a.length);c++)a[c]=0;H=q;a[3]=0;a[1]=1}if(1==a[1]){if(1==a[2]||1>a[2]&&(null===(g=!A.__contains__(H))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)){a[2]=1;if("undefined"==typeof a[3]||0===a[3]){for(c=3;c<(5>a.length?5:a.length);c++)a[c]=0;d=H;a[3]=1;return d}if(1==a[3]){if("undefined"!=
typeof b&&null!==b)throw a[3]=-1,b;a[3]=2}}a[2]=0;a[1]=2}}a[0]=3}3==a[0]&&(a[0]=4)};return k}());break}}else A.extend("undefined"!=typeof(P=b.Font._font_family).__array?"undefined"!=typeof P.__array[0]?P.__array[0]:P.__getitem__(0):P.__getitem__(0));e.fontname=",".join(A);e.fontsize=a;e.bold="";e.italic="";e.fontstyle=e.bold+" "+e.italic;e.underline=!1;e.char_size=null;(null===(E=n)||!1===E||0===E||""===E?0:"object"==typeof E?"function"==typeof E.__nonzero__?E.__nonzero__():"function"==typeof E.__len__?
0<E.__len__():1:1)&&e.render("x");e._nonimplemented_methods();return null},1,[null,null,["self"],["name"],["size"]]);h.__init__=g;g=$pyjs__bind_method2("__repr__",function(b){b=!0===this.__is_instance__?this:b;return $p.sprintf("%s(%r)",$p.tuple([b.__class__,b.__dict__]))},1,[null,null,["self"]]);h.__repr__=g;g=$pyjs__bind_method2("render",function(k,a,n,e,d){if(!0===this.__is_instance__)var f=this;else f=arguments[0],k=arguments[1],a=arguments[2],n=arguments[3],e=arguments[4],d=arguments[5];"undefined"==
typeof a&&(a=arguments.callee.__args__[4][1]);"undefined"==typeof n&&(n=arguments.callee.__args__[5][1]);"undefined"==typeof e&&(e=arguments.callee.__args__[6][1]);"undefined"==typeof d&&(d=arguments.callee.__args__[7][1]);var c,g,h,l,m;(null===(l=!(null===(g=d)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1))||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==
typeof l.__len__?0<l.__len__():1:1)?(l=$p.__ass_unpack(f.size(k),2,null),g=l[0],m=l[1],l=b.Surface($p.tuple([g,m]))):(l=d,m=$p.__ass_unpack($p.tuple([d.width,d.height]),2,null),g=m[0],m=m[1]);if(null===(h=e)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)l.setFillStyle(b.Color(e)),l.fillRect(0,0,g,m);l.setFont($p.sprintf("%s %dpx %s",$p.tuple([f.fontstyle,f.fontsize,f.fontname])));l.setFillStyle(b.Color(n));
l.setTextAlign("center");l.setTextBaseline("middle");l.fillText(k,g/2,m/2);if(null===(c=f.underline)||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)l.setLineWidth(f.fontsize/20),l.setStrokeStyle(b.Color(n)),l.beginPath(),l.moveTo(0,0.85*m),l.lineTo(g,0.85*m),l.stroke();return l},1,[null,null,["self"],["text"],["antialias",!0],["color",$p.tuple([0,0,0])],["background",null],["surface",null]]);h.render=g;g=
$pyjs__bind_method2("size",function(k,a){if(!0===this.__is_instance__)var g=this;else g=k,k=a;var e,d,f;(null===(d=b._surf)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?(b._surf.setFont($p.sprintf("%s %dpx %s",$p.tuple([g.fontstyle,g.fontsize,g.fontname]))),d=b._surf.measureText(k)):d=g._size_estimate(k);if(null===(f=-1==(1===(e=d)?0:"number"!=typeof e||"number"!=typeof e&&"string"!=typeof e&&"boolean"!=
typeof e?$p.cmp(e,1):1==e?0:1>e?-1:1))||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)d=1;g=$p.float_int(1.2*g.fontsize);return $p.tuple([d,g])},1,[null,null,["self"],["text"]]);h.size=g;g=$pyjs__bind_method2("_size_estimate",function(k){if(!0===this.__is_instance__)var a=this;else a=arguments[0],k=arguments[1];"undefined"==typeof k&&(k=arguments.callee.__args__[3][1]);var g,e,d,f,c,h,u,l,m;if(null===(c=!(null===
(f=a.char_size)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1))||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)a.char_size=a._get_char_size();a.fontname=",".join("undefined"!=typeof(d=b.Font._font_family).__array?"undefined"!=typeof d.__array[0]?d.__array[0]:d.__getitem__(0):d.__getitem__(0));a.fontstyle="";d=$p.list([]);
f=k;"undefined"!=typeof(m=f.__array)?u=0:(f=f.__iter__(),u="undefined"!=typeof(m=f.__array)?0:"function"==typeof f.$genfunc?1:-1);for(c=0;"undefined"!=typeof(g=u?0<u?f.next(!0,!1):$p.wrapped_next(f):m[c++]);)try{d.append(("undefined"!=typeof(l=a.char_size).__array?"undefined"!=typeof l.__array[h=g]?l.__array[h]:l.__getitem__(h):l.__getitem__(g))*a.fontsize)}catch(p){if(g="undefined"==typeof p.__name__?p.name:p.__name__,$pyjs.__last_exception__={error:p,module:b},g==$p.KeyError.__name__||$p._isinstance(p,
$p.KeyError))d.append(("undefined"!=typeof(e=a.char_size).__array?"undefined"!=typeof e.__array.x?e.__array.x:e.__getitem__("x"):e.__getitem__("x"))*a.fontsize);else throw $pyjs.__active_exception_stack__=$pyjs.__last_exception_stack__,$pyjs.__last_exception_stack__=null,p;}return b._ceil($p.sum(d))},1,[null,null,["self"],["text",null]]);h._size_estimate=g;g=$pyjs__bind_method2("set_underline",function(b){if(!0===this.__is_instance__)var a=this;else a=arguments[0],b=arguments[1];"undefined"==typeof b&&
(b=arguments.callee.__args__[3][1]);a.underline=b;return null},1,[null,null,["self"],["setting",!0]]);h.set_underline=g;g=$pyjs__bind_method2("get_underline",function(b){return(!0===this.__is_instance__?this:b).underline},1,[null,null,["self"]]);h.get_underline=g;g=$pyjs__bind_method2("set_bold",function(b){if(!0===this.__is_instance__)var a=this;else a=arguments[0],b=arguments[1];"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);var g,e;a.bold="undefined"!=typeof(e=$p.dict([[!0,"bold"],
[!1,""]])).__array?"undefined"!=typeof e.__array[g=b]?e.__array[g]:e.__getitem__(g):e.__getitem__(b);a.fontstyle=a.bold+" "+a.italic;return null},1,[null,null,["self"],["setting",!0]]);h.set_bold=g;g=$pyjs__bind_method2("get_bold",function(b){var a;return(null===(a=(!0===this.__is_instance__?this:b).bold)||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)?!0:!1},1,[null,null,["self"]]);h.get_bold=g;g=$pyjs__bind_method2("set_italic",
function(b){if(!0===this.__is_instance__)var a=this;else a=arguments[0],b=arguments[1];"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);var g,e;a.italic="undefined"!=typeof(g=$p.dict([[!0,"italic"],[!1,""]])).__array?"undefined"!=typeof g.__array[e=b]?g.__array[e]:g.__getitem__(e):g.__getitem__(b);a.fontstyle=a.bold+" "+a.italic;return null},1,[null,null,["self"],["setting",!0]]);h.set_italic=g;g=$pyjs__bind_method2("get_italic",function(b){var a;return(null===(a=(!0===this.__is_instance__?
this:b).italic)||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)?!0:!1},1,[null,null,["self"]]);h.get_italic=g;g=$pyjs__bind_method2("get_linesize",function(b){return $p.float_int(1.2*(!0===this.__is_instance__?this:b).fontsize)},1,[null,null,["self"]]);h.get_linesize=g;g=$pyjs__bind_method2("_nonimplemented_methods",function(b){b=!0===this.__is_instance__?this:b;var a;a=function(){$p.tuple($pyjs_array_slice.call(arguments,
0,arguments.length));return $p.list([])};a.__name__="$lambda1";a.__bind_type__=0;a.__args__=["arg",null];b.metrics=a;a=function(){$p.tuple($pyjs_array_slice.call(arguments,0,arguments.length));return 0};a.__name__="$lambda2";a.__bind_type__=0;a.__args__=["arg",null];b.get_height=a;a=function(){$p.tuple($pyjs_array_slice.call(arguments,0,arguments.length));return 0};a.__name__="$lambda3";a.__bind_type__=0;a.__args__=["arg",null];b.get_ascent=a;a=function(){$p.tuple($pyjs_array_slice.call(arguments,
0,arguments.length));return 0};a.__name__="$lambda4";a.__bind_type__=0;a.__args__=["arg",null];b.get_descent=a;return null},1,[null,null,["self"]]);h._nonimplemented_methods=g;g=$pyjs__bind_method2("_get_char_size",function(g){!0!==this.__is_instance__&&(g=arguments[1]);"undefined"==typeof g&&(g=arguments.callee.__args__[3][1]);var a,h,e,d,f,c;if(null===(a=!(null===(e=g)||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():
1:1))||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)return $p.dict([["a",0.6],["b",0.6],["c",0.5],["d",0.6],["e",0.6],["f",0.3],["g",0.6],["h",0.6],["i",0.2],["j",0.2],["k",0.5],["l",0.2],["m",0.8],["n",0.6],["o",0.6],["p",0.6],["q",0.6],["r",0.3],["s",0.5],["t",0.3],["u",0.6],["v",0.5],["w",0.7],["x",0.5],["y",0.5],["z",0.5],["A",0.7],["B",0.7],["C",0.7],["D",0.7],["E",0.7],["F",0.6],["G",0.8],["H",0.7],
["I",0.3],["J",0.5],["K",0.7],["L",0.6],["M",0.8],["N",0.7],["O",0.8],["P",0.7],["Q",0.8],["R",0.7],["S",0.7],["T",0.6],["U",0.7],["V",0.7],["W",0.9],["X",0.7],["Y",0.7],["Z",0.6],["0",0.6],["1",0.6],["2",0.6],["3",0.6],["4",0.6],["5",0.6],["6",0.6],["7",0.6],["8",0.6],["9",0.6],[".",0.3],[",",0.3],[":",0.3],[";",0.3],["?",0.6],["~",0.6],["!",0.3],["@",1],["#",0.6],["$",0.6],["%",0.9],["^",0.5],["&",0.7],["=",0.6],["+",0.6],["-",0.3],["*",0.4],["/",0.3],["\\",0.3],["_",0.6],["<",0.6],[">",0.6],["(",
0.3],[")",0.3],["{",0.3],["}",0.3],["[",0.3],["]",0.3],["'",0.2],['"',0.4],[" ",0.3]]);b._surf.setFont($p.sprintf("%dpx %s",$p.tuple([10,g])));a=$p.dict([]);f="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]'\" ";"undefined"!=typeof(e=f.__array)?d=0:(f=f.__iter__(),d="undefined"!=typeof(e=f.__array)?0:"function"==typeof f.$genfunc?1:-1);for(c=0;"undefined"!=typeof(h=d?0<d?f.next(!0,!1):$p.wrapped_next(f):e[c++]);)a.__setitem__(h,$p["float"](b._surf.measureText(h)/
10));return a},1,[null,null,["self"],["font",null]]);h._get_char_size=g;g=Array($p.object);var w=$p.dict(),q;for(q in h)w.__setitem__(q,h[q]);return $p._create_class("Font",$p.tuple(g),w)}();b.SysFont=function(){var h={},g;h.__module__="pyjsdl.font";g=$pyjs__bind_method2("__init__",function(g,a,h,e){if(!0===this.__is_instance__)var d=this;else d=arguments[0],g=arguments[1],a=arguments[2],h=arguments[3],e=arguments[4];"undefined"==typeof h&&(h=arguments.callee.__args__[5][1]);"undefined"==typeof e&&
(e=arguments.callee.__args__[6][1]);var f,c,q,u;b.Font.__init__(d,g,a);d.bold="undefined"!=typeof(q=$p.dict([[!0,"bold"],[!1,""]])).__array?"undefined"!=typeof q.__array[f=h]?q.__array[f]:q.__getitem__(f):q.__getitem__(h);d.italic="undefined"!=typeof(c=$p.dict([[!0,"italic"],[!1,""]])).__array?"undefined"!=typeof c.__array[u=h]?c.__array[u]:c.__getitem__(u):c.__getitem__(h);d.fontstyle=d.bold+" "+d.italic;return null},1,[null,null,["self"],["name"],["size"],["bold",!1],["italic",!1]]);h.__init__=
g;g=Array(b.Font);var w=$p.dict(),q;for(q in h)w.__setitem__(q,h[q]);return $p._create_class("SysFont",$p.tuple(g),w)}();return this};