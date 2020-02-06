$(document).ready(function ()
{
    'use strict';

    $(window).scroll(function ()
    {
        var navbar = $('.navbar');

        if ($(window).scrollTop() >= navbar.height())
        {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
    // click on tabs to switch classes

    $('.tab-switch li').click(function ()
    {
        // add class selected to the desired tab
        $(this).addClass('selected').siblings().removeClass('selected');
        // hide all div that childern of the class tabs-content
        $('.tab-section .tabs-content > div').hide();
        // show the selected tab according to the data class link
        $('.' + $(this).data('class')).show();
        //show class data on console log
        window.console.log($(this).data('class'));

    });

});