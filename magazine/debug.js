/*
Created by Daniel Edminster
Creative Commons Attribution 4.0
https://creativecommons.org/licenses/by/4.0/
*/

let d = false;

function toggleDebugger() {
    if (d === false)
    {
        d = true;
        dc = document.querySelectorAll("*");
        for(let i = 0;i< dc.length; i++)
        {
            if(dc[i].style.border !== "")
            {
                continue;
            }
            dc[i].style.border="1px solid red";
            
        }
    }
    else if(d === true)
    {
        d = false;
        for(let i = 0;i< dc.length; i++)
        {
            if(dc[i].style.border === "1px solid red")
            {
                dc[i].style.border="";
            }

        }
    }
}