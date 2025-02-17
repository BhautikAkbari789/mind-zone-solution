(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    

    $('#submit').click(function (e) {
        e.preventdefault();
                var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();


        // Check if fields are empty
        if (name && email && subject && message) {
            // Send the form data to EmailJS
            emailjs.send("service_vqwi62q","template_wb1rf7c", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message    
            }).then(function(response) {
                alert('Your message has been sent successfully!');
                $('#contact-form')[0].reset(); // Reset form after success
            }, function(error) {
                alert('There was an error, please try again later.');
            });
        } else {
            alert('Please fill in all fields.');
        }
    });

    $(document).ready(function () {
        $(".accordion-header").click(function () {
            var item = $(this).closest(".accordion-item");
            var content = item.find(".accordion-content");
            var arrow = $(this).find(".arrow i");
    
            // Close other accordions smoothly
            $(".accordion-item").not(item).removeClass("active")
                .find(".accordion-content").slideUp();
            $(".arrow i").not(arrow).removeClass("fa-rotate-90");
    
            // Toggle the clicked accordion
            if (item.hasClass("active")) {
                item.removeClass("active");
                content.slideUp();
                arrow.removeClass("fa-rotate-90");
            } else {
                item.addClass("active");
                content.slideDown();
                arrow.addClass("fa-rotate-90");
            }
        });
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
})(jQuery);




