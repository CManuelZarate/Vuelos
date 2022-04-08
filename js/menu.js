(function(){
  const openButton = document.querySelector('.menu');
  const menu = document.querySelector('.links');
  const closeMenu = document.querySelector('.nav-close');

  openButton.addEventListener('click', ()=>{
      menu.classList.add('nav-link-show');
  });

  closeMenu.addEventListener('click', ()=>{
      menu.classList.remove('nav-link-show');
  });

})();