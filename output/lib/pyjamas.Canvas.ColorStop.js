$pyjs.loaded_modules["pyjamas.Canvas.ColorStop"]=function(a){if($pyjs.loaded_modules["pyjamas.Canvas.ColorStop"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Canvas.ColorStop"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.Canvas"]&&$pyjs.loaded_modules["pyjamas.Canvas"].__was_initialized__||$p.___import___("pyjamas.Canvas",null);var c=$pyjs.loaded_modules["pyjamas.Canvas.ColorStop"];c.__repr__=function(){return"<module: pyjamas.Canvas.ColorStop>"};c.__was_initialized__=!0;if(null===
a||"undefined"==typeof a)a="pyjamas.Canvas.ColorStop";c.__name__=a;$pyjs.loaded_modules["pyjamas.Canvas"].ColorStop=$pyjs.loaded_modules["pyjamas.Canvas.ColorStop"];c.Color=$p.___import___("pyjamas.Canvas.Color.Color","pyjamas.Canvas",null,!1);c.ColorStop=function(){var d={},b;d.__module__="pyjamas.Canvas.ColorStop";b=$pyjs__bind_method2("__init__",function(e,a,c){if(!0===this.__is_instance__)var b=this;else b=e,e=a,a=c;b.offset=e;b.color=a;return null},1,[null,null,["self"],["myOffset"],["myColor"]]);
d.__init__=b;b=$pyjs__bind_method2("cloneColorStop",function(a){a=!0===this.__is_instance__?this:a;return c.ColorStop(a.offset,c.Color($p.str(a.color())))},1,[null,null,["self"]]);d.cloneColorStop=b;b=Array(pyjslib.object);var a=$p.dict(),f;for(f in d)a.__setitem__(f,d[f]);return $p._create_class("ColorStop",$p.tuple(b),a)}();return this};
