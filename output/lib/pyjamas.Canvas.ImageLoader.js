$pyjs.loaded_modules["pyjamas.Canvas.ImageLoader"]=function(p){if($pyjs.loaded_modules["pyjamas.Canvas.ImageLoader"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Canvas.ImageLoader"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.Canvas"]&&$pyjs.loaded_modules["pyjamas.Canvas"].__was_initialized__||$p.___import___("pyjamas.Canvas",null);var a=$pyjs.loaded_modules["pyjamas.Canvas.ImageLoader"];a.__repr__=function(){return"<module: pyjamas.Canvas.ImageLoader>"};a.__was_initialized__=
!0;if(null===p||"undefined"==typeof p)p="pyjamas.Canvas.ImageLoader";a.__name__=p;a.__track_lines__=[];$pyjs.loaded_modules["pyjamas.Canvas"].ImageLoader=$pyjs.loaded_modules["pyjamas.Canvas.ImageLoader"];a.__track_lines__[1]='pyjamas.Canvas.ImageLoader.py, line 1:\n    """';a.__track_lines__[134]="pyjamas.Canvas.ImageLoader.py, line 134:\n    def loadImages(urls, cb):";a.__track_lines__[135]="pyjamas.Canvas.ImageLoader.py, line 135:\n    il = ImageLoader()";a.__track_lines__[136]="pyjamas.Canvas.ImageLoader.py, line 136:\n    for i in range(len(urls)):";
a.__track_lines__[137]="pyjamas.Canvas.ImageLoader.py, line 137:\n    il.addHandle(il.prepareImage(urls[i]))";a.__track_lines__[139]="pyjamas.Canvas.ImageLoader.py, line 139:\n    il.finalize(cb)";a.__track_lines__[140]="pyjamas.Canvas.ImageLoader.py, line 140:\n    imageLoaders.append(il)";a.__track_lines__[142]="pyjamas.Canvas.ImageLoader.py, line 142:\n    for i in range(len(urls)):";a.__track_lines__[143]="pyjamas.Canvas.ImageLoader.py, line 143:\n    il.images[i].setUrl(urls[i])";a.__track_lines__[17]=
"pyjamas.Canvas.ImageLoader.py, line 17:\n    from pyjamas import DOM";a.__track_lines__[18]="pyjamas.Canvas.ImageLoader.py, line 18:\n    from pyjamas.ui.Image import Image";a.__track_lines__[19]="pyjamas.Canvas.ImageLoader.py, line 19:\n    from pyjamas.ui import Event";a.__track_lines__[21]='pyjamas.Canvas.ImageLoader.py, line 21:\n    """*';a.__track_lines__[25]="pyjamas.Canvas.ImageLoader.py, line 25:\n    imageLoaders = []";a.__track_lines__[28]='pyjamas.Canvas.ImageLoader.py, line 28:\n    """*';
a.__track_lines__[32]="pyjamas.Canvas.ImageLoader.py, line 32:\n    class ImageLoader:";a.__track_lines__[35]="pyjamas.Canvas.ImageLoader.py, line 35:\n    def __init__(self):";a.__track_lines__[37]="pyjamas.Canvas.ImageLoader.py, line 37:\n    self.images = []";a.__track_lines__[38]="pyjamas.Canvas.ImageLoader.py, line 38:\n    self.callBack = None";a.__track_lines__[39]="pyjamas.Canvas.ImageLoader.py, line 39:\n    self.loadedImages = 0";a.__track_lines__[40]="pyjamas.Canvas.ImageLoader.py, line 40:\n    self.totalImages = 0";
a.__track_lines__[44]="pyjamas.Canvas.ImageLoader.py, line 44:\n    self.onImageLoad = self.onLoad";a.__track_lines__[47]='pyjamas.Canvas.ImageLoader.py, line 47:\n    """*';a.__track_lines__[52]="pyjamas.Canvas.ImageLoader.py, line 52:\n    def addHandle(self, img):";a.__track_lines__[53]="pyjamas.Canvas.ImageLoader.py, line 53:\n    self.totalImages += 1";a.__track_lines__[54]="pyjamas.Canvas.ImageLoader.py, line 54:\n    self.images.append(img)";a.__track_lines__[57]='pyjamas.Canvas.ImageLoader.py, line 57:\n    """*';
a.__track_lines__[63]="pyjamas.Canvas.ImageLoader.py, line 63:\n    def dispatchIfComplete(self):";a.__track_lines__[64]="pyjamas.Canvas.ImageLoader.py, line 64:\n    if self.callBack is not None  and  self.isAllLoaded():";a.__track_lines__[65]="pyjamas.Canvas.ImageLoader.py, line 65:\n    self.callBack.onImagesLoaded(self.images)";a.__track_lines__[67]="pyjamas.Canvas.ImageLoader.py, line 67:\n    imageLoaders.remove(self)";a.__track_lines__[71]='pyjamas.Canvas.ImageLoader.py, line 71:\n    """*';
a.__track_lines__[78]="pyjamas.Canvas.ImageLoader.py, line 78:\n    def finalize(self, cb):";a.__track_lines__[79]="pyjamas.Canvas.ImageLoader.py, line 79:\n    self.callBack = cb";a.__track_lines__[82]="pyjamas.Canvas.ImageLoader.py, line 82:\n    def incrementLoadedImages(self):";a.__track_lines__[83]="pyjamas.Canvas.ImageLoader.py, line 83:\n    self.loadedImages += 1";a.__track_lines__[86]="pyjamas.Canvas.ImageLoader.py, line 86:\n    def isAllLoaded(self):";a.__track_lines__[87]="pyjamas.Canvas.ImageLoader.py, line 87:\n    return (self.loadedImages == self.totalImages)";
a.__track_lines__[90]='pyjamas.Canvas.ImageLoader.py, line 90:\n    """*';a.__track_lines__[93]="pyjamas.Canvas.ImageLoader.py, line 93:\n    def prepareImage(self, url):";a.__track_lines__[94]="pyjamas.Canvas.ImageLoader.py, line 94:\n    img = Image()";a.__track_lines__[95]="pyjamas.Canvas.ImageLoader.py, line 95:\n    img.__isLoaded = False";a.__track_lines__[96]="pyjamas.Canvas.ImageLoader.py, line 96:\n    img.addLoadListener(self)";a.__track_lines__[101]="pyjamas.Canvas.ImageLoader.py, line 101:\n    DOM.setEventListener(img.getElement(), img)";
a.__track_lines__[102]="pyjamas.Canvas.ImageLoader.py, line 102:\n    DOM.sinkEvents(img.getElement(), Event.ONLOAD)";a.__track_lines__[103]="pyjamas.Canvas.ImageLoader.py, line 103:\n    return img";a.__track_lines__[105]="pyjamas.Canvas.ImageLoader.py, line 105:\n    def onLoad(self, img):";a.__track_lines__[107]="pyjamas.Canvas.ImageLoader.py, line 107:\n    if not img.__isLoaded:";a.__track_lines__[112]="pyjamas.Canvas.ImageLoader.py, line 112:\n    img.__isLoaded = True;";a.__track_lines__[113]=
"pyjamas.Canvas.ImageLoader.py, line 113:\n    self.incrementLoadedImages();";a.__track_lines__[114]="pyjamas.Canvas.ImageLoader.py, line 114:\n    img.removeLoadListener(self)";a.__track_lines__[118]="pyjamas.Canvas.ImageLoader.py, line 118:\n    self.dispatchIfComplete();";a.__track_lines__[120]="pyjamas.Canvas.ImageLoader.py, line 120:\n    return img;";a.__track_lines__[124]='pyjamas.Canvas.ImageLoader.py, line 124:\n    """*';$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=
1;$pyjs.track.lineno=17;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.DOM=$p.___import___("pyjamas.DOM","pyjamas.Canvas",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=18;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.Image=$p.___import___("pyjamas.ui.Image.Image","pyjamas.Canvas",null,!1);$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=19;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.Event=$p.___import___("pyjamas.ui.Event","pyjamas.Canvas",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=21;$pyjs.track.lineno=25;var s;a:{try{try{$pyjs.in_try_except+=1;s=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,
$p.StopIteration)||$p._handle_exception(t),t;}s=void 0}a.imageLoaders=s;$pyjs.track.lineno=28;$pyjs.track.lineno=32;a.ImageLoader=function(){var f={},c;f.__module__="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=35;c=$pyjs__bind_method2("__init__",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:35};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=35;$pyjs.track.lineno=37;var e;a:{try{try{$pyjs.in_try_except+=
1;e=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}e=void 0}a.images=e;$pyjs.track.lineno=38;a.callBack=null;$pyjs.track.lineno=39;a.loadedImages=0;$pyjs.track.lineno=40;a.totalImages=0;$pyjs.track.lineno=44;a.onImageLoad=a.onLoad;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);f.__init__=c;$pyjs.track.lineno=47;$pyjs.track.lineno=52;c=
$pyjs__bind_method2("addHandle",function(a,e){if(!0===this.__is_instance__)var b=this;else b=a,a=e;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:52};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=52;$pyjs.track.lineno=53;b.totalImages+=1;$pyjs.track.lineno=54;try{try{$pyjs.in_try_except+=1,b.images.append(a)}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["img"]]);f.addHandle=c;$pyjs.track.lineno=57;$pyjs.track.lineno=63;c=$pyjs__bind_method2("dispatchIfComplete",function(k){k=!0===this.__is_instance__?this:k;var e,b,d;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:63};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=63;$pyjs.track.lineno=64;var h;a:{try{try{$pyjs.in_try_except+=1;var c;
if(null===(d=e=null!==k.callBack)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)b:{try{try{$pyjs.in_try_except+=1;c=k.isAllLoaded();break b}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}c=void 0}else c=e;h=null===(b=c)||!1===b||0===b||""===b?!1:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<
b.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(l){throw $p.isinstance(l,$p.StopIteration)||$p._handle_exception(l),l;}h=void 0}if(h){$pyjs.track.lineno=65;try{try{$pyjs.in_try_except+=1,k.callBack.onImagesLoaded(k.images)}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}$pyjs.track.lineno=67;try{try{$pyjs.in_try_except+=1,a.imageLoaders.remove(k)}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||
$p._handle_exception(g),g;}}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);f.dispatchIfComplete=c;$pyjs.track.lineno=71;$pyjs.track.lineno=78;c=$pyjs__bind_method2("finalize",function(a,e){if(!0===this.__is_instance__)var b=this;else b=a,a=e;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:78};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=78;$pyjs.track.lineno=
79;b.callBack=a;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["cb"]]);f.finalize=c;$pyjs.track.lineno=82;c=$pyjs__bind_method2("incrementLoadedImages",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:82};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=82;$pyjs.track.lineno=83;a.loadedImages+=1;$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);f.incrementLoadedImages=c;$pyjs.track.lineno=86;c=$pyjs__bind_method2("isAllLoaded",function(a){a=!0===this.__is_instance__?this:a;var e,b;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:86};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=86;$pyjs.track.lineno=87;$pyjs.track.lineno=87;a=(b=a.loadedImages)===(e=a.totalImages)&&null===
b?!0:null===b?!1:null===e?!1:"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?"object"!=typeof e&&"function"!=typeof e||"function"!=typeof e.__cmp__?b==e:0===e.__cmp__(b):0===b.__cmp__(e);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);f.isAllLoaded=c;$pyjs.track.lineno=90;$pyjs.track.lineno=93;c=$pyjs__bind_method2("prepareImage",function(c,e){if(!0===this.__is_instance__)var b=this;else b=c,c=e;
var d;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:93};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=93;$pyjs.track.lineno=94;a:{try{try{$pyjs.in_try_except+=1;d=a.Image();break a}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}d=void 0}$pyjs.track.lineno=95;d.__isLoaded=!1;$pyjs.track.lineno=96;try{try{$pyjs.in_try_except+=1,d.addLoadListener(b)}finally{$pyjs.in_try_except-=
1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}$pyjs.track.lineno=101;(function(){try{try{return $pyjs.in_try_except+=1,a.DOM.setEventListener(function(){try{try{return $pyjs.in_try_except+=1,d.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),d)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}})();$pyjs.track.lineno=102;(function(){try{try{return $pyjs.in_try_except+=
1,a.DOM.sinkEvents(function(){try{try{return $pyjs.in_try_except+=1,d.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),a.Event.ONLOAD)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}})();$pyjs.track.lineno=103;$pyjs.track.lineno=103;b=d;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return b},1,[null,null,["self"],
["url"]]);f.prepareImage=c;$pyjs.track.lineno=105;c=$pyjs__bind_method2("onLoad",function(a,e){if(!0===this.__is_instance__)var b=this;else b=a,a=e;var d,c;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:105};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=105;$pyjs.track.lineno=107;var f;a:{try{try{$pyjs.in_try_except+=1;f=null===(c=!(null===(d=a.__isLoaded)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?
d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1))||!1===c||0===c||""===c?!1:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||$p._handle_exception(g),g;}f=void 0}if(f){$pyjs.track.lineno=112;a.__isLoaded=!0;$pyjs.track.lineno=113;try{try{$pyjs.in_try_except+=1,b.incrementLoadedImages()}finally{$pyjs.in_try_except-=1}}catch(l){throw $p.isinstance(l,
$p.StopIteration)||$p._handle_exception(l),l;}$pyjs.track.lineno=114;try{try{$pyjs.in_try_except+=1,a.removeLoadListener(b)}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),n;}}$pyjs.track.lineno=118;try{try{$pyjs.in_try_except+=1,b.dispatchIfComplete()}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}$pyjs.track.lineno=120;$pyjs.track.lineno=120;b=a;$pyjs.trackstack.pop();$pyjs.track=
$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return b},1,[null,null,["self"],["img"]]);f.onLoad=c;$pyjs.track.lineno=32;c=Array(pyjslib.object);var g=$p.dict(),v;for(v in f)g.__setitem__(v,f[v]);return $p._create_class("ImageLoader",$p.tuple(c),g)}();$pyjs.track.lineno=124;$pyjs.track.lineno=134;a.loadImages=function(f,c){var g,v,k,e,b,d,h,p,u,l,n,m,q,r,x,w;$pyjs.track={module:"pyjamas.Canvas.ImageLoader",lineno:134};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Canvas.ImageLoader";
$pyjs.track.lineno=134;$pyjs.track.lineno=135;a:{try{try{$pyjs.in_try_except+=1;k=a.ImageLoader();break a}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||$p._handle_exception(s),s;}k=void 0}$pyjs.track.lineno=136;w=$pyjs.trackstack.length;g=function(){try{try{return $pyjs.in_try_except+=1,function(){try{try{return $pyjs.in_try_except+=1,$p.range(function(){try{try{return $pyjs.in_try_except+=1,null===(h=f)?0:"undefined"!=typeof h.__array?h.__array.length:"function"==
typeof h.__len__?h.__len__():"undefined"!=typeof h.length?h.length:$p.len(h)}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();"undefined"!=typeof(b=g.__array)?m=0:(g=g.__iter__(),m="undefined"!=typeof(b=g.__array)?
0:"function"==typeof g.$genfunc?1:-1);for(x=0;"undefined"!=typeof(d=m?0<m?g.next(!0,!1):$p.wrapped_next(g):b[x++]);)q=d,$pyjs.track.lineno=137,function(){try{try{return $pyjs.in_try_except+=1,k.addHandle(function(){try{try{return $pyjs.in_try_except+=1,k.prepareImage("undefined"!=typeof(n=f).__array?"undefined"!=typeof n.__array[u=q]?n.__array[u]:n.__getitem__(u):n.__getitem__(q))}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=
1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();$pyjs.trackstack.length>w&&($pyjs.trackstack=$pyjs.trackstack.slice(0,w),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.track.lineno=139;try{try{$pyjs.in_try_except+=1,k.finalize(c)}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}$pyjs.track.lineno=140;try{try{$pyjs.in_try_except+=1,a.imageLoaders.append(k)}finally{$pyjs.in_try_except-=
1}}catch(y){throw $p.isinstance(y,$p.StopIteration)||$p._handle_exception(y),y;}$pyjs.track.lineno=142;w=$pyjs.trackstack.length;b=function(){try{try{return $pyjs.in_try_except+=1,function(){try{try{return $pyjs.in_try_except+=1,$p.range(function(){try{try{return $pyjs.in_try_except+=1,null===(r=f)?0:"undefined"!=typeof r.__array?r.__array.length:"function"==typeof r.__len__?r.__len__():"undefined"!=typeof r.length?r.length:$p.len(r)}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,
$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();"undefined"!=typeof(x=b.__array)?g=0:(b=b.__iter__(),g="undefined"!=typeof(x=b.__array)?0:"function"==typeof b.$genfunc?1:-1);for(d=0;"undefined"!=typeof(m=g?0<g?b.next(!0,!1):$p.wrapped_next(b):x[d++]);){q=m;$pyjs.track.lineno=
143;try{try{$pyjs.in_try_except+=1,("undefined"!=typeof(l=k.images).__array?"undefined"!=typeof l.__array[p=q]?l.__array[p]:l.__getitem__(p):l.__getitem__(q)).setUrl("undefined"!=typeof(e=f).__array?"undefined"!=typeof e.__array[v=q]?e.__array[v]:e.__getitem__(v):e.__getitem__(q))}finally{$pyjs.in_try_except-=1}}catch(z){throw $p.isinstance(z,$p.StopIteration)||$p._handle_exception(z),z;}}$pyjs.trackstack.length>w&&($pyjs.trackstack=$pyjs.trackstack.slice(0,w),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);
$pyjs.track.module="pyjamas.Canvas.ImageLoader";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.loadImages.__name__="loadImages";a.loadImages.__bind_type__=0;a.loadImages.__args__=[null,null,["urls"],["cb"]];return this};
