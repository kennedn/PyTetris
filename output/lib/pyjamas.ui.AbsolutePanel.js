$pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"]=function(k){if($pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var f=$pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];f.__repr__=function(){return"<module: pyjamas.ui.AbsolutePanel>"};f.__was_initialized__=!0;if(null===k||"undefined"==
typeof k)k="pyjamas.ui.AbsolutePanel";f.__name__=k;$pyjs.loaded_modules["pyjamas.ui"].AbsolutePanel=$pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];f.Factory=$p.___import___("pyjamas.Factory","pyjamas.ui",null,!1);f.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);f.ComplexPanel=$p.___import___("pyjamas.ui.ComplexPanel.ComplexPanel","pyjamas.ui",null,!1);f.AbsolutePanel=function(){var d={},b;d.__module__="pyjamas.ui.AbsolutePanel";b=$pyjs__bind_method2("__init__",function(){if(!0===this.__is_instance__)var a=
this,e=1<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];else a=arguments[0],e=2<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===e||"object"!=typeof e||"dict"!=e.__name__||"undefined"==typeof e.$pyjs_is_kwarg?e=arguments[arguments.length+1]:delete e.$pyjs_is_kwarg;"undefined"==typeof e&&(e=$p.__empty_dict(),"undefined"!=typeof a&&null!==a&&"undefined"!=typeof a.$pyjs_is_kwarg&&(e=a,a=arguments[1]));var h,g,c;g=(null===(c=h=e.pop("Element",
null))||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)?h:f.DOM.createDiv();a.setElement(g);f.DOM.setStyleAttribute(g,"position","relative");f.DOM.setStyleAttribute(g,"overflow","hidden");$pyjs_kwargs_call(f.ComplexPanel,"__init__",null,e,[{},a]);return null},1,[null,["ka"],["self"]]);d.__init__=b;b=$pyjs__bind_method2("add",function(a,e,h){if(!0===this.__is_instance__)var g=this;else g=arguments[0],a=arguments[1],
e=arguments[2],h=arguments[3];"undefined"==typeof e&&(e=arguments.callee.__args__[4][1]);"undefined"==typeof h&&(h=arguments.callee.__args__[5][1]);var c;f.ComplexPanel.add(g,a,g.getElement());(null===(c=null!==e)||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)&&g.setWidgetPosition(a,e,h);return null},1,[null,null,["self"],["widget"],["left",null],["top",null]]);d.add=b;b=$pyjs__bind_method2("setWidgetPosition",
function(a,e,h,g){if(!0===this.__is_instance__)var c=this;else c=a,a=e,e=h,h=g;var m,b,d,l,k;c.checkWidgetParent(a);a=a.getElement();(null===(l=(null===(d=k=-1===(b=e)&&null===b?!0:null===b?!1:"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?-1==b:0===b.__cmp__(-1))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?-1===(m=h)&&null===m?!0:null===m?!1:"object"!=typeof m&&"function"!=typeof m||
"function"!=typeof m.__cmp__?-1==m:0===m.__cmp__(-1):k)||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1)?(f.DOM.setStyleAttribute(a,"left",""),f.DOM.setStyleAttribute(a,"top",""),f.DOM.setStyleAttribute(a,"position","static")):(f.DOM.setStyleAttribute(a,"position","absolute"),f.DOM.setStyleAttribute(a,"left",$p.sprintf("%dpx",e)),f.DOM.setStyleAttribute(a,"top",$p.sprintf("%dpx",h)));return null},1,[null,null,
["self"],["widget"],["left"],["top"]]);d.setWidgetPosition=b;b=$pyjs__bind_method2("getWidgetLeft",function(a,e){if(!0===this.__is_instance__)var b=this;else b=a,a=e;b.checkWidgetParent(a);return f.DOM.getIntAttribute(a.getElement(),"offsetLeft")},1,[null,null,["self"],["widget"]]);d.getWidgetLeft=b;b=$pyjs__bind_method2("getWidgetTop",function(a,e){if(!0===this.__is_instance__)var b=this;else b=a,a=e;b.checkWidgetParent(a);return f.DOM.getIntAttribute(a.getElement(),"offsetTop")},1,[null,null,["self"],
["widget"]]);d.getWidgetTop=b;b=$pyjs__bind_method2("checkWidgetParent",function(a,b){if(!0===this.__is_instance__)var f=this;else f=a,a=b;var g,c,d;if(null===(g=!((d=a.getParent())===(c=f)&&null===d||(null===d?0:null===c?0:"object"!=typeof d&&"function"!=typeof d||"function"!=typeof d.__cmp__?"object"!=typeof c&&"function"!=typeof c||"function"!=typeof c.__cmp__?d==c:0===c.__cmp__(d):0===d.__cmp__(c))))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():
"function"==typeof g.__len__?0<g.__len__():1:1)throw $p.Exception("Widget must be a child of this panel.");return null},1,[null,null,["self"],["widget"]]);d.checkWidgetParent=b;b=Array(f.ComplexPanel);var k=$p.dict(),n;for(n in d)k.__setitem__(n,d[n]);return $p._create_class("AbsolutePanel",$p.tuple(b),k)}();f.Factory.registerClass("pyjamas.ui.AbsolutePanel","AbsolutePanel",f.AbsolutePanel);return this};