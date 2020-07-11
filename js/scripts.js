
//  Preloader
jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


(function ($) {


    //  Header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass("animated slideInDown fixed"), 3000;
        } else {
            $('.header').removeClass("animated slideInDown fixed"), 3000;
        }
    });

    $('select').niceSelect();

    $(function () {
        for (var nk = window.location,
            o = $(".menu a").filter(function () {
                return this.href == nk;
            })
                .addClass("active")
                .parent()
                .addClass("active"); ;) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("show")
                .parent()
                .addClass("active");
        }

    });

    $(function () {
        // var win_w = window.outerWidth;
        var win_h = window.outerHeight;
        var win_h = window.outerHeight;
        if (win_h > 0 ? win_h : screen.height) {
            $(".content-body").css("min-height", (win_h + 60) + "px");
        };
    });

    $('.sidebar-right-trigger').on('click', function () {
        $('.sidebar-right').toggleClass('show');
    });


})(jQuery);;




//ripple effect on button
Waves.init();
Waves.attach('.wave-effect');
Waves.attach('.btn');
Waves.attach('button');








function startFlip() {
  var Flip;
  Flip = class Flip {
    constructor(el) {
      this.el = el;
      this.el = $(this.el);
      this.currentStep = 0;
      console.log("Created new Flip");
      $('.next').on('click', $.proxy(this.next, this));


    }


    next(event) {
      var currentStepEl, nextStepEl, nextStepNum;
      if (event) {
        event.preventDefault();
      }
      nextStepNum = this.currentStep + 1;
      currentStepEl = this.el.find(`.stepA${this.currentStep}`);
      nextStepEl = this.el.find(`.stepA${nextStepNum}`);
      if (nextStepEl.length) {
        console.log('we found the next stepA', nextStepEl);
        currentStepEl.prev().removeClass('down');
        currentStepEl.removeClass('set');
        currentStepEl.addClass('down');
        nextStepEl.addClass('set');
        nextStepEl.removeClass('down');
        nextStepEl.next().removeClass('down');
        return this.currentStep++;
      } else {
        // reset to 0
        this.el.find(".stepA").removeClass('set');
        this.el.find(`.stepA${this.currentStep}`).addClass('down');
        this.el.find(".stepA").not(`.stepA${this.currentStep}`).removeClass('down');
        this.currentStep = -1;
        return this.next();
      }
    }};




    var f;
    f = new Flip(document.getElementById('flipper'));
    return setInterval(function () {
      return f.next();
    }, 3000);


}
startFlip()
