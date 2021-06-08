
export{ImageChanger}

function ImageChanger (event,selector,targetId) {

    this._selector = selector;
    this._event = event;
    this._targetId = targetId;

    this.changeImage = function (){
        let ImageContainer = document.querySelector("." + this._selector);
        
        let targetContainer = document.getElementById(this._targetId);
        ImageContainer.addEventListener(this._event, el =>{
            if(el.target.matches("img")){
                targetContainer.src = el.target.src;
                // console.log(el.target)
            }
            console.log(ImageContainer);
        })
    }
}


