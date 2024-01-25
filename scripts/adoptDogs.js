// ADOPT DOGS JAVASCRIPT
let cartTotal = document.getElementById('cartTotal');
let buttons = document.getElementsByTagName('button');

// Create the total variable and set it to either 0 or the total value from the "buttonPressed" function.
let total = parseInt(sessionStorage.getItem('checkoutTotal'), 10) || 0;


const buttonPressed = e => {
    if(e.target.id != 'checkout' && e.target.id != 'addPostBtn') {
        e.target.disabled = true;
        e.target.textContent = "Adopted!";
        total += 400;
        // Save the the total into the sessStorage object.
        window.sessionStorage.setItem('checkoutTotal', total);
        cartTotal.textContent = sessionStorage.getItem('checkoutTotal');
    };
};


for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
};


window.addEventListener('load', (e) => {
  cartTotal.textContent = parseInt(sessionStorage.getItem('checkoutTotal'), 10) || 0;
});