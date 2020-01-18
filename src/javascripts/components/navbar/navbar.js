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

const allActions = () => {
  navbarAction();
  buttonToTop();
};

export default { allActions };
