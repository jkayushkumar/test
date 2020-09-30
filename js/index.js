window.onload = function () {
    
}
function diveIN()
{  
    var depth1=(document.getElementById("depth1").classList.contains("ontop"));
    var depth2=(document.getElementById("depth2").classList.contains("ontop"));
    var depth3=(document.getElementById("depth3").classList.contains("ontop"));
    if(!depth1 && !depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth1").offset().top}, 1500);
        document.getElementById("depth1").classList.add("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        document.getElementById("diveOut").classList.remove("noDisplay");
        window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#11a8e4"; },1500);
    }
    if(depth1 && !depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth2").offset().top}, 1500);
        document.getElementById("depth2").classList.add("ontop");
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#0568A6"; },1500);
    }
    if(!depth1 && depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth3").offset().top}, 1500);
        document.getElementById("depth3").classList.add("ontop");
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("diveIn").classList.add("noDisplay");
        window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#022340"; },1500);
    }
   
}
    function diveOUT()
{
    var depth1=(document.getElementById("depth1").classList.contains("ontop"));
    var depth2=(document.getElementById("depth2").classList.contains("ontop"));
    var depth3=(document.getElementById("depth3").classList.contains("ontop"));
    if(!depth1 && !depth2 && !depth3)
    {
    }
    if(depth1 && !depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#surface").offset().top}, 1500);
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        document.getElementById("diveOut").classList.add("noDisplay");
        document.getElementById("diveIn").classList.remove("noDisplay");
        document.getElementsByTagName('meta')["theme-color"].content = "#f19ca2";
    }
    if(!depth1 && depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth1").offset().top}, 1500);
        document.getElementById("depth1").classList.add("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#11a8e4"; },1500);
    }
    if(!depth1 && !depth2 && depth3)
    {
        $('html, body').animate({scrollTop: $("#depth2").offset().top}, 1500);
        document.getElementById("depth2").classList.add("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("diveIn").classList.remove("noDisplay");
        window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#0568A6"; },1500);
    }
}