document.addEventListener("DOMContentLoaded", function () {
  var productContainer = document.getElementById("product");
  var search = document.getElementById("search");

  if (!productContainer || !search) return;

  var productlist = productContainer.querySelectorAll(".product-box");

  search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
      var productName = productlist[count].querySelector("p").textContent;

      if (productName.toUpperCase().indexOf(enteredValue) < 0) {
        productlist[count].style.display = "none";
      } else {
        productlist[count].style.display = "block";
      }
    }
  });
});
