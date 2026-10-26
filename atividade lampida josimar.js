var lampada = document.getElementById("lamp");
var lampon = ("assets/lamp_on.png");
var lampoff = ("assets/lamp_off.png")
let mfs = true

lampada.addEventListener("click", function () {
    if (mfs) {
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
        lampada.src = lampon
        mfs = false
    }

    else{
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
        lampada.src = lampoff
        mfs = true
    }
}); 
