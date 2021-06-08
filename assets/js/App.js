import{ImageChanger} from "./modules/events.js";

let touchEvent = new ImageChanger();
touchEvent._event = "touchstart";
touchEvent._selector = "prevImage";
touchEvent._targetId = "productImage";
touchEvent.changeImage();

let clickEvent = new ImageChanger();
clickEvent._event = "click";
clickEvent._selector = "prevImage";
clickEvent._targetId = "productImage";
clickEvent.changeImage();

