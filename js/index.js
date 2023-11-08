function showNav(){
    document.getElementById("nav").style.display="block"
    document.getElementById("head").style.display="none"
    document.getElementById("per").style.display="none"
}
function hideNav(){
    document.getElementById("nav").style.display="none"
    document.getElementById("head").style.display="block"
    document.getElementById("per").style.display="block"
}
function showMedia(){
    document.getElementById("media").style.display="flex"
    document.getElementById("plus").style.display="none"
    document.getElementById("minus").style.display="flex"
}

function hideMedia(){
    document.getElementById("media").style.display="none"
    document.getElementById("plus").style.display="flex"
    document.getElementById("minus").style.display="none"
}

function showAbout(){
    document.getElementById("about").style.display="flex"
    document.getElementById("pluss").style.display="none"
    document.getElementById("minuss").style.display="flex"
}

function hideAbout(){
    document.getElementById("about").style.display="none"
    document.getElementById("pluss").style.display="flex"
    document.getElementById("minuss").style.display="none"
}