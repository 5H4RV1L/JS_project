window.onload = function() {
var a=new Date();

        switch(a.getDay()){
            case 0:
                day="Sunday";
                break;
            case 1:
                day="Monday";
                break;
            case 2:
                day="Tuesday";
                break;
            case 3:
                day="Wednesday";
                break;
            case 4:
                day="Thursday";
                break;
            case 5:
                day="Friday";
                break;
            case 6:
                day="Saturday";
        }

        switch(a.getMonth()){
            case 0:
                month="January"
                break;
            case 1:
                month="February"
                break;
            case 2:
                month="March"
                break;
            case 3:
                month="April"
                break;
            case 4:
                month="May"
                break;
            case 5:
                month="June"
                break;
            case 6:
                month="July"
                break;
            case 7:
                month="August"
                break;
            case 8:
                month="September"
                break;
            case 9:
                month="October"
                break;
            case 10:
                month="November"
                break;
            case 11:
                month="December"
        }

        document.getElementById('day').value=day;
        document.getElementById('date').value=a.getDate();
        document.getElementById('month').value=month;
        document.getElementById('year').value=a.getFullYear();
        document.getElementById('hour').value=a.getHours();
        document.getElementById('minutes').value=a.getMinutes();

}


        let startBtn = document.getElementById('start'); 
        let stopBtn = document.getElementById('stop'); 
        let resetBtn = document.getElementById('reset'); 

        let hour = 0; 
        let minute = 0; 
        let second = 0; 
        let count = 0; 
        let timer; 

        startBtn.addEventListener('click', function () { 
            if (!timer) {
                timer = setInterval(stopWatch, 10); 
            }
        }); 
    
        stopBtn.addEventListener('click', function () { 
            clearInterval(timer); 
            timer = null; 
        }); 
    
        resetBtn.addEventListener('click', function () { 
            clearInterval(timer); 
            timer = null; 
            hour = 0; 
            minute = 0; 
            second = 0; 
            count = 0; 
            updateDisplay(); 
        }); 
    
        function stopWatch() { 
            count++; 
            
            if (count == 100) { 
                second++; 
                count = 0; 
            } 
            
            if (second == 60) { 
                minute++; 
                second = 0; 
            } 
            
            if (minute == 60) { 
                hour++; 
                minute = 0; 
                second = 0; 
            } 
            
            updateDisplay(); 
        }

        function updateDisplay() {
            document.getElementById('hr').innerHTML = formatTime(hour); 
            document.getElementById('min').innerHTML = formatTime(minute); 
            document.getElementById('sec').innerHTML = formatTime(second); 
            document.getElementById('count').innerHTML = formatTime(count); 
        }

        function formatTime(value) {
            return value < 10 ? "0" + value : value; 
        }