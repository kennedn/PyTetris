$pyjs.loaded_modules["pyjamas.Location"]=function(m){if($pyjs.loaded_modules["pyjamas.Location"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Location"];"undefined"!=typeof $pyjs.loaded_modules.pyjamas&&$pyjs.loaded_modules.pyjamas.__was_initialized__||$p.___import___("pyjamas",null);var e=$pyjs.loaded_modules["pyjamas.Location"];e.__repr__=function(){return"<module: pyjamas.Location>"};e.__was_initialized__=!0;if(null===m||"undefined"==typeof m)m="pyjamas.Location";e.__name__=m;$pyjs.loaded_modules.pyjamas.Location=
$pyjs.loaded_modules["pyjamas.Location"];e.makeUrlDict=function(b){var a,e,f,c,g,d,n,k,l,h;d=$p.dict([]);c=b.$$split("&");"undefined"!=typeof(n=c.__array)?b=0:(c=c.__iter__(),b="undefined"!=typeof(n=c.__array)?0:"function"==typeof c.$genfunc?1:-1);for(h=0;"undefined"!=typeof(e=b?0<b?c.next(!0,!1):$p.wrapped_next(c):n[h++]);)(null===(g=-1==(3===(l=null===(k=e)?0:"undefined"!=typeof k.__array?k.__array.length:"function"==typeof k.__len__?k.__len__():"undefined"!=typeof k.length?k.length:$p.len(k))?
0:"number"!=typeof l||"number"!=typeof l&&"string"!=typeof l&&"boolean"!=typeof l?$p.cmp(l,3):3==l?0:3>l?-1:1))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)||(e=e.$$split("=",1),d.__setitem__("undefined"!=typeof(f=e).__array?"undefined"!=typeof f.__array[0]?f.__array[0]:f.__getitem__(0):f.__getitem__(0),"undefined"!=typeof(a=e).__array?"undefined"!=typeof a.__array[1]?a.__array[1]:a.__getitem__(1):a.__getitem__(1)));
return d};e.makeUrlDict.__name__="makeUrlDict";e.makeUrlDict.__bind_type__=0;e.makeUrlDict.__args__=[null,null,["urlstring"]];e.makeUrlStringFromDict=function(b){var a,e,f,c,g,d;a=$p.list([]);f=b.iteritems();"undefined"!=typeof(d=f.__array)?b=0:(f=f.__iter__(),b="undefined"!=typeof(d=f.__array)?0:"function"==typeof f.$genfunc?1:-1);for(c=0;"undefined"!=typeof(e=b?0<b?f.next(!0,!1):$p.wrapped_next(f):d[c++]);)g=$p.__ass_unpack(e,2,null),e=g[0],g=g[1],a.append(e+"="+g);return"&".join(a)};e.makeUrlStringFromDict.__name__=
"makeUrlStringFromDict";e.makeUrlStringFromDict.__bind_type__=0;e.makeUrlStringFromDict.__args__=[null,null,["d"]];e.Location=function(){var b={},a;b.__module__="pyjamas.Location";a=$pyjs__bind_method2("__init__",function(c,g){if(!0===this.__is_instance__)var d=this;else d=c,c=g;d.location=c;return d.searchDict=null},1,[null,null,["self"],["location"]]);b.__init__=a;a=$pyjs__bind_method2("getHash",function(c){return(!0===this.__is_instance__?this:c).location.hash},1,[null,null,["self"]]);b.getHash=
a;a=$pyjs__bind_method2("getHashDict",function(c){c=!0===this.__is_instance__?this:c;var g,d,a,b,f,h;if(null===(h=(null===(f=g=!(null===(b=c.hashDict)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1))||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?g:!((a=c.hashDictHash)===(d=c.getHash())&&null===a||(null===a?0:null===
d?0:"object"!=typeof a&&"function"!=typeof a||"function"!=typeof a.__cmp__?"object"!=typeof d&&"function"!=typeof d||"function"!=typeof d.__cmp__?a==d:0===d.__cmp__(a):0===a.__cmp__(d))))||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)c.hashDictHash=c.getHash(),c.hashDict=e.makeUrlDict($p.__getslice(c.getHash(),1,null));return c.hashDict},1,[null,null,["self"]]);b.getHashDict=a;a=$pyjs__bind_method2("getHost",
function(c){return(!0===this.__is_instance__?this:c).location.host},1,[null,null,["self"]]);b.getHost=a;a=$pyjs__bind_method2("getHostname",function(c){return(!0===this.__is_instance__?this:c).location.hostname},1,[null,null,["self"]]);b.getHostname=a;a=$pyjs__bind_method2("getHref",function(c){return(!0===this.__is_instance__?this:c).location.href},1,[null,null,["self"]]);b.getHref=a;a=$pyjs__bind_method2("getPageHref",function(c){var a,d,b,e;c=(!0===this.__is_instance__?this:c).location.href;if(null===
(d=c.find("?"))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)c="undefined"!=typeof(e=c.$$split("?")).__array?"undefined"!=typeof e.__array[0]?e.__array[0]:e.__getitem__(0):e.__getitem__(0);if(null===(a=c.find("#"))||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)c="undefined"!=typeof(b=c.$$split("#")).__array?"undefined"!=
typeof b.__array[0]?b.__array[0]:b.__getitem__(0):b.__getitem__(0);return c},1,[null,null,["self"]]);b.getPageHref=a;a=$pyjs__bind_method2("getPathname",function(c){return(!0===this.__is_instance__?this:c).location.pathname},1,[null,null,["self"]]);b.getPathname=a;a=$pyjs__bind_method2("getPort",function(c){return(!0===this.__is_instance__?this:c).location.port},1,[null,null,["self"]]);b.getPort=a;a=$pyjs__bind_method2("getProtocol",function(c){return(!0===this.__is_instance__?this:c).location.protocol},
1,[null,null,["self"]]);b.getProtocol=a;a=$pyjs__bind_method2("getSearch",function(c){var a,d;return(null===(d=a=(!0===this.__is_instance__?this:c).location.search)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?a:""},1,[null,null,["self"]]);b.getSearch=a;a=$pyjs__bind_method2("getSearchDict",function(c){c=!0===this.__is_instance__?this:c;var a;if(null===(a=null===c.searchDict)||!1===a||0===a||""===a?0:"object"==
typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)a=$p.__getslice(c.getSearch(),1,null),c.searchDict=e.makeUrlDict(a);return c.searchDict},1,[null,null,["self"]]);b.getSearchDict=a;a=$pyjs__bind_method2("getSearchVar",function(a,b){if(!0===this.__is_instance__)var d=this;else d=arguments[0],a=arguments[1],b=arguments[2];"undefined"==typeof b&&(b=arguments.callee.__args__[4][1]);return d.getSearchDict().get(a,b)},1,[null,null,["self"],["key"],
["$$default",null]]);b.getSearchVar=a;a=$pyjs__bind_method2("reload",function(a){(!0===this.__is_instance__?this:a).location.reload();return null},1,[null,null,["self"]]);b.reload=a;a=$pyjs__bind_method2("setHref",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.location.href=a;return null},1,[null,null,["self"],["href"]]);b.setHref=a;a=$pyjs__bind_method2("setSearch",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.location.search=a;return null},1,[null,null,
["self"],["search"]]);b.setSearch=a;a=$pyjs__bind_method2("setSearchDict",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.setSearch(e.makeUrlStringFromDict(a));return null},1,[null,null,["self"],["searchDict"]]);b.setSearchDict=a;a=$pyjs__bind_method2("setHash",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.location.hash=a;return null},1,[null,null,["self"],["hash"]]);b.setHash=a;a=$pyjs__bind_method2("setHashDict",function(a,b){if(!0===this.__is_instance__)var d=
this;else d=a,a=b;d.setHash(e.makeUrlStringFromDict(a));return null},1,[null,null,["self"],["hashDict"]]);b.setHashDict=a;a=Array(pyjslib.object);var m=$p.dict(),f;for(f in b)m.__setitem__(f,b[f]);return $p._create_class("Location",$p.tuple(a),m)}();return this};