$pyjs.loaded_modules.sys=function(n){if($pyjs.loaded_modules.sys.__was_initialized__)return $pyjs.loaded_modules.sys;var a=sys=$pyjs.loaded_modules.sys;a.__repr__=function(){return"<module: sys>"};a.__was_initialized__=!0;if(null===n||"undefined"==typeof n)n="sys";a.__name__=n;a.overrides=null;a.loadpath=null;a.stacktrace=null;a.appname=null;a.version_info=$p.tuple([2,7,2,"pyjamas",0]);a.subversion=$p.tuple(["Pyjamas","",""]);a.path=$p.list([]);a.argv=$p.list([]);a.platform=$pyjs.platform;a.byteorder=
"little";a.maxint=2147483647;a.setloadpath=function(e){a.loadpath=e;return null};a.setloadpath.__name__="setloadpath";a.setloadpath.__bind_type__=0;a.setloadpath.__args__=[null,null,["lp"]];a.setappname=function(e){a.appname=e;return null};a.setappname.__name__="setappname";a.setappname.__bind_type__=0;a.setappname.__args__=[null,null,["an"]];a.getloadpath=function(){return a.loadpath};a.getloadpath.__name__="getloadpath";a.getloadpath.__bind_type__=0;a.getloadpath.__args__=[null,null];a.addoverride=
function(e,c){a.overrides.__setitem__(e,c);return null};a.addoverride.__name__="addoverride";a.addoverride.__bind_type__=0;a.addoverride.__args__=[null,null,["module_name"],["path"]];a.exc_info=function(){var a,c,b,d,g,f,l,h,k;a=$pyjs.__last_exception__;if(null===(d=!(null===a||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():
"function"==typeof d.__len__?0<d.__len__():1:1)return $p.tuple([null,null,null]);d=(null===(h=!(null===(b=$p.hasattr(a.error,"__class__"))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1))||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)?null:a.error.__class__;b=$pyjs.__last_exception_stack__;if(null===(c=b)||!1===c||
0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)for(c=b.start;null===(l=(null===(f=g=b)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?1==(0===(k=c)?0:"number"!=typeof k||"number"!=typeof k&&"string"!=typeof k&&"boolean"!=typeof k?$p.cmp(k,0):0==k?0:0>k?-1:1):g)||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?
l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1;)b=b.tb_next,c-=1;return $p.tuple([d,a.error,b])};a.exc_info.__name__="exc_info";a.exc_info.__bind_type__=0;a.exc_info.__args__=[null,null];a.exc_clear=function(){$pyjs.__last_exception_stack__=$pyjs.__last_exception__=null};a.exc_clear.__name__="exc_clear";a.exc_clear.__bind_type__=0;a.exc_clear.__args__=[null,null];a._exception_from_trackstack=function(a,c){"undefined"==typeof c&&(c=0);for(var b=null,d=null,g=0;g<$pyjs.trackstack.length;g++){var f=
{},l;for(l in $pyjs.trackstack[g])f[l]=$pyjs.trackstack[g][l];if("undefined"!=typeof $pyjs.loaded_modules[f.module].__track_lines__){var h=$p.dict(),k;for(k in $pyjs.loaded_modules[f.module])h.__setitem__(k,$pyjs.loaded_modules[f.module][k]);f.tb_frame={f_globals:h}}null==b?b=f:d.tb_next=f;d=f}d.tb_next=null;b.start=c;return b};a.save_exception_stack=function(e){if($pyjs.__active_exception_stack__)return $pyjs.__active_exception_stack__.start=e,$pyjs.__active_exception_stack__;$pyjs.__active_exception_stack__=
a._exception_from_trackstack($pyjs.trackstack,e);return $pyjs.__active_exception_stack__};a.trackstacklist=function(e,c){"undefined"==typeof e&&(e=arguments.callee.__args__[2][1]);"undefined"==typeof c&&(c=arguments.callee.__args__[3][1]);var b,d,g,f,l,h,k,m;if(null===(k=null===e)||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1)e=$pyjs.__active_exception_stack__;else if(null===(m=e instanceof Array)||!1===
m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)e=("undefined"==typeof _exception_from_trackstack?a._exception_from_trackstack:_exception_from_trackstack)(e);if(null===(d=null===e)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)return"";d=$p.list([]);if(null===(g=null===c)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==
typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)c=-1;for(;null===(b=(null===(f=l=e)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?c:l)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1;)g=$pyjs.loaded_modules[e.module].__track_lines__[e.lineno],"undefined"==typeof g&&(g=null),(null===
(h=g)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)?d.append(g+"\n"):d.append($p.sprintf("%s.py, line %d\n",$p.tuple([e.module,e.lineno]))),e=e.tb_next,c-=1;return d};a.trackstacklist.__name__="trackstacklist";a.trackstacklist.__bind_type__=0;a.trackstacklist.__args__=[null,null,["stack",null],["limit",null]];a.trackstackstr=function(e,c){"undefined"==typeof e&&(e=arguments.callee.__args__[2][1]);"undefined"==
typeof c&&(c=arguments.callee.__args__[3][1]);var b;b=$pyjs_kwargs_call(null,a.trackstacklist,null,null,[{limit:c},e]);return"".join(b)};a.trackstackstr.__name__="trackstackstr";a.trackstackstr.__bind_type__=0;a.trackstackstr.__args__=[null,null,["stack",null],["limit",null]];a._get_traceback_list=function(e,c,b){"undefined"==typeof c&&(c=arguments.callee.__args__[3][1]);"undefined"==typeof b&&(b=arguments.callee.__args__[4][1]);var d;d=$p.getattr($p.getattr(e,"__class__",null),"__name__","Unknown exception");
d=$p.list([$p.sprintf("%s: %s\n",$p.tuple([d,e])),"Traceback:\n"]);try{d.extend($pyjs_kwargs_call(null,a.trackstacklist,null,null,[{limit:b},c]))}catch(g){$pyjs.__last_exception__={error:g,module:a}}return d};a._get_traceback_list.__name__="_get_traceback_list";a._get_traceback_list.__bind_type__=0;a._get_traceback_list.__args__=[null,null,["err"],["tb",null],["limit",null]];a._get_traceback=function(e,c,b){"undefined"==typeof c&&(c=arguments.callee.__args__[3][1]);"undefined"==typeof b&&(b=arguments.callee.__args__[4][1]);
return"".join($pyjs_kwargs_call(null,a._get_traceback_list,null,null,[{limit:b},e,c]))};a._get_traceback.__name__="_get_traceback";a._get_traceback.__bind_type__=0;a._get_traceback.__args__=[null,null,["err"],["tb",null],["limit",null]];a.exit=function(a){"undefined"==typeof a&&(a=arguments.callee.__args__[2][1]);throw $p.SystemExit(a);};a.exit.__name__="exit";a.exit.__bind_type__=0;a.exit.__args__=[null,null,["val",null]];a._StdStream=function(){var a={},c;a.__module__="sys";c=$pyjs__bind_method2("__init__",
function(a){(!0===this.__is_instance__?this:a).content="";return null},1,[null,null,["self"]]);a.__init__=c;c=$pyjs__bind_method2("flush",function(a){a=!0===this.__is_instance__?this:a;$p._print_to_console(a.content);a.content="";return null},1,[null,null,["self"]]);a.flush=c;c=$pyjs__bind_method2("write",function(a,c){if(!0===this.__is_instance__)var b=this;else b=a,a=c;var d;b.content+=a;(null===(d=b.content.endswith("\n"))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?
d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)&&b.flush();return null},1,[null,null,["self"],["output"]]);a.write=c;c=Array($p.object);var b=$p.dict(),d;for(d in a)b.__setitem__(d,a[d]);return $p._create_class("_StdStream",$p.tuple(c),b)}();a.stdin=null;a.stdout=null;a.stderr=null;a.sys_init=function(){a.stdout=a._StdStream();a.stderr=a._StdStream();return null};a.sys_init.__name__="sys_init";a.sys_init.__bind_type__=0;a.sys_init.__args__=[null,null];a.sys_init();return this};