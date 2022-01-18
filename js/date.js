function clock() {
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    var time = new Date(),
        years = time.getFullYear(),
        month = time.getMonth(),
        date = time.getDate(),
        day = time.getDay(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    
    document.querySelectorAll('.clock')[0].innerHTML = zeroPadding(hours,2) + ":" + zeroPadding(minutes,2) + ":" + zeroPadding(seconds,2)
    document.querySelectorAll('.date')[0].innerHTML = zeroPadding(years,4) + "/" + zeroPadding(month+1,2) + "/" + zeroPadding(date,2) + " | " + week[day];
    }
    setInterval(clock, 1000);

    
function zeroPadding(num, digit) {
    var zero = '';
      for(var i = 0; i < digit; i++) {
          zero += '0';
      }
      return (zero + num).slice(-digit);
  };