$(document).ready(function(){

    function Sidebar() {
        $('#iresi-sidebar-menu').find('a').on('click', function(){
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
            }
            
        })
    }

    Sidebar();
})

