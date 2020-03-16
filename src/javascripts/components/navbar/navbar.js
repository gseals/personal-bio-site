import $ from 'jquery';
import './navbar.scss';

const navbarAction = () => {
  $('.hamburgerButton').on('click', () => {
    $('.hamburgerNav3').toggleClass('open');
  });
};

const buttonToTop = () => {
  $(window).scroll(() => {
    const height = $(window).scrollTop();
    if (height > 100) {
      $('#upArrow').fadeIn();
    } else {
      $('#upArrow').fadeOut();
    }
  });
  $('#upArrow').click((e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
};

const navBarColorFade = () => {
  $(window).scroll(() => {
    const newHeight = $(window).scrollTop();
    if (newHeight > 500) {
      $('#navBarModify').addClass('navColor');
    } else if (newHeight < 500) {
      $('#navBarModify').removeClass('navColor');
    }
  });
};

const allActions = () => {
  navbarAction();
  buttonToTop();
  navBarColorFade();
};

export default { allActions };
