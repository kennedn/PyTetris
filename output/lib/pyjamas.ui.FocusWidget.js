$pyjs.loaded_modules["pyjamas.ui.FocusWidget"]=function(b){if($pyjs.loaded_modules["pyjamas.ui.FocusWidget"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.FocusWidget"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var a=$pyjs.loaded_modules["pyjamas.ui.FocusWidget"];a.__repr__=function(){return"<module: pyjamas.ui.FocusWidget>"};a.__was_initialized__=!0;if(null===b||"undefined"==typeof b)b=
"pyjamas.ui.FocusWidget";a.__name__=b;$pyjs.loaded_modules["pyjamas.ui"].FocusWidget=$pyjs.loaded_modules["pyjamas.ui.FocusWidget"];a.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);a.Factory=$p.___import___("pyjamas.Factory","pyjamas.ui",null,!1);a.Widget=$p.___import___("pyjamas.ui.Widget.Widget","pyjamas.ui",null,!1);a.FocusMixin=$p.___import___("pyjamas.ui.Focus.FocusMixin","pyjamas.ui",null,!1);a.ClickHandler=$p.___import___("pyjamas.ui.ClickListener.ClickHandler","pyjamas.ui",null,!1);
a.KeyboardHandler=$p.___import___("pyjamas.ui.KeyboardListener.KeyboardHandler","pyjamas.ui",null,!1);a.FocusHandler=$p.___import___("pyjamas.ui.FocusListener.FocusHandler","pyjamas.ui",null,!1);a.MouseHandler=$p.___import___("pyjamas.ui.MouseListener.MouseHandler","pyjamas.ui",null,!1);a.FocusWidget=function(){var b={},e;b.__module__="pyjamas.ui.FocusWidget";e=$pyjs__bind_method2("__init__",function(b){if(!0===this.__is_instance__)var c=this,d=2<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];
else c=arguments[0],b=arguments[1],d=3<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===d||"object"!=typeof d||"dict"!=d.__name__||"undefined"==typeof d.$pyjs_is_kwarg?d=arguments[arguments.length+1]:delete d.$pyjs_is_kwarg;"undefined"==typeof d&&(d=$p.__empty_dict(),"undefined"!=typeof b?null!==b&&"undefined"!=typeof b.$pyjs_is_kwarg&&(d=b,b=arguments[2]):"undefined"!=typeof c&&null!==c&&"undefined"!=typeof c.$pyjs_is_kwarg&&(d=c,c=arguments[2]));c.setElement(b);
$pyjs_kwargs_call(a.Widget,"__init__",null,d,[{},c]);a.FocusHandler.__init__(c);a.KeyboardHandler.__init__(c);a.ClickHandler.__init__(c);a.MouseHandler.__init__(c);return null},1,[null,["kwargs"],["self"],["element"]]);b.__init__=e;e=[a.Widget,a.FocusHandler,a.KeyboardHandler,a.MouseHandler,a.ClickHandler,a.FocusMixin];var g=$p.dict(),f;for(f in b)g.__setitem__(f,b[f]);return $p._create_class("FocusWidget",$p.tuple(e),g)}();return this};