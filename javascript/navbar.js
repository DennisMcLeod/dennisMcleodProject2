$(function () {
    $('.hamburger').click(function () {
        $('nav').toggleClass('showMenu');
        $('.bars').toggleClass('changed');
    })
});