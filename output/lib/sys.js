$pyjs.loaded_modules.sys=function(r){if($pyjs.loaded_modules.sys.__was_initialized__)return $pyjs.loaded_modules.sys;var a=sys=$pyjs.loaded_modules.sys;a.__repr__=function(){return"<module: sys>"};a.__was_initialized__=!0;if(null===r||"undefined"==typeof r)r="sys";a.__name__=r;a.__track_lines__=[];a.__track_lines__[1]="sys.py, line 1:\n    from __pyjamas__ import JS";a.__track_lines__[4]="sys.py, line 4:\n    overrides = None # to be updated by app, on compile";a.__track_lines__[7]="sys.py, line 7:\n    loadpath = None";
a.__track_lines__[9]="sys.py, line 9:\n    stacktrace = None";a.__track_lines__[11]="sys.py, line 11:\n    appname = None";a.__track_lines__[13]="sys.py, line 13:\n    version_info = (2, 7, 2, 'pyjamas', 0)";a.__track_lines__[14]="sys.py, line 14:\n    subversion = ('Pyjamas', '', '')";a.__track_lines__[16]="sys.py, line 16:\n    path = []";a.__track_lines__[17]="sys.py, line 17:\n    argv = []";a.__track_lines__[19]="sys.py, line 19:\n    platform = JS('$pyjs[\"platform\"]')";a.__track_lines__[20]=
"sys.py, line 20:\n    byteorder = 'little' # Needed in struct.py, assume all systems are little endian and not big endian";a.__track_lines__[21]="sys.py, line 21:\n    maxint = 2147483647  # javascript bit operations are on 32 bit signed numbers";a.__track_lines__[24]="sys.py, line 24:\n    def setloadpath(lp):";a.__track_lines__[25]="sys.py, line 25:\n    global loadpath";a.__track_lines__[26]="sys.py, line 26:\n    loadpath = lp";a.__track_lines__[28]="sys.py, line 28:\n    def setappname(an):";
a.__track_lines__[29]="sys.py, line 29:\n    global appname";a.__track_lines__[30]="sys.py, line 30:\n    appname = an";a.__track_lines__[32]="sys.py, line 32:\n    def getloadpath():";a.__track_lines__[33]="sys.py, line 33:\n    return loadpath";a.__track_lines__[35]="sys.py, line 35:\n    def addoverride(module_name, path):";a.__track_lines__[36]="sys.py, line 36:\n    overrides[module_name] = path";a.__track_lines__[38]="sys.py, line 38:\n    def exc_info():";a.__track_lines__[39]="sys.py, line 39:\n    le = JS('$pyjs[\"__last_exception__\"]')";
a.__track_lines__[40]="sys.py, line 40:\n    if not le:";a.__track_lines__[41]="sys.py, line 41:\n    return (None, None, None)";a.__track_lines__[42]="sys.py, line 42:\n    if not hasattr(le.error, '__class__'):";a.__track_lines__[43]="sys.py, line 43:\n    cls = None";a.__track_lines__[45]="sys.py, line 45:\n    cls = le.error.__class__";a.__track_lines__[46]="sys.py, line 46:\n    tb = JS('$pyjs[\"__last_exception_stack__\"]')";a.__track_lines__[47]="sys.py, line 47:\n    if tb:";a.__track_lines__[48]=
"sys.py, line 48:\n    start = tb.start";a.__track_lines__[49]="sys.py, line 49:\n    while tb and start > 0:";a.__track_lines__[50]="sys.py, line 50:\n    tb = tb.tb_next";a.__track_lines__[51]="sys.py, line 51:\n    start -= 1";a.__track_lines__[52]="sys.py, line 52:\n    return (cls, le.error, tb)";a.__track_lines__[54]="sys.py, line 54:\n    def exc_clear():";a.__track_lines__[55]='sys.py, line 55:\n    JS(\'$pyjs["__last_exception_stack__"] = $pyjs["__last_exception__"] = null;\')';a.__track_lines__[58]=
'sys.py, line 58:\n    JS("""@{{_exception_from_trackstack}} = function (trackstack, start) {';a.__track_lines__[88]='sys.py, line 88:\n    JS("""@{{save_exception_stack}} = function (start) {';a.__track_lines__[97]="sys.py, line 97:\n    def trackstacklist(stack=None, limit=None):";a.__track_lines__[98]="sys.py, line 98:\n    if stack is None:";a.__track_lines__[99]="sys.py, line 99:\n    stack = JS('$pyjs[\"__active_exception_stack__\"]')";a.__track_lines__[101]='sys.py, line 101:\n    if JS("""@{{stack}} instanceof Array"""):';
a.__track_lines__[102]="sys.py, line 102:\n    stack = _exception_from_trackstack(stack)";a.__track_lines__[103]="sys.py, line 103:\n    if stack is None:";a.__track_lines__[104]="sys.py, line 104:\n    return ''";a.__track_lines__[105]="sys.py, line 105:\n    stackstrings = []";a.__track_lines__[106]="sys.py, line 106:\n    msg = ''";a.__track_lines__[107]="sys.py, line 107:\n    if limit is None:";a.__track_lines__[108]="sys.py, line 108:\n    limit = -1";a.__track_lines__[109]="sys.py, line 109:\n    while stack and limit:";
a.__track_lines__[110]="sys.py, line 110:\n    JS(\"@{{msg}} = $pyjs['loaded_modules'][@{{stack}}['module']]['__track_lines__'][@{{stack}}['lineno']];\")";a.__track_lines__[111]="sys.py, line 111:\n    JS(\"if (typeof @{{msg}} == 'undefined') @{{msg}} = null;\")";a.__track_lines__[112]="sys.py, line 112:\n    if msg:";a.__track_lines__[113]="sys.py, line 113:\n    stackstrings.append(msg + '\\n')";a.__track_lines__[115]="sys.py, line 115:\n    stackstrings.append('%s.py, line %d\\n' % (stack.module, stack.lineno))";
a.__track_lines__[116]="sys.py, line 116:\n    stack = stack.tb_next";a.__track_lines__[117]="sys.py, line 117:\n    limit -= 1";a.__track_lines__[118]="sys.py, line 118:\n    return stackstrings";a.__track_lines__[120]="sys.py, line 120:\n    def trackstackstr(stack=None, limit=None):";a.__track_lines__[121]="sys.py, line 121:\n    stackstrings = trackstacklist(stack, limit=limit)";a.__track_lines__[122]="sys.py, line 122:\n    return ''.join(stackstrings)";a.__track_lines__[124]="sys.py, line 124:\n    def _get_traceback_list(err, tb=None, limit=None):";
a.__track_lines__[125]="sys.py, line 125:\n    name = getattr(getattr(err, '__class__', None), '__name__', 'Unknown exception')";a.__track_lines__[126]="sys.py, line 126:\n    msg = ['%s: %s\\n' % (name, err), 'Traceback:\\n']";a.__track_lines__[127]="sys.py, line 127:\n    try:";a.__track_lines__[128]="sys.py, line 128:\n    msg.extend(trackstacklist(tb, limit=limit))";a.__track_lines__[130]="sys.py, line 130:\n    pass";a.__track_lines__[131]="sys.py, line 131:\n    return msg";a.__track_lines__[133]=
"sys.py, line 133:\n    def _get_traceback(err, tb=None, limit=None):";a.__track_lines__[134]="sys.py, line 134:\n    return ''.join(_get_traceback_list(err, tb, limit=limit))";a.__track_lines__[136]="sys.py, line 136:\n    def exit(val=None):";a.__track_lines__[137]="sys.py, line 137:\n    raise SystemExit(val)";a.__track_lines__[139]="sys.py, line 139:\n    class _StdStream(object):";a.__track_lines__[140]="sys.py, line 140:\n    def __init__(self):";a.__track_lines__[141]="sys.py, line 141:\n    self.content = ''";
a.__track_lines__[143]="sys.py, line 143:\n    def flush(self):";a.__track_lines__[144]="sys.py, line 144:\n    content = self.content";a.__track_lines__[145]="sys.py, line 145:\n    JS(\"$p['_print_to_console'](@{{content}})\")";a.__track_lines__[146]="sys.py, line 146:\n    self.content = ''";a.__track_lines__[148]="sys.py, line 148:\n    def write(self, output):";a.__track_lines__[149]="sys.py, line 149:\n    self.content += output";a.__track_lines__[150]="sys.py, line 150:\n    if self.content.endswith('\\n'):";
a.__track_lines__[151]="sys.py, line 151:\n    self.flush()";a.__track_lines__[153]="sys.py, line 153:\n    stdin  = None";a.__track_lines__[154]="sys.py, line 154:\n    stdout = None";a.__track_lines__[155]="sys.py, line 155:\n    stderr = None";a.__track_lines__[157]="sys.py, line 157:\n    def sys_init():";a.__track_lines__[158]="sys.py, line 158:\n    global stdout";a.__track_lines__[159]="sys.py, line 159:\n    stdout = _StdStream()";a.__track_lines__[161]="sys.py, line 161:\n    global stderr";
a.__track_lines__[162]="sys.py, line 162:\n    stderr = _StdStream()";a.__track_lines__[164]="sys.py, line 164:\n    sys_init()";$pyjs.track.module="sys";$pyjs.track.lineno=1;$pyjs.track.lineno=1;$pyjs.track.lineno=4;a.overrides=null;$pyjs.track.lineno=7;a.loadpath=null;$pyjs.track.lineno=9;a.stacktrace=null;$pyjs.track.lineno=11;a.appname=null;$pyjs.track.lineno=13;var s;a:{try{try{$pyjs.in_try_except+=1;s=$p.tuple([2,7,2,"pyjamas",0]);break a}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,
$p.StopIteration)||$p._handle_exception(t),t;}s=void 0}a.version_info=s;$pyjs.track.lineno=14;var u;a:{try{try{$pyjs.in_try_except+=1;u=$p.tuple(["Pyjamas","",""]);break a}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}u=void 0}a.subversion=u;$pyjs.track.lineno=16;var w;a:{try{try{$pyjs.in_try_except+=1;w=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(x){throw $p.isinstance(x,$p.StopIteration)||$p._handle_exception(x),x;}w=void 0}a.path=
w;$pyjs.track.lineno=17;var y;a:{try{try{$pyjs.in_try_except+=1;y=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(z){throw $p.isinstance(z,$p.StopIteration)||$p._handle_exception(z),z;}y=void 0}a.argv=y;$pyjs.track.lineno=19;a.platform=$pyjs.platform;$pyjs.track.lineno=20;a.byteorder="little";$pyjs.track.lineno=21;a.maxint=2147483647;$pyjs.track.lineno=24;a.setloadpath=function(e){$pyjs.track={module:"sys",lineno:24};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=
24;$pyjs.track.lineno=25;$pyjs.track.lineno=26;a.loadpath=e;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setloadpath.__name__="setloadpath";a.setloadpath.__bind_type__=0;a.setloadpath.__args__=[null,null,["lp"]];$pyjs.track.lineno=28;a.setappname=function(e){$pyjs.track={module:"sys",lineno:28};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=28;$pyjs.track.lineno=29;$pyjs.track.lineno=30;a.appname=e;$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.setappname.__name__="setappname";a.setappname.__bind_type__=0;a.setappname.__args__=[null,null,["an"]];$pyjs.track.lineno=32;a.getloadpath=function(){$pyjs.track={module:"sys",lineno:32};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=32;$pyjs.track.lineno=33;$pyjs.track.lineno=33;var e=a.loadpath;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
return e};a.getloadpath.__name__="getloadpath";a.getloadpath.__bind_type__=0;a.getloadpath.__args__=[null,null];$pyjs.track.lineno=35;a.addoverride=function(e,b){$pyjs.track={module:"sys",lineno:35};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=35;$pyjs.track.lineno=36;a.overrides.__setitem__(e,b);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.addoverride.__name__="addoverride";a.addoverride.__bind_type__=
0;a.addoverride.__args__=[null,null,["module_name"],["path"]];$pyjs.track.lineno=38;a.exc_info=function(){var a,b,d,c,g,f,k,h,l;$pyjs.track={module:"sys",lineno:38};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=38;$pyjs.track.lineno=39;a=$pyjs.__last_exception__;$pyjs.track.lineno=40;if(null===(d=!(null===a||!1===a||0===a||""===a?0:"object"==typeof a?"function"==typeof a.__nonzero__?a.__nonzero__():"function"==typeof a.__len__?0<a.__len__():1:1))||!1===d||0===d||""===
d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)return $pyjs.track.lineno=41,$pyjs.track.lineno=41,a=$p.tuple([null,null,null]),$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),a;$pyjs.track.lineno=42;var m;a:{try{try{$pyjs.in_try_except+=1;var n;b:{try{try{$pyjs.in_try_except+=1;n=$p.hasattr(a.error,"__class__");break b}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,
$p.StopIteration)||$p._handle_exception(p),p;}n=void 0}m=null===(h=!(null===(c=n)||!1===c||0===c||""===c?0:"object"==typeof c?"function"==typeof c.__nonzero__?c.__nonzero__():"function"==typeof c.__len__?0<c.__len__():1:1))||!1===h||0===h||""===h?!1:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(q){throw $p.isinstance(q,$p.StopIteration)||$p._handle_exception(q),q;}m=void 0}m?
($pyjs.track.lineno=43,c=null):($pyjs.track.lineno=45,c=a.error.__class__);$pyjs.track.lineno=46;d=$pyjs.__last_exception_stack__;$pyjs.track.lineno=47;if(null===(b=d)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)for($pyjs.track.lineno=48,b=d.start,$pyjs.track.lineno=49;null===(k=(null===(f=g=d)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?
0<f.__len__():1:1)?1==(0===(l=b)?0:"number"!=typeof l||"number"!=typeof l&&"string"!=typeof l&&"boolean"!=typeof l?$p.cmp(l,0):0==l?0:0>l?-1:1):g)||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1;)$pyjs.track.lineno=50,d=d.tb_next,$pyjs.track.lineno=51,b-=1;$pyjs.track.lineno=52;$pyjs.track.lineno=52;a=$p.tuple([c,a.error,d]);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
return a};a.exc_info.__name__="exc_info";a.exc_info.__bind_type__=0;a.exc_info.__args__=[null,null];$pyjs.track.lineno=54;a.exc_clear=function(){$pyjs.track={module:"sys",lineno:54};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=54;$pyjs.track.lineno=55;$pyjs.__last_exception_stack__=$pyjs.__last_exception__=null;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track)};a.exc_clear.__name__="exc_clear";a.exc_clear.__bind_type__=0;
a.exc_clear.__args__=[null,null];$pyjs.track.lineno=58;a._exception_from_trackstack=function(a,b){"undefined"==typeof b&&(b=0);for(var d=null,c=null,g=0;g<$pyjs.trackstack.length;g++){var f={},k;for(k in $pyjs.trackstack[g])f[k]=$pyjs.trackstack[g][k];if("undefined"!=typeof $pyjs.loaded_modules[f.module].__track_lines__){var h=$p.dict(),l;for(l in $pyjs.loaded_modules[f.module])h.__setitem__(l,$pyjs.loaded_modules[f.module][l]);f.tb_frame={f_globals:h}}null==d?d=f:c.tb_next=f;c=f}c.tb_next=null;d.start=
b;return d};$pyjs.track.lineno=88;a.save_exception_stack=function(e){if($pyjs.__active_exception_stack__)return $pyjs.__active_exception_stack__.start=e,$pyjs.__active_exception_stack__;$pyjs.__active_exception_stack__=a._exception_from_trackstack($pyjs.trackstack,e);return $pyjs.__active_exception_stack__};$pyjs.track.lineno=97;a.trackstacklist=function(e,b){"undefined"==typeof e&&(e=arguments.callee.__args__[2][1]);"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);var d,c,g,f,k,h,l,m,n;
$pyjs.track={module:"sys",lineno:97};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=97;$pyjs.track.lineno=98;if(null===(m=null===e)||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)$pyjs.track.lineno=99,e=$pyjs.__active_exception_stack__;else if($pyjs.track.lineno=101,null===(n=e instanceof Array)||!1===n||0===n||""===n?0:"object"==typeof n?"function"==typeof n.__nonzero__?n.__nonzero__():
"function"==typeof n.__len__?0<n.__len__():1:1){$pyjs.track.lineno=102;a:{try{try{$pyjs.in_try_except+=1;e=("undefined"==typeof _exception_from_trackstack?a._exception_from_trackstack:_exception_from_trackstack)(e);break a}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}e=void 0}}$pyjs.track.lineno=103;var q;a:{try{try{$pyjs.in_try_except+=1;q=null===(c=null===e)||!1===c||0===c||""===c?!1:"object"==typeof c?"function"==typeof c.__nonzero__?
c.__nonzero__():"function"==typeof c.__len__?0<c.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,$p.StopIteration)||$p._handle_exception(r),r;}q=void 0}if(q)return $pyjs.track.lineno=104,$pyjs.track.lineno=104,g="",$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),g;$pyjs.track.lineno=105;a:{try{try{$pyjs.in_try_except+=1;l=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||
$p._handle_exception(s),s;}l=void 0}$pyjs.track.lineno=106;c="";$pyjs.track.lineno=107;var t;a:{try{try{$pyjs.in_try_except+=1;t=null===(g=null===b)||!1===g||0===g||""===g?!1:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}t=void 0}t&&($pyjs.track.lineno=108,b=-1);for($pyjs.track.lineno=109;function(){try{try{return $pyjs.in_try_except+=
1,null===(d=(null===(f=k=e)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)?b:k)||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();){$pyjs.track.lineno=110;c=$pyjs.loaded_modules[e.module].__track_lines__[e.lineno];
$pyjs.track.lineno=111;"undefined"==typeof c&&(c=null);$pyjs.track.lineno=112;if(null===(h=c)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1){$pyjs.track.lineno=113;try{try{$pyjs.in_try_except+=1,l.append(c+"\n")}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}}else $pyjs.track.lineno=115,function(){try{try{return $pyjs.in_try_except+=1,l.append(function(){try{try{return $pyjs.in_try_except+=
1,$p.sprintf("%s.py, line %d\n",function(){try{try{return $pyjs.in_try_except+=1,$p.tuple([e.module,e.lineno])}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}();$pyjs.track.lineno=116;e=e.tb_next;$pyjs.track.lineno=
117;b-=1}$pyjs.track.lineno=118;$pyjs.track.lineno=118;g=l;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return g};a.trackstacklist.__name__="trackstacklist";a.trackstacklist.__bind_type__=0;a.trackstacklist.__args__=[null,null,["stack",null],["limit",null]];$pyjs.track.lineno=120;a.trackstackstr=function(e,b){"undefined"==typeof e&&(e=arguments.callee.__args__[2][1]);"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);var d;$pyjs.track={module:"sys",
lineno:120};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=120;$pyjs.track.lineno=121;a:{try{try{$pyjs.in_try_except+=1;d=$pyjs_kwargs_call(null,a.trackstacklist,null,null,[{limit:b},e]);break a}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}d=void 0}$pyjs.track.lineno=122;$pyjs.track.lineno=122;var g;a:{try{try{$pyjs.in_try_except+=1;g="".join(d);break a}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,
$p.StopIteration)||$p._handle_exception(f),f;}g=void 0}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return g};a.trackstackstr.__name__="trackstackstr";a.trackstackstr.__bind_type__=0;a.trackstackstr.__args__=[null,null,["stack",null],["limit",null]];$pyjs.track.lineno=124;a._get_traceback_list=function(e,b,d){"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);"undefined"==typeof d&&(d=arguments.callee.__args__[4][1]);var c,g;$pyjs.track={module:"sys",
lineno:124};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=124;$pyjs.track.lineno=125;c=function(){try{try{return $pyjs.in_try_except+=1,$p.getattr(function(){try{try{return $pyjs.in_try_except+=1,$p.getattr(e,"__class__",null)}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),"__name__","Unknown exception")}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),
a;}}();$pyjs.track.lineno=126;g=function(){try{try{return $pyjs.in_try_except+=1,$p.list([function(){try{try{return $pyjs.in_try_except+=1,$p.sprintf("%s: %s\n",function(){try{try{return $pyjs.in_try_except+=1,$p.tuple([c,e])}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}(),"Traceback:\n"])}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,
$p.StopIteration)||$p._handle_exception(a),a;}}();$pyjs.track.lineno=127;var f=$pyjs.trackstack.length;try{try{$pyjs.in_try_except+=1,$pyjs.track.lineno=128,function(){try{try{return $pyjs.in_try_except+=1,g.extend(function(){try{try{return $pyjs.in_try_except+=1,$pyjs_kwargs_call(null,a.trackstacklist,null,null,[{limit:d},b])}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,$p.StopIteration)||$p._handle_exception(e),e;}}())}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,
$p.StopIteration)||$p._handle_exception(e),e;}}()}finally{$pyjs.in_try_except-=1}}catch(k){$pyjs.__last_exception_stack__=sys.save_exception_stack(f-1),$pyjs.__active_exception_stack__=null,$pyjs.__last_exception__={error:k,module:a},$pyjs.trackstack.length>f&&($pyjs.trackstack=$pyjs.trackstack.slice(0,f),$pyjs.track=$pyjs.trackstack.slice(-1)[0]),$pyjs.track.module="sys",$pyjs.track.lineno=130}$pyjs.track.lineno=131;$pyjs.track.lineno=131;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return g};a._get_traceback_list.__name__="_get_traceback_list";a._get_traceback_list.__bind_type__=0;a._get_traceback_list.__args__=[null,null,["err"],["tb",null],["limit",null]];$pyjs.track.lineno=133;a._get_traceback=function(e,b,d){"undefined"==typeof b&&(b=arguments.callee.__args__[3][1]);"undefined"==typeof d&&(d=arguments.callee.__args__[4][1]);$pyjs.track={module:"sys",lineno:133};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=
133;$pyjs.track.lineno=134;$pyjs.track.lineno=134;var c=function(){try{try{return $pyjs.in_try_except+=1,"".join(function(){try{try{return $pyjs.in_try_except+=1,$pyjs_kwargs_call(null,a._get_traceback_list,null,null,[{limit:d},e,b])}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}}())}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}}();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return c};a._get_traceback.__name__="_get_traceback";a._get_traceback.__bind_type__=0;a._get_traceback.__args__=[null,null,["err"],["tb",null],["limit",null]];$pyjs.track.lineno=136;a.exit=function(a){"undefined"==typeof a&&(a=arguments.callee.__args__[2][1]);$pyjs.track={module:"sys",lineno:136};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=136;$pyjs.track.lineno=137;$pyjs.__active_exception_stack__=null;throw function(){try{try{return $pyjs.in_try_except+=
1,$p.SystemExit(a)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}();};a.exit.__name__="exit";a.exit.__bind_type__=0;a.exit.__args__=[null,null,["val",null]];$pyjs.track.lineno=139;a._StdStream=function(){var a={},b;a.__module__="sys";$pyjs.track.lineno=140;b=$pyjs__bind_method2("__init__",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"sys",lineno:140};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=
140;$pyjs.track.lineno=141;a.content="";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);a.__init__=b;$pyjs.track.lineno=143;b=$pyjs__bind_method2("flush",function(a){a=!0===this.__is_instance__?this:a;var c;$pyjs.track={module:"sys",lineno:143};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=143;$pyjs.track.lineno=144;c=a.content;$pyjs.track.lineno=145;$p._print_to_console(c);$pyjs.track.lineno=
146;a.content="";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);a.flush=b;$pyjs.track.lineno=148;b=$pyjs__bind_method2("write",function(a,c){if(!0===this.__is_instance__)var b=this;else b=a,a=c;var d;$pyjs.track={module:"sys",lineno:148};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=148;$pyjs.track.lineno=149;b.content+=a;$pyjs.track.lineno=150;var e;a:{try{try{$pyjs.in_try_except+=
1;var m;b:{try{try{$pyjs.in_try_except+=1;m=b.content.endswith("\n");break b}finally{$pyjs.in_try_except-=1}}catch(n){throw $p.isinstance(n,$p.StopIteration)||$p._handle_exception(n),n;}m=void 0}e=null===(d=m)||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(p){throw $p.isinstance(p,$p.StopIteration)||$p._handle_exception(p),p;}e=void 0}if(e){$pyjs.track.lineno=
151;try{try{$pyjs.in_try_except+=1,b.flush()}finally{$pyjs.in_try_except-=1}}catch(q){throw $p.isinstance(q,$p.StopIteration)||$p._handle_exception(q),q;}}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["output"]]);a.write=b;$pyjs.track.lineno=139;b=Array($p.object);var d=$p.dict(),c;for(c in a)d.__setitem__(c,a[c]);return $p._create_class("_StdStream",$p.tuple(b),d)}();$pyjs.track.lineno=153;a.stdin=null;$pyjs.track.lineno=
154;a.stdout=null;$pyjs.track.lineno=155;a.stderr=null;$pyjs.track.lineno=157;a.sys_init=function(){$pyjs.track={module:"sys",lineno:157};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="sys";$pyjs.track.lineno=157;$pyjs.track.lineno=158;$pyjs.track.lineno=159;var e;a:{try{try{$pyjs.in_try_except+=1;e=a._StdStream();break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}e=void 0}a.stdout=e;$pyjs.track.lineno=161;$pyjs.track.lineno=
162;var d;a:{try{try{$pyjs.in_try_except+=1;d=a._StdStream();break a}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}d=void 0}a.stderr=d;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null};a.sys_init.__name__="sys_init";a.sys_init.__bind_type__=0;a.sys_init.__args__=[null,null];$pyjs.track.lineno=164;try{try{$pyjs.in_try_except+=1,a.sys_init()}finally{$pyjs.in_try_except-=1}}catch(A){throw $p.isinstance(A,
$p.StopIteration)||$p._handle_exception(A),A;}return this};
