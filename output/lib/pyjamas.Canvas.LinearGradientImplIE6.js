$pyjs.loaded_modules["pyjamas.Canvas.LinearGradientImplIE6"]=function(b){if($pyjs.loaded_modules["pyjamas.Canvas.LinearGradientImplIE6"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Canvas.LinearGradientImplIE6"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.Canvas"]&&$pyjs.loaded_modules["pyjamas.Canvas"].__was_initialized__||$p.___import___("pyjamas.Canvas",null);var h=$pyjs.loaded_modules["pyjamas.Canvas.LinearGradientImplIE6"];h.__repr__=function(){return"<module: pyjamas.Canvas.LinearGradientImplIE6>"};
h.__was_initialized__=!0;if(null===b||"undefined"==typeof b)b="pyjamas.Canvas.LinearGradientImplIE6";h.__name__=b;$pyjs.loaded_modules["pyjamas.Canvas"].LinearGradientImplIE6=$pyjs.loaded_modules["pyjamas.Canvas.LinearGradientImplIE6"];h.CanvasGradientImplIE6=$p.___import___("pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6","pyjamas.Canvas",null,!1);h.LinearGradientImplIE6=function(){var f={},c;f.__module__="pyjamas.Canvas.LinearGradientImplIE6";c=$pyjs__bind_method2("__init__",function(d,
a,e,b,c){if(!0===this.__is_instance__)var g=this;else g=d,d=a,a=e,e=b,b=c;h.CanvasGradientImplIE6.__init__(g,d,a,e,b);g.type="gradient";return null},1,[null,null,["self"],["x0"],["y0"],["x1"],["y1"]]);f.__init__=c;c=$pyjs__bind_method2("cloneGradient",function(d){var a=!0===this.__is_instance__?this:d,e,b,c,g,f,l,k;d=h.LinearGradientImplIE6(a.startX,a.startY,a.endX,a.endY);d.startX=a.startX;d.startY=a.startY;d.endX=a.endX;d.endY=a.endY;a=a.colorStops;e=$p.range(null===a?0:"undefined"!=typeof a.__array?
a.__array.length:"function"==typeof a.__len__?a.__len__():"undefined"!=typeof a.length?a.length:$p.len(a));"undefined"!=typeof(c=e.__array)?l=0:(e=e.__iter__(),l="undefined"!=typeof(c=e.__array)?0:"function"==typeof e.$genfunc?1:-1);for(k=0;"undefined"!=typeof(f=l?0<l?e.next(!0,!1):$p.wrapped_next(e):c[k++]);)d.colorStops.append(("undefined"!=typeof(g=a).__array?"undefined"!=typeof g.__array[b=f]?g.__array[b]:g.__getitem__(b):g.__getitem__(f)).cloneColorStop());return d},1,[null,null,["self"]]);f.cloneGradient=
c;c=Array(h.CanvasGradientImplIE6);var b=$p.dict(),k;for(k in f)b.__setitem__(k,f[k]);return $p._create_class("LinearGradientImplIE6",$p.tuple(c),b)}();return this};