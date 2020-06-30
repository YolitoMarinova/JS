function solve() {
   let resultList = [];
   let totalPrice = 0;

   let textarea = document.querySelector('textarea');

   let products = new Map();

   let addButtons = [...document.querySelectorAll('button.add-product')];
   addButtons.forEach(b => b.addEventListener('click', addToCart));

   function addToCart(event) {
      let productDiv = event.target.parentElement.parentElement;

      let productName = productDiv.querySelector('div.product-title').textContent;
      let productPrice = productDiv.querySelector('div.product-line-price').textContent;

      if (products.has(productName)) {
         products.get(productName).count += 1;
      } else {
         products.set(productName, { price: productPrice, count: 1 });
      }

      textarea.value += `Added ${productName} for ${productPrice} to the cart.\n`;
   }

   document.querySelector('button.checkout').addEventListener('click', checkout => {
      addButtons.forEach(b => b.disabled = true);
      checkout.target.disabled = true;

      for (const [name, product] of products) {
         resultList.push(name);
         totalPrice += product.price * product.count;
      }

      textarea.value+=`You bought ${resultList.join(', ')} for ${totalPrice.toFixed(2)}`;
   });
}