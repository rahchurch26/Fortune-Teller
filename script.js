$(".start").click(function(){
    var name=$("input").val();  
    $(".intro").text("These are some of the best games that came out in 2010. "
    + "Call of Duty:Black Ops  BioShock 2  Mass Effect 2  Dead Rising 2  Fallout:New Vegas  Just Cause 2  Assassin's Creed:Brotherhood  Red Dead Redemption  Kingdom Hearts Re:Coded  Halo Reach  Mafia II  Heavy Rain  God of War 3");
    $("h1").text("Hello " + name);
    $(".start").hide();
    $(".name").hide();
    $(".continue").show();
});  
$(".continue").click(function(){
    var name=$("input").val();
    $("h1").hide();
    $(".intro").text("What gaming genre do you enjoy?");
    $(".name").show();
    $(".continue").hide();
    $(".moveon").show();
});    
$(".moveon").click(function(){
var name=$("input").val();
    $("h1").hide();
    $(".intro").text("Do you like heroes?");
    $(".name").show();
    $(".moveon").hide();
    $(".result").show();
});    
$(".result").click(function(){
    $("body").css("background-color","Red");
    $(".intro").text("Sorry I really can't guess at all. Maybe next time.");
    $(".result").hide();
    $(".name").hide();
});    