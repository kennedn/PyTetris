$pyjs.loaded_modules["modules.polyfill"]=function(b){if($pyjs.loaded_modules["modules.polyfill"].__was_initialized__)return $pyjs.loaded_modules["modules.polyfill"];"undefined"!=typeof $pyjs.loaded_modules.modules&&$pyjs.loaded_modules.modules.__was_initialized__||$p.___import___("modules",null);var a=$pyjs.loaded_modules["modules.polyfill"];a.__repr__=function(){return"<module: modules.polyfill>"};a.__was_initialized__=!0;if(null===b||"undefined"==typeof b)b="modules.polyfill";a.__name__=b;a.__track_lines__=
[];$pyjs.loaded_modules.modules.polyfill=$pyjs.loaded_modules["modules.polyfill"];a.__track_lines__[8]="modules.polyfill.py, line 8:\n    return type('Enum', (), enums)";a.__track_lines__[1]="modules.polyfill.py, line 1:\n    # Math.clamp implementation using min, max";a.__track_lines__[2]="modules.polyfill.py, line 2:\n    def clamp(min_x, max_x, x):";a.__track_lines__[3]="modules.polyfill.py, line 3:\n    return max(min_x, min(max_x, x))";a.__track_lines__[7]="modules.polyfill.py, line 7:\n    def enum(**enums):";
$pyjs.track.module="modules.polyfill";$pyjs.track.lineno=1;$pyjs.track.lineno=2;a.clamp=function(a,b,d){$pyjs.track={module:"modules.polyfill",lineno:2};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="modules.polyfill";$pyjs.track.lineno=2;$pyjs.track.lineno=3;$pyjs.track.lineno=3;var c=function(){try{try{return $pyjs.in_try_except+=1,$p.max(a,function(){try{try{return $pyjs.in_try_except+=1,$p.min(b,d)}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),
a;}}())}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}}();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return c};a.clamp.__name__="clamp";a.clamp.__bind_type__=0;a.clamp.__args__=[null,null,["min_x"],["max_x"],["x"]];$pyjs.track.lineno=7;a.$$enum=function(){var a=1<=arguments.length?arguments[arguments.length-1]:arguments[arguments.length];null===a||"object"!=typeof a||"dict"!=a.__name__||
"undefined"==typeof a.$pyjs_is_kwarg?a=arguments[arguments.length+1]:delete a.$pyjs_is_kwarg;"undefined"==typeof a&&(a=$p.__empty_dict());$pyjs.track={module:"modules.polyfill",lineno:7};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="modules.polyfill";$pyjs.track.lineno=7;$pyjs.track.lineno=8;$pyjs.track.lineno=8;var b=function(){try{try{return $pyjs.in_try_except+=1,$p.type("Enum",function(){try{try{return $pyjs.in_try_except+=1,$p.tuple([])}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,
$p.StopIteration)||$p._handle_exception(a),a;}}(),a)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}();$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return b};a.$$enum.__name__="enum";a.$$enum.__bind_type__=0;a.$$enum.__args__=[null,["enums"]];return this};
