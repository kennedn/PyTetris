$pyjs.loaded_modules["pyjamas.Location"]=function(q){if($pyjs.loaded_modules["pyjamas.Location"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.Location"];"undefined"!=typeof $pyjs.loaded_modules.pyjamas&&$pyjs.loaded_modules.pyjamas.__was_initialized__||$p.___import___("pyjamas",null);var c=$pyjs.loaded_modules["pyjamas.Location"];c.__repr__=function(){return"<module: pyjamas.Location>"};c.__was_initialized__=!0;if(null===q||"undefined"==typeof q)q="pyjamas.Location";c.__name__=q;c.__track_lines__=
[];$pyjs.loaded_modules.pyjamas.Location=$pyjs.loaded_modules["pyjamas.Location"];c.__track_lines__[1]="pyjamas.Location.py, line 1:\n    from __pyjamas__ import JS";c.__track_lines__[3]="pyjamas.Location.py, line 3:\n    def makeUrlDict(urlstring):";c.__track_lines__[4]="pyjamas.Location.py, line 4:\n    dict = {}";c.__track_lines__[5]='pyjamas.Location.py, line 5:\n    pairs = urlstring.split("&")';c.__track_lines__[6]="pyjamas.Location.py, line 6:\n    for pair in pairs:";c.__track_lines__[7]=
"pyjamas.Location.py, line 7:\n    if len(pair) < 3: continue";c.__track_lines__[8]='pyjamas.Location.py, line 8:\n    kv = pair.split("=",1)';c.__track_lines__[9]="pyjamas.Location.py, line 9:\n    dict[kv[0]] = kv[1]";c.__track_lines__[10]="pyjamas.Location.py, line 10:\n    return dict";c.__track_lines__[12]="pyjamas.Location.py, line 12:\n    def makeUrlStringFromDict(d):";c.__track_lines__[13]="pyjamas.Location.py, line 13:\n    pairs = []";c.__track_lines__[14]="pyjamas.Location.py, line 14:\n    for k,v in d.iteritems():";
c.__track_lines__[15]='pyjamas.Location.py, line 15:\n    pairs.append(k+"="+v)';c.__track_lines__[16]='pyjamas.Location.py, line 16:\n    return "&".join(pairs)';c.__track_lines__[18]="pyjamas.Location.py, line 18:\n    class Location:";c.__track_lines__[26]="pyjamas.Location.py, line 26:\n    def __init__(self, location):";c.__track_lines__[27]="pyjamas.Location.py, line 27:\n    self.location = location";c.__track_lines__[28]="pyjamas.Location.py, line 28:\n    self.searchDict = None";c.__track_lines__[30]=
"pyjamas.Location.py, line 30:\n    def getHash(self):";c.__track_lines__[31]="pyjamas.Location.py, line 31:\n    return self.location.hash";c.__track_lines__[33]="pyjamas.Location.py, line 33:\n    def getHashDict(self):";c.__track_lines__[34]="pyjamas.Location.py, line 34:\n    if not self.hashDict or self.hashDictHash != self.getHash():";c.__track_lines__[35]="pyjamas.Location.py, line 35:\n    self.hashDictHash = self.getHash()";c.__track_lines__[36]="pyjamas.Location.py, line 36:\n    self.hashDict = makeUrlDict(self.getHash()[1:])";
c.__track_lines__[37]="pyjamas.Location.py, line 37:\n    return self.hashDict";c.__track_lines__[39]="pyjamas.Location.py, line 39:\n    def getHost(self):";c.__track_lines__[40]="pyjamas.Location.py, line 40:\n    return self.location.host";c.__track_lines__[42]="pyjamas.Location.py, line 42:\n    def getHostname(self):";c.__track_lines__[43]="pyjamas.Location.py, line 43:\n    return self.location.hostname";c.__track_lines__[45]="pyjamas.Location.py, line 45:\n    def getHref(self):";c.__track_lines__[46]=
"pyjamas.Location.py, line 46:\n    return self.location.href";c.__track_lines__[48]="pyjamas.Location.py, line 48:\n    def getPageHref(self):";c.__track_lines__[52]="pyjamas.Location.py, line 52:\n    href = self.location.href";c.__track_lines__[53]='pyjamas.Location.py, line 53:\n    if href.find("?"): href = href.split("?")[0]';c.__track_lines__[54]='pyjamas.Location.py, line 54:\n    if href.find("#"): href = href.split("#")[0]';c.__track_lines__[55]="pyjamas.Location.py, line 55:\n    return href";
c.__track_lines__[57]="pyjamas.Location.py, line 57:\n    def getPathname(self):";c.__track_lines__[58]="pyjamas.Location.py, line 58:\n    return self.location.pathname";c.__track_lines__[60]="pyjamas.Location.py, line 60:\n    def getPort(self):";c.__track_lines__[61]="pyjamas.Location.py, line 61:\n    return self.location.port";c.__track_lines__[63]="pyjamas.Location.py, line 63:\n    def getProtocol(self):";c.__track_lines__[64]="pyjamas.Location.py, line 64:\n    return self.location.protocol";
c.__track_lines__[66]="pyjamas.Location.py, line 66:\n    def getSearch(self):";c.__track_lines__[67]='pyjamas.Location.py, line 67:\n    return self.location.search or ""';c.__track_lines__[69]="pyjamas.Location.py, line 69:\n    def getSearchDict(self):";c.__track_lines__[70]="pyjamas.Location.py, line 70:\n    if self.searchDict is None:";c.__track_lines__[71]="pyjamas.Location.py, line 71:\n    search = self.getSearch()[1:]";c.__track_lines__[72]="pyjamas.Location.py, line 72:\n    self.searchDict = makeUrlDict(search)";
c.__track_lines__[73]="pyjamas.Location.py, line 73:\n    return self.searchDict";c.__track_lines__[75]="pyjamas.Location.py, line 75:\n    def getSearchVar(self, key, default=None):";c.__track_lines__[76]="pyjamas.Location.py, line 76:\n    return self.getSearchDict().get(key, default)";c.__track_lines__[78]="pyjamas.Location.py, line 78:\n    def reload(self):";c.__track_lines__[79]="pyjamas.Location.py, line 79:\n    self.location.reload()";c.__track_lines__[81]="pyjamas.Location.py, line 81:\n    def setHref(self, href):";
c.__track_lines__[82]="pyjamas.Location.py, line 82:\n    self.location.href = href";c.__track_lines__[84]="pyjamas.Location.py, line 84:\n    def setSearch(self, search):";c.__track_lines__[85]="pyjamas.Location.py, line 85:\n    self.location.search = search";c.__track_lines__[87]="pyjamas.Location.py, line 87:\n    def setSearchDict(self, searchDict):";c.__track_lines__[88]="pyjamas.Location.py, line 88:\n    self.setSearch(makeUrlStringFromDict(searchDict))";c.__track_lines__[90]="pyjamas.Location.py, line 90:\n    def setHash(self, hash):";
c.__track_lines__[91]="pyjamas.Location.py, line 91:\n    self.location.hash = hash";c.__track_lines__[93]="pyjamas.Location.py, line 93:\n    def setHashDict(self, hashDict):";c.__track_lines__[94]="pyjamas.Location.py, line 94:\n    self.setHash(makeUrlStringFromDict(hashDict))";$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=1;$pyjs.track.lineno=1;$pyjs.track.lineno=3;c.makeUrlDict=function(c){var b,l,k,a,m,d,p,f,h,g,n,u;$pyjs.track={module:"pyjamas.Location",lineno:3};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=3;$pyjs.track.lineno=4;a:{try{try{$pyjs.in_try_except+=1;f=$p.dict([]);break a}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,$p.StopIteration)||$p._handle_exception(r),r;}f=void 0}$pyjs.track.lineno=5;a:{try{try{$pyjs.in_try_except+=1;l=c.$$split("&");break a}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||$p._handle_exception(s),s;}l=void 0}$pyjs.track.lineno=6;c=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=
1;d=l;break a}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}d=void 0}"undefined"!=typeof(h=d.__array)?l=0:(d=d.__iter__(),l="undefined"!=typeof(h=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(u=0;"undefined"!=typeof(k=l?0<l?d.next(!0,!1):$p.wrapped_next(d):h[u++]);){$pyjs.track.lineno=7;var v;a:{try{try{$pyjs.in_try_except+=1;var w=void 0;b:{try{try{$pyjs.in_try_except+=1;w=null===(m=k)?0:"undefined"!=typeof m.__array?m.__array.length:
"function"==typeof m.__len__?m.__len__():"undefined"!=typeof m.length?m.length:$p.len(m);break b}finally{$pyjs.in_try_except-=1}}catch(x){throw $p.isinstance(x,$p.StopIteration)||$p._handle_exception(x),x;}w=void 0}v=null===(p=-1==(3===(g=w)?0:"number"!=typeof g||"number"!=typeof g&&"string"!=typeof g&&"boolean"!=typeof g?$p.cmp(g,3):3==g?0:3>g?-1:1))||!1===p||0===p||""===p?!1:"object"==typeof p?"function"==typeof p.__nonzero__?p.__nonzero__():"function"==typeof p.__len__?0<p.__len__()?!0:!1:!0:!0;
break a}finally{$pyjs.in_try_except-=1}}catch(q){throw $p.isinstance(q,$p.StopIteration)||$p._handle_exception(q),q;}v=void 0}if(v)$pyjs.track.lineno=7;else{$pyjs.track.lineno=8;a:{try{try{$pyjs.in_try_except+=1;n=k.$$split("=",1);break a}finally{$pyjs.in_try_except-=1}}catch(y){throw $p.isinstance(y,$p.StopIteration)||$p._handle_exception(y),y;}n=void 0}$pyjs.track.lineno=9;try{try{$pyjs.in_try_except+=1,f.__setitem__("undefined"!=typeof(a=n).__array?"undefined"!=typeof a.__array[0]?a.__array[0]:
a.__getitem__(0):a.__getitem__(0),"undefined"!=typeof(b=n).__array?"undefined"!=typeof b.__array[1]?b.__array[1]:b.__getitem__(1):b.__getitem__(1))}finally{$pyjs.in_try_except-=1}}catch(z){throw $p.isinstance(z,$p.StopIteration)||$p._handle_exception(z),z;}}}$pyjs.trackstack.length>c&&($pyjs.trackstack=$pyjs.trackstack.slice(0,c),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=10;$pyjs.track.lineno=10;b=f;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return b};c.makeUrlDict.__name__="makeUrlDict";c.makeUrlDict.__bind_type__=0;c.makeUrlDict.__args__=[null,null,["urlstring"]];$pyjs.track.lineno=12;c.makeUrlStringFromDict=function(c){var b,l,k,a,m,d,p;$pyjs.track={module:"pyjamas.Location",lineno:12};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=12;$pyjs.track.lineno=13;a:{try{try{$pyjs.in_try_except+=1;b=$p.list([]);break a}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,
$p.StopIteration)||$p._handle_exception(f),f;}b=void 0}$pyjs.track.lineno=14;a=$pyjs.trackstack.length;a:{try{try{$pyjs.in_try_except+=1;b:{try{try{$pyjs.in_try_except+=1;m=c.iteritems();break b}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}m=void 0}k=m;break a}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||$p._handle_exception(g),g;}k=void 0}"undefined"!=typeof(p=k.__array)?c=0:(k=k.__iter__(),c="undefined"!=
typeof(p=k.__array)?0:"function"==typeof k.$genfunc?1:-1);for(m=0;"undefined"!=typeof(l=c?0<c?k.next(!0,!1):$p.wrapped_next(k):p[m++]);){var n;a:{try{try{$pyjs.in_try_except+=1;n=$p.__ass_unpack(l,2,null);break a}finally{$pyjs.in_try_except-=1}}catch(u){throw $p.isinstance(u,$p.StopIteration)||$p._handle_exception(u),u;}n=void 0}l=n[0];d=n[1];$pyjs.track.lineno=15;try{try{$pyjs.in_try_except+=1,b.append(l+"="+d)}finally{$pyjs.in_try_except-=1}}catch(r){throw $p.isinstance(r,$p.StopIteration)||$p._handle_exception(r),
r;}}$pyjs.trackstack.length>a&&($pyjs.trackstack=$pyjs.trackstack.slice(0,a),$pyjs.track=$pyjs.trackstack.slice(-1)[0]);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=16;$pyjs.track.lineno=16;var s;a:{try{try{$pyjs.in_try_except+=1;s="&".join(b);break a}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}s=void 0}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return s};c.makeUrlStringFromDict.__name__=
"makeUrlStringFromDict";c.makeUrlStringFromDict.__bind_type__=0;c.makeUrlStringFromDict.__args__=[null,null,["d"]];$pyjs.track.lineno=18;c.Location=function(){var e={},b;e.__module__="pyjamas.Location";$pyjs.track.lineno=26;b=$pyjs__bind_method2("__init__",function(a,c){if(!0===this.__is_instance__)var d=this;else d=a,a=c;$pyjs.track={module:"pyjamas.Location",lineno:26};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=26;$pyjs.track.lineno=27;d.location=
a;$pyjs.track.lineno=28;d.searchDict=null;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["location"]]);e.__init__=b;$pyjs.track.lineno=30;b=$pyjs__bind_method2("getHash",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:30};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=30;$pyjs.track.lineno=31;$pyjs.track.lineno=31;a=a.location.hash;
$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getHash=b;$pyjs.track.lineno=33;b=$pyjs__bind_method2("getHashDict",function(a){var m=!0===this.__is_instance__?this:a,d,b,f,h,g,n;$pyjs.track={module:"pyjamas.Location",lineno:33};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=33;$pyjs.track.lineno=34;if(function(){try{try{$pyjs.in_try_except+=1;var a;if(null===(g=d=!(null===
(h=m.hashDict)||!1===h||0===h||""===h?0:"object"==typeof h?"function"==typeof h.__nonzero__?h.__nonzero__():"function"==typeof h.__len__?0<h.__len__():1:1))||!1===g||0===g||""===g?0:"object"==typeof g?"function"==typeof g.__nonzero__?g.__nonzero__():"function"==typeof g.__len__?0<g.__len__():1:1)a=d;else{var c=f=m.hashDictHash,e;a:{try{try{$pyjs.in_try_except+=1;e=m.getHash();break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}e=void 0}a=
!(c===(b=e)&&null===f||(null===f?0:null===b?0:"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.__cmp__?"object"!=typeof b&&"function"!=typeof b||"function"!=typeof b.__cmp__?f==b:0===b.__cmp__(f):0===f.__cmp__(b)))}return null===(n=a)||!1===n||0===n||""===n?!1:"object"==typeof n?"function"==typeof n.__nonzero__?n.__nonzero__():"function"==typeof n.__len__?0<n.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(l){throw $p.isinstance(l,$p.StopIteration)||$p._handle_exception(l),
l;}}()){$pyjs.track.lineno=35;var e;a:{try{try{$pyjs.in_try_except+=1;e=m.getHash();break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}e=void 0}m.hashDictHash=e;$pyjs.track.lineno=36;m.hashDict=function(){try{try{return $pyjs.in_try_except+=1,c.makeUrlDict($p.__getslice(function(){try{try{return $pyjs.in_try_except+=1,m.getHash()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),
a;}}(),1,null))}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}()}$pyjs.track.lineno=37;$pyjs.track.lineno=37;a=m.hashDict;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getHashDict=b;$pyjs.track.lineno=39;b=$pyjs__bind_method2("getHost",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:39};$pyjs.trackstack.push($pyjs.track);
$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=39;$pyjs.track.lineno=40;$pyjs.track.lineno=40;a=a.location.host;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getHost=b;$pyjs.track.lineno=42;b=$pyjs__bind_method2("getHostname",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:42};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=
42;$pyjs.track.lineno=43;$pyjs.track.lineno=43;a=a.location.hostname;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getHostname=b;$pyjs.track.lineno=45;b=$pyjs__bind_method2("getHref",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:45};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=45;$pyjs.track.lineno=46;$pyjs.track.lineno=46;
a=a.location.href;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getHref=b;$pyjs.track.lineno=48;b=$pyjs__bind_method2("getPageHref",function(a){a=!0===this.__is_instance__?this:a;var c,d,b,f,h;$pyjs.track={module:"pyjamas.Location",lineno:48};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=48;$pyjs.track.lineno=52;c=a.location.href;$pyjs.track.lineno=53;if(function(){try{try{$pyjs.in_try_except+=
1;var a;a:{try{try{$pyjs.in_try_except+=1;a=c.find("?");break a}finally{$pyjs.in_try_except-=1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}a=void 0}return null===(b=a)||!1===b||0===b||""===b?!1:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}}()){$pyjs.track.lineno=53;var g;a:{try{try{$pyjs.in_try_except+=
1;g=c.$$split("?");break a}finally{$pyjs.in_try_except-=1}}catch(e){throw $p.isinstance(e,$p.StopIteration)||$p._handle_exception(e),e;}g=void 0}c="undefined"!=typeof(h=g).__array?"undefined"!=typeof h.__array[0]?h.__array[0]:h.__getitem__(0):h.__getitem__(0)}$pyjs.track.lineno=54;if(function(){try{try{$pyjs.in_try_except+=1;var a;a:{try{try{$pyjs.in_try_except+=1;a=c.find("#");break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}a=void 0}return null===
(d=a)||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}}()){$pyjs.track.lineno=54;var k;a:{try{try{$pyjs.in_try_except+=1;k=c.$$split("#");break a}finally{$pyjs.in_try_except-=1}}catch(l){throw $p.isinstance(l,$p.StopIteration)||$p._handle_exception(l),l;}k=void 0}c="undefined"!=typeof(f=k).__array?
"undefined"!=typeof f.__array[0]?f.__array[0]:f.__getitem__(0):f.__getitem__(0)}$pyjs.track.lineno=55;$pyjs.track.lineno=55;f=c;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return f},1,[null,null,["self"]]);e.getPageHref=b;$pyjs.track.lineno=57;b=$pyjs__bind_method2("getPathname",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:57};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=
57;$pyjs.track.lineno=58;$pyjs.track.lineno=58;a=a.location.pathname;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getPathname=b;$pyjs.track.lineno=60;b=$pyjs__bind_method2("getPort",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:60};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=60;$pyjs.track.lineno=61;$pyjs.track.lineno=61;
a=a.location.port;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getPort=b;$pyjs.track.lineno=63;b=$pyjs__bind_method2("getProtocol",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",lineno:63};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=63;$pyjs.track.lineno=64;$pyjs.track.lineno=64;a=a.location.protocol;$pyjs.trackstack.pop();$pyjs.track=
$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getProtocol=b;$pyjs.track.lineno=66;b=$pyjs__bind_method2("getSearch",function(a){a=!0===this.__is_instance__?this:a;var c,b;$pyjs.track={module:"pyjamas.Location",lineno:66};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=66;$pyjs.track.lineno=67;$pyjs.track.lineno=67;a=(null===(b=c=a.location.search)||!1===b||0===b||""===b?0:"object"==typeof b?"function"==typeof b.__nonzero__?
b.__nonzero__():"function"==typeof b.__len__?0<b.__len__():1:1)?c:"";$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return a},1,[null,null,["self"]]);e.getSearch=b;$pyjs.track.lineno=69;b=$pyjs__bind_method2("getSearchDict",function(a){var b=!0===this.__is_instance__?this:a,d;$pyjs.track={module:"pyjamas.Location",lineno:69};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=69;$pyjs.track.lineno=70;var e;a:{try{try{$pyjs.in_try_except+=
1;e=null===(d=null===b.searchDict)||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(f){throw $p.isinstance(f,$p.StopIteration)||$p._handle_exception(f),f;}e=void 0}if(e){$pyjs.track.lineno=71;a=$p.__getslice(function(){try{try{return $pyjs.in_try_except+=1,b.getSearch()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),
a;}}(),1,null);$pyjs.track.lineno=72;var h;a:{try{try{$pyjs.in_try_except+=1;h=c.makeUrlDict(a);break a}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||$p._handle_exception(g),g;}h=void 0}b.searchDict=h}$pyjs.track.lineno=73;$pyjs.track.lineno=73;h=b.searchDict;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return h},1,[null,null,["self"]]);e.getSearchDict=b;$pyjs.track.lineno=75;b=$pyjs__bind_method2("getSearchVar",function(a,
c){if(!0===this.__is_instance__)var b=this;else b=arguments[0],a=arguments[1],c=arguments[2];"undefined"==typeof c&&(c=arguments.callee.__args__[4][1]);$pyjs.track={module:"pyjamas.Location",lineno:75};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=75;$pyjs.track.lineno=76;$pyjs.track.lineno=76;var e;a:{try{try{$pyjs.in_try_except+=1;var f;b:{try{try{$pyjs.in_try_except+=1;f=b.getSearchDict();break b}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,
$p.StopIteration)||$p._handle_exception(h),h;}f=void 0}e=f.get(a,c);break a}finally{$pyjs.in_try_except-=1}}catch(g){throw $p.isinstance(g,$p.StopIteration)||$p._handle_exception(g),g;}e=void 0}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return e},1,[null,null,["self"],["key"],["$$default",null]]);e.getSearchVar=b;$pyjs.track.lineno=78;b=$pyjs__bind_method2("reload",function(a){a=!0===this.__is_instance__?this:a;$pyjs.track={module:"pyjamas.Location",
lineno:78};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=78;$pyjs.track.lineno=79;try{try{$pyjs.in_try_except+=1,a.location.reload()}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"]]);e.reload=b;$pyjs.track.lineno=81;b=$pyjs__bind_method2("setHref",function(a,c){if(!0===
this.__is_instance__)var b=this;else b=a,a=c;$pyjs.track={module:"pyjamas.Location",lineno:81};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=81;$pyjs.track.lineno=82;b.location.href=a;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["href"]]);e.setHref=b;$pyjs.track.lineno=84;b=$pyjs__bind_method2("setSearch",function(a,c){if(!0===this.__is_instance__)var b=this;else b=a,a=
c;$pyjs.track={module:"pyjamas.Location",lineno:84};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=84;$pyjs.track.lineno=85;b.location.search=a;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["search"]]);e.setSearch=b;$pyjs.track.lineno=87;b=$pyjs__bind_method2("setSearchDict",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;$pyjs.track={module:"pyjamas.Location",
lineno:87};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=87;$pyjs.track.lineno=88;(function(){try{try{return $pyjs.in_try_except+=1,d.setSearch(function(){try{try{return $pyjs.in_try_except+=1,c.makeUrlStringFromDict(a)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}())}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}})();$pyjs.trackstack.pop();
$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["searchDict"]]);e.setSearchDict=b;$pyjs.track.lineno=90;b=$pyjs__bind_method2("setHash",function(a,c){if(!0===this.__is_instance__)var b=this;else b=a,a=c;$pyjs.track={module:"pyjamas.Location",lineno:90};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=90;$pyjs.track.lineno=91;b.location.hash=a;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();
$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["hash"]]);e.setHash=b;$pyjs.track.lineno=93;b=$pyjs__bind_method2("setHashDict",function(a,b){if(!0===this.__is_instance__)var d=this;else d=a,a=b;$pyjs.track={module:"pyjamas.Location",lineno:93};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.Location";$pyjs.track.lineno=93;$pyjs.track.lineno=94;(function(){try{try{return $pyjs.in_try_except+=1,d.setHash(function(){try{try{return $pyjs.in_try_except+=1,c.makeUrlStringFromDict(a)}finally{$pyjs.in_try_except-=
1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}())}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}})();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["hashDict"]]);e.setHashDict=b;$pyjs.track.lineno=18;b=Array(pyjslib.object);var l=$p.dict(),k;for(k in e)l.__setitem__(k,e[k]);return $p._create_class("Location",$p.tuple(b),
l)}();return this};
