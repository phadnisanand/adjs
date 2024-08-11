function getProducts() {
   return fetch('https://fakestoreapi.com/products');
}
function getProductsData(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                fetch('https://fakestoreapi.com/products/'+ id)
        )
        },2000)
    })
}
async function displayProducts() {
    // https://fakestoreapi.com/docs
    /*const products= await getProducts();
    const productsdata = await products.json();
    console.log(productsdata);*/
    const products= await getProductsData(1);
    const productsdata = await products.json();
    console.log(productsdata);
}
displayProducts();
console.log('hi');