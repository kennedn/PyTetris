$pyjs.loaded_modules["pyjamas.Factory"]=function(t){if($pyjs.loaded_modules["pyjamas.Factory"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Factory"];"undefined"!=typeof $pyjs.loaded_modules.pyjamas&&$pyjs.loaded_modules.pyjamas.__was_initialized__||$p.___import___("pyjamas",null);var a=$pyjs.loaded_modules["pyjamas.Factory"];a.__repr__=function(){return"<module: pyjamas.Factory>"};a.__was_initialized__=!0;if(null===t||"undefined"==typeof t)t="pyjamas.Factory";a.__name__=t;$pyjs.loaded_modules.pyjamas.Factory=
$pyjs.loaded_modules["pyjamas.Factory"];a.DOM=$p.___import___("pyjamas.DOM","pyjamas",null,!1);a.factory=$p.dict([]);a.registerClass=function(e,b,f){var c;if(null===(c=null===e)||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)e=".".join($p.list(["pyjamas.ui",b]));e=".".join($p.list([e,b]));a.factory.__setitem__(e,f);return null};a.registerClass.__name__="registerClass";a.registerClass.__bind_type__=0;a.registerClass.__args__=
[null,null,["modname"],["klsname"],["kls"]];a.lookupClass=function(e){var b;return"undefined"!=typeof(b=a.factory).__array?"undefined"!=typeof b.__array[e]?b.__array[e]:b.__getitem__(e):b.__getitem__(e)};a.lookupClass.__name__="lookupClass";a.lookupClass.__bind_type__=0;a.lookupClass.__args__=[null,null,["name"]];a.createWidgetOnElement=function(e){var b,f,c,n,t,d,C,B,D,y,p,z,q,u,r,s,g,h,E,k,l,m,v,w,x,A,F;u=a.DOM.getAttribute(e,"id");f=u.find("(");D=$p.__getslice(u,0,f);b=$p.__getslice(u,f+1,-1);
u=$p.list([]);f=$p.dict([]);b=b.$$split(",");"undefined"!=typeof(B=b.__array)?A=0:(b=b.__iter__(),A="undefined"!=typeof(B=b.__array)?0:"function"==typeof b.$genfunc?1:-1);for(F=0;"undefined"!=typeof(z=A?0<A?b.next(!0,!1):$p.wrapped_next(b):B[F++]);)d=z,y=d.find("="),(null===(g=-1===(p=y)&&null===p?!0:null===p?!1:"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.__cmp__?-1==p:0===p.__cmp__(-1))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():
"function"==typeof g.__len__?0<g.__len__():1:1)?u.append(d):(z=$p.__getslice(d,0,y),d=$p.__getslice(d,y+1,null),d=(null===(k=(null===(l=C=(null===(h=t="'"===(q="undefined"!=typeof(x=d).__array?"undefined"!=typeof x.__array[0]?x.__array[0]:x.__getitem__(0):x.__getitem__(0))&&null===q?!0:null===q?!1:"object"!=typeof q&&"function"!=typeof q||"function"!=typeof q.__cmp__?"'"==q:0===q.__cmp__("'"))||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==
typeof h.__len__?0<h.__len__():1:1)?"'"===(s="undefined"!=typeof(w=d).__array?"undefined"!=typeof w.__array[-1]?w.__array[-1]:w.__getitem__(-1):w.__getitem__(-1))&&null===s?!0:null===s?!1:"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.__cmp__?"'"==s:0===s.__cmp__("'"):t)||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1)?C:(null===(m=E='"'===(r="undefined"!=typeof(v=d).__array?"undefined"!=typeof v.__array[0]?
v.__array[0]:v.__getitem__(0):v.__getitem__(0))&&null===r?!0:null===r?!1:"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.__cmp__?'"'==r:0===r.__cmp__('"'))||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)?'"'===(n="undefined"!=typeof(c=d).__array?"undefined"!=typeof c.__array[-1]?c.__array[-1]:c.__getitem__(-1):c.__getitem__(-1))&&null===n?!0:null===n?!1:"object"!=typeof n&&"function"!=typeof n||
"function"!=typeof n.__cmp__?'"'==n:0===n.__cmp__('"'):E)||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1)?$p.__getslice(d,1,-1):$p.float_int(d),f.__setitem__(z,d));f.__setitem__("Element",e);return $pyjs_kwargs_call(null,a.lookupClass(D),u,f,[{}])};a.createWidgetOnElement.__name__="createWidgetOnElement";a.createWidgetOnElement.__bind_type__=0;a.createWidgetOnElement.__args__=[null,null,["element"]];a.addPyjamasNameSpace=
function(){a.doc().createElementNS("urn:schemas-pyjs-org:pyjs");return null};a.addPyjamasNameSpace.__name__="addPyjamasNameSpace";a.addPyjamasNameSpace.__bind_type__=0;a.addPyjamasNameSpace.__args__=[null,null];return this};