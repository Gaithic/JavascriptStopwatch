
    window.onload = function () {
  
        var seconds = 00; 
        var minute = 00;
        var hour = 00;
        var tens = 00; 
        // var appendTens = document.getElementById("tens")
        var appendSeconds = document.getElementById("seconds")
        var appendMinutes = document.getElementById("minutes")
        var appendhours = document.getElementById("hours")
        var buttonStart = document.getElementById('button-start');
        var buttonStop = document.getElementById('button-stop');
        var buttonReset = document.getElementById('button-reset');
        var Interval ;
      
        buttonStart.onclick = function() {
          clearInterval(Interval);
           Interval = setInterval(startTimer, 10);
        }
        
          buttonStop.onclick = function() {
             clearInterval(Interval);
        }
        
      
        buttonReset.onclick = function() {
           clearInterval(Interval);
          tens = "00";
            seconds = "00";
          appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
        }
        
         
        
        function startTimer () {
          tens++; 
          
          if (tens > 99) {
            console.log("seconds");
            seconds++;
            tens = 0;
            appendSeconds.innerHTML = '0' + seconds;
          }
          
          if (seconds > 9){
            appendSeconds.innerHTML =  seconds ;
          }

          if (seconds > 59){
            minute++;
            seconds = 0;
            appendMinutes.innerHTML = '0' + minute;
          }

          if (minute > 9){
            appendMinutes.innerHTML =  minute;
          }

          
          if (minute > 59){
            hour++;
            minute = 0;
            appendhours.innerHTML = '0' + hour;
          }

          
          

        
        }
        
      
      }
