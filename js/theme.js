
$(function () {
    
    $(".navigation__link").click(function(){
        $("#navi-toggle").click();
    });

    $(".updatebtn").click(function(){
        var showsidebar = anime({
            targets: '.sidebar',
            translateX: '400',
            duration: 1000
        });

        $(this).hide(200);
    });

    $("#update-mob").hide();

    $(".updateinfo").click(function(){
        var width = $(this).width();
        if(width <= 768){
            $(".mobile section").hide();
            $("#update-mob").show();
        }
    });

    $(".close-sidebar button").click(function(){
        var hidesidebar = anime({
            targets: '.sidebar',
            translateX: '-400',
            duration: 1000
        });

        $(".updatebtn").show(200);
    });

    $(".hovereffect").on('mouseenter', function(){
        var data_id = $(this).attr("data-id");
        $("#"+data_id).addClass("animatetransform");
    });
                                    
    $(".hovereffect").on('mouseleave', function(){
        $(".hovereffect").removeClass("animatetransform"); 
    });
    
    // Navbar Effect
    // AOS.init({
    //     once: true
    // })
    $(".navManuContainer .innerContainer .mainLinksDiv div")
                .mouseenter(function() {
                  $(this)
                    .delay("fast")
                    .css("border-bottom", "0px solid rgba(0,0,0,0)")
                    .animate({ background: "#000" });
                })
                .mouseleave(function() {
                  $(this)
                    .delay("fast")
                    .animate({ borderWidth: "0px" });
                });
      
              var navOpen = false;
              var navOpenOnce = false;
              /*navBar opening*/
      
              function openCloseNav() {
                if (!navOpen) {
                  navOpen = true;
                  if (!navOpenOnce) {
                    if ($(window).width() >= 600) {
                      makeBgNavMenu();
                    }
                  }
                  navOpenOnce = true;
                  //$(".navManuContainer").css('display','inline-block');
                  $(".navBarTriggerBar1").css("opacity", "0");
                  $(".navBarTriggerBar2").css("opacity", "0");
                  $(".navBarTriggerBar3").css("opacity", "0");
                  $(".navBarTriggerBar4").css("opacity", "1");
                  $(".navBarTriggerBar5").css("opacity", "1");
                  $(".navManuContainer").css("opacity", "1");
                  $(".navManuContainer").css("margin-left", "0");
      
                  $(".navMenuDesigns")
                    .delay(300)
                    .animate({ opacity: "1" });
      
                  for (i = 0; i <= 9; i++) {
                    $(".mainLinks" + (i + 1))
                      .delay(100 * i)
                      .animate({ opacity: "1", paddingTop: 0 });
                  }
      
                  $(".restLinksDiv .socialMedia div")
                    .delay(100)
                    .animate({ opacity: "1" });
                  for (i = 0; i <= 4; i++) {
                    $(".restLinksDiv .socialMedia .a" + (i + 1))
                      .delay(150 * i)
                      .animate({ opacity: "1", paddingLeft: 0 });
                  }
      
                  $(
                    ".navManuContainer .innerContainer .restLinksDiv .subscribeUsForm"
                  )
                    .delay(100 * (i + 1))
                    .animate({ opacity: "1", marginTop: "15vh" });
                  $(".navManuContainer .innerContainer .restLinksDiv .wantToKnowMore")
                    .delay(100 * (i + 2))
                    .animate({ opacity: "1", marginTop: "10vh" });
                } else {
                  navOpen = false;
      
                  $(".navBarTriggerBar1").css("opacity", "1");
                  $(".navBarTriggerBar2").css("opacity", "1");
                  $(".navBarTriggerBar3").css("opacity", "1");
                  $(".navBarTriggerBar4").css("opacity", "0");
                  $(".navBarTriggerBar5").css("opacity", "0");
                  $(".navManuContainer").css("margin-left", "-100vw");
                  $(".navManuContainer").css("opacity", "0");
                  $(".navManuContainer .innerContainer .mainLinksDiv div").css(
                    "opacity",
                    "0"
                  );
                  $(".navManuContainer .innerContainer .mainLinksDiv div").css(
                    "padding-top",
                    "3vh"
                  );
                  $(
                    ".navManuContainer .innerContainer .restLinksDiv .subscribeUsForm"
                  ).css("opacity", "0");
                  $(
                    ".navManuContainer .innerContainer .restLinksDiv .subscribeUsForm"
                  ).css("margin-top", "20vh");
                  $(
                    ".navManuContainer .innerContainer .restLinksDiv .wantToKnowMore"
                  ).css("margin-top", "15vh");
                  $(
                    ".navManuContainer .innerContainer .restLinksDiv .wantToKnowMore"
                  ).css("opacity", "0");
                  $(".restLinksDiv .socialMedia div").css("opacity", "0");
                  for (i = 0; i <= 4; i++) {
                    $(".restLinksDiv .socialMedia .a" + (i + 1)).css("opacity", "0");
                  }
                  $(".navMenuDesigns").css("opacity", "0");
                  //$(".navManuContainer .innerContainer .restLinksDiv a").css('width','0');
                }
            }
                $(".navBarTrigger").click(function() {
                    openCloseNav();
                  });
                  $(".mainLinksDiv a").click(function() {
                    openCloseNav();
                  });
          
                  function makeBgNavMenu() {
                    /*-------------------------------------*/
                    //Below code belongs to the original author
                    //Credits : https://codepen.io/anon/pen/xNdEae
                    const colors = ["#1e4db2", "#fffff", "#2557c4", "#007bff", "#16409e"];
          
                    const numBalls = 100;
                    const balls = [];
          
                    for (let i = 0; i < numBalls; i++) {
                      let ball = document.createElement("div");
                      ball.classList.add("ball");
                      ball.style.background =
                        colors[Math.floor(Math.random() * colors.length)];
                      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
                      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
                      ball.style.transform = `scale(${Math.random()})`;
                      ball.style.width = `${Math.random()}em`;
                      ball.style.height = ball.style.width;
          
                      balls.push(ball);
                      document.getElementById("pp").append(ball);
                    }
          
                    // Keyframes
                    balls.forEach((el, i, ra) => {
                      let to = {
                        x: Math.random() * (i % 2 === 0 ? 20 : -20),
                        y: Math.random() * -20
                      };
          
                      let anim = el.animate(
                        [
                          { transform: "translate(0, 0)" },
                          { transform: `translate(${to.x}rem, ${to.y}rem)` }
                        ],
                        {
                          duration: (Math.random() + 1) * 3000, // random duration
                          direction: "alternate",
                          fill: "both",
                          iterations: Infinity,
                          easing: "ease-in-out"
                        }
                      );
                    });
                }
                $.fn.moveIt = function() {
                    var $window = $(window);
                    var instances = [];
          
                    $(this).each(function() {
                      instances.push(new moveItItem($(this)));
                    });
          
                    window.addEventListener(
                      "scroll",
                      function() {
                        var scrollTop = $window.scrollTop();
                        instances.forEach(function(inst) {
                          inst.update(scrollTop);
                        });
                      },
                      { passive: true }
                    );
                  };
          
                  var moveItItem = function(el) {
                    this.el = $(el);
                    this.speed = parseInt(this.el.attr("data-scroll-speed"));
                  };
          
                  moveItItem.prototype.update = function(scrollTop) {
                    this.el.css(
                      "transform",
                      "translateY(" + -(scrollTop / this.speed) + "px)"
                    );
                  };
          
                  // Initialization
                  $(function() {
                    $("[data-scroll-speed]").moveIt();
                  });

    var animateleft, animateright, animatemiddle, animatemiddleright, animatemiddleleft, rotateMiddleleft, rotateMiddleright, translatebottom, translateAbove;
    
    $("image").click(function(){  

        var id = $(this).attr("data-name");
        animateleft = anime({
            targets: '.move-left',
            translateX: -200,
            duration: 500
        });
        
        animateright = anime({
            targets: '.move-right',
            translateX: 200,
            duration: 500 
        });
        
        animatemiddleright = anime({
            targets: '.middle-right',
            delay: 300, 
            translateX: 200,
            duration: 500
        });
        
        animatemiddleleft = anime({
            targets: '.middle-left',
            delay: 300, 
            translateX: -200,
            duration: 500
        });
        
        rotateMiddleleft = anime({
            targets: '.rotate-middle-left',
            delay: 700, 
            translateX: -200,
            translateY: 190,
            duration: 500
        });
        
        rotateMiddleright = anime({
            targets: '.rotate-middle-right',
            delay: 700, 
            translateX: 200,
            translateY: -180,
            duration: 500
        });
        
        translatebottom = anime({
            targets: '.translate-bottom',
            delay: 1100,
            translateY: 200,
            duration: 500
        });
        
        translateAbove = anime({
            targets: '.translate-above',
            delay: 1100,
            translateY: -200,
            duration: 500
        });

        setTimeout(function() {
            $("[data-id='"+id+"']").modal("show");
        }, 50);
        
        
    });



    var construct_grid = function(){
        translateAbove.play();
        translateAbove.reverse();
        translatebottom.play();
        translatebottom.reverse();
        rotateMiddleright.play();
        rotateMiddleright.reverse();
        rotateMiddleleft.play();
        rotateMiddleleft.reverse();
        animatemiddleleft.play();
        animatemiddleleft.reverse();
        animatemiddleright.play();
        animatemiddleright.reverse();
        animateright.play();
        animateright.reverse();
        animateleft.play();
        animateleft.reverse();
    };

    $('[data-toggle="tooltip"]').tooltip(); 
    
});

function initMap() {
    var pict = {
        lat: 18.4575421,
        lng: 73.85083359999999
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: pict
    });
    var marker = new google.maps.Marker({
        position: pict,
        map: map
    });
}