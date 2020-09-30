window.onload = function () {
    window.setTimeout(function (){        
        document.getElementById("sea").classList.remove("droplets3");
        window.setTimeout(function (){
            document.getElementById("sea").classList.remove("droplets2");       
        }, 100);
    }, 100);
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
    }
    if(depth1 && !depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth2").offset().top}, 1500);
        document.getElementById("depth2").classList.add("ontop");
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
    }
    if(!depth1 && depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth3").offset().top}, 1500);
        document.getElementById("depth3").classList.add("ontop");
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("diveIn").classList.add("noDisplay");
    }
   
}
    function diveOUT()
{
    var depth1=(document.getElementById("depth1").classList.contains("ontop"));
    var depth2=(document.getElementById("depth2").classList.contains("ontop"));
    var depth3=(document.getElementById("depth3").classList.contains("ontop"));
    if(!depth1 && !depth2 && !depth3)
    {
        // $('html, body').animate({scrollTop: $("#depth1").offset().top}, 1500);
        // document.getElementById("depth1").classList.add("ontop");
        // document.getElementById("depth2").classList.remove("ontop");
        // document.getElementById("depth3").classList.remove("ontop");
    }
    if(depth1 && !depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#surface").offset().top}, 1500);
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        document.getElementById("diveOut").classList.add("noDisplay");
        document.getElementById("diveIn").classList.remove("noDisplay");
    }
    if(!depth1 && depth2 && !depth3)
    {
        $('html, body').animate({scrollTop: $("#depth1").offset().top}, 1500);
        document.getElementById("depth1").classList.add("ontop");
        document.getElementById("depth2").classList.remove("ontop");
        document.getElementById("depth3").classList.remove("ontop");
    }
    if(!depth1 && !depth2 && depth3)
    {
        $('html, body').animate({scrollTop: $("#depth2").offset().top}, 1500);
        document.getElementById("depth2").classList.add("ontop");
        document.getElementById("depth3").classList.remove("ontop");
        document.getElementById("depth1").classList.remove("ontop");
        document.getElementById("diveIn").classList.remove("noDisplay");
    }
}
// function diveINSurface(){
//     var depth0=(!document.getElementById("sea").classList.contains("noSeaSurface"));
//     var depth1=document.getElementById("sea").classList.contains("droplets1");
//     var depth2=document.getElementById("sea").classList.contains("droplets2");
//     var depth3=document.getElementById("sea").classList.contains("droplets3");
//     if(depth0)
//     {
//         $("#surface").animate({top:'-85%'},1550)
//         $("#sea").animate({top:'0'},1500)  
//         document.getElementById("diveIn1").classList.add("noDisplay"); 
//         document.getElementById("diveOut").classList.remove("noDisplay"); 
//         document.getElementById("sea").classList.add("noSeaSurface");
//         window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#11a8e4"; },1500);
//     }
// }
// function diveIN()
// {
//     var depth0=(!document.getElementById("sea").classList.contains("noSeaSurface"));
//     var depth1=document.getElementById("sea").classList.contains("droplets1");
//     var depth2=document.getElementById("sea").classList.contains("droplets2");
//     var depth3=document.getElementById("sea").classList.contains("droplets3");
//     if(depth1)
//     {
//         document.getElementById("sea").classList.add("droplets2");        
//         document.getElementById("sea").classList.remove("droplets1");  
//         document.getElementById("sea").classList.remove("droplets3"); 
//         document.getElementById("diveOut").classList.remove("noDisplay"); 
//         document.getElementById("fishLV3").classList.remove("noDisplay"); 
//         document.getElementById("fishLV1").classList.add("noDisplay");
//         window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#0568A6"; },1500); 
//     }
//     else
//     {
//         if(depth2)
//         {
//             document.getElementById("sea").classList.add("droplets3");
//             document.getElementById("sea").classList.remove("droplets1");  
//             document.getElementById("sea").classList.remove("droplets2"); 
//             document.getElementById("diveIn").classList.add("noDisplay"); 
//             document.getElementById("fishLV3").classList.replace("orca","orca2");
//             document.getElementById("fishLV4").classList.remove("noDisplay"); 
//             document.getElementById("fishLV4B1").classList.remove("noDisplay");
//             document.getElementById("fishLV4B2").classList.remove("noDisplay");
//             document.getElementById("fishLV2").classList.add("noDisplay"); 
//             // $(document.getElementsByTagName('meta')).animate(["theme-color"].content = "#022340",1500);           
//             window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#022340";},1500);
//         }        
//     }
// }
// function diveOUT()
// {
//     var depth0=(!document.getElementById("sea").classList.contains("noSeaSurface"));
//     var depth1=document.getElementById("sea").classList.contains("droplets1");
//     var depth2=document.getElementById("sea").classList.contains("droplets2");
//     var depth3=document.getElementById("sea").classList.contains("droplets3");
//     if(depth1)
//     {
//         $("#surface").animate({top:'0'},1500)
//         $("#sea").animate({top:'85%'},1500)  
//         document.getElementById("diveIn1").classList.remove("noDisplay"); 
//         document.getElementById("diveOut").classList.add("noDisplay");
//         document.getElementById("sea").classList.remove("noSeaSurface");
//         document.getElementsByTagName('meta')["theme-color"].content = "#f19ca2";
//     }
//     else
//     {
//         if(depth2)
//         {            
//             document.getElementById("sea").classList.add("droplets1");
//             document.getElementById("sea").classList.remove("droplets2");
//             document.getElementById("sea").classList.remove("droplets3");
//             document.getElementById("fishLV3").classList.add("noDisplay"); 
//             document.getElementById("fishLV1").classList.remove("noDisplay");
//             // $(document.getElementsByTagName('meta')).animate(["theme-color"].content = "#11a8e4",1500);
//             window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#11a8e4";},1500);
//         }   
//         else
//         {
//             if(depth3)
//             {
//                 document.getElementById("sea").classList.add("droplets2");
//                 document.getElementById("sea").classList.remove("droplets1");
//                 document.getElementById("sea").classList.remove("droplets3");
//                 document.getElementById("diveIn").classList.remove("noDisplay");
//                 document.getElementById("fishLV3").classList.replace("orca2","orca");
//                 document.getElementById("fishLV4").classList.add("noDisplay");
//                 document.getElementById("fishLV4B1").classList.add("noDisplay");
//                 document.getElementById("fishLV4B2").classList.add("noDisplay"); 
//                 document.getElementById("fishLV2").classList.remove("noDisplay"); 
//                 // $(document.getElementsByTagName('meta')).animate(["theme-color"].content = "#0568A6",1500);
//                 window.setTimeout(function (){document.getElementsByTagName('meta')["theme-color"].content = "#0568A6";},1500);
//             }
//         }     
//     }
// }