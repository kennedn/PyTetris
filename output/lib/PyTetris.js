$pyjs.loaded_modules.PyTetris=function(h){if($pyjs.loaded_modules.PyTetris.__was_initialized__)return $pyjs.loaded_modules.PyTetris;var a=$pyjs.loaded_modules.PyTetris;a.__repr__=function(){return"<module: PyTetris>"};a.__was_initialized__=!0;if(null===h||"undefined"==typeof h)h="PyTetris";a.__name__=h;a.pygame=$p.___import___("pyjsdl",null,null,!1);a.Grid=$p.___import___("modules.grid.Grid",null,null,!1);a.OSD=$p.___import___("modules.osd.OSD",null,null,!1);a.Button=$p.___import___("modules.button.Button",
null,null,!1);$p.__import_all__("modules.globals",null,a,null,!1);a.screen=a.pygame.display.set_mode($p.tuple(["undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH,"undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:SCREEN_HEIGHT]));a.pygame.display.set_caption("undefined"==typeof CAPTION?a.CAPTION:CAPTION);a.clock=a.pygame.time.Clock();a.GameState_PAUSED=0;a.GameState_GAMEOVER=1;a.GameState_PLAYING=2;a.grid=null;a.osd=a.OSD(a.screen,a.pygame.Rect(0,0,("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:
SCREEN_WIDTH)-("undefined"==typeof OSD_WIDTH?a.OSD_WIDTH:OSD_WIDTH),"undefined"==typeof OSD_HEIGHT?a.OSD_HEIGHT:OSD_HEIGHT),2,5,3,6,"undefined"==typeof GRID_COLOR?a.GRID_COLOR:GRID_COLOR);a.pause_toggle=function(){var d,e,f;a.text_display_counter=0;a.game_state=(null===(e=!((f=a.game_state)===(d=a.GameState_PLAYING)&&null===f||(null===f?0:null===d?0:"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.__cmp__?"object"!=typeof d&&"function"!=typeof d||"function"!=typeof d.__cmp__?f==d:0===
d.__cmp__(f):0===f.__cmp__(d))))||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1)?a.GameState_PLAYING:a.GameState_PAUSED;return null};a.pause_toggle.__name__="pause_toggle";a.pause_toggle.__bind_type__=0;a.pause_toggle.__args__=[null,null];a.restart=function(){a.grid=a.Grid(a.screen);("undefined"==typeof attach_buttons?a.attach_buttons:attach_buttons)();a.down_held=!1;a.game_state=a.GameState_PLAYING;return null};
a.restart.__name__="restart";a.restart.__bind_type__=0;a.restart.__args__=[null,null];a.buttons=$p.list([]);a.attach_buttons=function(){a.buttons=$p.list([]);a.buttons.append(a.Button(a.screen,"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,"undefined"==typeof BUTTON_SIZE?
a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),5,5,$p.list([0,2]),a.pause_toggle));a.buttons.append(a.Button(a.screen,"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,0,"undefined"==
typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),5,6,$p.list([0,1,2]),a.restart));a.buttons.append(a.Button(a.screen,"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,("undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:
SCREEN_HEIGHT)-5*("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),5,2,$p.list([2]),$p.getattr(a.grid,"move_block_left")));a.buttons.append(a.Button(a.screen,"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-
("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,("undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:SCREEN_HEIGHT)-4*("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),5,1,$p.list([2]),$p.getattr(a.grid,"move_block_right")));a.buttons.append(a.Button(a.screen,"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?
a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,("undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:SCREEN_HEIGHT)-3*("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),5,0,$p.list([2]),$p.getattr(a.grid,"rotate_block")));a.buttons.append(a.Button(a.screen,
"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,("undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:SCREEN_HEIGHT)-2*("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:
BUTTON_SIZE),5,3,$p.list([2]),$p.getattr(a.grid,"move_block_down")));a.buttons.append(a.Button(a.screen,"undefined"==typeof BUTTON_COLOR_BG?a.BUTTON_COLOR_BG:BUTTON_COLOR_BG,"undefined"==typeof BUTTON_COLOR_FG?a.BUTTON_COLOR_FG:BUTTON_COLOR_FG,a.pygame.Rect(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE)+1,("undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:SCREEN_HEIGHT)-("undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),
"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE,"undefined"==typeof BUTTON_SIZE?a.BUTTON_SIZE:BUTTON_SIZE),5,4,$p.list([2]),$p.getattr(a.grid,"move_block_to_bottom")));return null};a.attach_buttons.__name__="attach_buttons";a.attach_buttons.__bind_type__=0;a.attach_buttons.__args__=[null,null];a.screen.fill("undefined"==typeof BACK_COLOR?a.BACK_COLOR:BACK_COLOR);a.restart();a.game_state=a.GameState_PAUSED;a.osd.update_values(a.grid.score,a.grid.level,a.grid.next_block);a.grid._draw_grid("undefined"==
typeof DEBUG?a.DEBUG:DEBUG);a.text_display_counter=0;a.run=function(){var d,e,f,k,l,m,n,p,q,r,h,Ac,Wc,Xc,Yc,Zc,$c,s,t,u,v,w,x,ad,y,z,bd,cd,dd,hb,ed,ib,jb,A,kb,B,lb,C,mb,D,nb,E,ob,g,Hc,Ic,fd,F,pb,G,H,qb,rb,sb,gd,Jc,qc,hd,id,jd,kd,b,ld,I,tb,J,ub,K,L,M,N,O,P,Q,R,S,vb,T,wb,U,xb,V,yb,W,zb,X,md,Kc,rc,Lc,sc,Mc,tc,Nc,uc,vc,Oc,wc,Pc,Y,Ab,Qc,xc,Z,Bb,$,Cb,aa,Db,ba,Eb,nd,od,pd,qd,rd,sd,td,Fb,Gb,Hb,yc,Ib,ca,Jb,da,Kb,ea,Lb,fa,Mb,ga,Nb,zc,ud,vd,Ob,wd,ha,ia,ja,ka,la,ma,na,oa,pa,Bc,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,
Ba,Rc,Sc,Cc,Tc,Dc,xd,Pb,Ca,Qb,Da,Rb,Ea,Sb,Fa,Tb,Ga,Ha,Ub,Ia,Ja,Vb,Ka,Wb,La,c,yd,Uc,Xb,Ma,Yb,Na,Zb,Oa,$b,Pa,ac,Qa,Ra,bc,Sa,cc,Ta,dc,Ua,ec,Va,fc,Wa,Xa,Ya,Za,$a,ab,bb,cb,Ec,zd,Ad,Fc,gc,Vc,hc,Bd,Cd,ic,jc,kc,lc,Gc,db,mc,eb,nc,fb,oc,gb,pc;Fc=a.clock.tick("undefined"==typeof FPS?a.FPS:FPS);Ib=a.pygame.event.get();"undefined"!=typeof(Tc=Ib.__array)?Gc=0:(Ib=Ib.__iter__(),Gc="undefined"!=typeof(Tc=Ib.__array)?0:"function"==typeof Ib.$genfunc?1:-1);for(xd=0;"undefined"!=typeof(ed=Gc?0<Gc?Ib.next(!0,!1):$p.wrapped_next(Ib):
Tc[xd++]);){b=ed;if(null===(s=1==(0===(Gb=a.DEBUG)?0:"number"!=typeof Gb||"number"!=typeof Gb&&"string"!=typeof Gb&&"boolean"!=typeof Gb?$p.cmp(Gb,0):0==Gb?0:0>Gb?-1:1))||!1===s||0===s||""===s?0:"object"==typeof s?"function"==typeof s.__nonzero__?s.__nonzero__():"function"==typeof s.__len__?0<s.__len__():1:1){if(null===(w=(null===(t=Xc=(Ja=b.type)===(Wb=a.pygame.KEYDOWN)&&null===Ja?!0:null===Ja?!1:null===Wb?!1:"object"!=typeof Ja&&"function"!=typeof Ja||"function"!=typeof Ja.__cmp__?"object"!=typeof Wb&&
"function"!=typeof Wb||"function"!=typeof Wb.__cmp__?Ja==Wb:0===Wb.__cmp__(Ja):0===Ja.__cmp__(Wb))||!1===t||0===t||""===t?0:"object"==typeof t?"function"==typeof t.__nonzero__?t.__nonzero__():"function"==typeof t.__len__?0<t.__len__():1:1)?(La=b.key)===(Vb=a.pygame.K_PAGEUP)&&null===La?!0:null===La?!1:null===Vb?!1:"object"!=typeof La&&"function"!=typeof La||"function"!=typeof La.__cmp__?"object"!=typeof Vb&&"function"!=typeof Vb||"function"!=typeof Vb.__cmp__?La==Vb:0===Vb.__cmp__(La):0===La.__cmp__(Vb):
Xc)||!1===w||0===w||""===w?0:"object"==typeof w?"function"==typeof w.__nonzero__?w.__nonzero__():"function"==typeof w.__len__?0<w.__len__():1:1)a.DEBUG=$p.min(a.DEBUG+1,10);if(null===(u=(null===(x=Yc=(Ka=b.type)===(Ub=a.pygame.KEYDOWN)&&null===Ka?!0:null===Ka?!1:null===Ub?!1:"object"!=typeof Ka&&"function"!=typeof Ka||"function"!=typeof Ka.__cmp__?"object"!=typeof Ub&&"function"!=typeof Ub||"function"!=typeof Ub.__cmp__?Ka==Ub:0===Ub.__cmp__(Ka):0===Ka.__cmp__(Ub))||!1===x||0===x||""===x?0:"object"==
typeof x?"function"==typeof x.__nonzero__?x.__nonzero__():"function"==typeof x.__len__?0<x.__len__():1:1)?(Ia=b.key)===(wb=a.pygame.K_PAGEDOWN)&&null===Ia?!0:null===Ia?!1:null===wb?!1:"object"!=typeof Ia&&"function"!=typeof Ia||"function"!=typeof Ia.__cmp__?"object"!=typeof wb&&"function"!=typeof wb||"function"!=typeof wb.__cmp__?Ia==wb:0===wb.__cmp__(Ia):0===Ia.__cmp__(wb):Yc)||!1===u||0===u||""===u?0:"object"==typeof u?"function"==typeof u.__nonzero__?u.__nonzero__():"function"==typeof u.__len__?
0<u.__len__():1:1)a.DEBUG=$p.max(1,a.DEBUG-1);(null===(y=(null===(v=Zc=(U=b.type)===(xb=a.pygame.KEYDOWN)&&null===U?!0:null===U?!1:null===xb?!1:"object"!=typeof U&&"function"!=typeof U||"function"!=typeof U.__cmp__?"object"!=typeof xb&&"function"!=typeof xb||"function"!=typeof xb.__cmp__?U==xb:0===xb.__cmp__(U):0===U.__cmp__(xb))||!1===v||0===v||""===v?0:"object"==typeof v?"function"==typeof v.__nonzero__?v.__nonzero__():"function"==typeof v.__len__?0<v.__len__():1:1)?(V=b.key)===(yb=a.pygame.K_1)&&
null===V?!0:null===V?!1:null===yb?!1:"object"!=typeof V&&"function"!=typeof V||"function"!=typeof V.__cmp__?"object"!=typeof yb&&"function"!=typeof yb||"function"!=typeof yb.__cmp__?V==yb:0===yb.__cmp__(V):0===V.__cmp__(yb):Zc)||!1===y||0===y||""===y?0:"object"==typeof y?"function"==typeof y.__nonzero__?y.__nonzero__():"function"==typeof y.__len__?0<y.__len__():1:1)&&a.grid._Grid__create_block();if(null===(f=(null===(z=$c=(W=b.type)===(zb=a.pygame.KEYDOWN)&&null===W?!0:null===W?!1:null===zb?!1:"object"!=
typeof W&&"function"!=typeof W||"function"!=typeof W.__cmp__?"object"!=typeof zb&&"function"!=typeof zb||"function"!=typeof zb.__cmp__?W==zb:0===zb.__cmp__(W):0===W.__cmp__(zb))||!1===z||0===z||""===z?0:"object"==typeof z?"function"==typeof z.__nonzero__?z.__nonzero__():"function"==typeof z.__len__?0<z.__len__():1:1)?(X=b.key)===(vb=a.pygame.K_2)&&null===X?!0:null===X?!1:null===vb?!1:"object"!=typeof X&&"function"!=typeof X||"function"!=typeof X.__cmp__?"object"!=typeof vb&&"function"!=typeof vb||
"function"!=typeof vb.__cmp__?X==vb:0===vb.__cmp__(X):0===X.__cmp__(vb):$c)||!1===f||0===f||""===f?0:"object"==typeof f?"function"==typeof f.__nonzero__?f.__nonzero__():"function"==typeof f.__len__?0<f.__len__():1:1)a.grid.grid=function(){var b,c,e,f,d;e=$p.list();c=$p.range("undefined"==typeof BLOCK_HEIGHT?a.BLOCK_HEIGHT:BLOCK_HEIGHT);"undefined"!=typeof(d=c.__array)?b=0:(c=c.__iter__(),b="undefined"!=typeof(d=c.__array)?0:"function"==typeof c.$genfunc?1:-1);for(f=0;"undefined"!=typeof(b?0<b?c.next(!0,
!1):$p.wrapped_next(c):d[f++]);)e.append(function(){var b,c,e,d,f;e=$p.list();d=$p.range("undefined"==typeof BLOCK_WIDTH?a.BLOCK_WIDTH:BLOCK_WIDTH);"undefined"!=typeof(c=d.__array)?f=0:(d=d.__iter__(),f="undefined"!=typeof(c=d.__array)?0:"function"==typeof d.$genfunc?1:-1);for(b=0;"undefined"!=typeof(f?0<f?d.next(!0,!1):$p.wrapped_next(d):c[b++]);)e.append(0);return e}());return e}();(null===(l=(null===(k=Wc=(T=b.type)===(Jb=a.pygame.KEYDOWN)&&null===T?!0:null===T?!1:null===Jb?!1:"object"!=typeof T&&
"function"!=typeof T||"function"!=typeof T.__cmp__?"object"!=typeof Jb&&"function"!=typeof Jb||"function"!=typeof Jb.__cmp__?T==Jb:0===Jb.__cmp__(T):0===T.__cmp__(Jb))||!1===k||0===k||""===k?0:"object"==typeof k?"function"==typeof k.__nonzero__?k.__nonzero__():"function"==typeof k.__len__?0<k.__len__():1:1)?(ca=b.key)===(Kb=a.pygame.K_3)&&null===ca?!0:null===ca?!1:null===Kb?!1:"object"!=typeof ca&&"function"!=typeof ca||"function"!=typeof ca.__cmp__?"object"!=typeof Kb&&"function"!=typeof Kb||"function"!=
typeof Kb.__cmp__?ca==Kb:0===Kb.__cmp__(ca):0===ca.__cmp__(Kb):Wc)||!1===l||0===l||""===l?0:"object"==typeof l?"function"==typeof l.__nonzero__?l.__nonzero__():"function"==typeof l.__len__?0<l.__len__():1:1)&&a.grid.print_grid();(null===(n=(null===(m=qd=(da=b.type)===(Lb=a.pygame.KEYDOWN)&&null===da?!0:null===da?!1:null===Lb?!1:"object"!=typeof da&&"function"!=typeof da||"function"!=typeof da.__cmp__?"object"!=typeof Lb&&"function"!=typeof Lb||"function"!=typeof Lb.__cmp__?da==Lb:0===Lb.__cmp__(da):
0===da.__cmp__(Lb))||!1===m||0===m||""===m?0:"object"==typeof m?"function"==typeof m.__nonzero__?m.__nonzero__():"function"==typeof m.__len__?0<m.__len__():1:1)?(ea=b.key)===(Mb=a.pygame.K_4)&&null===ea?!0:null===ea?!1:null===Mb?!1:"object"!=typeof ea&&"function"!=typeof ea||"function"!=typeof ea.__cmp__?"object"!=typeof Mb&&"function"!=typeof Mb||"function"!=typeof Mb.__cmp__?ea==Mb:0===Mb.__cmp__(ea):0===ea.__cmp__(Mb):qd)||!1===n||0===n||""===n?0:"object"==typeof n?"function"==typeof n.__nonzero__?
n.__nonzero__():"function"==typeof n.__len__?0<n.__len__():1:1)&&a.grid.current_block.print_block();if(null===(q=(null===(p=pd=(fa=b.type)===(Nb=a.pygame.KEYDOWN)&&null===fa?!0:null===fa?!1:null===Nb?!1:"object"!=typeof fa&&"function"!=typeof fa||"function"!=typeof fa.__cmp__?"object"!=typeof Nb&&"function"!=typeof Nb||"function"!=typeof Nb.__cmp__?fa==Nb:0===Nb.__cmp__(fa):0===fa.__cmp__(Nb))||!1===p||0===p||""===p?0:"object"==typeof p?"function"==typeof p.__nonzero__?p.__nonzero__():"function"==
typeof p.__len__?0<p.__len__():1:1)?(ga=b.key)===(Yb=a.pygame.K_5)&&null===ga?!0:null===ga?!1:null===Yb?!1:"object"!=typeof ga&&"function"!=typeof ga||"function"!=typeof ga.__cmp__?"object"!=typeof Yb&&"function"!=typeof Yb||"function"!=typeof Yb.__cmp__?ga==Yb:0===Yb.__cmp__(ga):0===ga.__cmp__(Yb):pd)||!1===q||0===q||""===q?0:"object"==typeof q?"function"==typeof q.__nonzero__?q.__nonzero__():"function"==typeof q.__len__?0<q.__len__():1:1)a.grid.level=$p.min(a.grid.level+1,100),a.grid._set_tick();
if(null===(d=(null===(r=sd=(Na=b.type)===(Xb=a.pygame.KEYDOWN)&&null===Na?!0:null===Na?!1:null===Xb?!1:"object"!=typeof Na&&"function"!=typeof Na||"function"!=typeof Na.__cmp__?"object"!=typeof Xb&&"function"!=typeof Xb||"function"!=typeof Xb.__cmp__?Na==Xb:0===Xb.__cmp__(Na):0===Na.__cmp__(Xb))||!1===r||0===r||""===r?0:"object"==typeof r?"function"==typeof r.__nonzero__?r.__nonzero__():"function"==typeof r.__len__?0<r.__len__():1:1)?(Ma=b.key)===($b=a.pygame.K_6)&&null===Ma?!0:null===Ma?!1:null===
$b?!1:"object"!=typeof Ma&&"function"!=typeof Ma||"function"!=typeof Ma.__cmp__?"object"!=typeof $b&&"function"!=typeof $b||"function"!=typeof $b.__cmp__?Ma==$b:0===$b.__cmp__(Ma):0===Ma.__cmp__($b):sd)||!1===d||0===d||""===d?0:"object"==typeof d?"function"==typeof d.__nonzero__?d.__nonzero__():"function"==typeof d.__len__?0<d.__len__():1:1)a.grid.level=$p.max(0,a.grid.level+1),a.grid._set_tick();if(null===(P=(null===(e=rd=(Pa=b.type)===(Zb=a.pygame.KEYDOWN)&&null===Pa?!0:null===Pa?!1:null===Zb?!1:
"object"!=typeof Pa&&"function"!=typeof Pa||"function"!=typeof Pa.__cmp__?"object"!=typeof Zb&&"function"!=typeof Zb||"function"!=typeof Zb.__cmp__?Pa==Zb:0===Zb.__cmp__(Pa):0===Pa.__cmp__(Zb))||!1===e||0===e||""===e?0:"object"==typeof e?"function"==typeof e.__nonzero__?e.__nonzero__():"function"==typeof e.__len__?0<e.__len__():1:1)?(Oa=b.key)===(ac=a.pygame.K_7)&&null===Oa?!0:null===Oa?!1:null===ac?!1:"object"!=typeof Oa&&"function"!=typeof Oa||"function"!=typeof Oa.__cmp__?"object"!=typeof ac&&
"function"!=typeof ac||"function"!=typeof ac.__cmp__?Oa==ac:0===ac.__cmp__(Oa):0===Oa.__cmp__(ac):rd)||!1===P||0===P||""===P?0:"object"==typeof P?"function"==typeof P.__nonzero__?P.__nonzero__():"function"==typeof P.__len__?0<P.__len__():1:1)a.grid.lines+=1,a.grid._check_levelup()}a.down_held=!1;(null===(Ha=(null===(O=nd=(Qa=a.game_state)===(nc=a.GameState_PLAYING)&&null===Qa?!0:null===Qa?!1:null===nc?!1:"object"!=typeof Qa&&"function"!=typeof Qa||"function"!=typeof Qa.__cmp__?"object"!=typeof nc&&
"function"!=typeof nc||"function"!=typeof nc.__cmp__?Qa==nc:0===nc.__cmp__(Qa):0===Qa.__cmp__(nc))||!1===O||0===O||""===O?0:"object"==typeof O?"function"==typeof O.__nonzero__?O.__nonzero__():"function"==typeof O.__len__?0<O.__len__():1:1)?nd:(eb=a.game_state)===(mc=a.GameState_PAUSED)&&null===eb?!0:null===eb?!1:null===mc?!1:"object"!=typeof eb&&"function"!=typeof eb||"function"!=typeof eb.__cmp__?"object"!=typeof mc&&"function"!=typeof mc||"function"!=typeof mc.__cmp__?eb==mc:0===mc.__cmp__(eb):
0===eb.__cmp__(mc))||!1===Ha||0===Ha||""===Ha?0:"object"==typeof Ha?"function"==typeof Ha.__nonzero__?Ha.__nonzero__():"function"==typeof Ha.__len__?0<Ha.__len__():1:1)&&(null===(L=(null===(Q=td=(db=b.type)===(pc=a.pygame.KEYUP)&&null===db?!0:null===db?!1:null===pc?!1:"object"!=typeof db&&"function"!=typeof db||"function"!=typeof db.__cmp__?"object"!=typeof pc&&"function"!=typeof pc||"function"!=typeof pc.__cmp__?db==pc:0===pc.__cmp__(db):0===db.__cmp__(pc))||!1===Q||0===Q||""===Q?0:"object"==typeof Q?
"function"==typeof Q.__nonzero__?Q.__nonzero__():"function"==typeof Q.__len__?0<Q.__len__():1:1)?(gb=b.key)===(oc=a.pygame.K_p)&&null===gb?!0:null===gb?!1:null===oc?!1:"object"!=typeof gb&&"function"!=typeof gb||"function"!=typeof gb.__cmp__?"object"!=typeof oc&&"function"!=typeof oc||"function"!=typeof oc.__cmp__?gb==oc:0===oc.__cmp__(gb):0===gb.__cmp__(oc):td)||!1===L||0===L||""===L?0:"object"==typeof L?"function"==typeof L.__nonzero__?L.__nonzero__():"function"==typeof L.__len__?0<L.__len__():
1:1)&&a.pause_toggle();if(null===(N=(null===(K=jd=(fb=b.type)===(lc=a.pygame.MOUSEBUTTONUP)&&null===fb?!0:null===fb?!1:null===lc?!1:"object"!=typeof fb&&"function"!=typeof fb||"function"!=typeof fb.__cmp__?"object"!=typeof lc&&"function"!=typeof lc||"function"!=typeof lc.__cmp__?fb==lc:0===lc.__cmp__(fb):0===fb.__cmp__(lc))||!1===K||0===K||""===K?0:"object"==typeof K?"function"==typeof K.__nonzero__?K.__nonzero__():"function"==typeof K.__len__?0<K.__len__():1:1)?1===(kc=b.button)&&null===kc?!0:null===
kc?!1:"object"!=typeof kc&&"function"!=typeof kc||"function"!=typeof kc.__cmp__?1==kc:0===kc.__cmp__(1):jd)||!1===N||0===N||""===N?0:"object"==typeof N?"function"==typeof N.__nonzero__?N.__nonzero__():"function"==typeof N.__len__?0<N.__len__():1:1)for(ib=a.buttons,"undefined"!=typeof(Vc=ib.__array)?h=0:(ib=ib.__iter__(),h="undefined"!=typeof(Vc=ib.__array)?0:"function"==typeof ib.$genfunc?1:-1),Cd=0;"undefined"!=typeof(ud=h?0<h?ib.next(!0,!1):$p.wrapped_next(ib):Vc[Cd++]);)qc=ud,$pyjs_kwargs_call(qc,
"end_click_event",a.pygame.mouse.get_pos(),null,[{},a.game_state]);else if(null===(S=(null===(M=id=(H=b.type)===(qb=a.pygame.MOUSEBUTTONDOWN)&&null===H?!0:null===H?!1:null===qb?!1:"object"!=typeof H&&"function"!=typeof H||"function"!=typeof H.__cmp__?"object"!=typeof qb&&"function"!=typeof qb||"function"!=typeof qb.__cmp__?H==qb:0===qb.__cmp__(H):0===H.__cmp__(qb))||!1===M||0===M||""===M?0:"object"==typeof M?"function"==typeof M.__nonzero__?M.__nonzero__():"function"==typeof M.__len__?0<M.__len__():
1:1)?1===(rb=b.button)&&null===rb?!0:null===rb?!1:"object"!=typeof rb&&"function"!=typeof rb||"function"!=typeof rb.__cmp__?1==rb:0===rb.__cmp__(1):id)||!1===S||0===S||""===S?0:"object"==typeof S?"function"==typeof S.__nonzero__?S.__nonzero__():"function"==typeof S.__len__?0<S.__len__():1:1)for(hc=a.buttons,"undefined"!=typeof(Uc=hc.__array)?Cc=0:(hc=hc.__iter__(),Cc="undefined"!=typeof(Uc=hc.__array)?0:"function"==typeof hc.$genfunc?1:-1),yd=0;"undefined"!=typeof(vd=Cc?0<Cc?hc.next(!0,!1):$p.wrapped_next(hc):
Uc[yd++]);)qc=vd,$pyjs_kwargs_call(qc,"start_click_event",a.pygame.mouse.get_pos(),null,[{},a.game_state]);if(null===(R=(F=a.game_state)===(pb=a.GameState_PLAYING)&&null===F?!0:null===F?!1:null===pb?!1:"object"!=typeof F&&"function"!=typeof F||"function"!=typeof F.__cmp__?"object"!=typeof pb&&"function"!=typeof pb||"function"!=typeof pb.__cmp__?F==pb:0===pb.__cmp__(F):0===F.__cmp__(pb))||!1===R||0===R||""===R?0:"object"==typeof R?"function"==typeof R.__nonzero__?R.__nonzero__():"function"==typeof R.__len__?
0<R.__len__():1:1){if(null===(ua=(G=b.type)===(sb=a.pygame.KEYDOWN)&&null===G?!0:null===G?!1:null===sb?!1:"object"!=typeof G&&"function"!=typeof G||"function"!=typeof G.__cmp__?"object"!=typeof sb&&"function"!=typeof sb||"function"!=typeof sb.__cmp__?G==sb:0===sb.__cmp__(G):0===G.__cmp__(sb))||!1===ua||0===ua||""===ua?0:"object"==typeof ua?"function"==typeof ua.__nonzero__?ua.__nonzero__():"function"==typeof ua.__len__?0<ua.__len__():1:1)a.grid.still_moving_counter=0;(null===(sa=(null===(va=ld=(ha=
b.type)===(Db=a.pygame.KEYDOWN)&&null===ha?!0:null===ha?!1:null===Db?!1:"object"!=typeof ha&&"function"!=typeof ha||"function"!=typeof ha.__cmp__?"object"!=typeof Db&&"function"!=typeof Db||"function"!=typeof Db.__cmp__?ha==Db:0===Db.__cmp__(ha):0===ha.__cmp__(Db))||!1===va||0===va||""===va?0:"object"==typeof va?"function"==typeof va.__nonzero__?va.__nonzero__():"function"==typeof va.__len__?0<va.__len__():1:1)?(aa=b.key)===(Eb=a.pygame.K_x)&&null===aa?!0:null===aa?!1:null===Eb?!1:"object"!=typeof aa&&
"function"!=typeof aa||"function"!=typeof aa.__cmp__?"object"!=typeof Eb&&"function"!=typeof Eb||"function"!=typeof Eb.__cmp__?aa==Eb:0===Eb.__cmp__(aa):0===aa.__cmp__(Eb):ld)||!1===sa||0===sa||""===sa?0:"object"==typeof sa?"function"==typeof sa.__nonzero__?sa.__nonzero__():"function"==typeof sa.__len__?0<sa.__len__():1:1)&&a.grid.rotate_block();(null===(ya=(null===(ta=kd=(ba=b.type)===(Bb=a.pygame.KEYDOWN)&&null===ba?!0:null===ba?!1:null===Bb?!1:"object"!=typeof ba&&"function"!=typeof ba||"function"!=
typeof ba.__cmp__?"object"!=typeof Bb&&"function"!=typeof Bb||"function"!=typeof Bb.__cmp__?ba==Bb:0===Bb.__cmp__(ba):0===ba.__cmp__(Bb))||!1===ta||0===ta||""===ta?0:"object"==typeof ta?"function"==typeof ta.__nonzero__?ta.__nonzero__():"function"==typeof ta.__len__?0<ta.__len__():1:1)?(Z=b.key)===(Cb=a.pygame.K_z)&&null===Z?!0:null===Z?!1:null===Cb?!1:"object"!=typeof Z&&"function"!=typeof Z||"function"!=typeof Z.__cmp__?"object"!=typeof Cb&&"function"!=typeof Cb||"function"!=typeof Cb.__cmp__?Z==
Cb:0===Cb.__cmp__(Z):0===Z.__cmp__(Cb):kd)||!1===ya||0===ya||""===ya?0:"object"==typeof ya?"function"==typeof ya.__nonzero__?ya.__nonzero__():"function"==typeof ya.__len__?0<ya.__len__():1:1)&&a.grid.rotate_block(!0);(null===(wa=(null===(za=hd=($=b.type)===(Ab=a.pygame.KEYDOWN)&&null===$?!0:null===$?!1:null===Ab?!1:"object"!=typeof $&&"function"!=typeof $||"function"!=typeof $.__cmp__?"object"!=typeof Ab&&"function"!=typeof Ab||"function"!=typeof Ab.__cmp__?$==Ab:0===Ab.__cmp__($):0===$.__cmp__(Ab))||
!1===za||0===za||""===za?0:"object"==typeof za?"function"==typeof za.__nonzero__?za.__nonzero__():"function"==typeof za.__len__?0<za.__len__():1:1)?(Y=b.key)===(Tb=a.pygame.K_SPACE)&&null===Y?!0:null===Y?!1:null===Tb?!1:"object"!=typeof Y&&"function"!=typeof Y||"function"!=typeof Y.__cmp__?"object"!=typeof Tb&&"function"!=typeof Tb||"function"!=typeof Tb.__cmp__?Y==Tb:0===Tb.__cmp__(Y):0===Y.__cmp__(Tb):hd)||!1===wa||0===wa||""===wa?0:"object"==typeof wa?"function"==typeof wa.__nonzero__?wa.__nonzero__():
"function"==typeof wa.__len__?0<wa.__len__():1:1)&&a.grid.move_block_to_bottom();(null===(Aa=(null===(xa=bd=(Ga=b.type)===(Sb=a.pygame.KEYDOWN)&&null===Ga?!0:null===Ga?!1:null===Sb?!1:"object"!=typeof Ga&&"function"!=typeof Ga||"function"!=typeof Ga.__cmp__?"object"!=typeof Sb&&"function"!=typeof Sb||"function"!=typeof Sb.__cmp__?Ga==Sb:0===Sb.__cmp__(Ga):0===Ga.__cmp__(Sb))||!1===xa||0===xa||""===xa?0:"object"==typeof xa?"function"==typeof xa.__nonzero__?xa.__nonzero__():"function"==typeof xa.__len__?
0<xa.__len__():1:1)?(Fa=b.key)===(Rb=a.pygame.K_RIGHT)&&null===Fa?!0:null===Fa?!1:null===Rb?!1:"object"!=typeof Fa&&"function"!=typeof Fa||"function"!=typeof Fa.__cmp__?"object"!=typeof Rb&&"function"!=typeof Rb||"function"!=typeof Rb.__cmp__?Fa==Rb:0===Rb.__cmp__(Fa):0===Fa.__cmp__(Rb):bd)||!1===Aa||0===Aa||""===Aa?0:"object"==typeof Aa?"function"==typeof Aa.__nonzero__?Aa.__nonzero__():"function"==typeof Aa.__len__?0<Aa.__len__():1:1)&&a.grid.move_block_right();(null===(pa=(null===(Ba=cd=(Ea=b.type)===
(Qb=a.pygame.KEYDOWN)&&null===Ea?!0:null===Ea?!1:null===Qb?!1:"object"!=typeof Ea&&"function"!=typeof Ea||"function"!=typeof Ea.__cmp__?"object"!=typeof Qb&&"function"!=typeof Qb||"function"!=typeof Qb.__cmp__?Ea==Qb:0===Qb.__cmp__(Ea):0===Ea.__cmp__(Qb))||!1===Ba||0===Ba||""===Ba?0:"object"==typeof Ba?"function"==typeof Ba.__nonzero__?Ba.__nonzero__():"function"==typeof Ba.__len__?0<Ba.__len__():1:1)?(Da=b.key)===(Pb=a.pygame.K_LEFT)&&null===Da?!0:null===Da?!1:null===Pb?!1:"object"!=typeof Da&&"function"!=
typeof Da||"function"!=typeof Da.__cmp__?"object"!=typeof Pb&&"function"!=typeof Pb||"function"!=typeof Pb.__cmp__?Da==Pb:0===Pb.__cmp__(Da):0===Da.__cmp__(Pb):cd)||!1===pa||0===pa||""===pa?0:"object"==typeof pa?"function"==typeof pa.__nonzero__?pa.__nonzero__():"function"==typeof pa.__len__?0<pa.__len__():1:1)&&a.grid.move_block_left();if(null===(na=(null===(oa=ad=(Ca=b.type)===(ec=a.pygame.KEYDOWN)&&null===Ca?!0:null===Ca?!1:null===ec?!1:"object"!=typeof Ca&&"function"!=typeof Ca||"function"!=typeof Ca.__cmp__?
"object"!=typeof ec&&"function"!=typeof ec||"function"!=typeof ec.__cmp__?Ca==ec:0===ec.__cmp__(Ca):0===Ca.__cmp__(ec))||!1===oa||0===oa||""===oa?0:"object"==typeof oa?"function"==typeof oa.__nonzero__?oa.__nonzero__():"function"==typeof oa.__len__?0<oa.__len__():1:1)?(Ua=b.key)===(dc=a.pygame.K_DOWN)&&null===Ua?!0:null===Ua?!1:null===dc?!1:"object"!=typeof Ua&&"function"!=typeof Ua||"function"!=typeof Ua.__cmp__?"object"!=typeof dc&&"function"!=typeof dc||"function"!=typeof dc.__cmp__?Ua==dc:0===
dc.__cmp__(Ua):0===Ua.__cmp__(dc):ad)||!1===na||0===na||""===na?0:"object"==typeof na?"function"==typeof na.__nonzero__?na.__nonzero__():"function"==typeof na.__len__?0<na.__len__():1:1)a.down_held=!0;(null===(la=(null===(ma=gd=(Ta=b.type)===(cc=a.pygame.KEYUP)&&null===Ta?!0:null===Ta?!1:null===cc?!1:"object"!=typeof Ta&&"function"!=typeof Ta||"function"!=typeof Ta.__cmp__?"object"!=typeof cc&&"function"!=typeof cc||"function"!=typeof cc.__cmp__?Ta==cc:0===cc.__cmp__(Ta):0===Ta.__cmp__(cc))||!1===
ma||0===ma||""===ma?0:"object"==typeof ma?"function"==typeof ma.__nonzero__?ma.__nonzero__():"function"==typeof ma.__len__?0<ma.__len__():1:1)?(Sa=b.key)===(bc=a.pygame.K_r)&&null===Sa?!0:null===Sa?!1:null===bc?!1:"object"!=typeof Sa&&"function"!=typeof Sa||"function"!=typeof Sa.__cmp__?"object"!=typeof bc&&"function"!=typeof bc||"function"!=typeof bc.__cmp__?Sa==bc:0===bc.__cmp__(Sa):0===Sa.__cmp__(bc):gd)||!1===la||0===la||""===la?0:"object"==typeof la?"function"==typeof la.__nonzero__?la.__nonzero__():
"function"==typeof la.__len__?0<la.__len__():1:1)&&a.restart()}(null===(ka=(Ra=a.game_state)===(fc=a.GameState_GAMEOVER)&&null===Ra?!0:null===Ra?!1:null===fc?!1:"object"!=typeof Ra&&"function"!=typeof Ra||"function"!=typeof Ra.__cmp__?"object"!=typeof fc&&"function"!=typeof fc||"function"!=typeof fc.__cmp__?Ra==fc:0===fc.__cmp__(Ra):0===Ra.__cmp__(fc))||!1===ka||0===ka||""===ka?0:"object"==typeof ka?"function"==typeof ka.__nonzero__?ka.__nonzero__():"function"==typeof ka.__len__?0<ka.__len__():1:
1)&&(null===(ia=(null===(ja=fd=(Va=b.type)===(jb=a.pygame.KEYUP)&&null===Va?!0:null===Va?!1:null===jb?!1:"object"!=typeof Va&&"function"!=typeof Va||"function"!=typeof Va.__cmp__?"object"!=typeof jb&&"function"!=typeof jb||"function"!=typeof jb.__cmp__?Va==jb:0===jb.__cmp__(Va):0===Va.__cmp__(jb))||!1===ja||0===ja||""===ja?0:"object"==typeof ja?"function"==typeof ja.__nonzero__?ja.__nonzero__():"function"==typeof ja.__len__?0<ja.__len__():1:1)?(A=b.key)===(kb=a.pygame.K_r)&&null===A?!0:null===A?!1:
null===kb?!1:"object"!=typeof A&&"function"!=typeof A||"function"!=typeof A.__cmp__?"object"!=typeof kb&&"function"!=typeof kb||"function"!=typeof kb.__cmp__?A==kb:0===kb.__cmp__(A):0===A.__cmp__(kb):fd)||!1===ia||0===ia||""===ia?0:"object"==typeof ia?"function"==typeof ia.__nonzero__?ia.__nonzero__():"function"==typeof ia.__len__?0<ia.__len__():1:1)&&a.restart()}if(null===(ra=(B=a.game_state)===(lb=a.GameState_PLAYING)&&null===B?!0:null===B?!1:null===lb?!1:"object"!=typeof B&&"function"!=typeof B||
"function"!=typeof B.__cmp__?"object"!=typeof lb&&"function"!=typeof lb||"function"!=typeof lb.__cmp__?B==lb:0===lb.__cmp__(B):0===B.__cmp__(lb))||!1===ra||0===ra||""===ra?0:"object"==typeof ra?"function"==typeof ra.__nonzero__?ra.__nonzero__():"function"==typeof ra.__len__?0<ra.__len__():1:1){(null===(qa=a.down_held)||!1===qa||0===qa||""===qa?0:"object"==typeof qa?"function"==typeof qa.__nonzero__?qa.__nonzero__():"function"==typeof qa.__len__?0<qa.__len__():1:1)&&a.grid.update_block(a.DEBUG,Fc*
$p.max(0.5,("undefined"==typeof SPEED_MULTIPLIER?a.SPEED_MULTIPLIER:SPEED_MULTIPLIER)-a.grid.level));if(null===($a=(C=a.grid.state)===(mb=a.grid.GridState_GAMEOVER)&&null===C?!0:null===C?!1:null===mb?!1:"object"!=typeof C&&"function"!=typeof C||"function"!=typeof C.__cmp__?"object"!=typeof mb&&"function"!=typeof mb||"function"!=typeof mb.__cmp__?C==mb:0===mb.__cmp__(C):0===C.__cmp__(mb))||!1===$a||0===$a||""===$a?0:"object"==typeof $a?"function"==typeof $a.__nonzero__?$a.__nonzero__():"function"==
typeof $a.__len__?0<$a.__len__():1:1)a.game_state=a.GameState_GAMEOVER;a.grid.update(a.DEBUG,Fc);a.osd.update_values(a.grid.score,a.grid.level,a.grid.next_block)}else if(null===(bb=(null===(ab=od=(D=a.game_state)===(nb=a.GameState_PAUSED)&&null===D?!0:null===D?!1:null===nb?!1:"object"!=typeof D&&"function"!=typeof D||"function"!=typeof D.__cmp__?"object"!=typeof nb&&"function"!=typeof nb||"function"!=typeof nb.__cmp__?D==nb:0===nb.__cmp__(D):0===D.__cmp__(nb))||!1===ab||0===ab||""===ab?0:"object"==
typeof ab?"function"==typeof ab.__nonzero__?ab.__nonzero__():"function"==typeof ab.__len__?0<ab.__len__():1:1)?od:(E=a.game_state)===(tb=a.GameState_GAMEOVER)&&null===E?!0:null===E?!1:null===tb?!1:"object"!=typeof E&&"function"!=typeof E||"function"!=typeof E.__cmp__?"object"!=typeof tb&&"function"!=typeof tb||"function"!=typeof tb.__cmp__?E==tb:0===tb.__cmp__(E):0===E.__cmp__(tb))||!1===bb||0===bb||""===bb?0:"object"==typeof bb?"function"==typeof bb.__nonzero__?bb.__nonzero__():"function"==typeof bb.__len__?
0<bb.__len__():1:1){g=$p.list([]);a.text_display_counter+=Fc;if(null===(cb=1==((600===(Hb=a.text_display_counter)?0:"number"!=typeof Hb||"number"!=typeof Hb&&"string"!=typeof Hb&&"boolean"!=typeof Hb?$p.cmp(Hb,600):600==Hb?0:600>Hb?-1:1)|1))||!1===cb||0===cb||""===cb?0:"object"==typeof cb?"function"==typeof cb.__nonzero__?cb.__nonzero__():"function"==typeof cb.__len__?0<cb.__len__():1:1){if(null===(Wa=1==((1200===(Fb=a.text_display_counter)?0:"number"!=typeof Fb||"number"!=typeof Fb&&"string"!=typeof Fb&&
"boolean"!=typeof Fb?$p.cmp(Fb,1200):1200==Fb?0:1200>Fb?-1:1)|1))||!1===Wa||0===Wa||""===Wa?0:"object"==typeof Wa?"function"==typeof Wa.__nonzero__?Wa.__nonzero__():"function"==typeof Wa.__len__?0<Wa.__len__():1:1)a.text_display_counter=0;Dc="undefined"==typeof BACK_COLOR?a.BACK_COLOR:BACK_COLOR}else Dc=$p.tuple([255,255,255]);if(null===(Xa=(I=a.game_state)===(ub=a.GameState_PAUSED)&&null===I?!0:null===I?!1:null===ub?!1:"object"!=typeof I&&"function"!=typeof I||"function"!=typeof I.__cmp__?"object"!=
typeof ub&&"function"!=typeof ub||"function"!=typeof ub.__cmp__?I==ub:0===ub.__cmp__(I):0===I.__cmp__(ub))||!1===Xa||0===Xa||""===Xa?0:"object"==typeof Xa?"function"==typeof Xa.__nonzero__?Xa.__nonzero__():"function"==typeof Xa.__len__?0<Xa.__len__():1:1)yc=$p.list(["Pause","Press P to play"]);else if(null===(Ya=(J=a.game_state)===(jc=a.GameState_GAMEOVER)&&null===J?!0:null===J?!1:null===jc?!1:"object"!=typeof J&&"function"!=typeof J||"function"!=typeof J.__cmp__?"object"!=typeof jc&&"function"!=
typeof jc||"function"!=typeof jc.__cmp__?J==jc:0===jc.__cmp__(J):0===J.__cmp__(jc))||!1===Ya||0===Ya||""===Ya?0:"object"==typeof Ya?"function"==typeof Ya.__nonzero__?Ya.__nonzero__():"function"==typeof Ya.__len__?0<Ya.__len__():1:1)yc=$p.list(["Game Over","Press R to restart"]);Ob=$p.range(null===(gc=yc)?0:"undefined"!=typeof gc.__array?gc.__array.length:"function"==typeof gc.__len__?gc.__len__():"undefined"!=typeof gc.length?gc.length:$p.len(gc));"undefined"!=typeof(Rc=Ob.__array)?Ec=0:(Ob=Ob.__iter__(),
Ec="undefined"!=typeof(Rc=Ob.__array)?0:"function"==typeof Ob.$genfunc?1:-1);for(wd=0;"undefined"!=typeof(Bd=Ec?0<Ec?Ob.next(!0,!1):$p.wrapped_next(Ob):Rc[wd++]);)c=Bd,(null===(Za=0===(ic=c)&&null===ic?!0:null===ic?!1:"object"!=typeof ic&&"function"!=typeof ic||"function"!=typeof ic.__cmp__?0==ic:0===ic.__cmp__(0))||!1===Za||0===Za||""===Za?0:"object"==typeof Za?"function"==typeof Za.__nonzero__?Za.__nonzero__():"function"==typeof Za.__len__?0<Za.__len__():1:1)?g.append(a.PAUSED_FONT.render("undefined"!=
typeof(vc=yc).__array?"undefined"!=typeof vc.__array[Nc=c]?vc.__array[Nc]:vc.__getitem__(Nc):vc.__getitem__(c),!0,Dc)):g.append(a.PAUSED_SUB_FONT.render("undefined"!=typeof(uc=yc).__array?"undefined"!=typeof uc.__array[Mc=c]?uc.__array[Mc]:uc.__getitem__(Mc):uc.__getitem__(c),!0,Dc));ob=$p.range(null===g?0:"undefined"!=typeof g.__array?g.__array.length:"function"==typeof g.__len__?g.__len__():"undefined"!=typeof g.length?g.length:$p.len(g));"undefined"!=typeof(Ic=ob.__array)?Ac=0:(ob=ob.__iter__(),
Ac="undefined"!=typeof(Ic=ob.__array)?0:"function"==typeof ob.$genfunc?1:-1);for(zd=0;"undefined"!=typeof(dd=Ac?0<Ac?ob.next(!0,!1):$p.wrapped_next(ob):Ic[zd++]);)c=dd,Sc=$p.tuple([(("undefined"==typeof SCREEN_WIDTH?a.SCREEN_WIDTH:SCREEN_WIDTH)-("undefined"==typeof OSD_WIDTH?a.OSD_WIDTH:OSD_WIDTH))/2-("undefined"!=typeof(tc=g).__array?"undefined"!=typeof tc.__array[Lc=c]?tc.__array[Lc]:tc.__getitem__(Lc):tc.__getitem__(c)).get_width()/2,("undefined"==typeof SCREEN_HEIGHT?a.SCREEN_HEIGHT:SCREEN_HEIGHT)/
2-("undefined"!=typeof(sc=g).__array?"undefined"!=typeof sc.__array[Kc=c]?sc.__array[Kc]:sc.__getitem__(Kc):sc.__getitem__(c)).get_height()/2+("undefined"!=typeof(rc=g).__array?"undefined"!=typeof rc.__array[Jc=c]?rc.__array[Jc]:rc.__getitem__(Jc):rc.__getitem__(c)).get_height()*c]),a.pygame.draw.rect(a.screen,"undefined"==typeof BACK_COLOR?a.BACK_COLOR:BACK_COLOR,a.pygame.Rect(Sc,$p.tuple([("undefined"!=typeof(zc=g).__array?"undefined"!=typeof zc.__array[Qc=c]?zc.__array[Qc]:zc.__getitem__(Qc):zc.__getitem__(c)).get_width(),
("undefined"!=typeof(xc=g).__array?"undefined"!=typeof xc.__array[Oc=c]?xc.__array[Oc]:xc.__getitem__(Oc):xc.__getitem__(c)).get_height()]))),a.screen.blit("undefined"!=typeof(wc=g).__array?"undefined"!=typeof wc.__array[Pc=c]?wc.__array[Pc]:wc.__getitem__(Pc):wc.__getitem__(c),Sc)}a.osd.draw(a.DEBUG);hb=a.buttons;"undefined"!=typeof(Hc=hb.__array)?Bc=0:(hb=hb.__iter__(),Bc="undefined"!=typeof(Hc=hb.__array)?0:"function"==typeof hb.$genfunc?1:-1);for(Ad=0;"undefined"!=typeof(md=Bc?0<Bc?hb.next(!0,
!1):$p.wrapped_next(hb):Hc[Ad++]);)qc=md,qc.draw(a.DEBUG,a.game_state);a.pygame.display.flip();return null};a.run.__name__="run";a.run.__bind_type__=0;a.run.__args__=[null,null];a.pygame.display.setup(a.run);return this};