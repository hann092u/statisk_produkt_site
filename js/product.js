//https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  let discNumber = product.discount;
  let discPercent = discNumber / 100;
  let multiply = product.price * discPercent;
  let thePrice = product.price - multiply;
  let thisPrice = Math.trunc(thePrice);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".purchaseBox .category").textContent = product.articletype;
  document.querySelector("dl .brand").textContent = product.productdisplayname;
  document.querySelector("dl .color").textContent = product.basecolour;
  document.querySelector("dl .id").textContent = product.id;
  document.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".discounted .priceNow").textContent = "Now " + thePrice + ",-";
  document.querySelector(".info h1").textContent = product.brandname;
  document.querySelector(".info .brandbio").textContent = product.brandbio;
  document.querySelector(".breadcrumbs .brand").textContent = product.productdisplayname;
}

/*
{"id":1525,
"gender":"Unisex",
"category":"Accessories",
"subcategory":"Bags",
"articletype":"Backpacks",
"basecolour":"Navy Blue",
"season":"Fall",
"productionyear":2010,
"usagetype":"Casual",
"productdisplayname":"Deck Navy Blue Backpack",
"parsed":1,"soldout":0,
"relid":1525,
"price":1299,
"discount":55,
"variantname":"Deck Backpack",
"brandname":"Puma",
"brandbio":"PUMA is the World's Fastest Sports Brand",
"brandimage":"http:\/\/assets.myntassets.com\/assets\/images\/2015\/11\/17\/11447736932686-113016-3ff8sf.jpg",
"agegroup":"Adults-Unisex",
"colour1":"NA",
"colour2":"NA",
"fashiontype":"Fashion",
"materialcaredesc":null,
"sizefitdesc":null,
"description":"<p>asfafaf<br> kasjhdkashd<\/p>",
"styledesc":null}
*/
