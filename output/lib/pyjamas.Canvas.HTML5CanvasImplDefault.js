$pyjs.loaded_modules["pyjamas.Canvas.HTML5CanvasImplDefault"]=function(e){if($pyjs.loaded_modules["pyjamas.Canvas.HTML5CanvasImplDefault"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Canvas.HTML5CanvasImplDefault"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.Canvas"]&&$pyjs.loaded_modules["pyjamas.Canvas"].__was_initialized__||$p.___import___("pyjamas.Canvas",null);var f=$pyjs.loaded_modules["pyjamas.Canvas.HTML5CanvasImplDefault"];f.__repr__=function(){return"<module: pyjamas.Canvas.HTML5CanvasImplDefault>"};
f.__was_initialized__=!0;if(null===e||"undefined"==typeof e)e="pyjamas.Canvas.HTML5CanvasImplDefault";f.__name__=e;$pyjs.loaded_modules["pyjamas.Canvas"].HTML5CanvasImplDefault=$pyjs.loaded_modules["pyjamas.Canvas.HTML5CanvasImplDefault"];f.GWTCanvasImplDefault=$p.___import___("pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault","pyjamas.Canvas",null,!1);f.HTML5CanvasImplDefault=function(){var b={},a;b.__module__="pyjamas.Canvas.HTML5CanvasImplDefault";a=$pyjs__bind_method2("clearRect",function(c,
a,d,b,e){if(!0===this.__is_instance__)var g=this;else g=c,c=a,a=d,d=b,b=e;g.canvasContext.clearRect(c,a,d,b);return null},1,[null,null,["self"],["x"],["y"],["w"],["h"]]);b.clearRect=a;a=$pyjs__bind_method2("clip",function(c){(!0===this.__is_instance__?this:c).canvasContext.clip();return null},1,[null,null,["self"]]);b.clip=a;a=$pyjs__bind_method2("createImageData",function(c,a,d){if(!0===this.__is_instance__)var b=this;else b=c,c=a,a=d;return b.canvasContext.createImageData(c,a)},1,[null,null,["self"],
["sw"],["sh"]]);b.createImageData=a;a=$pyjs__bind_method2("getFont",function(c){return(!0===this.__is_instance__?this:c).canvasContext.font},1,[null,null,["self"]]);b.getFont=a;a=$pyjs__bind_method2("getImageData",function(c,a,d,b,e){if(!0===this.__is_instance__)var g=this;else g=c,c=a,a=d,d=b,b=e;return g.canvasContext.getImageData(c,a,d,b)},1,[null,null,["self"],["sx"],["sy"],["sw"],["sh"]]);b.getImageData=a;a=$pyjs__bind_method2("getShadowBlur",function(c){return(!0===this.__is_instance__?this:
c).canvasContext.shadowBlur},1,[null,null,["self"]]);b.getShadowBlur=a;a=$pyjs__bind_method2("getShadowColor",function(c){return(!0===this.__is_instance__?this:c).canvasContext.shadowColor},1,[null,null,["self"]]);b.getShadowColor=a;a=$pyjs__bind_method2("getShadowOffsetX",function(c){return(!0===this.__is_instance__?this:c).canvasContext.shadowOffsetX},1,[null,null,["self"]]);b.getShadowOffsetX=a;a=$pyjs__bind_method2("getShadowOffsetY",function(c){return(!0===this.__is_instance__?this:c).canvasContext.shadowOffsetY},
1,[null,null,["self"]]);b.getShadowOffsetY=a;a=$pyjs__bind_method2("getTextAlign",function(c){return(!0===this.__is_instance__?this:c).canvasContext.textAlign},1,[null,null,["self"]]);b.getTextAlign=a;a=$pyjs__bind_method2("getTextBaseline",function(c){return(!0===this.__is_instance__?this:c).canvasContext.textBaseline},1,[null,null,["self"]]);b.getTextBaseline=a;a=$pyjs__bind_method2("measureText",function(c,a){if(!0===this.__is_instance__)var d=this;else d=c,c=a;return d.canvasContext.measureText(c).width},
1,[null,null,["self"],["text"]]);b.measureText=a;a=$pyjs__bind_method2("putImageData",function(c,a,d,b,e,g,f,h){if(!0===this.__is_instance__)var k=this;else k=c,c=a,a=d,d=b,b=e,e=g,g=f,f=h;k.canvasContext.putImageData(c,a,d,b,e,g,f);return null},1,[null,null,["self"],["imagedata"],["dx"],["dy"],["dirtyX"],["dirtyY"],["dirtyWidth"],["dirtyHeight"]]);b.putImageData=a;a=$pyjs__bind_method2("setFont",function(c,a){if(!0===this.__is_instance__)var b=this;else b=c,c=a;b.canvasContext.font=c;return null},
1,[null,null,["self"],["value"]]);b.setFont=a;a=$pyjs__bind_method2("setShadowBlur",function(c,a){if(!0===this.__is_instance__)var b=this;else b=c,c=a;b.canvasContext.shadowBlur=c;return null},1,[null,null,["self"],["blur"]]);b.setShadowBlur=a;a=$pyjs__bind_method2("setShadowColor",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.canvasContext.shadowColor=a;return null},1,[null,null,["self"],["color"]]);b.setShadowColor=a;a=$pyjs__bind_method2("setShadowOffset",function(a,b,d){if(!0===
this.__is_instance__)var e=this;else e=a,a=b,b=d;e.canvasContext.shadowOffsetX=a;e.canvasContext.shadowOffsetY=b;return null},1,[null,null,["self"],["x"],["y"]]);b.setShadowOffset=a;a=$pyjs__bind_method2("setTextAlign",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.canvasContext.textAlign=a;return null},1,[null,null,["self"],["loc"]]);b.setTextAlign=a;a=$pyjs__bind_method2("setTextBaseline",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;d.canvasContext.textBaseline=
a;return null},1,[null,null,["self"],["loc"]]);b.setTextBaseline=a;a=$pyjs__bind_method2("toDataURL",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;return d.canvasContext.toDataURL(a)},1,[null,null,["self"],["type"]]);b.toDataURL=a;a=Array(f.GWTCanvasImplDefault);var e=$p.dict(),h;for(h in b)e.__setitem__(h,b[h]);return $p._create_class("HTML5CanvasImplDefault",$p.tuple(a),e)}();return this};