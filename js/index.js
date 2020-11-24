
const products = [
  {
    img: `img/bathbomb.jpg`,
    name: `Charcool`,
    category: `bath-bomb`,
    descrip: `blend of charcoal and lemon oil`,
    price: `12`,
    quantity: `stock running low`,
    scent:`fruity`
  },{
    img: `img/bodylotion.jpg`,
    name: `Banana Body`,
    category: `body-lotion`,
    descrip: `ultra fantastic, all natural skincare`,
    price: `15`,
    quantity: `in stock`,
    scent:`sweet`
  },{
    img: `img/bodywash1.jpg`,
    name: `Avowash`,
    category: `body-wash`,
    descrip: `avocado & strawberry`,
    price: `18`,
    quantity: `in stock`,
    scent:`sweet`
  },{
    img: `img/bodywash2.jpg`,
    name: `Grapy Soapy`,
    category: `body-wash`,
    descrip: `rich,fruity hydration`,
    price: `10`,
    quantity: `out of stock`,
    scent:`fruity`
  },{
    img: `img/bodywax.jpg`,
    name: `Tuty Fruity`,
    category: `body-wax`,
    descrip: `smooth and silky finish`,
    price: `20`,
    quantity: `stock running low`,
    scent:`floral`
  },{
    img: `img/handsoap.jpg`,
    name: `Handy Melon`,
    category: `hand-soap`,
    descrip: `buttery softness`,
    price: `10`,
    quantity: `re-stocked`,
    scent:`fruity`
  },{
    img: `img/bodybomb1.jpg`,
    name: `Saturn`,
    category: `bath-bomb`,
    descrip: `blend of strawberry and blueberry`,
    price: `9`,
    quantity: `in stock`,
    scent:`floral`
  },{
    img: `img/bodybutter.jpg`,
    name: `Sweet GBM`,
    category: `body-lotion`,
    descrip: `buttery coco and peppermint`,
    price: `11`,
    quantity: `out of stock`,
    scent:`citrus`
  },{
    img: `img/bodysoap1.jpg`,
    name: `Cloudy Unicorn`,
    category: `body-soap`,
    descrip: `angel to bare skin`,
    price: `10`,
    quantity: `in stock`,
    scent:`sweet`
    
 },{
    img: `img/handsoap1.jpg`,
    name: `Helping Hand`,
    category: `hand-soap`,
    descrip: `help is on the way`,
    price: `8`,
    quantity: `stock running low`,
    scent:`fruity`
 },{
    img: `img/bathbomb.jpg`,
    name: `Black Kitty`,
    category: `hand-soap`,
    descrip: `charcoal mixed with lime`,
    price: `10`,
    quantity: `out of stock`,
    scent:`floral`
  },{
    img: `img/bodylotion.jpg`,
    name: `Lime Line`,
    category: `body-wax`,
    descrip: `all natural skincare`,
    price: `12`,
    quantity: `in stock`,
    scent:`citrus`
  },{
    img: `img/bodywash1.jpg`,
    name: `Ale Kale`,
    category: `body-wax`,
    descrip: `mix of kale and spinach`,
    price: `13`,
    quantity: `out of stock`,
    scent:`sweet`
  },{
    img: `img/bodywash2.jpg`,
    name: `Pepperminty`,
    category: `body-soap`,
    descrip: `fruity hydration`,
    price: `18`,
    quantity: `in stock`,
    scent:`floral`
  },{
    img: `img/bodywax.jpg`,
    name: `Lemon Crush`,
    category: `body-lotion`,
    descrip: `smooth as it gets`,
    price: `17`,
    quantity: `stock running low`,
    scent:`citrus`
  },{
    img: `img/handsoap.jpg`,
    name: `Melony`,
    category: `body-soap`,
    descrip: `butternut squash`,
    price: `13`,
    quantity: `re-stocked`,
    scent:`citrus`
  },{
    img: `img/bodybomb1.jpg`,
    name: `Rock Bottom`,
    category: `body-wax`,
    descrip: `blend of strawberry and mint`,
    price: `19`,
    quantity: `re-stocked`,
    scent:`fruity`
  },{
    img: `img/bodybutter.jpg`,
    name: `Fresh Sweet`,
    category: `hand-soap`,
    descrip: `coco and eggnog`,
    price: `10`,
    quantity: `re-stocked`,
    scent:`sweet`
  },{
    img: `img/bodysoap1.jpg`,
    name: `Lavender Love`,
    category: `body-wash`,
    descrip: `lavender and eucalytus `,
    price: `11`,
    quantity: `out of stock`,
    scent:`sweet`
 },{
    img: `img/handsoap1.jpg`,
    name: `Handy Dandy`,
    category: `body-soap`,
    descrip: `it leaves your skin soft`,
    price: `18`,
    quantity: `re-stocked`,
    scent:`fruity`
 }, 
]

