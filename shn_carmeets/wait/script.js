function Timer(min, sec){

    timerInterval = setInterval(function() {
    
        var seconds = $(".timer-sec").val();
        var minutes = $(".timer-min").val();
        
        $(".timer-sec").val(seconds - 1);
        
        if (seconds <= 0) {
          $(".timer-sec").val(59);
          $(".timer-min").val(minutes - 1);
        }
        
        if (minutes <= 0) {
          $(".time-min").val(0);
          $(".timer-sec").val(59);
        }
        
        if (minutes <= 0 && seconds <= 0) {
          $(".timer-min").val(0);
          $(".timer-sec").val(0);
          clearInterval(timerInterval);
        }
        
      }, 1000);
};