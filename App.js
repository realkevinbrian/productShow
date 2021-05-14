//create a product object

const Product = {

    productName : document.getElementById("productName"),
    productPrice : document.getElementById("productPrice"),
    productDescr : document.getElementById("productDescr"),
    productImage : document.getElementById("productImage")
}


//create an array containing all images name reference

let images = ['image1.jpg' ,'image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.png'];

var start = 0;

let next = () =>{

    if(start < images.length){

        start++;
        Product.productImage.src = `products/${images[start]}`;
    }

    else if(start > images.length-1){

        start++;
        Product.productImage.src = `products/${images[start]}`;

    }

    // Product.productImage.transform.translateX = "50px";
    // Product.productImage.opacity =  1;
    




}



// let timerId = setTimeout(next, 3000);




