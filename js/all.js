function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    setTheme('theme-normal');
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