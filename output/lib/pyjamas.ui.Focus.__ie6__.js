$pyjs.loaded_modules["pyjamas.ui.Focus"]=function(k){if($pyjs.loaded_modules["pyjamas.ui.Focus"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.Focus"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var a=$pyjs.loaded_modules["pyjamas.ui.Focus"];a.__repr__=function(){return"<module: pyjamas.ui.Focus>"};a.__was_initialized__=!0;if(null===k||"undefined"==typeof k)k="pyjamas.ui.Focus";a.__name__=
k;$pyjs.loaded_modules["pyjamas.ui"].Focus=$pyjs.loaded_modules["pyjamas.ui.Focus"];var g,f;a.pyjd=$p.___import___("pyjd","pyjamas.ui");a.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);null===(f=!(null===(g=a.pyjd.is_desktop)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1))||!1===f||0===f||""===f||"object"==typeof f&&("function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__&&
f.__len__());a.ensureFocusHandler=function(){return null};a.ensureFocusHandler.__name__="ensureFocusHandler";a.ensureFocusHandler.__bind_type__=0;a.ensureFocusHandler.__args__=[null,null];a.createFocusHandler=function(){return null};a.createFocusHandler.__name__="createFocusHandler";a.createFocusHandler.__bind_type__=0;a.createFocusHandler.__args__=[null,null];a.createFocusable0=function(){return null};a.createFocusable0.__name__="createFocusable0";a.createFocusable0.__bind_type__=0;a.createFocusable0.__args__=
[null,null];a.blur=function(a){a.blur();return null};a.blur.__name__="blur";a.blur.__bind_type__=0;a.blur.__args__=[null,null,["elem"]];a.createFocusable=function(){var e;e=a.DOM.createDiv();e.tabIndex=0;return e};a.createFocusable.__name__="createFocusable";a.createFocusable.__bind_type__=0;a.createFocusable.__args__=[null,null];a.focus=function(a){try{a.focus()}catch(b){if(!a||!a.focus)throw b;}};a.focus.__name__="focus";a.focus.__bind_type__=0;a.focus.__args__=[null,null,["elem"]];a.getTabIndex=
function(a){return a.tabIndex};a.getTabIndex.__name__="getTabIndex";a.getTabIndex.__bind_type__=0;a.getTabIndex.__args__=[null,null,["elem"]];a.setAccessKey=function(a,b){a.accessKey=b;return null};a.setAccessKey.__name__="setAccessKey";a.setAccessKey.__bind_type__=0;a.setAccessKey.__args__=[null,null,["elem"],["key"]];a.setTabIndex=function(a,b){a.tabIndex=b;return null};a.setTabIndex.__name__="setTabIndex";a.setTabIndex.__bind_type__=0;a.setTabIndex.__args__=[null,null,["elem"],["index"]];a.FocusMixin=
function(){var e={},b;e.__module__="pyjamas.ui.Focus";b=$pyjs__bind_method2("getTabIndex",function(h){return a.getTabIndex((!0===this.__is_instance__?this:h).getElement())},1,[null,null,["self"]]);e.getTabIndex=b;b=$pyjs__bind_method2("setAccessKey",function(h,c){if(!0===this.__is_instance__)var d=this;else d=h,h=c;a.setAccessKey(d.getElement(),h);return null},1,[null,null,["self"],["key"]]);e.setAccessKey=b;b=$pyjs__bind_method2("setFocus",function(h,c){if(!0===this.__is_instance__)var d=this;else d=
h,h=c;var b;(null===(b=h)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)?a.focus(d.getElement()):a.blur(d.getElement());return null},1,[null,null,["self"],["focused"]]);e.setFocus=b;b=$pyjs__bind_method2("setTabIndex",function(b,c){if(!0===this.__is_instance__)var d=this;else d=b,b=c;a.setTabIndex(d.getElement(),b);return null},1,[null,null,["self"],["index"]]);e.setTabIndex=b;b=$pyjs__bind_method2("isEnabled",
function(b){b=!0===this.__is_instance__?this:b;var c;try{return!(null===(c=a.DOM.getBooleanAttribute(b.getElement(),"disabled"))||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)}catch(d){c="undefined"==typeof d.__name__?d.name:d.__name__;$pyjs.__last_exception__={error:d,module:a};if(c==$p.TypeError.__name__||$p._isinstance(d,$p.TypeError)||c==$p.AttributeError.__name__||$p._isinstance(d,$p.AttributeError))return!0;
$pyjs.__active_exception_stack__=$pyjs.__last_exception_stack__;$pyjs.__last_exception_stack__=null;throw d;}},1,[null,null,["self"]]);e.isEnabled=b;b=$pyjs__bind_method2("setEnabled",function(b,c){if(!0===this.__is_instance__)var d=this;else d=b,b=c;var e;a.DOM.setBooleanAttribute(d.getElement(),"disabled",!(null===(e=b)||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1));return null},1,[null,null,["self"],
["enabled"]]);e.setEnabled=b;b=$pyjs__bind_method2("isReadonly",function(b){b=!0===this.__is_instance__?this:b;var c;try{return!(null===(c=a.DOM.getBooleanAttribute(b.getElement(),"readOnly"))||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)}catch(d){c="undefined"==typeof d.__name__?d.name:d.__name__;$pyjs.__last_exception__={error:d,module:a};if(c==$p.TypeError.__name__||$p._isinstance(d,$p.TypeError)||c==
$p.AttributeError.__name__||$p._isinstance(d,$p.AttributeError))return!0;$pyjs.__active_exception_stack__=$pyjs.__last_exception_stack__;$pyjs.__last_exception_stack__=null;throw d;}},1,[null,null,["self"]]);e.isReadonly=b;b=$pyjs__bind_method2("setReadonly",function(b,c){if(!0===this.__is_instance__)var d=this;else d=b,b=c;a.DOM.setBooleanAttribute(d.getElement(),"readOnly",b);return null},1,[null,null,["self"],["readonly"]]);e.setReadonly=b;b=Array(pyjslib.object);var g=$p.dict(),f;for(f in e)g.__setitem__(f,
e[f]);return $p._create_class("FocusMixin",$p.tuple(b),g)}();return this};