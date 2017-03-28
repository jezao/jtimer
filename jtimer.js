function jTimer(_target,_mask=null)
{
    var _hours = _minutes = _seconds = 0;
    var _mask    = (_mask == null) ? '[HH]:[MM]:[SS]' : _mask;

    setInterval(function(){
        _seconds++;
        if( _seconds > 59 )
        {
            _minutes++;
            _seconds = 0;
        }

        if( _minutes > 59)
        {
            _minutes = 0;
            _hours++;
        }

        _target.innerHTML = _mask.replace('[HH]',(( _hours   <= 9 ) ? "0"+_hours : _hours))
                                 .replace('[MM]',(( _minutes <= 9 ) ? "0"+_minutes : _minutes))
                                 .replace('[SS]',( _seconds <= 9 ) ? "0"+_seconds : _seconds);

    },1000);
}
