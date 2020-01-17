import $ from 'jquery';

const navbarAction = () => {
  $('.third-button').on('click', () => {
    $('.animated-icon3').toggleClass('open');
  });
};

const buttonToTop = () => {
  $(window).scroll(() => {
    const height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });
  $('#back2Top').click((e) => {
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
