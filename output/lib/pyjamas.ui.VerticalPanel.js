$pyjs.loaded_modules["pyjamas.ui.VerticalPanel"]=function(e){if($pyjs.loaded_modules["pyjamas.ui.VerticalPanel"].__was_initialized__)return $pyjs.loaded_modules["pyjamas.ui.VerticalPanel"];"undefined"!=typeof $pyjs.loaded_modules["pyjamas.ui"]&&$pyjs.loaded_modules["pyjamas.ui"].__was_initialized__||$p.___import___("pyjamas.ui",null);var a=$pyjs.loaded_modules["pyjamas.ui.VerticalPanel"];a.__repr__=function(){return"<module: pyjamas.ui.VerticalPanel>"};a.__was_initialized__=!0;if(null===e||"undefined"==
typeof e)e="pyjamas.ui.VerticalPanel";a.__name__=e;a.__track_lines__=[];$pyjs.loaded_modules["pyjamas.ui"].VerticalPanel=$pyjs.loaded_modules["pyjamas.ui.VerticalPanel"];a.__track_lines__[1]="pyjamas.ui.VerticalPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors";a.__track_lines__[15]="pyjamas.ui.VerticalPanel.py, line 15:\n    from pyjamas import DOM";a.__track_lines__[16]="pyjamas.ui.VerticalPanel.py, line 16:\n    from pyjamas import Factory";a.__track_lines__[18]="pyjamas.ui.VerticalPanel.py, line 18:\n    from pyjamas.ui.CellPanel import CellPanel";
a.__track_lines__[19]="pyjamas.ui.VerticalPanel.py, line 19:\n    from pyjamas.ui import HasHorizontalAlignment";a.__track_lines__[20]="pyjamas.ui.VerticalPanel.py, line 20:\n    from pyjamas.ui import HasVerticalAlignment";a.__track_lines__[22]="pyjamas.ui.VerticalPanel.py, line 22:\n    class VerticalPanel(CellPanel):";a.__track_lines__[24]="pyjamas.ui.VerticalPanel.py, line 24:\n    def insert(self, widget, container, beforeIndex=None):";a.__track_lines__[31]="pyjamas.ui.VerticalPanel.py, line 31:\n    if widget.getParent() == self:";
a.__track_lines__[32]="pyjamas.ui.VerticalPanel.py, line 32:\n    return";a.__track_lines__[34]="pyjamas.ui.VerticalPanel.py, line 34:\n    if beforeIndex is None:";a.__track_lines__[35]="pyjamas.ui.VerticalPanel.py, line 35:\n    beforeIndex = container";a.__track_lines__[36]="pyjamas.ui.VerticalPanel.py, line 36:\n    container = self.getBody()";a.__track_lines__[38]="pyjamas.ui.VerticalPanel.py, line 38:\n    widget.removeFromParent()";a.__track_lines__[40]="pyjamas.ui.VerticalPanel.py, line 40:\n    tr = DOM.createTR()";
a.__track_lines__[41]="pyjamas.ui.VerticalPanel.py, line 41:\n    td = DOM.createTD()";a.__track_lines__[43]="pyjamas.ui.VerticalPanel.py, line 43:\n    DOM.insertChild(container, tr, beforeIndex)";a.__track_lines__[44]="pyjamas.ui.VerticalPanel.py, line 44:\n    DOM.appendChild(tr, td)";a.__track_lines__[46]="pyjamas.ui.VerticalPanel.py, line 46:\n    CellPanel.insert(self, widget, td, beforeIndex)";a.__track_lines__[48]="pyjamas.ui.VerticalPanel.py, line 48:\n    self.setCellHorizontalAlignment(widget, self.horzAlign)";
a.__track_lines__[49]="pyjamas.ui.VerticalPanel.py, line 49:\n    self.setCellVerticalAlignment(widget, self.vertAlign)";a.__track_lines__[51]="pyjamas.ui.VerticalPanel.py, line 51:\n    def remove(self, widget):";a.__track_lines__[52]="pyjamas.ui.VerticalPanel.py, line 52:\n    if isinstance(widget, int):";a.__track_lines__[53]="pyjamas.ui.VerticalPanel.py, line 53:\n    widget = self.getWidget(widget)";a.__track_lines__[55]="pyjamas.ui.VerticalPanel.py, line 55:\n    if widget.getParent() != self:";
a.__track_lines__[56]="pyjamas.ui.VerticalPanel.py, line 56:\n    return False";a.__track_lines__[58]="pyjamas.ui.VerticalPanel.py, line 58:\n    td = DOM.getParent(widget.getElement())";a.__track_lines__[59]="pyjamas.ui.VerticalPanel.py, line 59:\n    tr = DOM.getParent(td)";a.__track_lines__[60]="pyjamas.ui.VerticalPanel.py, line 60:\n    DOM.removeChild(self.getBody(), tr)";a.__track_lines__[62]="pyjamas.ui.VerticalPanel.py, line 62:\n    CellPanel.remove(self, widget)";a.__track_lines__[63]="pyjamas.ui.VerticalPanel.py, line 63:\n    return True";
a.__track_lines__[66]="pyjamas.ui.VerticalPanel.py, line 66:\n    Factory.registerClass('pyjamas.ui.VerticalPanel', 'VerticalPanel', VerticalPanel)";$pyjs.track.module="pyjamas.ui.VerticalPanel";$pyjs.track.lineno=1;$pyjs.track.lineno=15;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.DOM=$p.___import___("pyjamas.DOM","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=
16;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.Factory=$p.___import___("pyjamas.Factory","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=18;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.CellPanel=$p.___import___("pyjamas.ui.CellPanel.CellPanel","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=
$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=19;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.HasHorizontalAlignment=$p.___import___("pyjamas.ui.HasHorizontalAlignment","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=20;$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);a.HasVerticalAlignment=
$p.___import___("pyjamas.ui.HasVerticalAlignment","pyjamas.ui",null,!1);$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);$pyjs.track.lineno=22;a.VerticalPanel=function(){var m={},k;m.__module__="pyjamas.ui.VerticalPanel";$pyjs.track.lineno=24;k=$pyjs__bind_method2("insert",function(g,e,n){if(!0===this.__is_instance__)var c=this;else c=arguments[0],g=arguments[1],e=arguments[2],n=arguments[3];"undefined"==typeof n&&(n=arguments.callee.__args__[5][1]);var p,
f,l,b,d,q;$pyjs.track={module:"pyjamas.ui.VerticalPanel",lineno:24};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.VerticalPanel";$pyjs.track.lineno=24;$pyjs.track.lineno=31;var h;a:{try{try{$pyjs.in_try_except+=1;var r;b:{try{try{$pyjs.in_try_except+=1;r=g.getParent();break b}finally{$pyjs.in_try_except-=1}}catch(s){throw $p.isinstance(s,$p.StopIteration)||$p._handle_exception(s),s;}r=void 0}h=null===(d=(f=r)===(p=c)&&null===f?!0:null===f?!1:null===p?!1:"object"!=typeof f&&"function"!=
typeof f||"function"!=typeof f.__cmp__?"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.__cmp__?f==p:0===p.__cmp__(f):0===f.__cmp__(p))||!1===d||0===d||""===d?!1:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(t){throw $p.isinstance(t,$p.StopIteration)||$p._handle_exception(t),t;}h=void 0}if(h)return $pyjs.track.lineno=32,$pyjs.track.lineno=32,$pyjs.trackstack.pop(),
$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),null;$pyjs.track.lineno=34;var u;a:{try{try{$pyjs.in_try_except+=1;u=null===(b=null===n)||!1===b||0===b||""===b?!1:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__()?!0:!1:!0:!0;break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}u=void 0}if(u){$pyjs.track.lineno=35;n=e;$pyjs.track.lineno=36;a:{try{try{$pyjs.in_try_except+=
1;e=c.getBody();break a}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}e=void 0}}$pyjs.track.lineno=38;try{try{$pyjs.in_try_except+=1,g.removeFromParent()}finally{$pyjs.in_try_except-=1}}catch(v){throw $p.isinstance(v,$p.StopIteration)||$p._handle_exception(v),v;}$pyjs.track.lineno=40;a:{try{try{$pyjs.in_try_except+=1;l=a.DOM.createTR();break a}finally{$pyjs.in_try_except-=1}}catch(w){throw $p.isinstance(w,$p.StopIteration)||$p._handle_exception(w),
w;}l=void 0}$pyjs.track.lineno=41;a:{try{try{$pyjs.in_try_except+=1;q=a.DOM.createTD();break a}finally{$pyjs.in_try_except-=1}}catch(x){throw $p.isinstance(x,$p.StopIteration)||$p._handle_exception(x),x;}q=void 0}$pyjs.track.lineno=43;try{try{$pyjs.in_try_except+=1,a.DOM.insertChild(e,l,n)}finally{$pyjs.in_try_except-=1}}catch(y){throw $p.isinstance(y,$p.StopIteration)||$p._handle_exception(y),y;}$pyjs.track.lineno=44;try{try{$pyjs.in_try_except+=1,a.DOM.appendChild(l,q)}finally{$pyjs.in_try_except-=
1}}catch(z){throw $p.isinstance(z,$p.StopIteration)||$p._handle_exception(z),z;}$pyjs.track.lineno=46;try{try{$pyjs.in_try_except+=1,a.CellPanel.insert(c,g,q,n)}finally{$pyjs.in_try_except-=1}}catch(A){throw $p.isinstance(A,$p.StopIteration)||$p._handle_exception(A),A;}$pyjs.track.lineno=48;try{try{$pyjs.in_try_except+=1,c.setCellHorizontalAlignment(g,c.horzAlign)}finally{$pyjs.in_try_except-=1}}catch(B){throw $p.isinstance(B,$p.StopIteration)||$p._handle_exception(B),B;}$pyjs.track.lineno=49;try{try{$pyjs.in_try_except+=
1,c.setCellVerticalAlignment(g,c.vertAlign)}finally{$pyjs.in_try_except-=1}}catch(C){throw $p.isinstance(C,$p.StopIteration)||$p._handle_exception(C),C;}$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return null},1,[null,null,["self"],["widget"],["container"],["beforeIndex",null]]);m.insert=k;$pyjs.track.lineno=51;k=$pyjs__bind_method2("remove",function(g,e){if(!0===this.__is_instance__)var n=this;else n=g,g=e;var c,p,f,l,b,d;$pyjs.track={module:"pyjamas.ui.VerticalPanel",
lineno:51};$pyjs.trackstack.push($pyjs.track);$pyjs.track.module="pyjamas.ui.VerticalPanel";$pyjs.track.lineno=51;$pyjs.track.lineno=52;if(function(){try{try{$pyjs.in_try_except+=1;var a;a:{try{try{$pyjs.in_try_except+=1;a=$p.isinstance(g,$p.float_int);break a}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}a=void 0}return null===(l=a)||!1===l||0===l||""===l?!1:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==
typeof l.__len__?0<l.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=1}}catch(c){throw $p.isinstance(c,$p.StopIteration)||$p._handle_exception(c),c;}}()){$pyjs.track.lineno=53;a:{try{try{$pyjs.in_try_except+=1;g=n.getWidget(g);break a}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}g=void 0}}$pyjs.track.lineno=55;if(function(){try{try{$pyjs.in_try_except+=1;var a;a:{try{try{$pyjs.in_try_except+=1;a=g.getParent();break a}finally{$pyjs.in_try_except-=
1}}catch(d){throw $p.isinstance(d,$p.StopIteration)||$p._handle_exception(d),d;}a=void 0}return null===(b=!((c=a)===(f=n)&&null===c||(null===c?0:null===f?0:"object"!=typeof c&&"function"!=typeof c||"function"!=typeof c.__cmp__?"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.__cmp__?c==f:0===f.__cmp__(c):0===c.__cmp__(f))))||!1===b||0===b||""===b?!1:"object"==typeof b?"function"==typeof b.__nonzero__?b.__nonzero__():"function"==typeof b.__len__?0<b.__len__()?!0:!1:!0:!0}finally{$pyjs.in_try_except-=
1}}catch(e){throw $p.isinstance(e,$p.StopIteration)||$p._handle_exception(e),e;}}())return $pyjs.track.lineno=56,$pyjs.track.lineno=56,d=!1,$pyjs.trackstack.pop(),$pyjs.track=$pyjs.trackstack.pop(),$pyjs.trackstack.push($pyjs.track),d;$pyjs.track.lineno=58;d=function(){try{try{return $pyjs.in_try_except+=1,a.DOM.getParent(function(){try{try{return $pyjs.in_try_except+=1,g.getElement()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,$p.StopIteration)||$p._handle_exception(a),a;}}())}finally{$pyjs.in_try_except-=
1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}}();$pyjs.track.lineno=59;a:{try{try{$pyjs.in_try_except+=1;p=a.DOM.getParent(d);break a}finally{$pyjs.in_try_except-=1}}catch(k){throw $p.isinstance(k,$p.StopIteration)||$p._handle_exception(k),k;}p=void 0}$pyjs.track.lineno=60;(function(){try{try{return $pyjs.in_try_except+=1,a.DOM.removeChild(function(){try{try{return $pyjs.in_try_except+=1,n.getBody()}finally{$pyjs.in_try_except-=1}}catch(a){throw $p.isinstance(a,
$p.StopIteration)||$p._handle_exception(a),a;}}(),p)}finally{$pyjs.in_try_except-=1}}catch(b){throw $p.isinstance(b,$p.StopIteration)||$p._handle_exception(b),b;}})();$pyjs.track.lineno=62;try{try{$pyjs.in_try_except+=1,a.CellPanel.remove(n,g)}finally{$pyjs.in_try_except-=1}}catch(m){throw $p.isinstance(m,$p.StopIteration)||$p._handle_exception(m),m;}$pyjs.track.lineno=63;$pyjs.track.lineno=63;d=!0;$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);return d},
1,[null,null,["self"],["widget"]]);m.remove=k;$pyjs.track.lineno=22;k=Array(a.CellPanel);var e=$p.dict(),h;for(h in m)e.__setitem__(h,m[h]);return $p._create_class("VerticalPanel",$p.tuple(k),e)}();$pyjs.track.lineno=66;try{try{$pyjs.in_try_except+=1,a.Factory.registerClass("pyjamas.ui.VerticalPanel","VerticalPanel",a.VerticalPanel)}finally{$pyjs.in_try_except-=1}}catch(h){throw $p.isinstance(h,$p.StopIteration)||$p._handle_exception(h),h;}return this};
