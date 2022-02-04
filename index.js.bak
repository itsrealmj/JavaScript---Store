
// mobile nav bar
let iconMenu = document.querySelector("#icon-menu");
    iconMenu.addEventListener("click", () => {
        document.querySelector(".right ul").style= "display:block";
        iconMenu.style = "display:none;"
        document.querySelector("#icon-closed").style = "display:block"
    })
    document.querySelector("#icon-closed").addEventListener("click", () => {
        iconMenu.style = "display:block;"
        document.querySelector("#icon-closed").style = "display:none"
        document.querySelector(".right ul").style= "display:none";
    })
// mobile nav bar end

var cartBtn = document.querySelectorAll(".cart-btn")
// html objects 
    let products = 
    [
        {
        productImg : "./images/1.jpg",
        productName : "Lechon Belly",
        productPrice : 500 
        },
        {
        productImg : "./images/2.jpg",
        productName : "Package",
        productPrice : 1000 
        },
        {
        productImg : "./images/3.jpg",
        productName : "Fried",
        productPrice : 400 
        },
        {
        productImg : "./images/4.jpg",
        productName : "Fried Chicken",
        productPrice : 600 
        },
        {
        productImg : "./images/5.jpg",
        productName : "Afritada",
        productPrice : 700 
        },
        {
        productImg : "./images/6.jpg",
        productName : "Onion Ring, fried chicken",
        productPrice : 900 
        },
        {
        productImg : "./images/7.jpg",
        productName : "Onion Ring",
        productPrice : 800 
        }
    ]
// html objects
    for(let i = 0; i < cartBtn.length; i++){
        cartBtn[i].addEventListener("click", () => {
            cartNumbers(products[i]);
        })    
    }
    function cartNumbers(product){
        let cartCounts = localStorage.getItem("cartCounts")
            cartCounts = Number(cartCounts)
            
        if ( cartCounts ) {
            localStorage.setItem("cartCounts", cartCounts + 1)
            document.querySelector("#count-display").textContent = cartCounts + 1;
        } else {
            localStorage.setItem("cartCounts", 1)
            document.querySelector("#count-display").textContent = 1;
        }
        
        setProducts(product)
    }


    function setProducts(product){
        let productClicked = localStorage.getItem("productClicked", JSON.stringify(product))

        if (productClicked) {
            localStorage.getItem('productClicked',JSON.stringify(product))
        }else{
            localStorage.setItem('productClicked',JSON.stringify(product))
        }
    }

// display item counts in cart
    function onLoadCartCounts(){
        let cartCounts = localStorage.getItem("cartCounts");
        if (cartCounts) {
            document.querySelector("#count-display").textContent = cartCounts;
        } else { document.querySelector("#count-display").textContent = 0 }
        
    }
    onLoadCartCounts()
// display counts in cart end
