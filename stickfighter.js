// inform the mighty programmer that his codes is finally loaded
console.log("JavaScript loaded.");
console.log("> Welcome mighty Programmer! The Stickfighter greets you!");

// load the stickfighter
var stickfighter = document.getElementById("fighter");

// function to set the animation of the stickfighter
function setAnimation (name) {
    if (stickfighter != null)
        stickfighter.setAttribute("animation", name);
}

// set an animation to the fighter
setAnimation("wink");