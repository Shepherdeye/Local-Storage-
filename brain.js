var mybuttons=document.querySelectorAll(".container .buttons button "),
    myInput=document.getElementById("input"),
    myResult=document.getElementById("result");

/* style function */
myInput.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder", "")
}
myInput.onblur=function(){
    "use strict";
    this.setAttribute("placeholder", "Input A Value")
}
/********************/

/*******     main function ************** */

mybuttons.forEach(element => {
    element.addEventListener("click",()=>{

        if(element.classList.contains("check")){
            checkme();
        }
        /***********/
        if(element.classList.contains("add")){
            addme();
        }
        /***********/
        if(element.classList.contains("remove")){
            removeme();
        }
        /***********/
        if(element.classList.contains("show")){
            showme();
        }
    })
    

});
    function emptyState(){
        "use strict";
        myResult.textContent=" Sorry It Can Be Empty"
    }

    /** 01  */
    function checkme(){
    "use strict";
    if(myInput.value!==""){

        if(localStorage.getItem(myInput.value)){

            myResult.innerHTML="";
            myResult.innerHTML= ` There Is A Local Storage Called <span> ${myInput.value} </span> `

        }else{

            myResult.innerHTML= ` There Is No Local Storage Called <span> ${myInput.value} </span> `

        }

    }else{
        emptyState();
    }
    }

    /** 02  */
    function addme(){
        "use strict";
           if(myInput.value!==""){
            myResult.innerHTML="";
       localStorage.setItem(myInput.value,"sayed");
       myResult.innerHTML= ` The Local Storage <span> ${myInput.value} </span> Added  `;
       

            }else{
                emptyState();
            }
    }
    /** 03  */
    function removeme(){
        "use strict";
        if(myInput.value!==""){

            if(localStorage.getItem(myInput.value)){
                myResult.innerHTML="";
                myResult.innerHTML= ` There Is A Local Storage Called <span> ${myInput.value} </span> `
                localStorage.removeItem(myInput.value,"sayed");
                myResult.innerHTML= ` The Local Storage <span> ${myInput.value} </span> Removed  `;
                  myInput.value=""; 
                  window.onload; 
    
            }else{
    
                myResult.innerHTML= ` There Is No Local Storage Called <span> ${myInput.value} </span> `
    
            }
            
     
                 }else{

                     emptyState();
                 }
    }  
    /** 04  */
    function showme(){
        "use strict";
        console.log(localStorage.length);
        if(localStorage.length){
            myResult.innerHTML="";
            for(let [key,Value] of Object.entries(localStorage)){
              
                myResult.innerHTML+= `<span>${key}</span>`
            }
        }else{
            myResult.innerHTML="local storage is null"
        }
    }