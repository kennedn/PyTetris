$pyjs.loaded_modules["pyjsdl.draw"]=function(F){if($pyjs.loaded_modules["pyjsdl.draw"].__was_initialized__)return $pyjs.loaded_modules["pyjsdl.draw"];"undefined"!=typeof $pyjs.loaded_modules.pyjsdl&&$pyjs.loaded_modules.pyjsdl.__was_initialized__||$p.___import___("pyjsdl",null);var x=$pyjs.loaded_modules["pyjsdl.draw"];x.__repr__=function(){return"<module: pyjsdl.draw>"};x.__was_initialized__=!0;if(null===F||"undefined"==typeof F)F="pyjsdl.draw";x.__name__=F;$pyjs.loaded_modules.pyjsdl.draw=$pyjs.loaded_modules["pyjsdl.draw"];
x._pi=$p.___import___("math.pi","pyjsdl",null,!1);x.Rect=$p.___import___("pyjsdl.rect.Rect","pyjsdl",null,!1);x.Surface=$p.___import___("pyjsdl.surface.Surface","pyjsdl",null,!1);x.Color=$p.___import___("pyjsdl.color.Color","pyjsdl",null,!1);x.__docformat__="restructuredtext";x.Draw=function(){var A={},y;A.__module__="pyjsdl.draw";y=$pyjs__bind_method2("__init__",function(a){a=!0===this.__is_instance__?this:a;a.rad_deg=180/x._pi;a._return_rect=!0;return null},1,[null,null,["self"]]);A.__init__=y;
y=$pyjs__bind_method2("rect",function(a,c,v,t){if(!0===this.__is_instance__)var u=this;else u=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4];"undefined"==typeof t&&(t=arguments.callee.__args__[6][1]);var f,g,l,e,b,d,k,h,q,m,n,s,r,p;p=(null===(q=$p.hasattr(v,"width"))||!1===q||0===q||""===q?0:"object"==typeof q?"function"==typeof q.__nonzero__?q.__nonzero__():"function"==typeof q.__len__?0<q.__len__():1:1)?v:x.Rect(v);if(null===(k=t)||!1===k||0===k||""===k?0:"object"==typeof k?
"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1){a.setLineWidth(t);if(null===(h=!((d=a._stroke_style)===(e=c)&&null===d||(null===d?0:null===e?0:"object"!=typeof d&&"function"!=typeof d||"function"!=typeof d.__cmp__?"object"!=typeof e&&"function"!=typeof e||"function"!=typeof e.__cmp__?d==e:0===e.__cmp__(d):0===d.__cmp__(e))))||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():
1:1)a._stroke_style=c,(null===(s=$p.hasattr(c,"a"))||!1===s||0===s||""===s?0:"object"==typeof s?"function"==typeof s.__nonzero__?s.__nonzero__():"function"==typeof s.__len__?0<s.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.strokeRect(p.x,p.y,p.width,p.height)}else{if(null===(r=!((b=a._fill_style)===(n=c)&&null===b||(null===b?0:null===n?0:"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?"object"!=typeof n&&"function"!=typeof n||"function"!=typeof n.__cmp__?
b==n:0===n.__cmp__(b):0===b.__cmp__(n))))||!1===r||0===r||""===r?0:"object"==typeof r?"function"==typeof r.__nonzero__?r.__nonzero__():"function"==typeof r.__len__?0<r.__len__():1:1)a._fill_style=c,(null===(m=$p.hasattr(c,"a"))||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)?a.setFillStyle(c):a.setFillStyle(x.Color(c));a.fillRect(p.x,p.y,p.width,p.height)}return(null===(f=!(null===(l=u._return_rect)||!1===
l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1))||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?null:(null===(g=a._display)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)?a._display._surface_rect.clip(p):a.get_rect().clip(p)},
1,[null,null,["self"],["surface"],["color"],["rect"],["width",0]]);A.rect=y;y=$pyjs__bind_method2("circle",function(a,c,v,t,u){if(!0===this.__is_instance__)var f=this;else f=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4],u=arguments[5];"undefined"==typeof u&&(u=arguments.callee.__args__[7][1]);var g,l,e,b,d,k,h,q,m,n,s,r,p,w,z,C,D,E;a.beginPath();a.arc("undefined"!=typeof(D=v).__array?"undefined"!=typeof D.__array[0]?D.__array[0]:D.__getitem__(0):D.__getitem__(0),"undefined"!=
typeof(C=v).__array?"undefined"!=typeof C.__array[1]?C.__array[1]:C.__getitem__(1):C.__getitem__(1),t,0,2*x._pi,!1);if(null===(h=u)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1){a.setLineWidth(u);if(null===(g=!((s=a._stroke_style)===(m=c)&&null===s||(null===s?0:null===m?0:"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.__cmp__?"object"!=typeof m&&"function"!=typeof m||"function"!=typeof m.__cmp__?
s==m:0===m.__cmp__(s):0===s.__cmp__(m))))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)a._stroke_style=c,(null===(l=$p.hasattr(c,"a"))||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke()}else{if(null===(e=!((n=a._fill_style)===(q=c)&&null===n||(null===n?0:null===
q?0:"object"!=typeof n&&"function"!=typeof n||"function"!=typeof n.__cmp__?"object"!=typeof q&&"function"!=typeof q||"function"!=typeof q.__cmp__?n==q:0===q.__cmp__(n):0===n.__cmp__(q))))||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1)a._fill_style=c,(null===(b=$p.hasattr(c,"a"))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():
1:1)?a.setFillStyle(c):a.setFillStyle(x.Color(c));a.fill()}return(null===(r=!(null===(d=f._return_rect)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1))||!1===r||0===r||""===r?0:"object"==typeof r?"function"==typeof r.__nonzero__?r.__nonzero__():"function"==typeof r.__len__?0<r.__len__():1:1)?null:(null===(k=a._display)||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():
"function"==typeof k.__len__?0<k.__len__():1:1)?a._display._surface_rect.clip(x.Rect(("undefined"!=typeof(z=v).__array?"undefined"!=typeof z.__array[0]?z.__array[0]:z.__getitem__(0):z.__getitem__(0))-t,("undefined"!=typeof(w=v).__array?"undefined"!=typeof w.__array[1]?w.__array[1]:w.__getitem__(1):w.__getitem__(1))-t,2*t,2*t)):a.get_rect().clip(x.Rect(("undefined"!=typeof(p=v).__array?"undefined"!=typeof p.__array[0]?p.__array[0]:p.__getitem__(0):p.__getitem__(0))-t,("undefined"!=typeof(E=v).__array?
"undefined"!=typeof E.__array[1]?E.__array[1]:E.__getitem__(1):E.__getitem__(1))-t,2*t,2*t))},1,[null,null,["self"],["surface"],["color"],["position"],["radius"],["width",0]]);A.circle=y;y=$pyjs__bind_method2("ellipse",function(a,c,v,t){if(!0===this.__is_instance__)var u=this;else u=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4];"undefined"==typeof t&&(t=arguments.callee.__args__[6][1]);var f,g,l,e,b,d,k,h,q,m,n,s,r,p,w,z,C;w=(null===(f=$p.hasattr(v,"width"))||!1===f||0===
f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?v:x.Rect(v);a.saveContext();a.translate(w.x+$p.float_int(w.width/2),w.y+$p.float_int(w.height/2));(null===(g=1==(((z=w.width)===(C=w.height)?0:typeof z!=typeof C||"number"!=typeof z&&"string"!=typeof z&&"boolean"!=typeof z?$p.cmp(z,C):z==C?0:z<C?-1:1)|1))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?
0<g.__len__():1:1)?(a.scale(w.width/(1*w.height),1),f=$p.float_int(w.height/2)):(a.scale(1,w.height/(1*w.width)),f=$p.float_int(w.width/2));a.beginPath();a.arc(0,0,f,0,2*x._pi,!1);if(null===(n=t)||!1===n||0===n||""===n?0:"object"==typeof n?"function"==typeof n.__nonzero__?n.__nonzero__():"function"==typeof n.__len__?0<n.__len__():1:1){a.setLineWidth(t);if(null===(m=!((p=a._stroke_style)===(l=c)&&null===p||(null===p?0:null===l?0:"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.__cmp__?
"object"!=typeof l&&"function"!=typeof l||"function"!=typeof l.__cmp__?p==l:0===l.__cmp__(p):0===p.__cmp__(l))))||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)a._stroke_style=c,(null===(r=$p.hasattr(c,"a"))||!1===r||0===r||""===r?0:"object"==typeof r?"function"==typeof r.__nonzero__?r.__nonzero__():"function"==typeof r.__len__?0<r.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke()}else{if(null===
(s=!((e=a._fill_style)===(b=c)&&null===e||(null===e?0:null===b?0:"object"!=typeof e&&"function"!=typeof e||"function"!=typeof e.__cmp__?"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?e==b:0===b.__cmp__(e):0===e.__cmp__(b))))||!1===s||0===s||""===s?0:"object"==typeof s?"function"==typeof s.__nonzero__?s.__nonzero__():"function"==typeof s.__len__?0<s.__len__():1:1)a._fill_style=c,(null===(d=$p.hasattr(c,"a"))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?
d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?a.setFillStyle(c):a.setFillStyle(x.Color(c));a.fill()}a.restoreContext();return(null===(q=!(null===(k=u._return_rect)||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1))||!1===q||0===q||""===q?0:"object"==typeof q?"function"==typeof q.__nonzero__?q.__nonzero__():"function"==typeof q.__len__?0<q.__len__():1:1)?null:(null===(h=a._display)||!1===h||
0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)?a._display._surface_rect.clip(w):a.get_rect().clip(w)},1,[null,null,["self"],["surface"],["color"],["rect"],["width",0]]);A.ellipse=y;y=$pyjs__bind_method2("arc",function(a,c,v,t,u,f){if(!0===this.__is_instance__)var g=this;else g=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4],u=arguments[5],f=arguments[6];"undefined"==typeof f&&(f=arguments.callee.__args__[8][1]);
var l,e,b,d,k,h,q,m,n,s,r,p,w,z,C,D,E,G,H,y,I,J,A,K,M,L,B,F,N;B=(null===(k=$p.hasattr(v,"width"))||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1)?v:x.Rect(v);if(null===(d=(J=B.width)===(A=B.height)&&null===J?!0:null===J?!1:null===A?!1:"object"!=typeof J&&"function"!=typeof J||"function"!=typeof J.__cmp__?"object"!=typeof A&&"function"!=typeof A||"function"!=typeof A.__cmp__?J==A:0===A.__cmp__(J):0===J.__cmp__(A))||
!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)if(a.beginPath(),a.arc(B.x+$p.float_int(B.width/2),B.y+$p.float_int(B.height/2),$p.float_int(B.width/2),-t,-u,!0),null===(p=f)||!1===p||0===p||""===p?0:"object"==typeof p?"function"==typeof p.__nonzero__?p.__nonzero__():"function"==typeof p.__len__?0<p.__len__():1:1){a.setLineWidth(f);if(null===(w=!((K=a._stroke_style)===(M=c)&&null===K||(null===K?0:null===M?0:
"object"!=typeof K&&"function"!=typeof K||"function"!=typeof K.__cmp__?"object"!=typeof M&&"function"!=typeof M||"function"!=typeof M.__cmp__?K==M:0===M.__cmp__(K):0===K.__cmp__(M))))||!1===w||0===w||""===w?0:"object"==typeof w?"function"==typeof w.__nonzero__?w.__nonzero__():"function"==typeof w.__len__?0<w.__len__():1:1)a._stroke_style=c,(null===(s=$p.hasattr(c,"a"))||!1===s||0===s||""===s?0:"object"==typeof s?"function"==typeof s.__nonzero__?s.__nonzero__():"function"==typeof s.__len__?0<s.__len__():
1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke()}else{a.closePath();if(null===(r=!((L=a._fill_style)===(y=c)&&null===L||(null===L?0:null===y?0:"object"!=typeof L&&"function"!=typeof L||"function"!=typeof L.__cmp__?"object"!=typeof y&&"function"!=typeof y||"function"!=typeof y.__cmp__?L==y:0===y.__cmp__(L):0===L.__cmp__(y))))||!1===r||0===r||""===r?0:"object"==typeof r?"function"==typeof r.__nonzero__?r.__nonzero__():"function"==typeof r.__len__?0<r.__len__():1:1)a._fill_style=c,(null===
(D=$p.hasattr(c,"a"))||!1===D||0===D||""===D?0:"object"==typeof D?"function"==typeof D.__nonzero__?D.__nonzero__():"function"==typeof D.__len__?0<D.__len__():1:1)?a.setFillStyle(c):a.setFillStyle(x.Color(c));a.fill()}else{a.saveContext();a.translate(B.x+$p.float_int(B.width/2),B.y+$p.float_int(B.height/2));(null===(E=1==(((N=B.width)===(F=B.height)?0:typeof N!=typeof F||"number"!=typeof N&&"string"!=typeof N&&"boolean"!=typeof N?$p.cmp(N,F):N==F?0:N<F?-1:1)|1))||!1===E||0===E||""===E?0:"object"==
typeof E?"function"==typeof E.__nonzero__?E.__nonzero__():"function"==typeof E.__len__?0<E.__len__():1:1)?(a.scale(B.width/(1*B.height),1),d=$p.float_int(B.height/2)):(a.scale(1,B.height/(1*B.width)),d=$p.float_int(B.width/2));a.beginPath();a.arc(0,0,d,-t,-u,!0);if(null===(z=f)||!1===z||0===z||""===z?0:"object"==typeof z?"function"==typeof z.__nonzero__?z.__nonzero__():"function"==typeof z.__len__?0<z.__len__():1:1){a.setLineWidth(f);if(null===(C=!((I=a._stroke_style)===(e=c)&&null===I||(null===I?
0:null===e?0:"object"!=typeof I&&"function"!=typeof I||"function"!=typeof I.__cmp__?"object"!=typeof e&&"function"!=typeof e||"function"!=typeof e.__cmp__?I==e:0===e.__cmp__(I):0===I.__cmp__(e))))||!1===C||0===C||""===C?0:"object"==typeof C?"function"==typeof C.__nonzero__?C.__nonzero__():"function"==typeof C.__len__?0<C.__len__():1:1)a._stroke_style=c,(null===(G=$p.hasattr(c,"a"))||!1===G||0===G||""===G?0:"object"==typeof G?"function"==typeof G.__nonzero__?G.__nonzero__():"function"==typeof G.__len__?
0<G.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke()}else{a.closePath();if(null===(H=!((l=a._fill_style)===(b=c)&&null===l||(null===l?0:null===b?0:"object"!=typeof l&&"function"!=typeof l||"function"!=typeof l.__cmp__?"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?l==b:0===b.__cmp__(l):0===l.__cmp__(b))))||!1===H||0===H||""===H?0:"object"==typeof H?"function"==typeof H.__nonzero__?H.__nonzero__():"function"==typeof H.__len__?0<H.__len__():1:1)a._fill_style=
c,(null===(n=$p.hasattr(c,"a"))||!1===n||0===n||""===n?0:"object"==typeof n?"function"==typeof n.__nonzero__?n.__nonzero__():"function"==typeof n.__len__?0<n.__len__():1:1)?a.setFillStyle(c):a.setFillStyle(x.Color(c));a.fill()}a.restoreContext()}return(null===(q=!(null===(m=g._return_rect)||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1))||!1===q||0===q||""===q?0:"object"==typeof q?"function"==typeof q.__nonzero__?
q.__nonzero__():"function"==typeof q.__len__?0<q.__len__():1:1)?null:(null===(h=a._display)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)?a._display._surface_rect.clip(B):a.get_rect().clip(B)},1,[null,null,["self"],["surface"],["color"],["rect"],["start_angle"],["stop_angle"],["width",1]]);A.arc=y;y=$pyjs__bind_method2("polygon",function(a,c,v,t){if(!0===this.__is_instance__)var u=this;else u=arguments[0],
a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4];"undefined"==typeof t&&(t=arguments.callee.__args__[6][1]);var f,g,l,e,b,d,k,h,q,m,n,s,r,p,w,z,y;a.beginPath();$pyjs_kwargs_call(a,"moveTo","undefined"!=typeof(e=v).__array?"undefined"!=typeof e.__array[0]?e.__array[0]:e.__getitem__(0):e.__getitem__(0),null,[{}]);e=$p.__getslice(v,1,null);"undefined"!=typeof(k=e.__array)?z=0:(e=e.__iter__(),z="undefined"!=typeof(k=e.__array)?0:"function"==typeof e.$genfunc?1:-1);for(y=0;"undefined"!=typeof(l=
z?0<z?e.next(!0,!1):$p.wrapped_next(e):k[y++]);)$pyjs_kwargs_call(a,"lineTo",l,null,[{}]);a.closePath();if(null===(q=t)||!1===q||0===q||""===q?0:"object"==typeof q?"function"==typeof q.__nonzero__?q.__nonzero__():"function"==typeof q.__len__?0<q.__len__():1:1){a.setLineWidth(t);if(null===(h=!((s=a._stroke_style)===(p=c)&&null===s||(null===s?0:null===p?0:"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.__cmp__?"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.__cmp__?s==
p:0===p.__cmp__(s):0===s.__cmp__(p))))||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)a._stroke_style=c,(null===(d=$p.hasattr(c,"a"))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke()}else{if(null===(b=!((r=a._fill_style)===(w=c)&&null===r||(null===r?0:null===
w?0:"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.__cmp__?"object"!=typeof w&&"function"!=typeof w||"function"!=typeof w.__cmp__?r==w:0===w.__cmp__(r):0===r.__cmp__(w))))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)a._fill_style=c,(null===(n=$p.hasattr(c,"a"))||!1===n||0===n||""===n?0:"object"==typeof n?"function"==typeof n.__nonzero__?n.__nonzero__():"function"==typeof n.__len__?0<n.__len__():
1:1)?a.setFillStyle(c):a.setFillStyle(x.Color(c));a.fill()}if(null===(f=!(null===(m=u._return_rect)||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1))||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)return null;u=function(){var a,c,b,e,f,d,g;f=$p.list();e=v;"undefined"!=typeof(g=e.__array)?b=0:(e=e.__iter__(),b="undefined"!=
typeof(g=e.__array)?0:"function"==typeof e.$genfunc?1:-1);for(d=0;"undefined"!=typeof(c=b?0<b?e.next(!0,!1):$p.wrapped_next(e):g[d++]);)f.append("undefined"!=typeof(a=c).__array?"undefined"!=typeof a.__array[0]?a.__array[0]:a.__getitem__(0):a.__getitem__(0));return f}();b=function(){var a,c,b,e,f,d,g;e=$p.list();d=v;"undefined"!=typeof(b=d.__array)?g=0:(d=d.__iter__(),g="undefined"!=typeof(b=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(a=0;"undefined"!=typeof(c=g?0<g?d.next(!0,!1):$p.wrapped_next(d):
b[a++]);)e.append("undefined"!=typeof(f=c).__array?"undefined"!=typeof f.__array[1]?f.__array[1]:f.__getitem__(1):f.__getitem__(1));return e}();f=$p.__ass_unpack($p.tuple([$p.min(u),$p.max(u)]),2,null);u=f[0];f=f[1];d=$p.__ass_unpack($p.tuple([$p.min(b),$p.max(b)]),2,null);b=d[0];d=d[1];return(null===(g=a._display)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)?a._display._surface_rect.clip(x.Rect(u,b,f-
u+1,d-b+1)):a.get_rect().clip(x.Rect(u,b,f-u+1,d-b+1))},1,[null,null,["self"],["surface"],["color"],["pointlist"],["width",0]]);A.polygon=y;y=$pyjs__bind_method2("line",function(a,c,v,t,u){if(!0===this.__is_instance__)var f=this;else f=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4],u=arguments[5];"undefined"==typeof u&&(u=arguments.callee.__args__[7][1]);var g,l,e,b,d,k,h;a.beginPath();$pyjs_kwargs_call(a,"moveTo",v,null,[{}]);$pyjs_kwargs_call(a,"lineTo",t,null,[{}]);a.setLineWidth(u);
if(null===(b=!((k=a._stroke_style)===(h=c)&&null===k||(null===k?0:null===h?0:"object"!=typeof k&&"function"!=typeof k||"function"!=typeof k.__cmp__?"object"!=typeof h&&"function"!=typeof h||"function"!=typeof h.__cmp__?k==h:0===h.__cmp__(k):0===k.__cmp__(h))))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)a._stroke_style=c,(null===(d=$p.hasattr(c,"a"))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==
typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke();if(null===(l=!(null===(g=f._return_rect)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1))||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1)return null;f=function(){var a,c,
b,e,d,f,g;c=$p.list();g=$p.tuple([v,t]);"undefined"!=typeof(f=g.__array)?d=0:(g=g.__iter__(),d="undefined"!=typeof(f=g.__array)?0:"function"==typeof g.$genfunc?1:-1);for(e=0;"undefined"!=typeof(a=d?0<d?g.next(!0,!1):$p.wrapped_next(g):f[e++]);)c.append("undefined"!=typeof(b=a).__array?"undefined"!=typeof b.__array[0]?b.__array[0]:b.__getitem__(0):b.__getitem__(0));return c}();l=function(){var a,b,c,e,d,g,f;e=$p.list();d=$p.tuple([v,t]);"undefined"!=typeof(g=d.__array)?f=0:(d=d.__iter__(),f="undefined"!=
typeof(g=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(c=0;"undefined"!=typeof(a=f?0<f?d.next(!0,!1):$p.wrapped_next(d):g[c++]);)e.append("undefined"!=typeof(b=a).__array?"undefined"!=typeof b.__array[1]?b.__array[1]:b.__getitem__(1):b.__getitem__(1));return e}();g=$p.__ass_unpack($p.tuple([$p.min(f),$p.max(f)]),2,null);f=g[0];g=g[1];b=$p.__ass_unpack($p.tuple([$p.min(l),$p.max(l)]),2,null);l=b[0];b=b[1];return(null===(e=a._display)||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?
e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1)?a._display._surface_rect.clip(x.Rect(f,l,g-f+1,b-l+1)):a.get_rect().clip(x.Rect(f,l,g-f+1,b-l+1))},1,[null,null,["self"],["surface"],["color"],["point1"],["point2"],["width",1]]);A.line=y;y=$pyjs__bind_method2("lines",function(a,c,v,t,u){if(!0===this.__is_instance__)var f=this;else f=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4],u=arguments[5];"undefined"==typeof u&&(u=arguments.callee.__args__[7][1]);var g,
l,e,b,d,k,h,q,m,n,s,r,p;a.beginPath();$pyjs_kwargs_call(a,"moveTo","undefined"!=typeof(h=t).__array?"undefined"!=typeof h.__array[0]?h.__array[0]:h.__getitem__(0):h.__getitem__(0),null,[{}]);h=$p.__getslice(t,1,null);"undefined"!=typeof(r=h.__array)?q=0:(h=h.__iter__(),q="undefined"!=typeof(r=h.__array)?0:"function"==typeof h.$genfunc?1:-1);for(s=0;"undefined"!=typeof(l=q?0<q?h.next(!0,!1):$p.wrapped_next(h):r[s++]);)$pyjs_kwargs_call(a,"lineTo",l,null,[{}]);(null===(g=v)||!1===g||0===g||""===g?0:
"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)&&a.closePath();a.setLineWidth(u);if(null===(e=!((p=a._stroke_style)===(d=c)&&null===p||(null===p?0:null===d?0:"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.__cmp__?"object"!=typeof d&&"function"!=typeof d||"function"!=typeof d.__cmp__?p==d:0===d.__cmp__(p):0===p.__cmp__(d))))||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():
"function"==typeof e.__len__?0<e.__len__():1:1)a._stroke_style=c,(null===(b=$p.hasattr(c,"a"))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)?a.setStrokeStyle(c):a.setStrokeStyle(x.Color(c));a.stroke();if(null===(m=!(null===(n=f._return_rect)||!1===n||0===n||""===n?0:"object"==typeof n?"function"==typeof n.__nonzero__?n.__nonzero__():"function"==typeof n.__len__?0<n.__len__():1:1))||!1===m||0===m||""===m?
0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)return null;f=function(){var a,b,c,d,e,f,g;c=$p.list();b=t;"undefined"!=typeof(d=b.__array)?g=0:(b=b.__iter__(),g="undefined"!=typeof(d=b.__array)?0:"function"==typeof b.$genfunc?1:-1);for(f=0;"undefined"!=typeof(a=g?0<g?b.next(!0,!1):$p.wrapped_next(b):d[f++]);)c.append("undefined"!=typeof(e=a).__array?"undefined"!=typeof e.__array[0]?e.__array[0]:e.__getitem__(0):e.__getitem__(0));
return c}();e=function(){var a,b,c,d,e,g,f;c=$p.list();f=t;"undefined"!=typeof(e=f.__array)?d=0:(f=f.__iter__(),d="undefined"!=typeof(e=f.__array)?0:"function"==typeof f.$genfunc?1:-1);for(a=0;"undefined"!=typeof(b=d?0<d?f.next(!0,!1):$p.wrapped_next(f):e[a++]);)c.append("undefined"!=typeof(g=b).__array?"undefined"!=typeof g.__array[1]?g.__array[1]:g.__getitem__(1):g.__getitem__(1));return c}();g=$p.__ass_unpack($p.tuple([$p.min(f),$p.max(f)]),2,null);f=g[0];g=g[1];b=$p.__ass_unpack($p.tuple([$p.min(e),
$p.max(e)]),2,null);e=b[0];b=b[1];return(null===(k=a._display)||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1)?a._display._surface_rect.clip(x.Rect(f,e,g-f+1,b-e+1)):a.get_rect().clip(x.Rect(f,e,g-f+1,b-e+1))},1,[null,null,["self"],["surface"],["color"],["closed"],["pointlist"],["width",1]]);A.lines=y;y=$pyjs__bind_method2("aaline",function(a,c,v,t,u){if(!0===this.__is_instance__)var f=this;else f=arguments[0],
a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4],u=arguments[5];"undefined"==typeof u&&(u=arguments.callee.__args__[7][1]);return f.line(a,c,v,t,u)},1,[null,null,["self"],["surface"],["color"],["point1"],["point2"],["blend",1]]);A.aaline=y;y=$pyjs__bind_method2("aalines",function(a,c,v,t,u){if(!0===this.__is_instance__)var f=this;else f=arguments[0],a=arguments[1],c=arguments[2],v=arguments[3],t=arguments[4],u=arguments[5];"undefined"==typeof u&&(u=arguments.callee.__args__[7][1]);return f.lines(a,
c,v,t,u)},1,[null,null,["self"],["surface"],["color"],["closed"],["pointlist"],["blend",1]]);A.aalines=y;y=$pyjs__bind_method2("set_return",function(a,c){if(!0===this.__is_instance__)var v=this;else v=a,a=c;v._return_rect=a;return null},1,[null,null,["self"],["setting"]]);A.set_return=y;y=Array($p.object);var F=$p.dict(),O;for(O in A)F.__setitem__(O,A[O]);return $p._create_class("Draw",$p.tuple(y),F)}();return this};
