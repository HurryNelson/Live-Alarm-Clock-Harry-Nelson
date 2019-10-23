  function counterOnClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    min = Ticking(min);
    sec = Ticking(sec);

    document.getElementById('dc').innerHTML = hrs + ":" + min;
    document.getElementById('dc_second').innerHTML = sec;

    if (hrs > 12) {
      document.getElementById('dc_hour').innerHTML = 'PM';
    } else {
      document.getElementById('dc_hour').innerHTML = 'AM';
    }

    // CALL THE FUNCTION EVERY 1 SECOND (RECURSION).
    var time
    time = setInterval('counterOnClock', 1000);
  }

  function Ticking(ticVal) {
    if (ticVal < 10) {
      ticVal = "0" + ticVal;
    }
    return ticVal;
  }
