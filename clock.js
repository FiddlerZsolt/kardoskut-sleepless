$(document).ready(function(){

    var count = new Date("nov 3,1999 00:00:00").getTime();
    var now = new Date().getTime();
    var d = now - count;
    var days = Math.floor(d/(1000*60*60*24));
    $(".days").html(days);
    $(".sleeplessNights").html(days * 913);
});