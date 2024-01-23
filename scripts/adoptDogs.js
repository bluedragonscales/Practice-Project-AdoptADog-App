// ADOPT DOGS JAVASCRIPT
let cartTotal = document.getElementById('cartTotal');
let buttons = document.getElementsByTagName('button');
let total = 0;


const buttonPressed = e => {
//   console.log(e.target.id);
    if(e.target.id != 'checkout' && e.target.id != 'addPostBtn') {
        e.target.disabled = true;
        e.target.textContent = "Adopted!";

        total += 400;
        sessionStorage.setItem('checkoutTotal', total);
        cartTotal.textContent = sessionStorage.getItem('checkoutTotal');
    };
}


for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}