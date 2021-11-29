$(function () {
  if (!localStorage.theme) localStorage.theme = ""
  document.body.className = localStorage.theme
  checkboxLabel.onclick = () => {
    document.body.classList.toggle("light")
    localStorage.theme = document.body.className || ""
  }


})
$(function () {
  $('.services__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.services__info'
  });
  $('.services__info').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.services__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
})