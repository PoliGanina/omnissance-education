$(document).ready(function() {
	$('.popup-vimeo').magnificPopup({
        type: 'iframe',
        iframe: {
           markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>'
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.dropdown'),
  header = document.querySelector('.header'),
  menuItem = document.querySelectorAll('.dropdown-column__link'),
  dropdownLink = document.querySelector('.header-menu__dropdown');

  dropdownLink.addEventListener('click', () => {
    dropdownLink.classList.toggle('header-menu__dropdown_active');
      menu.classList.toggle('dropdown_active');
      header.classList.toggle('header_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
        dropdownLink.classList.toggle('header-menu__dropdown_active');
          menu.classList.toggle('dropdown_active');
          header.classList.toggle('header_active');
      })
  })
})