(function($) {
    "use strict"
    $(function() {
        
        let userScroll = $(window).scrollTop()
        fixedNavbar()

        $(document).scroll(function(e) {
            userScroll = $(document).scrollTop()
            fixedNavbar()
        })

        function fixedNavbar() {
            const   navbar = $('.navbar'),
                    classes = {
                        fixed: 'is--fixed',
                        opacity: 'is--opacity',
                        opacity_trigger: 't--opacity'
                    }

            if(userScroll > navbar.outerHeight() && !navbar.hasClass(classes.fixed)) {
                navbar.addClass(classes.fixed)
                $('.__noslider').css('padding-top', navbar.outerHeight() + 'px')
                navbar.removeClass(classes.opacity)
            }
            if(userScroll < navbar.outerHeight()) {
                navbar.removeClass(classes.fixed)
                $('body').css('padding-top', 0)
                if(navbar.hasClass(classes.opacity_trigger))
                    navbar.addClass(classes.opacity)
            }
        }

        $('.navbar__mobile--btn').on('click', function() {
            toggleMobileMenu()
        })

        function toggleMobileMenu() {
            
            const   navbar = $('.navbar'),
                    button = $('.navbar__mobile--btn button.hamburger'),
                    classes = {
                        open: 'is--open',
                        active_hum: 'is-active'
                    }

            if(navbar.hasClass(classes.open)) {
                navbar.removeClass(classes.open)
                button.removeClass(classes.active_hum)
            }else {
                navbar.addClass(classes.open)
                button.addClass(classes.active_hum)
            }

        }
    })
})(jQuery);