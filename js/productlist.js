fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fanger template
  const template = document.querySelector("#smallProductTemplate").content;
  //laver en kopi
  const copy = template.cloneNode(true);
  //andre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".category").textContent = product.articletype;
  if (product.soldout) {
    //product er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector(".discounted").classList.add("discounted");
    copy.querySelector(".discounted").textContent = -product.discount + "%";
  }

  copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);
  //appende
  document.querySelector("main").appendChild(copy);
}

/* 

    <article class="smallProduct">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
                    alt="Sahara Team India Fanwear Round Neck Jersey">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p class="subtle">Tshirts | Nike</p>
                <p class="price"><span>Prev.</span> DKK 1595,-</p>
                <div class="discounted">
                    <p>Now DKK 1560,-</p>
                    <p>-34%</p>
                </div>
                <a href="product.html">Read More</a>
            </article>

id	1165
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
season	"Summer"
productionyear	2013
usagetype	"Sports"
productdisplayname	"Mean Team India Cricket Jersey"
price	2495
discount	45
brandname	"Nike"
soldout	0
3	
*/
