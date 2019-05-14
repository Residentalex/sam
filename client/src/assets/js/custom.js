$(document).ready(function () {

    if ($(window).width() <= 780) {
        $('#iresi-left-container').find('.show').removeClass('show');
    }

    function Sidebar() {
        
        $('#iresi-sidebar-menu').find('a').on('click', function () {

            console.log('Sidebar - Clicked');

            var $li = $(this).parent();

            if (!$li.parent().is('.resi-child')) {

                if ($li.is('.active') && $li.find('.resi-child').length) {
                    $li.removeClass('active');
                } else {
                    $('#iresi-sidebar-menu').find('.show').removeClass('show');
                    $('#iresi-sidebar-menu').find('.active').removeClass('active');
                    $li.addClass('active');
                }
            }else{
           
                if ($(window).width() <= 780) {
                    $('#iresi-left-container').find('.show').removeClass('show');
                }
                
            }

        })
    }


    function Toggle() {
        $('#iresi-toggle').on('click', function(){
            console.log('Toggle - Clicked');
            
            $('#iresi-left-container').toggleClass('hide');
            $('#iresi-right-container').toggleClass('expand')

        });
    }


    Toggle();
    Sidebar();
    
});
