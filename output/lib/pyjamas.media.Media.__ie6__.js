$pyjs.loaded_modules["pyjamas.media.Media"]=function(k){if($pyjs.loaded_modules["pyjamas.media.Media"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.media.Media"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.media"]&&$pyjs.loaded_modules["pyjamas.media"].__was_initialized__||$p.___import___("pyjamas.media",null);var e=$pyjs.loaded_modules["pyjamas.media.Media"];e.__repr__=function(){return"<module: pyjamas.media.Media>"};e.__was_initialized__=!0;if(null===k||"undefined"==typeof k)k=
"pyjamas.media.Media";e.__name__=k;$pyjs.loaded_modules["pyjamas.media"].Media=$pyjs.loaded_modules["pyjamas.media.Media"];e.Event=$p.___import___("pyjamas.ui.Event","pyjamas.media",null,!1);e.DOM=$p.___import___("pyjamas.DOM","pyjamas.media",null,!1);e.Widget=$p.___import___("pyjamas.ui.Widget.Widget","pyjamas.media",null,!1);e.mediaEventGetTypeInt=function(d){("undefined"==typeof JS?e.JS:JS)('\n    window[\'console\'][\'log\'](\'mediaEventGetTypeInt: \' + eventType)\n    switch (eventType) {\n        case "abort":             return 0x00001;\n        case "canplay":           return 0x00002;\n        case "canplaythrough":    return 0x00004;\n        case "durationchange":    return 0x00008;\n        case "emptied":           return 0x00010;\n        case "ended":             return 0x00020;\n        case "error":             return 0x00040;\n        case "loadstart":         return 0x00080;\n        case "loadeddata":        return 0x00100;\n        case "loadedmetadata":    return 0x00200;\n        case "pause":             return 0x00400;\n        case "play":              return 0x00800;\n        case "playing":           return 0x01000;\n        case "progress":          return 0x02000;\n        case "ratechange":        return 0x04000;\n        case "seeked":            return 0x08000;\n        case "seeking":           return 0x10000;\n        case "stalled":           return 0x20000;\n        case "suspend":           return 0x40000;\n        case "timeupdate":        return 0x80000;\n        case "volumechange":      return 0x100000;\n        case "waiting":           return 0x200000;\n        default:\n        window[\'console\'][\'debug\']("Unknown media eventType: " + eventType)\n        return 0;\n    }\n    ');
return null};e.mediaEventGetTypeInt.__name__="mediaEventGetTypeInt";e.mediaEventGetTypeInt.__bind_type__=0;e.mediaEventGetTypeInt.__args__=[null,null,["eventType"]];e.Media=function(){var d={},a;d.__module__="pyjamas.media.Media";a=$pyjs__bind_method2("__init__",function(){if(!0===this.__is_instance__)var b=this,a=1<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];else b=arguments[0],a=2<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===
a||"object"!=typeof a||"dict"!=a.__name__||"undefined"==typeof a.$pyjs_is_kwarg?a=arguments[arguments.length+1]:delete a.$pyjs_is_kwarg;"undefined"==typeof a&&(a=$p.__empty_dict(),"undefined"!=typeof b&&null!==b&&"undefined"!=typeof b.$pyjs_is_kwarg&&(a=b,b=arguments[1]));b.mediaEventsToSink=0;b.mediaEventsInitialized=!1;$pyjs_kwargs_call(e.Widget,"__init__",null,a,[{},b]);return null},1,[null,["kwargs"],["self"]]);d.__init__=a;a=$pyjs__bind_method2("setSrc",function(b,a){if(!0===this.__is_instance__)var c=
this;else c=b,b=a;c=c.getElement();e.DOM.setAttribute(c,"URL",b);return null},1,[null,null,["self"],["src"]]);d.setSrc=a;a=$pyjs__bind_method2("addSrc",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;var d;d=e.DOM.createElement("source");e.DOM.setAttribute(d,"src",b);e.DOM.appendChild(c.getElement(),d);return null},1,[null,null,["self"],["src"]]);d.addSrc=a;a=$pyjs__bind_method2("getSrc",function(b){return e.DOM.getAttribute((!0===this.__is_instance__?this:b).getElement(),"src")},
1,[null,null,["self"]]);d.getSrc=a;a=$pyjs__bind_method2("getError",function(b){var a,c;return(null===(c=a=(!0===this.__is_instance__?this:b).getElement().error)||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)?a:0},1,[null,null,["self"]]);d.getError=a;a=$pyjs__bind_method2("getCurrentSrc",function(b){return(!0===this.__is_instance__?this:b).getElement().currentSrc},1,[null,null,["self"]]);d.getCurrentSrc=
a;a=$pyjs__bind_method2("getCurrentTime",function(b){return(!0===this.__is_instance__?this:b).getElement().currentTime},1,[null,null,["self"]]);d.getCurrentTime=a;a=$pyjs__bind_method2("setCurrentTime",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().currentTime=b;return null},1,[null,null,["self"],["time"]]);d.setCurrentTime=a;a=$pyjs__bind_method2("getStartTime",function(b){return(!0===this.__is_instance__?this:b).getElement().startTime},1,[null,null,["self"]]);
d.getStartTime=a;a=$pyjs__bind_method2("getDuration",function(b){return(!0===this.__is_instance__?this:b).getElement().duration},1,[null,null,["self"]]);d.getDuration=a;a=$pyjs__bind_method2("isPaused",function(b){return(!0===this.__is_instance__?this:b).getElement().paused},1,[null,null,["self"]]);d.isPaused=a;a=$pyjs__bind_method2("getDefaultPlaybackRate",function(b){return(!0===this.__is_instance__?this:b).getElement().defaultPlaybackRate},1,[null,null,["self"]]);d.getDefaultPlaybackRate=a;a=$pyjs__bind_method2("setDefaultPlaybackRate",
function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().defaultPlaybackRate=b;return null},1,[null,null,["self"],["rate"]]);d.setDefaultPlaybackRate=a;a=$pyjs__bind_method2("getPlaybackRate",function(b){return(!0===this.__is_instance__?this:b).getElement().playbackRate},1,[null,null,["self"]]);d.getPlaybackRate=a;a=$pyjs__bind_method2("setPlaybackRate",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().playbackRate=b;return null},1,[null,null,
["self"],["rate"]]);d.setPlaybackRate=a;a=$pyjs__bind_method2("getPlayed",function(b){return(!0===this.__is_instance__?this:b).getElement().played},1,[null,null,["self"]]);d.getPlayed=a;a=$pyjs__bind_method2("getSeekable",function(b){return(!0===this.__is_instance__?this:b).getElement().seekable},1,[null,null,["self"]]);d.getSeekable=a;a=$pyjs__bind_method2("hasEnded",function(b){return(!0===this.__is_instance__?this:b).getElement().ended},1,[null,null,["self"]]);d.hasEnded=a;a=$pyjs__bind_method2("isLoop",
function(b){return $p.bool((!0===this.__is_instance__?this:b).getElement().loop)},1,[null,null,["self"]]);d.isLoop=a;a=$pyjs__bind_method2("getVolume",function(b){return(!0===this.__is_instance__?this:b).getElement().volume},1,[null,null,["self"]]);d.getVolume=a;a=$pyjs__bind_method2("setVolume",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().volume=b;return null},1,[null,null,["self"],["volume"]]);d.setVolume=a;a=$pyjs__bind_method2("getReadyState",function(b){return(!0===
this.__is_instance__?this:b).getElement().readyState},1,[null,null,["self"]]);d.getReadyState=a;a=$pyjs__bind_method2("setAutobuffer",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().autobuffer=b;return null},1,[null,null,["self"],["autobuffer"]]);d.setAutobuffer=a;a=$pyjs__bind_method2("setAutoplay",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;var d,h,g,f;c.playparam=e.DOM.createElement("PARAM");e.DOM.setAttribute(c.playparam,"name","autostart");
e.DOM.setBooleanAttribute(c.playparam,"VALUE",(null===(h=d=(null===(f=g=b)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?"true":g)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1)?d:"false");c.getElement().appendChild(c.playparam);return null},1,[null,null,["self"],["autostart"]]);d.setAutoplay=a;a=$pyjs__bind_method2("setLoop",
function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;var d,h,g,f;c.loopparam=e.DOM.createElement("PARAM");e.DOM.setAttribute(c.loopparam,"name","autorewind");e.DOM.setBooleanAttribute(c.loopparam,"VALUE",(null===(g=d=(null===(f=h=b)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?"true":h)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==
typeof g.__len__?0<g.__len__():1:1)?d:"false");c.getElement().appendChild(c.loopparam);return null},1,[null,null,["self"],["autorewind"]]);d.setLoop=a;a=$pyjs__bind_method2("setControls",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;var d,h,g,f;c.ctrlparam=e.DOM.createElement("PARAM");e.DOM.setAttribute(c.ctrlparam,"name","ShowControls");e.DOM.setBooleanAttribute(c.ctrlparam,"VALUE",(null===(f=d=(null===(g=h=b)||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?
g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)?"true":h)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?d:"false");c.getElement().appendChild(c.ctrlparam);return null},1,[null,null,["self"],["controls"]]);d.setControls=a;a=$pyjs__bind_method2("hasControls",function(b){e.DOM.getBooleanAttribute((!0===this.__is_instance__?this:b).getElement(),"controls");return null},1,[null,null,["self"]]);
d.hasControls=a;a=$pyjs__bind_method2("isMuted",function(b){return(!0===this.__is_instance__?this:b).getElement().muted},1,[null,null,["self"]]);d.isMuted=a;a=$pyjs__bind_method2("play",function(b){(!0===this.__is_instance__?this:b).getElement().play();return null},1,[null,null,["self"]]);d.play=a;a=$pyjs__bind_method2("load",function(b){(!0===this.__is_instance__?this:b).getElement().load();return null},1,[null,null,["self"]]);d.load=a;a=$pyjs__bind_method2("pause",function(b){(!0===this.__is_instance__?
this:b).getElement().pause();return null},1,[null,null,["self"]]);d.pause=a;a=$pyjs__bind_method2("canPlayType",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().canPlayType(b);return null},1,[null,null,["self"],["etype"]]);d.canPlayType=a;a=$pyjs__bind_method2("setMute",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;c.getElement().setMute(b);return null},1,[null,null,["self"],["muted"]]);d.setMute=a;a=$pyjs__bind_method2("addAbortHandler",function(b,
a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.AbortEvent.getType())},1,[null,null,["self"],["handler"]]);d.addAbortHandler=a;a=$pyjs__bind_method2("addCanPlayHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.CanPlayEvent.getType())},1,[null,null,["self"],["handler"]]);d.addCanPlayHandler=a;a=$pyjs__bind_method2("addCanPlayThroughHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=
b,b=a;return c.addMediaEventHandler(b,e.CanPlayThroughEvent.getType())},1,[null,null,["self"],["handler"]]);d.addCanPlayThroughHandler=a;a=$pyjs__bind_method2("addDurationChangeHandle",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.DurationChangeEvent.getType())},1,[null,null,["self"],["handler"]]);d.addDurationChangeHandle=a;a=$pyjs__bind_method2("addEmptiedHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,
e.EmptiedEvent.getType())},1,[null,null,["self"],["handler"]]);d.addEmptiedHandler=a;a=$pyjs__bind_method2("addEndedHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.EndedEvent.getType())},1,[null,null,["self"],["handler"]]);d.addEndedHandler=a;a=$pyjs__bind_method2("addErrorHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.ErrorEvent.getType())},1,[null,null,["self"],["handler"]]);
d.addErrorHandler=a;a=$pyjs__bind_method2("addLoadStartHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.LoadStartEvent.getType())},1,[null,null,["self"],["handler"]]);d.addLoadStartHandler=a;a=$pyjs__bind_method2("addLoadedDataHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.LoadedDataEvent.getType())},1,[null,null,["self"],["handler"]]);d.addLoadedDataHandler=a;a=$pyjs__bind_method2("addLoadedMetadataHandler",
function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.LoadedMetadataEvent.getType())},1,[null,null,["self"],["handler"]]);d.addLoadedMetadataHandler=a;a=$pyjs__bind_method2("addPauseHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.PauseEvent.getType())},1,[null,null,["self"],["handler"]]);d.addPauseHandler=a;a=$pyjs__bind_method2("addPlayHandler",function(b,a){if(!0===this.__is_instance__)var c=
this;else c=b,b=a;return c.addMediaEventHandler(b,e.PlayEvent.getType())},1,[null,null,["self"],["handler"]]);d.addPlayHandler=a;a=$pyjs__bind_method2("addPlayingHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.PlayingEvent.getType())},1,[null,null,["self"],["handler"]]);d.addPlayingHandler=a;a=$pyjs__bind_method2("addProgressHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.ProgressEvent.getType())},
1,[null,null,["self"],["handler"]]);d.addProgressHandler=a;a=$pyjs__bind_method2("addRateChangeHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.RateChangeEvent.getType())},1,[null,null,["self"],["handler"]]);d.addRateChangeHandler=a;a=$pyjs__bind_method2("addSeekedHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.SeekedEvent.getType())},1,[null,null,["self"],["handler"]]);d.addSeekedHandler=
a;a=$pyjs__bind_method2("addSeekingHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.SeekingEvent.getType())},1,[null,null,["self"],["handler"]]);d.addSeekingHandler=a;a=$pyjs__bind_method2("addStalledHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.StalledEvent.getType())},1,[null,null,["self"],["handler"]]);d.addStalledHandler=a;a=$pyjs__bind_method2("addSuspendHandler",function(b,
a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.SuspendEvent.getType())},1,[null,null,["self"],["handler"]]);d.addSuspendHandler=a;a=$pyjs__bind_method2("addTimeUpdateHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.TimeUpdateEvent.getType())},1,[null,null,["self"],["handler"]]);d.addTimeUpdateHandler=a;a=$pyjs__bind_method2("addVolumeChangeHandler",function(b,a){if(!0===this.__is_instance__)var c=
this;else c=b,b=a;return c.addMediaEventHandler(b,e.VolumeChangeEvent.getType())},1,[null,null,["self"],["handler"]]);d.addVolumeChangeHandler=a;a=$pyjs__bind_method2("addWaitingHandler",function(b,a){if(!0===this.__is_instance__)var c=this;else c=b,b=a;return c.addMediaEventHandler(b,e.WaitingEvent.getType())},1,[null,null,["self"],["handler"]]);d.addWaitingHandler=a;a=$pyjs__bind_method2("addMediaEventHandler",function(b,a,c){if(!0===this.__is_instance__)var d=this;else d=b,b=a,a=c;if(null===b)throw $p.AssertionError("handler must not be None");
if(null===a)throw $p.AssertionError("type must not be None");d.maybeInitMediaEvents();d.sinkMediaEvents(e.mediaEventGetTypeInt(a.getName()));return("undefined"==typeof addHandler?e.addHandler:addHandler)(b,a)},1,[null,null,["self"],["handler"],["etype"]]);d.addMediaEventHandler=a;a=$pyjs__bind_method2("sinkMediaEvents",function(a,d){if(!0===this.__is_instance__)var c=this;else c=a,a=d;var e;(null===(e=c.isOrWasAttached())||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?
e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1)?c.nativeSinkMediaEvents(c.getElement(),a):c.mediaEventsToSink|=a;return null},1,[null,null,["self"],["eventBitsToAdd"]]);d.sinkMediaEvents=a;a=$pyjs__bind_method2("doAttachChildren",function(a){a=!0===this.__is_instance__?this:a;var d,c;d=a.mediaEventsToSink;a.mediaEventsToSink=-1;(null===(c=1==(0===d?0:"number"!=typeof d||"number"!=typeof d&&"string"!=typeof d&&"boolean"!=typeof d?$p.cmp(d,0):0==d?0:0>d?-1:1))||!1===c||0===c||""===c?
0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)&&a.nativeSinkMediaEvents(a.getElement(),d);return null},1,[null,null,["self"]]);d.doAttachChildren=a;a=$pyjs__bind_method2("nativeSinkMediaEvents",function(a,d,c){return null},1,[null,null,["self"],["elem"],["bits"]]);d.nativeSinkMediaEvents=a;a=$pyjs__bind_method2("addMouseDownHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:
addDomHandler)(a,e.MouseDownEvent.getType())},1,[null,null,["self"],["handler"]]);d.addMouseDownHandler=a;a=$pyjs__bind_method2("addMouseUpHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:addDomHandler)(a,e.MouseUpEvent.getType())},1,[null,null,["self"],["handler"]]);d.addMouseUpHandler=a;a=$pyjs__bind_method2("addMouseOutHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:
addDomHandler)(a,e.MouseOutEvent.getType())},1,[null,null,["self"],["handler"]]);d.addMouseOutHandler=a;a=$pyjs__bind_method2("addMouseOverHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:addDomHandler)(a,e.MouseOverEvent.getType())},1,[null,null,["self"],["handler"]]);d.addMouseOverHandler=a;a=$pyjs__bind_method2("addMouseMoveHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:
addDomHandler)(a,e.MouseMoveEvent.getType())},1,[null,null,["self"],["handler"]]);d.addMouseMoveHandler=a;a=$pyjs__bind_method2("addMouseWheelHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:addDomHandler)(a,e.MouseWheelEvent.getType())},1,[null,null,["self"],["handler"]]);d.addMouseWheelHandler=a;a=$pyjs__bind_method2("addClickHandler",function(a,d){!0!==this.__is_instance__&&(a=d);return("undefined"==typeof addDomHandler?e.addDomHandler:
addDomHandler)(a,e.ClickEvent.getType())},1,[null,null,["self"],["handler"]]);d.addClickHandler=a;a=$pyjs__bind_method2("maybeInitMediaEvents",function(a){var d,c;(null===(c=!(null===(d=e.mediaEventsInitialized)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1))||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1)&&("undefined"==
typeof initMediaEvents?e.initMediaEvents:initMediaEvents)();return null},1,[null,null,["self"]]);d.maybeInitMediaEvents=a;a=$pyjs__bind_method2("initMediaEvents",function(a){("undefined"==typeof JS?e.JS:JS)("\n        mediaDispatchEvent = function(evt) {\n            var curElem = evt['target'];\n            var listener = curElem['__listener'];\n            if (listener) {\n                @{{self['dispatchMediaEvent']}}(evt, listener)\n            }\n        }\n        ");return null},1,[null,null,
["self"]]);d.initMediaEvents=a;a=$pyjs__bind_method2("dispatchMediaEvent",function(a,d,c){!0!==this.__is_instance__&&(a=d,d=c);d.onBrowserEvent(a);return null},1,[null,null,["self"],["evt"],["listener"]]);d.dispatchMediaEvent=a;a=Array(e.Widget);var k=$p.dict(),l;for(l in d)k.__setitem__(l,d[l]);return $p._create_class("Media",$p.tuple(a),k)}();return this};