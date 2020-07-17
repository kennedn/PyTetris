$pyjs.loaded_modules["pyjamas.ui.RootPanel"]=function(p){if($pyjs.loaded_modules["pyjamas.ui.RootPanel"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.RootPanel"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var a=$pyjs.loaded_modules["pyjamas.ui.RootPanel"];a.__repr__=function(){return"<module: pyjamas.ui.RootPanel>"};a.__was_initialized__=!0;if(null===p||"undefined"==typeof p)p="pyjamas.ui.RootPanel";
a.__name__=p;a.__track_lines__=[];$pyjs.loaded_modules["pyjamas.ui"].RootPanel=$pyjs.loaded_modules["pyjamas.ui.RootPanel"];a.__track_lines__[1]="pyjamas.ui.RootPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors";a.__track_lines__[15]="pyjamas.ui.RootPanel.py, line 15:\n    import sys";a.__track_lines__[16]="pyjamas.ui.RootPanel.py, line 16:\n    from __pyjamas__ import doc";a.__track_lines__[17]="pyjamas.ui.RootPanel.py, line 17:\n    from pyjamas import Factory";a.__track_lines__[19]=
"pyjamas.ui.RootPanel.py, line 19:\n    from pyjamas import DOM";a.__track_lines__[20]="pyjamas.ui.RootPanel.py, line 20:\n    from pyjamas import Window";a.__track_lines__[22]="pyjamas.ui.RootPanel.py, line 22:\n    from pyjamas.ui.AbsolutePanel import AbsolutePanel";a.__track_lines__[24]="pyjamas.ui.RootPanel.py, line 24:\n    rootPanels = {}";a.__track_lines__[25]="pyjamas.ui.RootPanel.py, line 25:\n    class RootPanelManager(object):";a.__track_lines__[27]="pyjamas.ui.RootPanel.py, line 27:\n    def onWindowClosed(self):";
a.__track_lines__[28]="pyjamas.ui.RootPanel.py, line 28:\n    global rootPanels";a.__track_lines__[29]="pyjamas.ui.RootPanel.py, line 29:\n    for panel in rootPanels.itervalues():";a.__track_lines__[30]="pyjamas.ui.RootPanel.py, line 30:\n    panel.onDetach()";a.__track_lines__[32]="pyjamas.ui.RootPanel.py, line 32:\n    def onWindowClosing(self):";a.__track_lines__[33]="pyjamas.ui.RootPanel.py, line 33:\n    return None";a.__track_lines__[35]="pyjamas.ui.RootPanel.py, line 35:\n    def get(id=None):";
a.__track_lines__[39]="pyjamas.ui.RootPanel.py, line 39:\n    if rootPanels.has_key(id):";a.__track_lines__[40]="pyjamas.ui.RootPanel.py, line 40:\n    return rootPanels[id]";a.__track_lines__[42]="pyjamas.ui.RootPanel.py, line 42:\n    element = None";a.__track_lines__[43]="pyjamas.ui.RootPanel.py, line 43:\n    if id is not None:";a.__track_lines__[44]="pyjamas.ui.RootPanel.py, line 44:\n    element = DOM.getElementById(id)";a.__track_lines__[45]="pyjamas.ui.RootPanel.py, line 45:\n    if element is None:";
a.__track_lines__[46]="pyjamas.ui.RootPanel.py, line 46:\n    return None";a.__track_lines__[48]="pyjamas.ui.RootPanel.py, line 48:\n    return manageRootPanel(RootPanelCls(element), id)";a.__track_lines__[50]="pyjamas.ui.RootPanel.py, line 50:\n    def manageRootPanel(panel, id=None):";a.__track_lines__[52]="pyjamas.ui.RootPanel.py, line 52:\n    if len(rootPanels) < 1:";a.__track_lines__[53]="pyjamas.ui.RootPanel.py, line 53:\n    panelManager = RootPanelManager()";a.__track_lines__[54]="pyjamas.ui.RootPanel.py, line 54:\n    Window.addWindowCloseListener(panelManager)";
a.__track_lines__[56]="pyjamas.ui.RootPanel.py, line 56:\n    rootPanels[id] = panel";a.__track_lines__[57]="pyjamas.ui.RootPanel.py, line 57:\n    return panel";a.__track_lines__[59]="pyjamas.ui.RootPanel.py, line 59:\n    class RootPanelCls(AbsolutePanel):";a.__track_lines__[60]="pyjamas.ui.RootPanel.py, line 60:\n    def __init__(self, Element=None, **kwargs):";a.__track_lines__[61]="pyjamas.ui.RootPanel.py, line 61:\n    if Element is not None:";a.__track_lines__[62]="pyjamas.ui.RootPanel.py, line 62:\n    kwargs['Element'] = Element";
a.__track_lines__[63]="pyjamas.ui.RootPanel.py, line 63:\n    AbsolutePanel.__init__(self, **kwargs)";a.__track_lines__[64]="pyjamas.ui.RootPanel.py, line 64:\n    if Element is None:";a.__track_lines__[66]="pyjamas.ui.RootPanel.py, line 66:\n    Element = self.getBodyElement()";a.__track_lines__[67]="pyjamas.ui.RootPanel.py, line 67:\n    self.setElement(Element)";a.__track_lines__[68]="pyjamas.ui.RootPanel.py, line 68:\n    self.onAttach()";a.__track_lines__[70]="pyjamas.ui.RootPanel.py, line 70:\n    def getBodyElement(self):";
a.__track_lines__[71]="pyjamas.ui.RootPanel.py, line 71:\n    return doc().body";a.__track_lines__[73]="pyjamas.ui.RootPanel.py, line 73:\n    Factory.registerClass('pyjamas.ui.RootPanel', 'RootPanelCls', RootPanelCls)";a.__track_lines__[75]="pyjamas.ui.RootPanel.py, line 75:\n    def RootPanel(id=None):";a.__track_lines__[76]="pyjamas.ui.RootPanel.py, line 76:\n    return get(id)";$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=1;$pyjs.track.lineno=15;$pyjs.track={module:$pyjs.track.module,
lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.sys=$p.___import___("sys","pyjamas.ui");$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=16;$pyjs.track.lineno=17;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.Factory=$p.___import___("pyjamas.Factory","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
$pyjs.track.lineno=19;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=20;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.Window=$p.___import___("pyjamas.Window","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=22;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.AbsolutePanel=$p.___import___("pyjamas.ui.AbsolutePanel.AbsolutePanel","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=24;var q;a:{try{try{$pyjs.in_try_except+=1;q=$p.dict([]);break a}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,$p.StopIteration)||
$p._handle_exception(r),r;}q=void 0}a.rootPanels=q;$pyjs.track.lineno=25;a.RootPanelManager=function(){var d={},c;d.__module__="pyjamas.ui.RootPanel";$pyjs.track.lineno=27;c=$pyjs__bind_method2("onWindowClosed",function(g){var b,e,d,c,f;$pyjs.track={module:"pyjamas.ui.RootPanel",lineno:27};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=27;$pyjs.track.lineno=28;$pyjs.track.lineno=29;g=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=1;b:{try{try{$pyjs.in_try_except+=
1;e=a.rootPanels.itervalues();break b}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}e=void 0}c=e;break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}c=void 0}"undefined"!=typeof(f=c.__array)?e=0:(c=c.__iter__(),e="undefined"!=typeof(f=c.__array)?0:"function"==typeof c.$genfunc?1:-1);for(d=0;"undefined"!=typeof(b=e?0<e?c.next(!0,!1):$p.wrapped_next(c):f[d++]);){$pyjs.track.lineno=
30;try{try{$pyjs.in_try_except+=1,b.onDetach()}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),n;}}$pyjs.trackstack.length>g&&($pyjs.trackstack=$pyjs.trackstack.slice(0,g),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);d.onWindowClosed=c;$pyjs.track.lineno=32;c=$pyjs__bind_method2("onWindowClosing",
function(a){$pyjs.track={module:"pyjamas.ui.RootPanel",lineno:32};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=32;$pyjs.track.lineno=33;$pyjs.track.lineno=33;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);d.onWindowClosing=c;$pyjs.track.lineno=25;c=Array($p.object);var b=$p.dict(),f;for(f in d)b.__setitem__(f,d[f]);return $p._create_class("RootPanelManager",$p.tuple(c),
b)}();$pyjs.track.lineno=35;a.get=function(d){"undefined"==typeof d&&(d=arguments.callee.__args__[2][1]);var c,b,f,g,l,e;$pyjs.track={module:"pyjamas.ui.RootPanel",lineno:35};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=35;$pyjs.track.lineno=39;if(function(){try{try{$pyjs.in_try_except+=1;var c;a:{try{try{$pyjs.in_try_except+=1;c=a.rootPanels.has_key(d);break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),
b;}c=void 0}return null===(g=c)||!1===g||0===g||""===g?!1:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,$p.StopIteration)||$p._handle_exception(e),e;}}())return $pyjs.track.lineno=40,$pyjs.track.lineno=40,b="undefined"!=typeof(e=a.rootPanels).__array?"undefined"!=typeof e.__array[l=d]?e.__array[l]:e.__getitem__(l):e.__getitem__(d),$pyjs.trackstack.pop(),$pyjs.track=
$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),b;$pyjs.track.lineno=42;c=null;$pyjs.track.lineno=43;var s;a:{try{try{$pyjs.in_try_except+=1;s=null===(b=null!==d)||!1===b||0===b||""===b?!1:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}s=void 0}if(s){$pyjs.track.lineno=44;a:{try{try{$pyjs.in_try_except+=
1;c=a.DOM.getElementById(d);break a}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}c=void 0}$pyjs.track.lineno=45;var h;a:{try{try{$pyjs.in_try_except+=1;h=null===(f=null===c)||!1===f||0===f||""===f?!1:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),
k;}h=void 0}if(h)return $pyjs.track.lineno=46,$pyjs.track.lineno=46,b=null,$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),b}$pyjs.track.lineno=48;$pyjs.track.lineno=48;b=function(){try{try{$pyjs.in_try_except+=1;var g="undefined"==typeof manageRootPanel?a.manageRootPanel:manageRootPanel,b;a:{try{try{$pyjs.in_try_except+=1;b=("undefined"==typeof RootPanelCls?a.RootPanelCls:RootPanelCls)(c);break a}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,
$p.StopIteration)||$p._handle_exception(e),e;}b=void 0}return g(b,d)}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}}();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return b};a.get.__name__="get";a.get.__bind_type__=0;a.get.__args__=[null,null,["id",null]];$pyjs.track.lineno=50;a.manageRootPanel=function(d,c){"undefined"==typeof c&&(c=arguments.callee.__args__[3][1]);var b,f,g,l;$pyjs.track=
{module:"pyjamas.ui.RootPanel",lineno:50};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=50;$pyjs.track.lineno=52;var e;a:{try{try{$pyjs.in_try_except+=1;var s;b:{try{try{$pyjs.in_try_except+=1;s=null===(l=a.rootPanels)?0:"undefined"!=typeof l.__array?l.__array.length:"function"==typeof l.__len__?l.__len__():"undefined"!=typeof l.length?l.length:$p.len(l);break b}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),
t;}s=void 0}e=null===(g=-1==(1===(b=s)?0:"number"!=typeof b||"number"!=typeof b&&"string"!=typeof b&&"boolean"!=typeof b?$p.cmp(b,1):1==b?0:1>b?-1:1))||!1===g||0===g||""===g?!1:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}e=void 0}if(e){$pyjs.track.lineno=53;a:{try{try{$pyjs.in_try_except+=1;f=a.RootPanelManager();
break a}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}f=void 0}$pyjs.track.lineno=54;try{try{$pyjs.in_try_except+=1,a.Window.addWindowCloseListener(f)}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}}$pyjs.track.lineno=56;try{try{$pyjs.in_try_except+=1,a.rootPanels.__setitem__(c,d)}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),
n;}$pyjs.track.lineno=57;$pyjs.track.lineno=57;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return d};a.manageRootPanel.__name__="manageRootPanel";a.manageRootPanel.__bind_type__=0;a.manageRootPanel.__args__=[null,null,["panel"],["id",null]];$pyjs.track.lineno=59;a.RootPanelCls=function(){var d={},c;d.__module__="pyjamas.ui.RootPanel";$pyjs.track.lineno=60;c=$pyjs__bind_method2("__init__",function(b){if(!0===this.__is_instance__)var c=this,e=2<=arguments.length?
arguments[arguments.length-1]:arguments[arguments.length];else c=arguments[0],b=arguments[1],e=3<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===e||"object"!=typeof e||"dict"!=e.__name__||"undefined"==typeof e.$pyjs_is_kwarg?e=arguments[arguments.length+1]:delete e.$pyjs_is_kwarg;"undefined"==typeof e&&(e=$p.__empty_dict(),"undefined"!=typeof b?null!==b&&"undefined"!=typeof b.$pyjs_is_kwarg&&(e=b,b=arguments[2]):"undefined"!=typeof c&&null!==c&&"undefined"!=typeof c.$pyjs_is_kwarg&&
(e=c,c=arguments[2]));"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);var d,f;$pyjs.track={module:"pyjamas.ui.RootPanel",lineno:60};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=60;$pyjs.track.lineno=61;var m;a:{try{try{$pyjs.in_try_except+=1;m=null===(f=null!==b)||!1===f||0===f||""===f?!1:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=
1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}m=void 0}if(m){$pyjs.track.lineno=62;try{try{$pyjs.in_try_except+=1,e.__setitem__("Element",b)}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}}$pyjs.track.lineno=63;try{try{$pyjs.in_try_except+=1,$pyjs_kwargs_call(a.AbsolutePanel,"__init__",null,e,[{},c])}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),
n;}$pyjs.track.lineno=64;var p;a:{try{try{$pyjs.in_try_except+=1;p=null===(d=null===b)||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(q){throw $p.isinstance(q,$p.StopIteration)||$p._handle_exception(q),q;}p=void 0}if(p){$pyjs.track.lineno=66;a:{try{try{$pyjs.in_try_except+=1;b=c.getBodyElement();break a}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,
$p.StopIteration)||$p._handle_exception(r),r;}b=void 0}$pyjs.track.lineno=67;try{try{$pyjs.in_try_except+=1,c.setElement(b)}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}}$pyjs.track.lineno=68;try{try{$pyjs.in_try_except+=1,c.onAttach()}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
return null},1,[null,["kwargs"],["self"],["Element",null]]);d.__init__=c;$pyjs.track.lineno=70;c=$pyjs__bind_method2("getBodyElement",function(a){$pyjs.track={module:"pyjamas.ui.RootPanel",lineno:70};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=70;$pyjs.track.lineno=71;$pyjs.track.lineno=71;a=$doc.body;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);d.getBodyElement=c;
$pyjs.track.lineno=59;c=Array(a.AbsolutePanel);var b=$p.dict(),f;for(f in d)b.__setitem__(f,d[f]);return $p._create_class("RootPanelCls",$p.tuple(c),b)}();$pyjs.track.lineno=73;try{try{$pyjs.in_try_except+=1,a.Factory.registerClass("pyjamas.ui.RootPanel","RootPanelCls",a.RootPanelCls)}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}$pyjs.track.lineno=75;a.RootPanel=function(d){"undefined"==typeof d&&(d=arguments.callee.__args__[2][1]);$pyjs.track=
{module:"pyjamas.ui.RootPanel",lineno:75};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.RootPanel";$pyjs.track.lineno=75;$pyjs.track.lineno=76;$pyjs.track.lineno=76;var c;a:{try{try{$pyjs.in_try_except+=1;c=a.get(d);break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}c=void 0}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c};a.RootPanel.__name__="RootPanel";a.RootPanel.__bind_type__=
0;a.RootPanel.__args__=[null,null,["id",null]];return this};
