$pyjs.loaded_modules["pyjamas.ui.Focus"]=function(k){if($pyjs.loaded_modules["pyjamas.ui.Focus"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.Focus"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var a=$pyjs.loaded_modules["pyjamas.ui.Focus"];a.__repr__=function(){return"<module: pyjamas.ui.Focus>"};a.__was_initialized__=!0;if(null===k||"undefined"==typeof k)k="pyjamas.ui.Focus";a.__name__=
k;a.__track_lines__=[];$pyjs.loaded_modules["pyjamas.ui"].Focus=$pyjs.loaded_modules["pyjamas.ui.Focus"];a.__track_lines__[1]="pyjamas.ui.Focus.py, line 1:\n    # Copyright 2006 James Tauber and contributors";a.__track_lines__[15]="pyjamas.ui.Focus.py, line 15:\n    import pyjd";a.__track_lines__[16]="pyjamas.ui.Focus.py, line 16:\n    from pyjamas import DOM";a.__track_lines__[17]="pyjamas.ui.Focus.py, line 17:\n    from __pyjamas__ import JS";a.__track_lines__[19]="pyjamas.ui.Focus.py, line 19:\n    if not pyjd.is_desktop:";
a.__track_lines__[20]='pyjamas.ui.Focus.py, line 20:\n    JS("""';a.__track_lines__[24]="pyjamas.ui.Focus.py, line 24:\n    def ensureFocusHandler():";a.__track_lines__[25]="pyjamas.ui.Focus.py, line 25:\n    pass";a.__track_lines__[27]="pyjamas.ui.Focus.py, line 27:\n    def createFocusHandler():";a.__track_lines__[28]="pyjamas.ui.Focus.py, line 28:\n    pass";a.__track_lines__[30]="pyjamas.ui.Focus.py, line 30:\n    def createFocusable0():";a.__track_lines__[31]="pyjamas.ui.Focus.py, line 31:\n    pass";
a.__track_lines__[33]="pyjamas.ui.Focus.py, line 33:\n    def blur(elem):";a.__track_lines__[34]="pyjamas.ui.Focus.py, line 34:\n    elem.blur()";a.__track_lines__[36]="pyjamas.ui.Focus.py, line 36:\n    def createFocusable():";a.__track_lines__[37]="pyjamas.ui.Focus.py, line 37:\n    e = DOM.createDiv()";a.__track_lines__[38]="pyjamas.ui.Focus.py, line 38:\n    e.tabIndex = 0";a.__track_lines__[39]="pyjamas.ui.Focus.py, line 39:\n    return e";a.__track_lines__[41]="pyjamas.ui.Focus.py, line 41:\n    def focus(elem):";
a.__track_lines__[42]="pyjamas.ui.Focus.py, line 42:\n    elem.focus()";a.__track_lines__[44]="pyjamas.ui.Focus.py, line 44:\n    def getTabIndex(elem):";a.__track_lines__[45]="pyjamas.ui.Focus.py, line 45:\n    return elem.tabIndex";a.__track_lines__[47]="pyjamas.ui.Focus.py, line 47:\n    def setAccessKey(elem, key):";a.__track_lines__[48]="pyjamas.ui.Focus.py, line 48:\n    elem.accessKey = key";a.__track_lines__[50]="pyjamas.ui.Focus.py, line 50:\n    def setTabIndex(elem, index):";a.__track_lines__[51]=
"pyjamas.ui.Focus.py, line 51:\n    elem.tabIndex = index";a.__track_lines__[54]="pyjamas.ui.Focus.py, line 54:\n    class FocusMixin:";a.__track_lines__[56]="pyjamas.ui.Focus.py, line 56:\n    def getTabIndex(self):";a.__track_lines__[57]="pyjamas.ui.Focus.py, line 57:\n    return getTabIndex(self.getElement())";a.__track_lines__[59]="pyjamas.ui.Focus.py, line 59:\n    def setAccessKey(self, key):";a.__track_lines__[60]="pyjamas.ui.Focus.py, line 60:\n    setAccessKey(self.getElement(), key)";a.__track_lines__[62]=
"pyjamas.ui.Focus.py, line 62:\n    def setFocus(self, focused):";a.__track_lines__[63]="pyjamas.ui.Focus.py, line 63:\n    if (focused):";a.__track_lines__[64]="pyjamas.ui.Focus.py, line 64:\n    focus(self.getElement())";a.__track_lines__[66]="pyjamas.ui.Focus.py, line 66:\n    blur(self.getElement())";a.__track_lines__[68]="pyjamas.ui.Focus.py, line 68:\n    def setTabIndex(self, index):";a.__track_lines__[69]="pyjamas.ui.Focus.py, line 69:\n    setTabIndex(self.getElement(), index)";a.__track_lines__[71]=
"pyjamas.ui.Focus.py, line 71:\n    def isEnabled(self):";a.__track_lines__[72]="pyjamas.ui.Focus.py, line 72:\n    try:";a.__track_lines__[73]='pyjamas.ui.Focus.py, line 73:\n    return not DOM.getBooleanAttribute(self.getElement(), "disabled")';a.__track_lines__[75]="pyjamas.ui.Focus.py, line 75:\n    return True";a.__track_lines__[77]="pyjamas.ui.Focus.py, line 77:\n    return True";a.__track_lines__[79]="pyjamas.ui.Focus.py, line 79:\n    def setEnabled(self, enabled):";a.__track_lines__[80]=
'pyjamas.ui.Focus.py, line 80:\n    DOM.setBooleanAttribute(self.getElement(), "disabled", not enabled)';a.__track_lines__[82]="pyjamas.ui.Focus.py, line 82:\n    def isReadonly(self):";a.__track_lines__[83]="pyjamas.ui.Focus.py, line 83:\n    try:";a.__track_lines__[84]='pyjamas.ui.Focus.py, line 84:\n    return not DOM.getBooleanAttribute(self.getElement(), "readOnly")';a.__track_lines__[86]="pyjamas.ui.Focus.py, line 86:\n    return True";a.__track_lines__[88]="pyjamas.ui.Focus.py, line 88:\n    return True";
a.__track_lines__[90]="pyjamas.ui.Focus.py, line 90:\n    def setReadonly(self, readonly):";a.__track_lines__[91]='pyjamas.ui.Focus.py, line 91:\n    DOM.setBooleanAttribute(self.getElement(), "readOnly", readonly)';var h,g;$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=1;$pyjs.track.lineno=15;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.pyjd=$p.___import___("pyjd","pyjamas.ui");$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=16;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=17;$pyjs.track.lineno=19;var l;a:{try{try{$pyjs.in_try_except+=1;l=null===(g=!(null===(h=a.pyjd.is_desktop)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?
h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1))||!1===g||0===g||""===g?!1:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}l=void 0}l&&($pyjs.track.lineno=20);$pyjs.track.lineno=24;a.ensureFocusHandler=function(){$pyjs.track={module:"pyjamas.ui.Focus",lineno:24};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=24;$pyjs.track.lineno=25;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.ensureFocusHandler.__name__="ensureFocusHandler";a.ensureFocusHandler.__bind_type__=0;a.ensureFocusHandler.__args__=[null,null];$pyjs.track.lineno=27;a.createFocusHandler=function(){$pyjs.track={module:"pyjamas.ui.Focus",lineno:27};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=
27;$pyjs.track.lineno=28;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.createFocusHandler.__name__="createFocusHandler";a.createFocusHandler.__bind_type__=0;a.createFocusHandler.__args__=[null,null];$pyjs.track.lineno=30;a.createFocusable0=function(){$pyjs.track={module:"pyjamas.ui.Focus",lineno:30};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=30;$pyjs.track.lineno=31;$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.createFocusable0.__name__="createFocusable0";a.createFocusable0.__bind_type__=0;a.createFocusable0.__args__=[null,null];$pyjs.track.lineno=33;a.blur=function(a){$pyjs.track={module:"pyjamas.ui.Focus",lineno:33};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=33;$pyjs.track.lineno=34;try{try{$pyjs.in_try_except+=1,a.blur()}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,
$p.StopIteration)||$p._handle_exception(b),b;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.blur.__name__="blur";a.blur.__bind_type__=0;a.blur.__args__=[null,null,["elem"]];$pyjs.track.lineno=36;a.createFocusable=function(){var e;$pyjs.track={module:"pyjamas.ui.Focus",lineno:36};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=36;$pyjs.track.lineno=37;a:{try{try{$pyjs.in_try_except+=1;e=a.DOM.createDiv();
break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}e=void 0}$pyjs.track.lineno=38;e.tabIndex=0;$pyjs.track.lineno=39;$pyjs.track.lineno=39;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return e};a.createFocusable.__name__="createFocusable";a.createFocusable.__bind_type__=0;a.createFocusable.__args__=[null,null];$pyjs.track.lineno=41;a.focus=function(a){$pyjs.track={module:"pyjamas.ui.Focus",
lineno:41};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=41;$pyjs.track.lineno=42;try{try{$pyjs.in_try_except+=1,a.focus()}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.focus.__name__="focus";a.focus.__bind_type__=0;a.focus.__args__=[null,null,["elem"]];$pyjs.track.lineno=44;a.getTabIndex=
function(a){$pyjs.track={module:"pyjamas.ui.Focus",lineno:44};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=44;$pyjs.track.lineno=45;$pyjs.track.lineno=45;a=a.tabIndex;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a};a.getTabIndex.__name__="getTabIndex";a.getTabIndex.__bind_type__=0;a.getTabIndex.__args__=[null,null,["elem"]];$pyjs.track.lineno=47;a.setAccessKey=function(a,b){$pyjs.track={module:"pyjamas.ui.Focus",
lineno:47};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=47;$pyjs.track.lineno=48;a.accessKey=b;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setAccessKey.__name__="setAccessKey";a.setAccessKey.__bind_type__=0;a.setAccessKey.__args__=[null,null,["elem"],["key"]];$pyjs.track.lineno=50;a.setTabIndex=function(a,b){$pyjs.track={module:"pyjamas.ui.Focus",lineno:50};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=50;$pyjs.track.lineno=51;a.tabIndex=b;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setTabIndex.__name__="setTabIndex";a.setTabIndex.__bind_type__=0;a.setTabIndex.__args__=[null,null,["elem"],["index"]];$pyjs.track.lineno=54;a.FocusMixin=function(){var e={},b;e.__module__="pyjamas.ui.Focus";$pyjs.track.lineno=56;b=$pyjs__bind_method2("getTabIndex",function(n){var b=!0===this.__is_instance__?
this:n;$pyjs.track={module:"pyjamas.ui.Focus",lineno:56};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=56;$pyjs.track.lineno=57;$pyjs.track.lineno=57;n=function(){try{try{return $pyjs.in_try_except+=1,a.getTabIndex(function(){try{try{return $pyjs.in_try_except+=1,b.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,
$p.StopIteration)||$p._handle_exception(c),c;}}();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return n},1,[null,null,["self"]]);e.getTabIndex=b;$pyjs.track.lineno=59;b=$pyjs__bind_method2("setAccessKey",function(b,e){if(!0===this.__is_instance__)var c=this;else c=b,b=e;$pyjs.track={module:"pyjamas.ui.Focus",lineno:59};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=59;$pyjs.track.lineno=60;(function(){try{try{return $pyjs.in_try_except+=
1,a.setAccessKey(function(){try{try{return $pyjs.in_try_except+=1,c.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),b)}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}})();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["key"]]);e.setAccessKey=b;$pyjs.track.lineno=62;b=$pyjs__bind_method2("setFocus",
function(b,e){if(!0===this.__is_instance__)var c=this;else c=b,b=e;var d;$pyjs.track={module:"pyjamas.ui.Focus",lineno:62};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=62;$pyjs.track.lineno=63;var f;a:{try{try{$pyjs.in_try_except+=1;f=null===(d=b)||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,
$p.StopIteration)||$p._handle_exception(p),p;}f=void 0}f?($pyjs.track.lineno=64,function(){try{try{return $pyjs.in_try_except+=1,a.focus(function(){try{try{return $pyjs.in_try_except+=1,c.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}()):($pyjs.track.lineno=66,function(){try{try{return $pyjs.in_try_except+=1,
a.blur(function(){try{try{return $pyjs.in_try_except+=1,c.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}());$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["focused"]]);e.setFocus=b;$pyjs.track.lineno=68;b=$pyjs__bind_method2("setTabIndex",
function(b,e){if(!0===this.__is_instance__)var c=this;else c=b,b=e;$pyjs.track={module:"pyjamas.ui.Focus",lineno:68};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=68;$pyjs.track.lineno=69;(function(){try{try{return $pyjs.in_try_except+=1,a.setTabIndex(function(){try{try{return $pyjs.in_try_except+=1,c.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),b)}finally{$pyjs.in_try_except-=
1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}})();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["index"]]);e.setTabIndex=b;$pyjs.track.lineno=71;b=$pyjs__bind_method2("isEnabled",function(b){var e=!0===this.__is_instance__?this:b,c;$pyjs.track={module:"pyjamas.ui.Focus",lineno:71};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=71;$pyjs.track.lineno=
72;b=$pyjs.trackstack.length;try{try{$pyjs.in_try_except+=1;$pyjs.track.lineno=73;$pyjs.track.lineno=73;var d=!(null===(c=function(){try{try{return $pyjs.in_try_except+=1,a.DOM.getBooleanAttribute(function(){try{try{return $pyjs.in_try_except+=1,e.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),"disabled")}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}())||
!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return d}finally{$pyjs.in_try_except-=1}}catch(f){$pyjs.__last_exception_stack__=sys.save_exception_stack(b-1);$pyjs.__active_exception_stack__=null;c="undefined"==typeof f.__name__?f.name:f.__name__;$pyjs.__last_exception__={error:f,module:a};$pyjs.trackstack.length>
b&&($pyjs.trackstack=$pyjs.trackstack.slice(0,b),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.ui.Focus";if(c==$p.TypeError.__name__||$p._isinstance(f,$p.TypeError))return $pyjs.track.lineno=75,$pyjs.track.lineno=75,d=!0,$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),d;if(c==$p.AttributeError.__name__||$p._isinstance(f,$p.AttributeError))return $pyjs.track.lineno=77,$pyjs.track.lineno=77,d=!0,$pyjs.trackstack.pop(),$pyjs.track=
$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),d;$pyjs.__active_exception_stack__=$pyjs.__last_exception_stack__;$pyjs.__last_exception_stack__=null;throw f;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);e.isEnabled=b;$pyjs.track.lineno=79;b=$pyjs__bind_method2("setEnabled",function(b,e){if(!0===this.__is_instance__)var c=this;else c=b,b=e;var d;$pyjs.track={module:"pyjamas.ui.Focus",lineno:79};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=79;$pyjs.track.lineno=80;(function(){try{try{return $pyjs.in_try_except+=1,a.DOM.setBooleanAttribute(function(){try{try{return $pyjs.in_try_except+=1,c.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),"disabled",!(null===(d=b)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1))}finally{$pyjs.in_try_except-=
1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}})();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["enabled"]]);e.setEnabled=b;$pyjs.track.lineno=82;b=$pyjs__bind_method2("isReadonly",function(b){var e=!0===this.__is_instance__?this:b,c;$pyjs.track={module:"pyjamas.ui.Focus",lineno:82};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=82;$pyjs.track.lineno=
83;b=$pyjs.trackstack.length;try{try{$pyjs.in_try_except+=1;$pyjs.track.lineno=84;$pyjs.track.lineno=84;var d=!(null===(c=function(){try{try{return $pyjs.in_try_except+=1,a.DOM.getBooleanAttribute(function(){try{try{return $pyjs.in_try_except+=1,e.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),"readOnly")}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}())||
!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return d}finally{$pyjs.in_try_except-=1}}catch(f){$pyjs.__last_exception_stack__=sys.save_exception_stack(b-1);$pyjs.__active_exception_stack__=null;c="undefined"==typeof f.__name__?f.name:f.__name__;$pyjs.__last_exception__={error:f,module:a};$pyjs.trackstack.length>
b&&($pyjs.trackstack=$pyjs.trackstack.slice(0,b),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.ui.Focus";if(c==$p.TypeError.__name__||$p._isinstance(f,$p.TypeError))return $pyjs.track.lineno=86,$pyjs.track.lineno=86,d=!0,$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),d;if(c==$p.AttributeError.__name__||$p._isinstance(f,$p.AttributeError))return $pyjs.track.lineno=88,$pyjs.track.lineno=88,d=!0,$pyjs.trackstack.pop(),$pyjs.track=
$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),d;$pyjs.__active_exception_stack__=$pyjs.__last_exception_stack__;$pyjs.__last_exception_stack__=null;throw f;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);e.isReadonly=b;$pyjs.track.lineno=90;b=$pyjs__bind_method2("setReadonly",function(b,e){if(!0===this.__is_instance__)var c=this;else c=b,b=e;$pyjs.track={module:"pyjamas.ui.Focus",lineno:90};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.ui.Focus";$pyjs.track.lineno=90;$pyjs.track.lineno=91;(function(){try{try{return $pyjs.in_try_except+=1,a.DOM.setBooleanAttribute(function(){try{try{return $pyjs.in_try_except+=1,c.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),"readOnly",b)}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}})();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["readonly"]]);e.setReadonly=b;$pyjs.track.lineno=54;b=Array(pyjslib.object);var h=$p.dict(),g;for(g in e)h.__setitem__(g,e[g]);return $p._create_class("FocusMixin",$p.tuple(b),h)}();return this};
