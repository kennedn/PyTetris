$pyjs.loaded_modules["pyjamas.ui.FocusListener"]=function(l){if($pyjs.loaded_modules["pyjamas.ui.FocusListener"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.FocusListener"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var g=$pyjs.loaded_modules["pyjamas.ui.FocusListener"];g.__repr__=function(){return"<module: pyjamas.ui.FocusListener>"};g.__was_initialized__=!0;if(null===l||"undefined"==
typeof l)l="pyjamas.ui.FocusListener";g.__name__=l;$pyjs.loaded_modules["pyjamas.ui"].FocusListener=$pyjs.loaded_modules["pyjamas.ui.FocusListener"];g.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);g.Event=$p.___import___("pyjamas.ui.Event","pyjamas.ui",null,!1);g.fireFocusEvent=function(d,e,b){var c,a,k;b=g.DOM.eventGetType(b);if(null===(a="focus"===b&&null===b?!0:null===b?!1:"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?"focus"==b:0===b.__cmp__("focus"))||!1===
a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)for(a=d,"undefined"!=typeof(b=a.__array)?k=0:(a=a.__iter__(),k="undefined"!=typeof(b=a.__array)?0:"function"==typeof a.$genfunc?1:-1),c=0;"undefined"!=typeof(d=k?0<k?a.next(!0,!1):$p.wrapped_next(a):b[c++]);)d.onFocus(e);else if(null===(c="blur"===b&&null===b?!0:null===b?!1:"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?"blur"==b:0===b.__cmp__("blur"))||
!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)for(c=d,"undefined"!=typeof(k=c.__array)?b=0:(c=c.__iter__(),b="undefined"!=typeof(k=c.__array)?0:"function"==typeof c.$genfunc?1:-1),a=0;"undefined"!=typeof(d=b?0<b?c.next(!0,!1):$p.wrapped_next(c):k[a++]);)d.onLostFocus(e);return null};g.fireFocusEvent.__name__="fireFocusEvent";g.fireFocusEvent.__bind_type__=0;g.fireFocusEvent.__args__=[null,null,["listeners"],
["sender"],["event"]];g.FOCUS_EVENTS=$p.list(["focus","blur"]);g.FocusHandler=function(){var d={},e;d.__module__="pyjamas.ui.FocusListener";e=$pyjs__bind_method2("__init__",function(a){a=!0===this.__is_instance__?this:a;a._focusListeners=$p.list([]);a.sinkEvents(g.Event.FOCUSEVENTS);return null},1,[null,null,["self"]]);d.__init__=e;e=$pyjs__bind_method2("onFocus",function(a,b){return null},1,[null,null,["self"],["sender"]]);d.onFocus=e;e=$pyjs__bind_method2("onLostFocus",function(a,b){return null},
1,[null,null,["self"],["sender"]]);d.onLostFocus=e;e=$pyjs__bind_method2("onBrowserEvent",function(a,b){if(!0===this.__is_instance__)var c=this;else c=a,a=b;var e,d,h,f;f=g.DOM.eventGetType(a);(null===(h=(null===(d=e="blur"===f&&null===f?!0:null===f?!1:"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.__cmp__?"blur"==f:0===f.__cmp__("blur"))||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?e:"focus"===
f&&null===f?!0:null===f?!1:"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.__cmp__?"focus"==f:0===f.__cmp__("focus"))||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)&&g.fireFocusEvent(c._focusListeners,c,a);return null},1,[null,null,["self"],["event"]]);d.onBrowserEvent=e;e=$pyjs__bind_method2("addFocusListener",function(a,b){if(!0===this.__is_instance__)var c=this;else c=a,a=b;c._focusListeners.append(a);
return null},1,[null,null,["self"],["listener"]]);d.addFocusListener=e;e=$pyjs__bind_method2("removeFocusListener",function(a,b){if(!0===this.__is_instance__)var c=this;else c=a,a=b;c._focusListeners.remove(a);return null},1,[null,null,["self"],["listener"]]);d.removeFocusListener=e;e=Array(pyjslib.object);var b=$p.dict(),c;for(c in d)b.__setitem__(c,d[c]);return $p._create_class("FocusHandler",$p.tuple(e),b)}();return this};