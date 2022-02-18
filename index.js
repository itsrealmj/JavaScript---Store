
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
        productImg : "./images1/shoes1.png",
        productName : "Shoes One",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/watch1.png",
        productName : "Watch One",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/glass1.png",
        productName : "Glass One",
        productPrice : 400,
        inCart : 0
        },
        {
        productImg : "./images1/white.png",
        productName : "White Shirt",
        productPrice : 200 ,
        inCart : 0
        },
        {
        productImg : "./images1/shoes2.png",
        productName : "Shoes Two",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/watch2.png",
        productName : "Watch Two",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/glass2.png",
        productName : "Glass Two",
        productPrice : 400 ,
        inCart : 0
        },
        {
        productImg : "./images1/gray.png",
        productName : "Gray Shirt",
        productPrice : 200 ,
        inCart : 0
        },
        {
        productImg : "./images1/shoes3.png",
        productName : "Shoes Three",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/watch3.png",
        productName : "Watch Three",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/glass3.png",
        productName : "Glass Three",
        productPrice : 400 ,
        inCart : 0
        },
        {
        productImg : "./images1/blue.png",
        productName : "Blue Shirt",
        productPrice : 200 ,
        inCart : 0
        },
        {
        productImg : "./images1/shoes4.png",
        productName : "Shoes Four",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/watch4.png",
        productName : "Watch Four",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/glass4.png",
        productName : "Glass Four",
        productPrice : 400 ,
        inCart : 0
        },
        {
        productImg : "./images1/yellow.png",
        productName : "Yellow Shirt",
        productPrice : 200 ,
        inCart : 0
        },
        {
        productImg : "./images1/shoes5.png",
        productName : "Shoes Five",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/watch5.png",
        productName : "Watch Five",
        productPrice : 1000,
        inCart : 0 
        },
        {
        productImg : "./images1/glass5.png",
        productName : "Glass Five",
        productPrice : 400 ,
        inCart : 0
        },
        {
        productImg : "./images1/pink.png",
        productName : "Pink Shirt",
        productPrice : 200 ,
        inCart : 0
        },

    ]
    //let simple = []
    
// html objects
    for(let i = 0; i < cartBtn.length; i++){
        cartBtn[i].addEventListener("click", () => {
            alert(`${products[i].productName} added to cart!`)
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
            
            // simple.push(cartItems)
            // localStorage.setItem('productInCart',JSON.stringify(simple));
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
    
        
        
    function deleteItem(del){
        let cartItems = localStorage.getItem('productInCart');
        del.parentElement.parentElement.parentElement.remove()
    }
    
    function displayCart(){
        let cartItems = localStorage.getItem('productInCart');
        let cartCosts = localStorage.getItem('totalCost');
            cartItems = JSON.parse(cartItems)
        
            let cartImageContainer = document.querySelector('.cart-image-container');
            if (cartItems && cartImageContainer) {
                    document.querySelector('.cart-image-container').innerHTML = '';
                    Object.values(cartItems).map(item => {
                        document.querySelector('.cart-image-container').innerHTML += `
                        <div class="carts">
                            <img src="${item.productImg}">
                            <div >
                                <p>${item.productName}</p>
                                <div class="item-name">
                                    <span onclick="minus"> - </span>
                                    <span>${item.inCart}</span>
                                    <span class="incart-plus"> + </span>
                                </div>
                            </div>
                            <div class="item-price">
                                <p>${item.productPrice}</p>
                                <span><img onclick="deleteItem(this)" class="delete-icon" style="width:15px"src="./images/icon-delete.svg"></span>
                            </div>
                        </div>
                        `;
                    });
                    document.querySelector('.cart-image-cost').innerHTML =`Total cost : Php ${cartCosts}`;
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




// filtering products

let arrayProducts = document.querySelectorAll('.product')
    arrayProducts = [...arrayProducts]




const displayShoes = () => {
  arrayProducts.map(e => {
      if(e.classList.contains('shoes')){
        e.style = "display:block"
      }else {e.style = "display:none" }
  })
}
const displayShirts = () => {
  arrayProducts.map(e => {
      if(e.classList.contains('shirt')){
        e.style = "display:block"
      }else {e.style = "display:none" }
  })
}
const displayWatches = () => {
  arrayProducts.map(e => {
      if(e.classList.contains('watch')){
        e.style = "display:block"
      }else {e.style = "display:none" }
  })
}
const displayAll = () => {
  arrayProducts.map(e => {
      if(e.classList.contains('product')){
        e.style = "display:block"
      }else {e.style = "display:none" }
  })
}

let filterShoes = document.querySelector('.filter-shoes').addEventListener('click', displayShoes)
let filterShirt = document.querySelector('.filter-shirts').addEventListener('click', displayShirts)
let filterWatches = document.querySelector('.filter-watches').addEventListener('click', displayWatches)
let filterAll = document.querySelector('.filter-all').addEventListener('click', displayAll)



