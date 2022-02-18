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
  let list = document.querySelector('.dropdown'),
      header = document.querySelector('.header'),
      listItem = document.querySelectorAll('.dropdown-column__link'),
      dropdownLink = document.querySelector('.header-list__dropdown');

  dropdownLink.addEventListener('click', () => {
    dropdownLink.classList.toggle('header-list__dropdown_active');
      list.classList.toggle('dropdown_active');
      header.classList.add('header_active');
  });

  listItem.forEach(item => {
      item.addEventListener('click', () => {
        dropdownLink.classList.toggle('header-list__dropdown_active');
          list.classList.toggle('dropdown_active');
          header.classList.toggle('header_active');
      });
  });
});

// window.addEventListener('DOMContentLoaded', () => {
//   const menu = document.querySelector('.header-list'),
//   header = document.querySelector('.header'),
//   listItem = document.querySelectorAll('.header-list__link'),
//   dropdownLink = document.querySelector('.hamburger');

//   dropdownLink.addEventListener('click', () => {
//     // dropdownLink.classList.toggle('hamburger_active');
//       menu.classList.toggle('header-list_active');
//       header.classList.toggle('header_active');
//   });

//   listItem.forEach(item => {
//       item.addEventListener('click', () => {
//         // dropdownLink.classList.toggle('hamburger_active');
//           menu.classList.toggle('header-list_active');
//           header.classList.toggle('header_active');
//       });
//   });
// });

let   hamburger = document.querySelector ('.hamburger'),
      menu = document.querySelector ('.header-list'),
      overlay = document.querySelector ('.header');

hamburger.addEventListener('click', () => {
    overlay.classList.add('header_active'),
    menu.classList.add('header-list_active');
});