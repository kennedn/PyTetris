$pyjs.loaded_modules["pyjamas.Window"]=function(q){if($pyjs.loaded_modules["pyjamas.Window"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Window"];"undefined"!=typeof $pyjs.loaded_modules.pyjamas&&$pyjs.loaded_modules.pyjamas.__was_initialized__||$p.___import___("pyjamas",null);var a=$pyjs.loaded_modules["pyjamas.Window"];a.__repr__=function(){return"<module: pyjamas.Window>"};a.__was_initialized__=!0;if(null===q||"undefined"==typeof q)q="pyjamas.Window";a.__name__=q;a.__track_lines__=
[];$pyjs.loaded_modules.pyjamas.Window=$pyjs.loaded_modules["pyjamas.Window"];a.__track_lines__[1]="pyjamas.Window.py, line 1:\n    # This is the pyjd Window module.";a.__track_lines__[130]="pyjamas.Window.py, line 130:\n    def resizeBy(width, height):";a.__track_lines__[3]="pyjamas.Window.py, line 3:\n    ";a.__track_lines__[133]="pyjamas.Window.py, line 133:\n    wnd().resizeBy(width, height)";a.__track_lines__[6]='pyjamas.Window.py, line 6:\n    """';a.__track_lines__[135]="pyjamas.Window.py, line 38:\n    def enableScrolling(enable): ... def fireClosingImpl():";
a.__track_lines__[8]="pyjamas.Window.py, line 8:\n    closingListeners = []";a.__track_lines__[9]="pyjamas.Window.py, line 9:\n    resizeListeners = []";a.__track_lines__[11]="pyjamas.Window.py, line 11:\n    from __pyjamas__ import JS, doc, wnd, get_main_frame";a.__track_lines__[12]="pyjamas.Window.py, line 12:\n    from pyjamas import Location";a.__track_lines__[13]="pyjamas.Window.py, line 13:\n    ";a.__track_lines__[14]="pyjamas.Window.py, line 14:\n    def init_listeners():";a.__track_lines__[15]=
"pyjamas.Window.py, line 15:\n    pass";a.__track_lines__[16]="pyjamas.Window.py, line 16:\n    ";a.__track_lines__[17]="pyjamas.Window.py, line 3:\n     ... def addWindowCloseListener(listener):";a.__track_lines__[19]="pyjamas.Window.py, line 19:\n    ";a.__track_lines__[20]="pyjamas.Window.py, line 20:\n    def addWindowResizeListener(listener):";a.__track_lines__[154]="pyjamas.Window.py, line 154:\n    init()";a.__track_lines__[23]="pyjamas.Window.py, line 23:\n    def removeWindowCloseListener(listener):";
a.__track_lines__[24]="pyjamas.Window.py, line 24:\n    closingListeners.remove(listener)";a.__track_lines__[26]="pyjamas.Window.py, line 26:\n    def removeWindowResizeListener(listener):";a.__track_lines__[27]="pyjamas.Window.py, line 27:\n    resizeListeners.remove(listener)";a.__track_lines__[29]="pyjamas.Window.py, line 29:\n    def alert(txt):";a.__track_lines__[30]="pyjamas.Window.py, line 30:\n    get_main_frame()._alert(txt)";a.__track_lines__[31]="pyjamas.Window.py, line 31:\n    ";a.__track_lines__[32]=
"pyjamas.Window.py, line 32:\n    def confirm(msg):";a.__track_lines__[35]='pyjamas.Window.py, line 35:\n    def prompt(msg, defaultReply=""):';a.__track_lines__[38]="pyjamas.Window.py, line 38:\n    def enableScrolling(enable):";a.__track_lines__[39]="pyjamas.Window.py, line 39:\n    doc().body.style.overflow = enable and 'auto' or 'hidden'";a.__track_lines__[40]="pyjamas.Window.py, line 40:\n    ";a.__track_lines__[41]="pyjamas.Window.py, line 41:\n    def scrollBy(x, y):";a.__track_lines__[42]=
"pyjamas.Window.py, line 42:\n    wnd().scrollBy(x, y)";a.__track_lines__[43]="pyjamas.Window.py, line 43:\n    ";a.__track_lines__[44]="pyjamas.Window.py, line 44:\n    def scroll(x, y):";a.__track_lines__[45]="pyjamas.Window.py, line 45:\n    wnd().scroll(x, y)";a.__track_lines__[47]="pyjamas.Window.py, line 47:\n    def getClientHeight():";a.__track_lines__[50]="pyjamas.Window.py, line 50:\n    except:";a.__track_lines__[51]="pyjamas.Window.py, line 51:\n    return doc().body.clientHeight;";a.__track_lines__[53]=
"pyjamas.Window.py, line 26:\n    def removeWindowResizeListener(listener): ... def getClientWidth():";a.__track_lines__[55]="pyjamas.Window.py, line 55:\n    return wnd().innerWidth";a.__track_lines__[59]="pyjamas.Window.py, line 59:\n    def getScrollLeft():";a.__track_lines__[60]="pyjamas.Window.py, line 60:\n    return getDocumentRoot().scrollLeft;";a.__track_lines__[62]="pyjamas.Window.py, line 62:\n    def getScrollTop():";a.__track_lines__[63]="pyjamas.Window.py, line 63:\n    return getDocumentRoot().scrollTop;";
a.__track_lines__[65]="pyjamas.Window.py, line 65:\n    def getDocumentRoot():";a.__track_lines__[66]="pyjamas.Window.py, line 66:\n    if doc().compatMode == 'CSS1Compat':";a.__track_lines__[67]="pyjamas.Window.py, line 67:\n    return doc().documentElement";a.__track_lines__[68]="pyjamas.Window.py, line 68:\n    return doc().body";a.__track_lines__[70]="pyjamas.Window.py, line 70:\n    def setLocation(url):";a.__track_lines__[71]="pyjamas.Window.py, line 71:\n    w = wnd()";a.__track_lines__[74]=
"pyjamas.Window.py, line 74:\n    location = None";a.__track_lines__[75]="pyjamas.Window.py, line 75:\n    ";a.__track_lines__[76]="pyjamas.Window.py, line 12:\n    from pyjamas import Location ... def getLocation():";a.__track_lines__[78]="pyjamas.Window.py, line 78:\n    if not location:";a.__track_lines__[81]="pyjamas.Window.py, line 81:\n    ";a.__track_lines__[82]="pyjamas.Window.py, line 82:\n    def getTitle():";a.__track_lines__[85]="pyjamas.Window.py, line 85:\n    def open(url, name, features):";
a.__track_lines__[86]="pyjamas.Window.py, line 86:\n    return wnd().open(url, name, features)";a.__track_lines__[87]="pyjamas.Window.py, line 87:\n    ";a.__track_lines__[88]="pyjamas.Window.py, line 88:\n    def setMargin(size):";a.__track_lines__[89]="pyjamas.Window.py, line 89:\n    doc().body.style.margin = size";a.__track_lines__[91]="pyjamas.Window.py, line 91:\n    def setTitle(title):";a.__track_lines__[92]="pyjamas.Window.py, line 92:\n    d = doc()";a.__track_lines__[93]="pyjamas.Window.py, line 93:\n    d.title = title";
a.__track_lines__[151]="pyjamas.Window.py, line 113:\n    def fireClosedAndCatch(handler): ... def init():";a.__track_lines__[95]="pyjamas.Window.py, line 29:\n    def alert(txt): ... def setOnError(onError):";a.__track_lines__[96]="pyjamas.Window.py, line 96:\n    pass";a.__track_lines__[98]="pyjamas.Window.py, line 81:\n     ... def onError(msg, url, linenumber):";a.__track_lines__[99]="pyjamas.Window.py, line 99:\n    pass";a.__track_lines__[114]="pyjamas.Window.py, line 114:\n    # FIXME - need implementation";
a.__track_lines__[102]="pyjamas.Window.py, line 55:\n    return wnd().innerWidth ... def onClosed():";a.__track_lines__[105]="pyjamas.Window.py, line 105:\n    # TODO: call fireClosingAndCatch";a.__track_lines__[106]="pyjamas.Window.py, line 59:\n    def getScrollLeft(): ... def onClosing():";a.__track_lines__[107]="pyjamas.Window.py, line 107:\n    fireClosingImpl()";a.__track_lines__[108]="pyjamas.Window.py, line 108:\n    ";a.__track_lines__[109]="pyjamas.Window.py, line 109:\n    # TODO: call fireResizedAndCatch";
a.__track_lines__[110]="pyjamas.Window.py, line 63:\n    return getDocumentRoot().scrollTop; ... def onResize():";a.__track_lines__[113]="pyjamas.Window.py, line 113:\n    def fireClosedAndCatch(handler):";a.__track_lines__[143]="pyjamas.Window.py, line 47:\n    def getClientHeight(): ... def fireResizedAndCatch(handler):";a.__track_lines__[147]="pyjamas.Window.py, line 50:\n    except: ... def fireResizedImpl():";a.__track_lines__[116]="pyjamas.Window.py, line 116:\n    ";a.__track_lines__[117]=
"pyjamas.Window.py, line 117:\n    def fireClosedImpl():";a.__track_lines__[121]="pyjamas.Window.py, line 75:\n     ... def fireClosingAndCatch(handler):";a.__track_lines__[125]="pyjamas.Window.py, line 78:\n    if not location: ... def resize(width, height):";$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=1;$pyjs.track.lineno=8;var r;a:{try{try{$pyjs.in_try_except+=1;r=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||$p._handle_exception(s),
s;}r=void 0}a.closingListeners=r;$pyjs.track.lineno=9;var t;a:{try{try{$pyjs.in_try_except+=1;t=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}t=void 0}a.resizeListeners=t;$pyjs.track.lineno=11;$pyjs.track.lineno=12;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.Location=$p.___import___("pyjamas.Location","pyjamas",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=14;a.init_listeners=function(){var c,b,d,e;$pyjs.track={module:"pyjamas.Window",lineno:14};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=14;$pyjs.track.lineno=105;$pyjs.track.lineno=106;$pyjs.track.lineno=107;var f;a:{try{try{$pyjs.in_try_except+=1;f=null===(c=!(null===(d=a.closingListeners)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?
0<d.__len__():1:1))||!1===c||0===c||""===c?!1:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||$p._handle_exception(g),g;}f=void 0}if(f){$pyjs.track.lineno=108;var h;a:{try{try{$pyjs.in_try_except+=1;h=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}h=void 0}a.closingListeners=
h}$pyjs.track.lineno=109;var l;a:{try{try{$pyjs.in_try_except+=1;l=null===(e=!(null===(b=a.resizeListeners)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1))||!1===e||0===e||""===e?!1:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),
m;}l=void 0}if(l){$pyjs.track.lineno=110;var n;a:{try{try{$pyjs.in_try_except+=1;n=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}n=void 0}a.resizeListeners=n}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.init_listeners.__name__="init_listeners";a.init_listeners.__bind_type__=0;a.init_listeners.__args__=[null,null];$pyjs.track.lineno=17;a.addWindowCloseListener=
function(c){$pyjs.track={module:"pyjamas.Window",lineno:17};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=17;$pyjs.track.lineno=3;try{try{$pyjs.in_try_except+=1,a.closingListeners.append(c)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.addWindowCloseListener.__name__="addWindowCloseListener";
a.addWindowCloseListener.__bind_type__=0;a.addWindowCloseListener.__args__=[null,null,["listener"]];$pyjs.track.lineno=20;a.addWindowResizeListener=function(c){$pyjs.track={module:"pyjamas.Window",lineno:20};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=20;$pyjs.track.lineno=6;try{try{$pyjs.in_try_except+=1,a.resizeListeners.append(c)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.addWindowResizeListener.__name__="addWindowResizeListener";a.addWindowResizeListener.__bind_type__=0;a.addWindowResizeListener.__args__=[null,null,["listener"]];$pyjs.track.lineno=23;a.removeWindowCloseListener=function(c){$pyjs.track={module:"pyjamas.Window",lineno:23};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=23;$pyjs.track.lineno=24;try{try{$pyjs.in_try_except+=1,
a.closingListeners.remove(c)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.removeWindowCloseListener.__name__="removeWindowCloseListener";a.removeWindowCloseListener.__bind_type__=0;a.removeWindowCloseListener.__args__=[null,null,["listener"]];$pyjs.track.lineno=26;a.removeWindowResizeListener=function(c){$pyjs.track={module:"pyjamas.Window",
lineno:26};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=26;$pyjs.track.lineno=27;try{try{$pyjs.in_try_except+=1,a.resizeListeners.remove(c)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.removeWindowResizeListener.__name__="removeWindowResizeListener";a.removeWindowResizeListener.__bind_type__=
0;a.removeWindowResizeListener.__args__=[null,null,["listener"]];$pyjs.track.lineno=29;a.alert=function(a){$pyjs.track={module:"pyjamas.Window",lineno:29};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=29;$pyjs.track.lineno=96;$wnd.alert(a);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.alert.__name__="alert";a.alert.__bind_type__=0;a.alert.__args__=[null,null,["msg"]];$pyjs.track.lineno=32;a.confirm=
function(a){$pyjs.track={module:"pyjamas.Window",lineno:32};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=32;$pyjs.track.lineno=99;$pyjs.track.lineno=99;a=$wnd.confirm(a);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a};a.confirm.__name__="confirm";a.confirm.__bind_type__=0;a.confirm.__args__=[null,null,["msg"]];$pyjs.track.lineno=35;a.prompt=function(a,b){"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);
$pyjs.track={module:"pyjamas.Window",lineno:35};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=35;$pyjs.track.lineno=102;$pyjs.track.lineno=102;var d=$wnd.prompt(a,b);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return d};a.prompt.__name__="prompt";a.prompt.__bind_type__=0;a.prompt.__args__=[null,null,["msg"],["defaultReply",""]];$pyjs.track.lineno=38;a.enableScrolling=function(a){var b,d;$pyjs.track={module:"pyjamas.Window",
lineno:38};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=38;$pyjs.track.lineno=39;$doc.body.style.overflow=(null===(d=b=(null===a||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1)?"auto":a)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)?b:"hidden";$pyjs.trackstack.pop();$pyjs.track=
$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.enableScrolling.__name__="enableScrolling";a.enableScrolling.__bind_type__=0;a.enableScrolling.__args__=[null,null,["enable"]];$pyjs.track.lineno=41;a.scrollBy=function(a,b){$pyjs.track={module:"pyjamas.Window",lineno:41};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=41;$pyjs.track.lineno=42;$wnd.scrollBy(a,b);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
return null};a.scrollBy.__name__="scrollBy";a.scrollBy.__bind_type__=0;a.scrollBy.__args__=[null,null,["x"],["y"]];$pyjs.track.lineno=44;a.scroll=function(a,b){$pyjs.track={module:"pyjamas.Window",lineno:44};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=44;$pyjs.track.lineno=45;$wnd.scroll(a,b);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.scroll.__name__="scroll";a.scroll.__bind_type__=0;a.scroll.__args__=
[null,null,["x"],["y"]];$pyjs.track.lineno=47;a.getClientHeight=function(){$pyjs.track={module:"pyjamas.Window",lineno:47};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=47;$pyjs.track.lineno=23;$pyjs.track.lineno=23;var a=$wnd.innerHeight;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a};a.getClientHeight.__name__="getClientHeight";a.getClientHeight.__bind_type__=0;a.getClientHeight.__args__=[null,null];
$pyjs.track.lineno=53;a.getClientWidth=function(){$pyjs.track={module:"pyjamas.Window",lineno:53};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=53;$pyjs.track.lineno=26;$pyjs.track.lineno=26;var a=$wnd.innerWidth;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a};a.getClientWidth.__name__="getClientWidth";a.getClientWidth.__bind_type__=0;a.getClientWidth.__args__=[null,null];$pyjs.track.lineno=59;a.getScrollLeft=
function(){$pyjs.track={module:"pyjamas.Window",lineno:59};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=59;$pyjs.track.lineno=60;$pyjs.track.lineno=60;var c;a:{try{try{$pyjs.in_try_except+=1;c=a.getDocumentRoot();break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}c=void 0}c=c.scrollLeft;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c};
a.getScrollLeft.__name__="getScrollLeft";a.getScrollLeft.__bind_type__=0;a.getScrollLeft.__args__=[null,null];$pyjs.track.lineno=62;a.getScrollTop=function(){$pyjs.track={module:"pyjamas.Window",lineno:62};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=62;$pyjs.track.lineno=63;$pyjs.track.lineno=63;var c;a:{try{try{$pyjs.in_try_except+=1;c=a.getDocumentRoot();break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),
b;}c=void 0}c=c.scrollTop;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c};a.getScrollTop.__name__="getScrollTop";a.getScrollTop.__bind_type__=0;a.getScrollTop.__args__=[null,null];$pyjs.track.lineno=65;a.getDocumentRoot=function(){var a,b;$pyjs.track={module:"pyjamas.Window",lineno:65};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=65;$pyjs.track.lineno=66;if(null===(b="CSS1Compat"===(a=$doc.compatMode)&&
null===a?!0:null===a?!1:"object"!=typeof a&&"function"!=typeof a||"function"!=typeof a.__cmp__?"CSS1Compat"==a:0===a.__cmp__("CSS1Compat"))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)return $pyjs.track.lineno=67,$pyjs.track.lineno=67,a=$doc.documentElement,$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),a;$pyjs.track.lineno=68;$pyjs.track.lineno=68;a=$doc.body;
$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a};a.getDocumentRoot.__name__="getDocumentRoot";a.getDocumentRoot.__bind_type__=0;a.getDocumentRoot.__args__=[null,null];$pyjs.track.lineno=70;a.setLocation=function(a){var b;$pyjs.track={module:"pyjamas.Window",lineno:70};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=70;$pyjs.track.lineno=19;b=$wnd;$pyjs.track.lineno=20;b.location=a;$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setLocation.__name__="setLocation";a.setLocation.__bind_type__=0;a.setLocation.__args__=[null,null,["url"]];$pyjs.track.lineno=74;a.location=null;$pyjs.track.lineno=76;a.getLocation=function(){var c,b;$pyjs.track={module:"pyjamas.Window",lineno:76};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=76;$pyjs.track.lineno=12;$pyjs.track.lineno=13;if(null===(b=!(null===(c=a.location)||
!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1))||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1){$pyjs.track.lineno=14;c=$wnd.location;$pyjs.track.lineno=15;var d;a:{try{try{$pyjs.in_try_except+=1;d=a.Location.Location(c);break a}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,$p.StopIteration)||$p._handle_exception(e),
e;}d=void 0}a.location=d}$pyjs.track.lineno=16;$pyjs.track.lineno=16;d=a.location;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return d};a.getLocation.__name__="getLocation";a.getLocation.__bind_type__=0;a.getLocation.__args__=[null,null];$pyjs.track.lineno=82;a.getTitle=function(){$pyjs.track={module:"pyjamas.Window",lineno:82};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=82;$pyjs.track.lineno=9;$pyjs.track.lineno=
9;var a=$doc.title;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a};a.getTitle.__name__="getTitle";a.getTitle.__bind_type__=0;a.getTitle.__args__=[null,null];$pyjs.track.lineno=85;a.open=function(a,b,d){$pyjs.track={module:"pyjamas.Window",lineno:85};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=85;$pyjs.track.lineno=86;$pyjs.track.lineno=86;a=$wnd.open(a,b,d);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return a};a.open.__name__="open";a.open.__bind_type__=0;a.open.__args__=[null,null,["url"],["name"],["features"]];$pyjs.track.lineno=88;a.setMargin=function(a){$pyjs.track={module:"pyjamas.Window",lineno:88};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=88;$pyjs.track.lineno=89;$doc.body.style.margin=a;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setMargin.__name__=
"setMargin";a.setMargin.__bind_type__=0;a.setMargin.__args__=[null,null,["size"]];$pyjs.track.lineno=91;a.setTitle=function(a){var b;$pyjs.track={module:"pyjamas.Window",lineno:91};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=91;$pyjs.track.lineno=92;b=$doc;$pyjs.track.lineno=93;b.title=a;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setTitle.__name__="setTitle";a.setTitle.__bind_type__=0;a.setTitle.__args__=
[null,null,["title"]];$pyjs.track.lineno=95;a.setOnError=function(a){var b,d;if(function(){try{try{$pyjs.in_try_except+=1;var e;a:{try{try{$pyjs.in_try_except+=1;e=$p.callable(a);break a}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}e=void 0}return null===(d=!(null===(b=e)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1))||!1===d||0===d||""===d?
!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||$p._handle_exception(g),g;}}())throw function(){try{try{return $pyjs.in_try_except+=1,$p.TypeError("object is not callable")}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();$wnd.onerror=function(b,d,g){return a(b,d,g)}};a.setOnError.__name__=
"setOnError";a.setOnError.__bind_type__=0;a.setOnError.__args__=[null,null,["onError"]];$pyjs.track.lineno=98;a.onError=function(c,b,d){var e;$pyjs.track={module:"pyjamas.Window",lineno:98};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=98;$pyjs.track.lineno=81;b=$doc.createElement("div");$pyjs.track.lineno=82;b.className="errordialog";$pyjs.track.lineno=85;e=a.sys.trackstackstr($pyjs.trackstack.slice(0,-1));$pyjs.track.lineno=86;a:{try{try{$pyjs.in_try_except+=
1;e=e.$$replace("\n","<br />\n&nbsp;&nbsp;&nbsp;");break a}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}e=void 0}$pyjs.track.lineno=87;b.innerHTML=function(){try{try{return $pyjs.in_try_except+=1,$p.sprintf('&nbsp;<b style="color:red">JavaScript Error: </b>\n%s at line number %d. Please inform webmaster.\n<br />&nbsp;&nbsp;&nbsp;%s\n',function(){try{try{return $pyjs.in_try_except+=1,$p.tuple([c,d,e])}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,
$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();$pyjs.track.lineno=92;$doc.body.appendChild(b);$pyjs.track.lineno=93;$pyjs.track.lineno=93;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return!0};a.onError.__name__="onError";a.onError.__bind_type__=0;a.onError.__args__=[null,null,["msg"],["url"],["linenumber"]];$pyjs.track.lineno=102;a.onClosed=
function(){$pyjs.track={module:"pyjamas.Window",lineno:102};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=102;$pyjs.track.lineno=55;try{try{$pyjs.in_try_except+=1,("undefined"==typeof fireClosedImpl?a.fireClosedImpl:fireClosedImpl)()}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.onClosed.__name__=
"onClosed";a.onClosed.__bind_type__=0;a.onClosed.__args__=[null,null];$pyjs.track.lineno=106;a.onClosing=function(){$pyjs.track={module:"pyjamas.Window",lineno:106};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=106;$pyjs.track.lineno=59;$pyjs.track.lineno=59;var c;a:{try{try{$pyjs.in_try_except+=1;c=("undefined"==typeof fireClosingImpl?a.fireClosingImpl:fireClosingImpl)();break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||
$p._handle_exception(b),b;}c=void 0}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c};a.onClosing.__name__="onClosing";a.onClosing.__bind_type__=0;a.onClosing.__args__=[null,null];$pyjs.track.lineno=110;a.onResize=function(){$pyjs.track={module:"pyjamas.Window",lineno:110};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=110;$pyjs.track.lineno=63;try{try{$pyjs.in_try_except+=1,("undefined"==typeof fireResizedImpl?
a.fireResizedImpl:fireResizedImpl)()}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.onResize.__name__="onResize";a.onResize.__bind_type__=0;a.onResize.__args__=[null,null];$pyjs.track.lineno=113;a.fireClosedAndCatch=function(a){$pyjs.track={module:"pyjamas.Window",lineno:113};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module=
"pyjamas.Window";$pyjs.track.lineno=113;$pyjs.track.lineno=67;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.fireClosedAndCatch.__name__="fireClosedAndCatch";a.fireClosedAndCatch.__bind_type__=0;a.fireClosedAndCatch.__args__=[null,null,["handler"]];$pyjs.track.lineno=117;a.fireClosedImpl=function(){var c,b,d,e,f,g;$pyjs.track={module:"pyjamas.Window",lineno:117};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=
117;$pyjs.track.lineno=70;f=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=1;d=a.closingListeners;break a}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}d=void 0}"undefined"!=typeof(e=d.__array)?b=0:(d=d.__iter__(),b="undefined"!=typeof(e=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(g=0;"undefined"!=typeof(c=b?0<b?d.next(!0,!1):$p.wrapped_next(d):e[g++]);){$pyjs.track.lineno=71;try{try{$pyjs.in_try_except+=1,c.onWindowClosed()}finally{$pyjs.in_try_except-=
1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}}$pyjs.trackstack.length>f&&($pyjs.trackstack=$pyjs.trackstack.slice(0,f),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.Window";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.fireClosedImpl.__name__="fireClosedImpl";a.fireClosedImpl.__bind_type__=0;a.fireClosedImpl.__args__=[null,null];$pyjs.track.lineno=121;a.fireClosingAndCatch=function(a){$pyjs.track=
{module:"pyjamas.Window",lineno:121};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=121;$pyjs.track.lineno=75;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.fireClosingAndCatch.__name__="fireClosingAndCatch";a.fireClosingAndCatch.__bind_type__=0;a.fireClosingAndCatch.__args__=[null,null,["handler"]];$pyjs.track.lineno=125;a.resize=function(a,b){$pyjs.track={module:"pyjamas.Window",lineno:125};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=125;$pyjs.track.lineno=78;$wnd.resizeTo(a,b);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.resize.__name__="resize";a.resize.__bind_type__=0;a.resize.__args__=[null,null,["width"],["height"]];$pyjs.track.lineno=130;a.resizeBy=function(a,b){$pyjs.track={module:"pyjamas.Window",lineno:130};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=130;$pyjs.track.lineno=
133;$wnd.resizeBy(a,b);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.resizeBy.__name__="resizeBy";a.resizeBy.__bind_type__=0;a.resizeBy.__args__=[null,null,["width"],["height"]];$pyjs.track.lineno=135;a.fireClosingImpl=function(){var c,b,d,e,f,g,h,k,l;$pyjs.track={module:"pyjamas.Window",lineno:135};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=135;$pyjs.track.lineno=38;f=null;$pyjs.track.lineno=
39;h=$pyjs.trackstack.length;d=a.closingListeners;"undefined"!=typeof(l=d.__array)?b=0:(d=d.__iter__(),b="undefined"!=typeof(l=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(g=0;"undefined"!=typeof(c=b?0<b?d.next(!0,!1):$p.wrapped_next(d):l[g++]);){$pyjs.track.lineno=40;a:{try{try{$pyjs.in_try_except+=1;k=c.onWindowClosing();break a}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}k=void 0}$pyjs.track.lineno=41;var n;a:{try{try{$pyjs.in_try_except+=
1;n=null===(e=null===f)||!1===e||0===e||""===e?!1:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}n=void 0}n&&($pyjs.track.lineno=42,f=k)}$pyjs.trackstack.length>h&&($pyjs.trackstack=$pyjs.trackstack.slice(0,h),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=
43;$pyjs.track.lineno=43;b=f;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return b};a.fireClosingImpl.__name__="fireClosingImpl";a.fireClosingImpl.__bind_type__=0;a.fireClosingImpl.__args__=[null,null];$pyjs.track.lineno=143;a.fireResizedAndCatch=function(a){$pyjs.track={module:"pyjamas.Window",lineno:143};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=143;$pyjs.track.lineno=47;$pyjs.trackstack.pop();$pyjs.track=
$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.fireResizedAndCatch.__name__="fireResizedAndCatch";a.fireResizedAndCatch.__bind_type__=0;a.fireResizedAndCatch.__args__=[null,null,["handler"]];$pyjs.track.lineno=147;a.fireResizedImpl=function(){var c,b,d,e,f,g,h;$pyjs.track={module:"pyjamas.Window",lineno:147};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Window";$pyjs.track.lineno=147;$pyjs.track.lineno=50;h=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=
1;f=a.resizeListeners;break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}f=void 0}"undefined"!=typeof(g=f.__array)?d=0:(f=f.__iter__(),d="undefined"!=typeof(g=f.__array)?0:"function"==typeof f.$genfunc?1:-1);for(c=0;"undefined"!=typeof(b=d?0<d?f.next(!0,!1):$p.wrapped_next(f):g[c++]);)e=b,$pyjs.track.lineno=51,function(){try{try{return $pyjs.in_try_except+=1,e.onWindowResized(function(){try{try{return $pyjs.in_try_except+=1,a.getClientWidth()}finally{$pyjs.in_try_except-=
1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}(),function(){try{try{return $pyjs.in_try_except+=1,a.getClientHeight()}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}())}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}();$pyjs.trackstack.length>h&&($pyjs.trackstack=$pyjs.trackstack.slice(0,h),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module=
"pyjamas.Window";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.fireResizedImpl.__name__="fireResizedImpl";a.fireResizedImpl.__bind_type__=0;a.fireResizedImpl.__args__=[null,null];$pyjs.track.lineno=151;a.init=function(){a.sys=$p.___import___("sys","pyjamas");try{try{$pyjs.in_try_except+=1,a.init_listeners()}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}$wnd.__pygwt_initHandlers(function(){a.onResize()},
function(){return a.onClosing()},function(){a.onClosed()});try{try{$pyjs.in_try_except+=1,a.setOnError(a.onError)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}return null};a.init.__name__="init";a.init.__bind_type__=0;a.init.__args__=[null,null];$pyjs.track.lineno=154;try{try{$pyjs.in_try_except+=1,a.init()}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}return this};
