// Write your code here...
const menuFetch = fetch("http://localhost:3000/menu")
    .then((resp) => resp.json())
    .then((menuItems = []) =>{
        for(menuItem of menuItems){
            renderMenuItem(menuItem);
        }
    })

function renderMenuItem(menuItem){
    const menuItemSpan = document.createElement("span");
    menuItemSpan.textContent = menuItem.name;
    const menuItemsBar = document.querySelector("#menu-items");
    menuItemsBar.append(menuItemSpan);

    const dishImage = document.querySelector("#dish-image");
    dishImage.src = menuItem.image;
    const dishName = document.querySelector("#dish-name");
    dishName.textContent = menuItem.name;
    const dishDesc = document.querySelector("#dish-description");
    dishDesc.textContent = menuItem.description;
    const dishPrice = document.querySelector("#dish-price");
    dishPrice.textContent = menuItem.price;
    const dishCount = document.querySelector("#number-in-cart");
    dishCount.value = menuItem.number_in_bag;

    menuItemSpan.addEventListener("click", (e) => {
        const dishImage = document.querySelector("#dish-image");
        dishImage.src = menuItem.image;
        dishName.textContent = menuItem.name;
        dishDesc.textContent = menuItem.description;
        dishPrice.textContent = menuItem.price;
        dishCount.textContent = menuItem.number_in_bag;
    })


}

const cartForm = document.querySelector("#cart-form");
cartForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const cartAmountAdder = document.querySelector("#cart-amount");
    const dishCount = document.querySelector("#number-in-cart");
    dishCount.textContent =  parseInt(dishCount.textContent) + parseInt(cartAmountAdder.value);

})