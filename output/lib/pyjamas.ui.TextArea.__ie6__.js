$pyjs.loaded_modules["pyjamas.ui.TextArea"]=function(g){if($pyjs.loaded_modules["pyjamas.ui.TextArea"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.TextArea"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var d=$pyjs.loaded_modules["pyjamas.ui.TextArea"];d.__repr__=function(){return"<module: pyjamas.ui.TextArea>"};d.__was_initialized__=!0;if(null===g||"undefined"==typeof g)g="pyjamas.ui.TextArea";
d.__name__=g;$pyjs.loaded_modules["pyjamas.ui"].TextArea=$pyjs.loaded_modules["pyjamas.ui.TextArea"];d.Factory=$p.___import___("pyjamas.Factory","pyjamas.ui",null,!1);d.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);d.TextBoxBase=$p.___import___("pyjamas.ui.TextBoxBase.TextBoxBase","pyjamas.ui",null,!1);d.TextArea=function(){var b={},a;b.__module__="pyjamas.ui.TextArea";b._props=$p.list([$p.tuple(["rows","Rows","VisibleLines",null]),$p.tuple(["cols","Columns","CharacterWidth",null])]);a=
$pyjs__bind_method2("__init__",function(){if(!0===this.__is_instance__)var e=this,c=1<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];else e=arguments[0],c=2<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===c||"object"!=typeof c||"dict"!=c.__name__||"undefined"==typeof c.$pyjs_is_kwarg?c=arguments[arguments.length+1]:delete c.$pyjs_is_kwarg;"undefined"==typeof c&&(c=$p.__empty_dict(),"undefined"!=typeof e&&null!==e&&"undefined"!=typeof e.$pyjs_is_kwarg&&
(c=e,e=arguments[1]));var a,b,f;c.__setitem__("StyleName",c.get("StyleName","gwt-TextArea"));b=(null===(f=a=c.pop("Element",null))||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?a:d.DOM.createTextArea();$pyjs_kwargs_call(d.TextBoxBase,"__init__",null,c,[{},e,b]);return null},1,[null,["ka"],["self"]]);b.__init__=a;a=$pyjs__bind_method2("_getProps",function(){var e=this.prototype;return d.TextBoxBase._getProps()+
e._props},2,[null,null,["self"]]);b._getProps=a;a=$pyjs__bind_method2("getCharacterWidth",function(e){return d.DOM.getIntAttribute((!0===this.__is_instance__?this:e).getElement(),"cols")},1,[null,null,["self"]]);b.getCharacterWidth=a;a=$pyjs__bind_method2("getCursorPos",function(e){try{var c=this.getElement(),a=c.document.selection.createRange(),d=a.duplicate();d.moveToElementText(c);a.setEndPoint("EndToStart",d);return a.text.length}catch(b){return 0}},1,[null,null,["self"]]);b.getCursorPos=a;a=
$pyjs__bind_method2("getVisibleLines",function(a){return d.DOM.getIntAttribute((!0===this.__is_instance__?this:a).getElement(),"rows")},1,[null,null,["self"]]);b.getVisibleLines=a;a=$pyjs__bind_method2("setCharacterWidth",function(a,c){if(!0===this.__is_instance__)var b=this;else b=a,a=c;d.DOM.setIntAttribute(b.getElement(),"cols",a);return null},1,[null,null,["self"],["width"]]);b.setCharacterWidth=a;a=$pyjs__bind_method2("setVisibleLines",function(a,c){if(!0===this.__is_instance__)var b=this;else b=
a,a=c;d.DOM.setIntAttribute(b.getElement(),"rows",a);return null},1,[null,null,["self"],["lines"]]);b.setVisibleLines=a;a=Array(d.TextBoxBase);var g=$p.dict(),h;for(h in b)g.__setitem__(h,b[h]);return $p._create_class("TextArea",$p.tuple(a),g)}();d.Factory.registerClass("pyjamas.ui.TextArea","TextArea",d.TextArea);return this};