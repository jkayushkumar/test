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
    }
    else
    {
        if(depth2)
        {
            document.getElementById("sea").classList.add("droplets3");
            document.getElementById("sea").classList.remove("droplets1");  
            document.getElementById("sea").classList.remove("droplets2"); 
            document.getElementById("diveIn").classList.add("noDisplay"); 
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
        }   
        else
        {
            if(depth3)
            {
                document.getElementById("sea").classList.add("droplets2");  
                document.getElementById("sea").classList.remove("droplets1");
                document.getElementById("sea").classList.remove("droplets3");
                document.getElementById("diveIn").classList.remove("noDisplay");
            }
        }     
    }
}