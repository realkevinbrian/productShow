
//get all images elements and add en event listener to all
const allImages = document.querySelectorAll(".productPreview img");
var targetProduct = document.getElementById("productImage");


//we add a loop to loop throup all alements

for(let i = 0; i < allImages.length; i++){

    allImages[i].addEventListener("click", changeImage);

}

    

    



function changeImage (el){

    
    //target
    let targetEl = el.target;
    
    console.log(targetEl)
    
    //check just only for images
    if(targetEl.matches("img")){
        
        targetProduct.src = targetEl.src;
        
    }
}

//add event listener 
