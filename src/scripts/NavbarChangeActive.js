$('document').ready(function() {

        if($('#content').hasClass('about')){
        $('.navitem.active').removeClass('active')
        $($('.navitem')[2]).addClass('active')
    }
    else if($('#content').hasClass('services')){
        $('.navitem.active').removeClass('active')
        $($('.navitem')[1]).addClass('active')
    }
    else if($('#content').hasClass('contacts')){
        $('.navitem.active').removeClass('active')
        $($('.navitem')[3]).addClass('active')
    }
    else if($('#content').hasClass('main')){
        $('.navitem.active').removeClass('active')
        $($('.navitem')[0]).addClass('active')
    }


})