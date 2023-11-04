$("#slider1, #slider2, #slider3").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      autoplay: true,
    },
    600: {
      items: 3,
      nav: true,
      autoplay: true,
    },
    1000: {
      items: 5,
      nav: true,
      loop: true,
      autoplay: true,
    },
  },
});

//cart plus
$(".plus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this.parentNode.children[2];
  // console.log(id);
  $.ajax({
    type: "GET",
    url: "/pluscart",
    data: {
      product_id: id,
    },
    success: function (data) {
      eml.innerText = data.quantity;
      document.getElementById("amount").innerText = data.sub_total;
      document.getElementById("totalamount").innerText = data.total_ammount;
    },
  });
});

//cart minus
$(".minus-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this.parentNode.children[2];
  // console.log(id);
  $.ajax({
    type: "GET",
    url: "/minuscart",
    data: {
      product_id: id,
    },
    success: function (data) {
      eml.innerText = data.quantity;
      document.getElementById("amount").innerText = data.sub_total;
      document.getElementById("totalamount").innerText = data.total_ammount;
    },
  });
});

//Remove cart product
$(".remove-cart").click(function () {
  var id = $(this).attr("pid").toString();
  var eml = this;
  // console.log(id);
  $.ajax({
    type: "GET",
    url: "/removecart",
    data: {
      product_id: id,
    },
    success: function (data) {
      document.getElementById("amount").innerText = data.sub_total;
      document.getElementById("totalamount").innerText = data.total_ammount;
      eml.parentNode.parentNode.parentNode.parentNode.remove();
    },
  });
});
