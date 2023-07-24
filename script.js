$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
          } else {
            $(".navbar").removeClass("sticky");
          }
          if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
          } else {
            $(".scroll-up-btn").removeClass("show");
          }
        });
        $(".scroll-up-btn").click(function () {
            $("html").animate({ scrollTop: 0 });
            //  removing smooth scroll on slide-up button click  //
            $("html").css("scrollBehavior", "auto");
          });
        
          $(".navbar .menu li a").click(function () {
            //  Smooth scroll on Menu Items click  //
        
            $("html").css("scrollBehavior", "smooth");
          });