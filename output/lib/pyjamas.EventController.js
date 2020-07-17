$pyjs.loaded_modules["pyjamas.EventController"]=function(s){if($pyjs.loaded_modules["pyjamas.EventController"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.EventController"];"undefined"!=typeof $pyjs.loaded_modules.pyjamas&&$pyjs.loaded_modules.pyjamas.__was_initialized__||$p.___import___("pyjamas",null);var a=$pyjs.loaded_modules["pyjamas.EventController"];a.__repr__=function(){return"<module: pyjamas.EventController>"};a.__was_initialized__=!0;if(null===s||"undefined"==typeof s)s="pyjamas.EventController";
a.__name__=s;a.__track_lines__=[];$pyjs.loaded_modules.pyjamas.EventController=$pyjs.loaded_modules["pyjamas.EventController"];a.__track_lines__[1]="pyjamas.EventController.py, line 1:\n    # Module for creating event handlers";a.__track_lines__[26]="pyjamas.EventController.py, line 26:\n    class EventGenerator():";a.__track_lines__[27]="pyjamas.EventController.py, line 27:\n    def _get_add_listener_func_name(self, ev):";a.__track_lines__[28]='pyjamas.EventController.py, line 28:\n    return "add"+ev+"Listener"';
a.__track_lines__[29]="pyjamas.EventController.py, line 29:\n    def _get_remove_listener_func_name(self, ev):";a.__track_lines__[30]='pyjamas.EventController.py, line 30:\n    return "remove"+ev+"Listener"';a.__track_lines__[31]="pyjamas.EventController.py, line 31:\n    def _get_dispatch_func_name(self, ev):";a.__track_lines__[32]='pyjamas.EventController.py, line 32:\n    return "dispatch"+ev+"Event"';a.__track_lines__[33]="pyjamas.EventController.py, line 33:\n    def addListenedEvent(self, ev):";
a.__track_lines__[35]="pyjamas.EventController.py, line 35:\n    global EventListener # is also a javascript global";a.__track_lines__[36]="pyjamas.EventController.py, line 36:\n    el = EventListener(ev)";a.__track_lines__[38]="pyjamas.EventController.py, line 38:\n    attr_add = self._get_add_listener_func_name(ev)";a.__track_lines__[39]="pyjamas.EventController.py, line 39:\n    setattr(self,attr_add,el.add_listener)";a.__track_lines__[41]="pyjamas.EventController.py, line 41:\n    attr_rem = self._get_remove_listener_func_name(ev)";
a.__track_lines__[42]="pyjamas.EventController.py, line 42:\n    setattr(self,attr_rem,el.rem_listener)";a.__track_lines__[44]="pyjamas.EventController.py, line 44:\n    attr_dsp = self._get_dispatch_func_name(ev)";a.__track_lines__[45]="pyjamas.EventController.py, line 45:\n    setattr(self,attr_dsp,el.dispatch)";a.__track_lines__[51]="pyjamas.EventController.py, line 51:\n    class EventListener():";a.__track_lines__[52]="pyjamas.EventController.py, line 52:\n    def __init__(self, ev):";a.__track_lines__[53]=
"pyjamas.EventController.py, line 53:\n    self.ev = ev";a.__track_lines__[54]="pyjamas.EventController.py, line 54:\n    self.listeners = []";a.__track_lines__[55]="pyjamas.EventController.py, line 55:\n    def add_listener(self, listener):";a.__track_lines__[56]="pyjamas.EventController.py, line 56:\n    self.listeners.append(listener)";a.__track_lines__[57]="pyjamas.EventController.py, line 57:\n    def rem_listener(self, listener):";a.__track_lines__[58]="pyjamas.EventController.py, line 58:\n    self.listeners.remove(listener)";
a.__track_lines__[60]="pyjamas.EventController.py, line 60:\n    def dispatch(self, *args):";a.__track_lines__[61]='pyjamas.EventController.py, line 61:\n    ev = "on"+self.ev';a.__track_lines__[62]="pyjamas.EventController.py, line 62:\n    for listener in self.listeners:";a.__track_lines__[63]="pyjamas.EventController.py, line 63:\n    if hasattr(listener,ev):";a.__track_lines__[64]="pyjamas.EventController.py, line 64:\n    getattr(listener,ev)(*args)";a.__track_lines__[66]="pyjamas.EventController.py, line 66:\n    listener(*args)";
a.__track_lines__[70]="pyjamas.EventController.py, line 70:\n    class Handler(object):";a.__track_lines__[72]="pyjamas.EventController.py, line 72:\n    def __init__(self, parent, event_type, *args, **kwargs):";a.__track_lines__[73]="pyjamas.EventController.py, line 73:\n    if parent is None:";a.__track_lines__[74]="pyjamas.EventController.py, line 74:\n    parent = self";a.__track_lines__[75]="pyjamas.EventController.py, line 75:\n    self.parent = parent";a.__track_lines__[76]="pyjamas.EventController.py, line 76:\n    self.event_type = event_type";
a.__track_lines__[77]="pyjamas.EventController.py, line 77:\n    self.listeners = {}";a.__track_lines__[78]='pyjamas.EventController.py, line 78:\n    self.callback_fnname = "on%s" % event_type';a.__track_lines__[79]="pyjamas.EventController.py, line 79:\n    self.extra_args = args";a.__track_lines__[80]="pyjamas.EventController.py, line 80:\n    self.extra_kwargs = kwargs";a.__track_lines__[83]='pyjamas.EventController.py, line 83:\n    add_listener_fnname = "add%sListener" % event_type';a.__track_lines__[84]=
'pyjamas.EventController.py, line 84:\n    del_listener_fnname = "remove%sListener" % event_type';a.__track_lines__[85]='pyjamas.EventController.py, line 85:\n    listener = "_%sListeners" % event_type';a.__track_lines__[86]='pyjamas.EventController.py, line 86:\n    on_event_name = "on%sEvent" % event_type';a.__track_lines__[87]="pyjamas.EventController.py, line 87:\n    setattr(parent, listener, self)";a.__track_lines__[88]="pyjamas.EventController.py, line 88:\n    setattr(parent, add_listener_fnname, self.addListener)";
a.__track_lines__[89]="pyjamas.EventController.py, line 89:\n    setattr(parent, del_listener_fnname, self.removeListener)";a.__track_lines__[90]="pyjamas.EventController.py, line 90:\n    setattr(parent, on_event_name, self.onEvent)";a.__track_lines__[92]="pyjamas.EventController.py, line 92:\n    def addListener(self, listener, *args, **kwargs):";a.__track_lines__[93]="pyjamas.EventController.py, line 93:\n    args = args or ()";a.__track_lines__[94]="pyjamas.EventController.py, line 94:\n    kwargs = kwargs or {}";
a.__track_lines__[95]="pyjamas.EventController.py, line 95:\n    args = self.extra_args + args";a.__track_lines__[96]="pyjamas.EventController.py, line 96:\n    kwargs.update(self.extra_kwargs)";a.__track_lines__[97]="pyjamas.EventController.py, line 97:\n    self.listeners[listener] = (args, kwargs)";a.__track_lines__[99]="pyjamas.EventController.py, line 99:\n    def removeListener(self, listener):";a.__track_lines__[100]="pyjamas.EventController.py, line 100:\n    self.listeners.pop(listener)";
a.__track_lines__[102]="pyjamas.EventController.py, line 102:\n    def onEvent(self, sender, *eventargs):";a.__track_lines__[103]="pyjamas.EventController.py, line 103:\n    for listener, args in self.listeners.items():";a.__track_lines__[104]="pyjamas.EventController.py, line 104:\n    fn = getattr(listener, self.callback_fnname, listener)";a.__track_lines__[105]="pyjamas.EventController.py, line 105:\n    (args, kwargs) = args";a.__track_lines__[106]="pyjamas.EventController.py, line 106:\n    args = (sender,) + args + eventargs";
a.__track_lines__[107]="pyjamas.EventController.py, line 107:\n    fn(*args, **kwargs)";$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=1;$pyjs.track.lineno=26;a.EventGenerator=function(){var f={},b;f.__module__="pyjamas.EventController";$pyjs.track.lineno=27;b=$pyjs__bind_method2("_get_add_listener_func_name",function(a,g){!0!==this.__is_instance__&&(a=g);$pyjs.track={module:"pyjamas.EventController",lineno:27};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";
$pyjs.track.lineno=27;$pyjs.track.lineno=28;$pyjs.track.lineno=28;var c="add"+a+"Listener";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c},1,[null,null,["self"],["ev"]]);f._get_add_listener_func_name=b;$pyjs.track.lineno=29;b=$pyjs__bind_method2("_get_remove_listener_func_name",function(a,g){!0!==this.__is_instance__&&(a=g);$pyjs.track={module:"pyjamas.EventController",lineno:29};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";
$pyjs.track.lineno=29;$pyjs.track.lineno=30;$pyjs.track.lineno=30;var c="remove"+a+"Listener";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c},1,[null,null,["self"],["ev"]]);f._get_remove_listener_func_name=b;$pyjs.track.lineno=31;b=$pyjs__bind_method2("_get_dispatch_func_name",function(a,g){!0!==this.__is_instance__&&(a=g);$pyjs.track={module:"pyjamas.EventController",lineno:31};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";
$pyjs.track.lineno=31;$pyjs.track.lineno=32;$pyjs.track.lineno=32;var c="dispatch"+a+"Event";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c},1,[null,null,["self"],["ev"]]);f._get_dispatch_func_name=b;$pyjs.track.lineno=33;b=$pyjs__bind_method2("addListenedEvent",function(z,g){if(!0===this.__is_instance__)var c=this;else c=z,z=g;var d,l,e,b;$pyjs.track={module:"pyjamas.EventController",lineno:33};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module=
"pyjamas.EventController";$pyjs.track.lineno=33;$pyjs.track.lineno=35;$pyjs.track.lineno=36;a:{try{try{$pyjs.in_try_except+=1;l=a.EventListener(z);break a}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}l=void 0}$pyjs.track.lineno=38;a:{try{try{$pyjs.in_try_except+=1;b=c._get_add_listener_func_name(z);break a}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}b=void 0}$pyjs.track.lineno=
39;try{try{$pyjs.in_try_except+=1,$p.setattr(c,b,l.add_listener)}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}$pyjs.track.lineno=41;a:{try{try{$pyjs.in_try_except+=1;d=c._get_remove_listener_func_name(z);break a}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),n;}d=void 0}$pyjs.track.lineno=42;try{try{$pyjs.in_try_except+=1,$p.setattr(c,d,l.rem_listener)}finally{$pyjs.in_try_except-=
1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}$pyjs.track.lineno=44;a:{try{try{$pyjs.in_try_except+=1;e=c._get_dispatch_func_name(z);break a}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,$p.StopIteration)||$p._handle_exception(r),r;}e=void 0}$pyjs.track.lineno=45;try{try{$pyjs.in_try_except+=1,$p.setattr(c,e,l.dispatch)}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["ev"]]);f.addListenedEvent=b;$pyjs.track.lineno=26;b=Array(pyjslib.object);var q=$p.dict(),k;for(k in f)q.__setitem__(k,f[k]);return $p._create_class("EventGenerator",$p.tuple(b),q)}();$pyjs.track.lineno=51;a.EventListener=function(){var a={},b;a.__module__="pyjamas.EventController";$pyjs.track.lineno=52;b=$pyjs__bind_method2("__init__",function(a,g){if(!0===this.__is_instance__)var c=this;else c=
a,a=g;$pyjs.track={module:"pyjamas.EventController",lineno:52};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=52;$pyjs.track.lineno=53;c.ev=a;$pyjs.track.lineno=54;var d;a:{try{try{$pyjs.in_try_except+=1;d=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(l){throw $p.isinstance(l,$p.StopIteration)||$p._handle_exception(l),l;}d=void 0}c.listeners=d;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
return null},1,[null,null,["self"],["ev"]]);a.__init__=b;$pyjs.track.lineno=55;b=$pyjs__bind_method2("add_listener",function(a,g){if(!0===this.__is_instance__)var c=this;else c=a,a=g;$pyjs.track={module:"pyjamas.EventController",lineno:55};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=55;$pyjs.track.lineno=56;try{try{$pyjs.in_try_except+=1,c.listeners.append(a)}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),
d;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["listener"]]);a.add_listener=b;$pyjs.track.lineno=57;b=$pyjs__bind_method2("rem_listener",function(a,g){if(!0===this.__is_instance__)var c=this;else c=a,a=g;$pyjs.track={module:"pyjamas.EventController",lineno:57};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=57;$pyjs.track.lineno=58;try{try{$pyjs.in_try_except+=1,
c.listeners.remove(a)}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["listener"]]);a.rem_listener=b;$pyjs.track.lineno=60;b=$pyjs__bind_method2("dispatch",function(){if(!0===this.__is_instance__)var a=this,g=$p.tuple($pyjs_array_slice.call(arguments,0,arguments.length));else a=arguments[0],g=$p.tuple($pyjs_array_slice.call(arguments,
1,arguments.length));var c,d,l,e,b,f,h,m;$pyjs.track={module:"pyjamas.EventController",lineno:60};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=60;$pyjs.track.lineno=61;h="on"+a.ev;$pyjs.track.lineno=62;f=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=1;d=a.listeners;break a}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),n;}d=void 0}"undefined"!=typeof(b=d.__array)?c=0:(d=d.__iter__(),
c="undefined"!=typeof(b=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(m=0;"undefined"!=typeof(a=c?0<c?d.next(!0,!1):$p.wrapped_next(d):b[m++]);)if(l=a,$pyjs.track.lineno=63,function(){try{try{$pyjs.in_try_except+=1;var a;a:{try{try{$pyjs.in_try_except+=1;a=$p.hasattr(l,h);break a}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}a=void 0}return null===(e=a)||!1===e||0===e||""===e?!1:"object"==typeof e?"function"==typeof e.__nonzero__?
e.__nonzero__():"function"==typeof e.__len__?0<e.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}}())$pyjs.track.lineno=64,function(){try{try{$pyjs.in_try_except+=1;var a=$pyjs_kwargs_call,c;a:{try{try{$pyjs.in_try_except+=1;c=$p.getattr(l,h);break a}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}c=void 0}return a(null,c,g,null,[{}])}finally{$pyjs.in_try_except-=
1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}();else{$pyjs.track.lineno=66;try{try{$pyjs.in_try_except+=1,$pyjs_kwargs_call(null,l,g,null,[{}])}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}}$pyjs.trackstack.length>f&&($pyjs.trackstack=$pyjs.trackstack.slice(0,f),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.EventController";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return null},1,["args",null,["self"]]);a.dispatch=b;$pyjs.track.lineno=51;b=Array(pyjslib.object);var q=$p.dict(),k;for(k in a)q.__setitem__(k,a[k]);return $p._create_class("EventListener",$p.tuple(b),q)}();$pyjs.track.lineno=70;a.Handler=function(){var a={},b;a.__module__="pyjamas.EventController";$pyjs.track.lineno=72;b=$pyjs__bind_method2("__init__",function(a,g){if(!0===this.__is_instance__)var c=this,d=$p.tuple($pyjs_array_slice.call(arguments,2,arguments.length-
1)),b=3<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];else c=arguments[0],a=arguments[1],g=arguments[2],d=$p.tuple($pyjs_array_slice.call(arguments,3,arguments.length-1)),b=4<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===b||"object"!=typeof b||"dict"!=b.__name__||"undefined"==typeof b.$pyjs_is_kwarg?("undefined"!=typeof b&&d.__array.push(b),b=arguments[arguments.length+1]):delete b.$pyjs_is_kwarg;"undefined"==typeof b&&(b=$p.__empty_dict(),
"undefined"!=typeof g?null!==g&&"undefined"!=typeof g.$pyjs_is_kwarg&&(b=g,g=arguments[3]):"undefined"!=typeof a?null!==a&&"undefined"!=typeof a.$pyjs_is_kwarg&&(b=a,a=arguments[3]):"undefined"!=typeof c&&null!==c&&"undefined"!=typeof c.$pyjs_is_kwarg&&(b=c,c=arguments[3]));var e,A,f,h,m;$pyjs.track={module:"pyjamas.EventController",lineno:72};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=72;$pyjs.track.lineno=73;var n;a:{try{try{$pyjs.in_try_except+=
1;n=null===(h=null===a)||!1===h||0===h||""===h?!1:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}n=void 0}n&&($pyjs.track.lineno=74,a=c);$pyjs.track.lineno=75;c.parent=a;$pyjs.track.lineno=76;c.event_type=g;$pyjs.track.lineno=77;h=c;var r;a:{try{try{$pyjs.in_try_except+=1;r=$p.dict([]);break a}finally{$pyjs.in_try_except-=
1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}r=void 0}h.listeners=r;$pyjs.track.lineno=78;r=c;var k;a:{try{try{$pyjs.in_try_except+=1;k=$p.sprintf("on%s",g);break a}finally{$pyjs.in_try_except-=1}}catch(q){throw $p.isinstance(q,$p.StopIteration)||$p._handle_exception(q),q;}k=void 0}r.callback_fnname=k;$pyjs.track.lineno=79;c.extra_args=d;$pyjs.track.lineno=80;c.extra_kwargs=b;$pyjs.track.lineno=83;a:{try{try{$pyjs.in_try_except+=1;A=$p.sprintf("add%sListener",g);
break a}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}A=void 0}$pyjs.track.lineno=84;a:{try{try{$pyjs.in_try_except+=1;f=$p.sprintf("remove%sListener",g);break a}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}f=void 0}$pyjs.track.lineno=85;a:{try{try{$pyjs.in_try_except+=1;e=$p.sprintf("_%sListeners",g);break a}finally{$pyjs.in_try_except-=1}}catch(w){throw $p.isinstance(w,
$p.StopIteration)||$p._handle_exception(w),w;}e=void 0}$pyjs.track.lineno=86;a:{try{try{$pyjs.in_try_except+=1;m=$p.sprintf("on%sEvent",g);break a}finally{$pyjs.in_try_except-=1}}catch(x){throw $p.isinstance(x,$p.StopIteration)||$p._handle_exception(x),x;}m=void 0}$pyjs.track.lineno=87;try{try{$pyjs.in_try_except+=1,$p.setattr(a,e,c)}finally{$pyjs.in_try_except-=1}}catch(y){throw $p.isinstance(y,$p.StopIteration)||$p._handle_exception(y),y;}$pyjs.track.lineno=88;try{try{$pyjs.in_try_except+=1,$p.setattr(a,
A,c.addListener)}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||$p._handle_exception(s),s;}$pyjs.track.lineno=89;try{try{$pyjs.in_try_except+=1,$p.setattr(a,f,c.removeListener)}finally{$pyjs.in_try_except-=1}}catch(C){throw $p.isinstance(C,$p.StopIteration)||$p._handle_exception(C),C;}$pyjs.track.lineno=90;try{try{$pyjs.in_try_except+=1,$p.setattr(a,m,c.onEvent)}finally{$pyjs.in_try_except-=1}}catch(D){throw $p.isinstance(D,$p.StopIteration)||$p._handle_exception(D),
D;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,["args",["kwargs"],["self"],["parent"],["event_type"]]);a.__init__=b;$pyjs.track.lineno=92;b=$pyjs__bind_method2("addListener",function(a){if(!0===this.__is_instance__)var b=this,c=$p.tuple($pyjs_array_slice.call(arguments,1,arguments.length-1)),d=2<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];else b=arguments[0],a=arguments[1],c=$p.tuple($pyjs_array_slice.call(arguments,
2,arguments.length-1)),d=3<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===d||"object"!=typeof d||"dict"!=d.__name__||"undefined"==typeof d.$pyjs_is_kwarg?("undefined"!=typeof d&&c.__array.push(d),d=arguments[arguments.length+1]):delete d.$pyjs_is_kwarg;"undefined"==typeof d&&(d=$p.__empty_dict(),"undefined"!=typeof a?null!==a&&"undefined"!=typeof a.$pyjs_is_kwarg&&(d=a,a=arguments[2]):"undefined"!=typeof b&&null!==b&&"undefined"!=typeof b.$pyjs_is_kwarg&&(d=b,b=
arguments[2]));var l,e,f;$pyjs.track={module:"pyjamas.EventController",lineno:92};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=92;$pyjs.track.lineno=93;var k;if(null===(e=l=c)||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1)k=l;else a:{try{try{$pyjs.in_try_except+=1;k=$p.tuple([]);break a}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||
$p._handle_exception(h),h;}k=void 0}c=k;$pyjs.track.lineno=94;var m;if(null===(f=l=d)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)m=l;else a:{try{try{$pyjs.in_try_except+=1;m=$p.dict([]);break a}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),n;}m=void 0}d=m;$pyjs.track.lineno=95;c=b.extra_args+c;$pyjs.track.lineno=96;try{try{$pyjs.in_try_except+=
1,d.update(b.extra_kwargs)}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}$pyjs.track.lineno=97;(function(){try{try{return $pyjs.in_try_except+=1,b.listeners.__setitem__(a,function(){try{try{return $pyjs.in_try_except+=1,$p.tuple([c,d])}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,$p.StopIteration)||$p._handle_exception(e),
e;}})();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,["args",["kwargs"],["self"],["listener"]]);a.addListener=b;$pyjs.track.lineno=99;b=$pyjs__bind_method2("removeListener",function(a,b){if(!0===this.__is_instance__)var c=this;else c=a,a=b;$pyjs.track={module:"pyjamas.EventController",lineno:99};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=99;$pyjs.track.lineno=100;try{try{$pyjs.in_try_except+=
1,c.listeners.pop(a)}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["listener"]]);a.removeListener=b;$pyjs.track.lineno=102;b=$pyjs__bind_method2("onEvent",function(a){if(!0===this.__is_instance__)var b=this,c=$p.tuple($pyjs_array_slice.call(arguments,1,arguments.length));else b=arguments[0],a=arguments[1],c=
$p.tuple($pyjs_array_slice.call(arguments,2,arguments.length));var d,f,e,k,q,h,m,n;$pyjs.track={module:"pyjamas.EventController",lineno:102};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.EventController";$pyjs.track.lineno=102;$pyjs.track.lineno=103;m=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=1;b:{try{try{$pyjs.in_try_except+=1;f=b.listeners.items();break b}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}f=
void 0}e=f;break a}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,$p.StopIteration)||$p._handle_exception(r),r;}e=void 0}"undefined"!=typeof(n=e.__array)?f=0:(e=e.__iter__(),f="undefined"!=typeof(n=e.__array)?0:"function"==typeof e.$genfunc?1:-1);for(q=0;"undefined"!=typeof(d=f?0<f?e.next(!0,!1):$p.wrapped_next(e):n[q++]);){var t;a:{try{try{$pyjs.in_try_except+=1;t=$p.__ass_unpack(d,2,null);break a}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||$p._handle_exception(s),
s;}t=void 0}k=t[0];d=t[1];$pyjs.track.lineno=104;a:{try{try{$pyjs.in_try_except+=1;h=$p.getattr(k,b.callback_fnname,k);break a}finally{$pyjs.in_try_except-=1}}catch(B){throw $p.isinstance(B,$p.StopIteration)||$p._handle_exception(B),B;}h=void 0}$pyjs.track.lineno=105;var u;a:{try{try{$pyjs.in_try_except+=1;u=$p.__ass_unpack(d,2,null);break a}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}u=void 0}d=u[0];k=u[1];$pyjs.track.lineno=106;var w;
a:{try{try{$pyjs.in_try_except+=1;w=$p.tuple([a]);break a}finally{$pyjs.in_try_except-=1}}catch(x){throw $p.isinstance(x,$p.StopIteration)||$p._handle_exception(x),x;}w=void 0}d=w+d+c;$pyjs.track.lineno=107;try{try{$pyjs.in_try_except+=1,$pyjs_kwargs_call(null,h,d,k,[{}])}finally{$pyjs.in_try_except-=1}}catch(y){throw $p.isinstance(y,$p.StopIteration)||$p._handle_exception(y),y;}}$pyjs.trackstack.length>m&&($pyjs.trackstack=$pyjs.trackstack.slice(0,m),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module=
"pyjamas.EventController";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,["eventargs",null,["self"],["sender"]]);a.onEvent=b;$pyjs.track.lineno=70;b=Array($p.object);var q=$p.dict(),k;for(k in a)q.__setitem__(k,a[k]);return $p._create_class("Handler",$p.tuple(b),q)}();return this};
