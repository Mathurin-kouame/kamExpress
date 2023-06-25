$(document).ready(function() {
    $('.carousel-control-next').click(function() {
      var currentSlide = $('.carousel-item.active');
      var nextSlide = currentSlide.next();
  
      if (!nextSlide.length) {
        nextSlide = $('.carousel-item').first();
      }
  
      currentSlide.removeClass('active');
      nextSlide.addClass('active');
    });
  
    $('.carousel-control-prev').click(function() {
      var currentSlide = $('.carousel-item.active');
      var prevSlide = currentSlide.prev();
  
      if (!prevSlide.length) {
        prevSlide = $('.carousel-item').last();
      }
  
      currentSlide.removeClass('active');
      prevSlide.addClass('active');
    });
  });
  