$pyjs.loaded_modules["pyjamas.Canvas.ImageData"]=function(d){if($pyjs.loaded_modules["pyjamas.Canvas.ImageData"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Canvas.ImageData"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.Canvas"]&&$pyjs.loaded_modules["pyjamas.Canvas"].__was_initialized__||$p.___import___("pyjamas.Canvas",null);var e=$pyjs.loaded_modules["pyjamas.Canvas.ImageData"];e.__repr__=function(){return"<module: pyjamas.Canvas.ImageData>"};e.__was_initialized__=!0;if(null===
d||"undefined"==typeof d)d="pyjamas.Canvas.ImageData";e.__name__=d;$pyjs.loaded_modules["pyjamas.Canvas"].ImageData=$pyjs.loaded_modules["pyjamas.Canvas.ImageData"];e.ImageData=function(){var c={},b;c.__module__="pyjamas.Canvas.ImageData";b=$pyjs__bind_method2("__init__",function(a,b){if(!0===this.__is_instance__)var f=this;else f=a,a=b;f.width=a.width;f.height=a.height;f.data=a.data;return null},1,[null,null,["self"],["imagedata"]]);c.__init__=b;b=$pyjs__bind_method2("getWidth",function(a){return(!0===
this.__is_instance__?this:a).width},1,[null,null,["self"]]);c.getWidth=b;b=$pyjs__bind_method2("getHeight",function(a){return(!0===this.__is_instance__?this:a).height},1,[null,null,["self"]]);c.getHeight=b;b=$pyjs__bind_method2("getData",function(a){return(!0===this.__is_instance__?this:a).data},1,[null,null,["self"]]);c.getData=b;b=$pyjs__bind_method2("setData",function(a,b){if(!0===this.__is_instance__)var f=this;else f=a,a=b;f.data=a;return null},1,[null,null,["self"],["data"]]);c.setData=b;b=
$pyjs__bind_method2("getPixel",function(a,b,f){if(!0===this.__is_instance__)var c=this;else c=a,a=b,b=f;a=4*(b*c.width+a);return $p.__getslice(c.data,a,a+4)},1,[null,null,["self"],["x"],["y"]]);c.getPixel=b;b=$pyjs__bind_method2("setPixel",function(a,b,c,e){if(!0===this.__is_instance__)var d=this;else d=a,a=b,b=c,c=e;a=4*(b*d.width+a);$p.__setslice(d.data,a,a+4,c);return null},1,[null,null,["self"],["x"],["y"],["rgba"]]);c.setPixel=b;b=Array(pyjslib.object);var d=$p.dict(),e;for(e in c)d.__setitem__(e,
c[e]);return $p._create_class("ImageData",$p.tuple(b),d)}();return this};