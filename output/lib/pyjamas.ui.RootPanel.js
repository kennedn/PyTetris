$pyjs.loaded_modules["pyjamas.ui.RootPanel"]=function(k){if($pyjs.loaded_modules["pyjamas.ui.RootPanel"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.RootPanel"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var e=$pyjs.loaded_modules["pyjamas.ui.RootPanel"];e.__repr__=function(){return"<module: pyjamas.ui.RootPanel>"};e.__was_initialized__=!0;if(null===k||"undefined"==typeof k)k="pyjamas.ui.RootPanel";
e.__name__=k;$pyjs.loaded_modules["pyjamas.ui"].RootPanel=$pyjs.loaded_modules["pyjamas.ui.RootPanel"];e.sys=$p.___import___("sys","pyjamas.ui");e.Factory=$p.___import___("pyjamas.Factory","pyjamas.ui",null,!1);e.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);e.Window=$p.___import___("pyjamas.Window","pyjamas.ui",null,!1);e.AbsolutePanel=$p.___import___("pyjamas.ui.AbsolutePanel.AbsolutePanel","pyjamas.ui",null,!1);e.rootPanels=$p.dict([]);e.RootPanelManager=function(){var c={},b;c.__module__=
"pyjamas.ui.RootPanel";b=$pyjs__bind_method2("onWindowClosed",function(f){var b,c,a,d;a=e.rootPanels.itervalues();"undefined"!=typeof(d=a.__array)?f=0:(a=a.__iter__(),f="undefined"!=typeof(d=a.__array)?0:"function"==typeof a.$genfunc?1:-1);for(c=0;"undefined"!=typeof(b=f?0<f?a.next(!0,!1):$p.wrapped_next(a):d[c++]);)b.onDetach();return null},1,[null,null,["self"]]);c.onWindowClosed=b;b=$pyjs__bind_method2("onWindowClosing",function(e){return null},1,[null,null,["self"]]);c.onWindowClosing=b;b=Array($p.object);
var d=$p.dict(),a;for(a in c)d.__setitem__(a,c[a]);return $p._create_class("RootPanelManager",$p.tuple(b),d)}();e.get=function(c){"undefined"==typeof c&&(c=arguments.callee.__args__[2][1]);var b,d,a,f,h;if(null===(b=e.rootPanels.has_key(c))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)return"undefined"!=typeof(h=e.rootPanels).__array?"undefined"!=typeof h.__array[f=c]?h.__array[f]:h.__getitem__(f):h.__getitem__(c);
b=null;if(null===(d=null!==c)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)if(b=e.DOM.getElementById(c),null===(a=null===b)||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)return null;return("undefined"==typeof manageRootPanel?e.manageRootPanel:manageRootPanel)(("undefined"==typeof RootPanelCls?e.RootPanelCls:RootPanelCls)(b),
c)};e.get.__name__="get";e.get.__bind_type__=0;e.get.__args__=[null,null,["id",null]];e.manageRootPanel=function(c,b){"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);var d,a,f;if(null===(a=-1==(1===(d=null===(f=e.rootPanels)?0:"undefined"!=typeof f.__array?f.__array.length:"function"==typeof f.__len__?f.__len__():"undefined"!=typeof f.length?f.length:$p.len(f))?0:"number"!=typeof d||"number"!=typeof d&&"string"!=typeof d&&"boolean"!=typeof d?$p.cmp(d,1):1==d?0:1>d?-1:1))||!1===a||0===a||
""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)d=e.RootPanelManager(),e.Window.addWindowCloseListener(d);e.rootPanels.__setitem__(b,c);return c};e.manageRootPanel.__name__="manageRootPanel";e.manageRootPanel.__bind_type__=0;e.manageRootPanel.__args__=[null,null,["panel"],["id",null]];e.RootPanelCls=function(){var c={},b;c.__module__="pyjamas.ui.RootPanel";b=$pyjs__bind_method2("__init__",function(a){if(!0===this.__is_instance__)var b=
this,c=2<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];else b=arguments[0],a=arguments[1],c=3<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===c||"object"!=typeof c||"dict"!=c.__name__||"undefined"==typeof c.$pyjs_is_kwarg?c=arguments[arguments.length+1]:delete c.$pyjs_is_kwarg;"undefined"==typeof c&&(c=$p.__empty_dict(),"undefined"!=typeof a?null!==a&&"undefined"!=typeof a.$pyjs_is_kwarg&&(c=a,a=arguments[2]):"undefined"!=typeof b&&
null!==b&&"undefined"!=typeof b.$pyjs_is_kwarg&&(c=b,b=arguments[2]));"undefined"==typeof a&&(a=arguments.callee.__args__[3][1]);var d,g;(null===(g=null!==a)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)&&c.__setitem__("Element",a);$pyjs_kwargs_call(e.AbsolutePanel,"__init__",null,c,[{},b]);if(null===(d=null===a)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():
"function"==typeof d.__len__?0<d.__len__():1:1)a=b.getBodyElement(),b.setElement(a);b.onAttach();return null},1,[null,["kwargs"],["self"],["Element",null]]);c.__init__=b;b=$pyjs__bind_method2("getBodyElement",function(a){return $doc.body},1,[null,null,["self"]]);c.getBodyElement=b;b=Array(e.AbsolutePanel);var d=$p.dict(),a;for(a in c)d.__setitem__(a,c[a]);return $p._create_class("RootPanelCls",$p.tuple(b),d)}();e.Factory.registerClass("pyjamas.ui.RootPanel","RootPanelCls",e.RootPanelCls);e.RootPanel=
function(c){"undefined"==typeof c&&(c=arguments.callee.__args__[2][1]);return e.get(c)};e.RootPanel.__name__="RootPanel";e.RootPanel.__bind_type__=0;e.RootPanel.__args__=[null,null,["id",null]];return this};