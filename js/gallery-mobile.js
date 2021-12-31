function myFunction(x) {
    if (x.matches) { // If media query matches
        
        var c = document.getElementById("gallery").childElementCount;

        for (let index = 0; index < c; index++) {

            var elmnt = document.getElementsByClassName("g-img")[index];
            var attr = elmnt.getAttributeNode("href");
            var dta = elmnt.getAttributeNode("data-lightbox");
            elmnt.removeAttributeNode(attr);
            elmnt.removeAttributeNode(dta);    

        }
        
    } 
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes