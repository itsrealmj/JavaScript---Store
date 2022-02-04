
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
        productPrice : 100,
        inCart : 0 
        },
        {
        productImg : "./images/2.jpg",
        productName : "Package",
        productPrice : 200,
        inCart : 0
        },
        {
        productImg : "./images/3.jpg",
        productName : "Fried",
        productPrice : 300 ,
        inCart : 0
        },
        {
        productImg : "./images/4.jpg",
        productName : "Fried Chicken",
        productPrice : 400 ,
        inCart : 0
        },
        {
        productImg : "./images/5.jpg",
        productName : "Afritada",
        productPrice : 500 ,
        inCart : 0
        },
        {
        productImg : "./images/6.jpg",
        productName : "fried chicken",
        productPrice : 600 ,
        inCart : 0
        },
        {
        productImg : "./images/7.jpg",
        productName : "Onion Ring",
        productPrice : 700 ,
        inCart : 0
        }
    ]
// html objects
    for(let i = 0; i < cartBtn.length; i++){
        cartBtn[i].addEventListener("click", () => {
            cartNumbers(products[i]);
            updatePrice(products[i])
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
            let cartItems = localStorage.getItem('productInCart');
                cartItems = JSON.parse(cartItems)
            if (cartItems != null) {
                if (cartItems[product.productName] == undefined ) {
                    cartItems = {
                    ...cartItems,
                    [product.productName]: product
                }
                }
                cartItems[product.productName].inCart += 1;
            }else {
                product.inCart = 1;
                cartItems = {
                    [product.productName]: product
                }
            }
            localStorage.setItem('productInCart',JSON.stringify(cartItems));
    }

    function updatePrice(product){
        let cartCosts = localStorage.getItem('totalCost');
            cartCosts = Number(cartCosts);
        if (cartCosts != null) {

            localStorage.setItem('totalCost',cartCosts += product.productPrice)
        }else{
            localStorage.setItem('totalCost',product.productPrice)
        }
    }
        

    function displayCart(){
        let cartItems = localStorage.getItem('productInCart');
        let cartCosts = localStorage.getItem('totalCost');

            cartItems = JSON.parse(cartItems)
            document.querySelector('.cart-image-container');
            if (cartItems && document.querySelector('.cart-image-container')) {
                    document.querySelector('.cart-image-container').innerHTML = '';
                    Object.values(cartItems).map(item => {
                        document.querySelector('.cart-image-container').innerHTML += `
                        <div class="carts">
                            <img src="${item.productImg}">
                            <p>${item.productPrice}</p>
                            <p>${item.productName}</p>
                        </div>
                        `;
                    });
                    document.querySelector('.cart-image-cost').innerHTML =`Total cost :     ${cartCosts}`;
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
    displayCart()
// display counts in cart end