function isInThisScent(product){
  if(this == 'all'){
    return true;
  } else if (product.scent == this){
    return true;
  } else{
    return false;
  }
}

function isInThisCategory(product){
  if(this == 'all'){
    return true;
  } else if (product.category == this){
    return true;
  } else{
    return false;
  }
}



// function isInThisSort(product){
//   if(this == 'all'){
//     return true;
//   } else if (product.sort == this){
//     return true;
//   } else{
//     return false;
//   }
// }

function isInThisName(product){
  if (product.name.toUpperCase().includes(this.trim().toUpperCase())){
    return true;
  } else{
    return false;
  }
}

/* toggle */
// .....
function getProductAsHtmlString(product){

  let clearance = ``;

 if(product.price < 11){
   clearance =`<small class="callout urgent">SALE!</small>`;
 }
  
  return `<article class="product">
            <div><img src="${product.img}" alt="Product Pic"></div>
        
            <h3>${product.name} ${clearance} </h3>
            <h4>${product.category}</h4>
            <h4>${product.scent}</h4>
            <button type="button"><i class="material-icons">thumb_up</i></button>
            
            <p>${product.descrip}</p>
            <p style="text-align: center">$${product.price}/20g</p>
            <section>
              <div class="select">
              <button class="selectbtn">Select Size</button>
              <div class="selectopt">
                <a href="#">20g</a>
                <a href="#">40g</a>
                <a href="#">60g</a>
              <div>
              <div>
            </section>
            <div class="quantity-button">
              <input type="button" value="-" class="minus">
              <input type="quantity" value="1" class="input-text qty text" min="1" max="" name="quantity-button" step="1" inputmode="numeric">
              <input type="button" value="+" class="plus">
            </div>
            <p style="opacity: 100%; color:red;"> ${product.quantity} </p>
            <div class="add">
              <a href="http://127.0.0.1:5500/webstore/product.html"><button id="add to cart">Add to cart</button></a>
             
            </div>
            <div class="rate">
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star_half</i>
                <i class="material-icons">star_border</i>
            </div>

           
          </article>`;
}



function renderProducts(arrToRender){
  const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
  const strOfHtmlProducts = arrOfHtmlProducts.join('\n');
  document.getElementById('products').innerHTML = strOfHtmlProducts;
}

function toggleProductLayout(event){
  document.getElementById('products').classList.toggle('grid-view');
}

function loadScent(event){
  const scentImSearchingFor = event.target.value;
  renderProducts(products.filter(isInThisScent, scentImSearchingFor));
}

function loadCategory(event){
  const categoryImSearchingFor = event.target.value;
  renderProducts(products.filter(isInThisCategory, categoryImSearchingFor));
}

function loadByName(event){
  const nameImSearchingFor = event.target.value;
  renderProducts(products.filter(isInThisName,nameImSearchingFor));
}

// function loadSort(event){
//   const sortImSearchingFor = event.target.value;
//   renderProducts(products.filter(isInThisSort, sortImSearchingFor));
// }




renderProducts(products);

document.getElementById('toggleview').addEventListener('click', toggleProductLayout);
document.getElementById('scent').addEventListener('change', loadScent);
document.getElementById('category').addEventListener('change', loadCategory);
document.getElementById('name').addEventListener('input',loadByName);
// document.getElementById('sort').addEventListener('change', loadSort);

