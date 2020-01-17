import $ from 'jquery';

const navbarAction = () => {
  $('.third-button').on('click', () => {
    $('.animated-icon3').toggleClass('open');
  });
};

export default { navbarAction };
