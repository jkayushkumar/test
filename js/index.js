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
    var depth1=document.getElementById("sea").classList.contains("droplets1");
    var depth2=document.getElementById("sea").classList.contains("droplets2");
    var depth3=document.getElementById("sea").classList.contains("droplets3");
    if(depth1)
    {
        document.getElementById("sea").classList.add("droplets2");        
        document.getElementById("sea").classList.remove("droplets1");  
        document.getElementById("sea").classList.remove("droplets3"); 
        document.getElementById("diveOut").classList.remove("noDisplay"); 
        document.getElementById("fishLV3").classList.remove("noDisplay"); 
        document.getElementById("fishLV1").classList.add("noDisplay"); 
        document.getElementsByTagName('meta')["theme-color"].content = "#0568A6";  
    }
    else
    {
        if(depth2)
        {
            document.getElementById("sea").classList.add("droplets3");
            document.getElementById("sea").classList.remove("droplets1");  
            document.getElementById("sea").classList.remove("droplets2"); 
            document.getElementById("diveIn").classList.add("noDisplay"); 
            document.getElementById("fishLV3").classList.replace("orca","orca2");
            document.getElementById("fishLV4").classList.remove("noDisplay"); 
            document.getElementById("fishLV4B1").classList.remove("noDisplay");
            document.getElementById("fishLV4B2").classList.remove("noDisplay");
            document.getElementById("fishLV2").classList.add("noDisplay"); 
            document.getElementsByTagName('meta')["theme-color"].content = "#022340";
        }        
    }
}
function diveOUT()
{
    var depth1=document.getElementById("sea").classList.contains("droplets1");
    var depth2=document.getElementById("sea").classList.contains("droplets2");
    var depth3=document.getElementById("sea").classList.contains("droplets3");
    if(depth1)
    {
        document.getElementById("diveOut").classList.add("noDisplay");
    }
    else
    {
        if(depth2)
        {
            document.getElementById("diveOut").classList.add("noDisplay");
            document.getElementById("sea").classList.add("droplets1");
            document.getElementById("sea").classList.remove("droplets2");
            document.getElementById("sea").classList.remove("droplets3");
            document.getElementById("fishLV3").classList.add("noDisplay"); 
            document.getElementById("fishLV1").classList.remove("noDisplay");
            document.getElementsByTagName('meta')["theme-color"].content = "#11a8e4";
        }   
        else
        {
            if(depth3)
            {
                document.getElementById("sea").classList.add("droplets2");
                document.getElementById("sea").classList.remove("droplets1");
                document.getElementById("sea").classList.remove("droplets3");
                document.getElementById("diveIn").classList.remove("noDisplay");
                document.getElementById("fishLV3").classList.replace("orca2","orca");
                document.getElementById("fishLV4").classList.add("noDisplay");
                document.getElementById("fishLV4B1").classList.add("noDisplay");
                document.getElementById("fishLV4B2").classList.add("noDisplay"); 
                document.getElementById("fishLV2").classList.remove("noDisplay"); 
                document.getElementsByTagName('meta')["theme-color"].content = "#0568A6";
            }
        }     
    }
}