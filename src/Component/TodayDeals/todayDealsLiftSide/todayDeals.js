
    let selectAll=document.getElementById("selectAll");
let categoryCheckBoxes=document.getElementsByClassName("CategoryCheckBoxes");
selectAll.addEventListener("click",function(){
    Array.from(categoryCheckBoxes).forEach(function(element){
        if(element.checked==false){
            element.checked=true;
        selectAll.innerHTML="clear";
        }
        else{
            element.checked=false;
            selectAll.innerHTML="Select All";
        }
    })
})
