$pyjs.loaded_modules.os=function(b){if($pyjs.loaded_modules.os.__was_initialized__)return $pyjs.loaded_modules.os;var a=$pyjs.loaded_modules.os;a.__repr__=function(){return"<module: os>"};a.__was_initialized__=!0;if(null===b||"undefined"==typeof b)b="os";a.__name__=b;a.path=$p.___import___("path","os");a.walk=$p.___import___("os.path.walk","os",null,!1);a.curdir=$p.___import___("os.path.curdir","os",null,!1);a.pardir=$p.___import___("os.path.pardir","os",null,!1);a.sep=$p.___import___("os.path.sep",
"os",null,!1);a.pathsep=$p.___import___("os.path.pathsep","os",null,!1);a.defpath=$p.___import___("os.path.defpath","os",null,!1);a.extsep=$p.___import___("os.path.extsep","os",null,!1);a.altsep=$p.___import___("os.path.altsep","os",null,!1);a.devnull=$p.___import___("os.path.devnull","os",null,!1);a.$$name="pyjs";a.SEEK_SET=0;a.SEEK_CUR=1;a.SEEK_END=2;a.EX_CANTCREAT=73;a.EX_CONFIG=78;a.EX_DATAERR=65;a.EX_IOERR=74;a.EX_NOHOST=68;a.EX_NOINPUT=66;a.EX_NOPERM=77;a.EX_NOUSER=67;a.EX_OK=0;a.EX_OSERR=71;
a.EX_OSFILE=72;a.EX_PROTOCOL=76;a.EX_SOFTWARE=70;a.EX_TEMPFAIL=75;a.EX_UNAVAILABLE=69;a.EX_USAGE=64;a.F_OK=0;a.NGROUPS_MAX=65536;a.O_APPEND=1024;a.O_ASYNC=8192;a.O_CREAT=64;a.O_DIRECT=16384;a.O_DIRECTORY=65536;a.O_DSYNC=4096;a.O_EXCL=128;a.O_LARGEFILE=32768;a.O_NDELAY=2048;a.O_NOATIME=262144;a.O_NOCTTY=256;a.O_NOFOLLOW=131072;a.O_NONBLOCK=2048;a.O_RDONLY=0;a.O_RDWR=2;a.O_RSYNC=1052672;a.O_SYNC=1052672;a.O_TRUNC=512;a.O_WRONLY=1;a.R_OK=4;a.TMP_MAX=238328;a.WCONTINUED=8;a.WNOHANG=1;a.WUNTRACED=2;a.W_OK=
2;a.X_OK=1;a.environ=$p.dict([]);a.urandom=function(a){throw $p.NotImplementedError("/dev/urandom (or equivalent) not found");};a.urandom.__name__="urandom";a.urandom.__bind_type__=0;a.urandom.__args__=[null,null,["n"]];a.unlink=function(){$p.tuple($pyjs_array_slice.call(arguments,0,arguments.length));throw $p.NotImplementedError("PyJS does not support filesystem access");};a.unlink.__name__="unlink";a.unlink.__bind_type__=0;a.unlink.__args__=["args",null];return this};
