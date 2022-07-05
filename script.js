
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
        buttonStop.disabled = true;
        buttonReset.disabled = true;
        var Interval ;
      
        buttonStart.onclick = function() {
          clearInterval(Interval);
           Interval = setInterval(startTimer, 10);
           buttonStart.disabled = true;
           buttonStop.disabled = false;
           buttonReset.disabled = false;
        }
        
        buttonStop.onclick = function() {
            if(buttonStop.textContent == "pause"){
                clearInterval(Interval);
                buttonStop.innerHTML = "continue";
            }else{
                clearInterval(Interval);
                Interval = setInterval(startTimer, 10);
                buttonStop.innerHTML = "pause";
            }
        }
        
      
        buttonReset.onclick = function() {
           clearInterval(Interval);
            tens = "00";
            seconds = "00";
            minute = "00";
            hour = "00";
            appendSeconds.innerHTML = seconds;
            appendMinutes.innerHTML = minute;
            appendhours.innerHTML = hour;
            buttonStart.disabled = false;
            buttonStop.disabled = true;
            buttonReset.disabled = true;
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
