let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click',function(){
    mobileNav.classList.add('open');


    });
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');

    });

    $(window).scroll(function() {
        // if($(window).scrollTop()) {
        //   $(".navbar").removeClass("navbar-dark");
        //   $(".navbar").addClass("sticky navbar-light");
        //   $("#myBtn").css("display", "block");
        // } else {
        //   $(".navbar").addClass("navbar-dark");
        //   $(".navbar").removeClass("sticky navbar-light");
        //   $("#myBtn").css("display", "none");
        // }
        if($(window).scrollTop()>1020&& $(window).scrollTop()<5000) {
        console.log("1");
          $(".procpp").addClass("cpp");
          $(".prohtml").addClass("html");
          $(".prodsa").addClass("dsa");
          $(".proazure").addClass("azure");
          
        }else {
          $(".procpp").removeClass("cpp");
          $(".prohtml").removeClass("html");
          $(".prodsa").removeClass("dsa");
          $(".proazure").removeClass("azure");
    
        }
      
        // if($(window).scrollTop()>2000&& $(window).scrollTop()<7000) {
        //   $("li.left").addClass("leftbefore");
        //   $("li.right").addClass("rightbefore");
        // } else {
        //   $("li.left").removeClass("leftbefore");
        //   $("li.right").removeClass("rightbefore");
        // }
      });
    

    

