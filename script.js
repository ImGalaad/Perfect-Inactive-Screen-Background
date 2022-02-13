function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-normal'){
       setTheme('theme-blur');
   } else {
       setTheme('theme-normal');
   }
  }
  (function () {
   if (localStorage.getItem('theme') === 'theme-blur') {
       setTheme('theme-blur');
   } else {
       setTheme('theme-normal');
   }
  })();

function clock() {
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    time = new Date(), years = time.getFullYear(), month = time.getMonth(),date = time.getDate(), day = time.getDay(),
    hours = time.getHours(), minutes = time.getMinutes(),seconds = time.getSeconds();
    document.querySelectorAll('.clock')[0].innerHTML = addZeros(hours,2) + ":" + addZeros(minutes,2) + ":" + addZeros(seconds,2)
    document.querySelectorAll('.date')[0].innerHTML = addZeros(years,4) + "/" + addZeros(month+1,2) + "/" + addZeros(date,2) + " | " + week[day];}

setInterval(clock, 1);

    
function addZeros(num, digit) {             // Add some zeros for the clock
    var zero = "";                          // 'num' : time/date
      for(var i = 0; i < digit; i++) {      // 'digit' : final length
          zero += '0';}
      return (zero + num).slice(-digit);};
