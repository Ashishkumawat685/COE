// ..................................... logout and local host .....................................

btdat = document.getElementById("btndata");
mainbdydata = document.getElementById("main_body");

usdata = localStorage.getItem("User_N");

if (usdata) {
  btdat.innerHTML = `${usdata} Logout..`;
} else {
  mainbdydata.style.display = "none";
}

function Lout() {
  localStorage.removeItem("User_N");
  alert("logout Successfully.......");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

// ............................ header Responshiv .................................

function responshivnav() {
  const res = document.getElementById("header_menu");
  const show_icon = document.getElementById("show_me");
  const hide_icon = document.getElementById("hide_me");

  if (res.style.display === "flex") {
    res.style.display = "none";
    show_icon.style.display = "block";
    hide_icon.style.display = "none";
  } else {
    res.style.display = "flex";
    show_icon.style.display = "none";
    hide_icon.style.display = "block";
  }
}

// <!-- ........................ search bar search products....................... -->

function search_bar() {
  search_bar = document.getElementById("Main_search_bar").value;

  men = document.getElementById("Mens_clothes");
  womens = document.getElementById("Womens_clothes");
  kids = document.getElementById("Kids_clothes");
  search_close_btn1 = document.getElementById("search_bar_close_butto1");
  search_close_btn2 = document.getElementById("search_bar_close_butto2");
  search_close_btn3 = document.getElementById("search_bar_close_butto3");
  men_search = [
    "men clothes",
    "men",
    "men shirts",
    "men tshirt",
    "boy clothes",
  ];

  for (item of men_search) {
    if (search_bar === item) {
      men.classList.add("Mens_clothes");
      search_close_btn1.style.display = "block";
    }
  }
  if (search_bar === "women clothes") {
    womens.classList.add("Mens_clothes");
    search_close_btn2.style.display = "block";
  }

  if (search_bar === "kids clothes") {
    kids.classList.add("Mens_clothes");
    search_close_btn3.style.display = "block";
  }
}

// <!-- ........................ search bar product close btn....................... -->

function search_bar_close1() {
  men = document.getElementById("Mens_clothes");
  men.classList.remove("Mens_clothes");
  location.reload();
}
function search_bar_close2() {
  womens = document.getElementById("Womens_clothes");

  womens.classList.remove("Mens_clothes");
  location.reload();
}

function search_bar_close3() {
  kids = document.getElementById("Kids_clothes");

  kids.classList.remove("Mens_clothes");
  location.reload();
}

// <!-- .......................... Initialize Swiper ...................... -->
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    loop: true,
  },
});

var swiper = new Swiper(".newSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// <!-- ................................. clothes display ......................... -->
function All_Cloth() {
  men = document.getElementById("Mens_clothes");
  womens = document.getElementById("Womens_clothes");
  kids = document.getElementById("Kids_clothes");

  men.style.display = "block";
  womens.style.display = "block";
  kids.style.display = "block";
}

function Mens_Cloth() {
  men = document.getElementById("Mens_clothes");
  womens = document.getElementById("Womens_clothes");
  kids = document.getElementById("Kids_clothes");

  men.style.display = "block";
  womens.style.display = "none";
  kids.style.display = "none";
}

function Womens_Cloth() {
  men = document.getElementById("Mens_clothes");
  womens = document.getElementById("Womens_clothes");
  kids = document.getElementById("Kids_clothes");

  men.style.display = "none";
  womens.style.display = "block";
  kids.style.display = "none";
}

function Kids_Cloth() {
  men = document.getElementById("Mens_clothes");
  womens = document.getElementById("Womens_clothes");
  kids = document.getElementById("Kids_clothes");

  kids.style.display = "block";
  men.style.display = "none";
  womens.style.display = "none";
}

// <!-- ...................... slider close button....................... -->

function slider_cls_btn() {
  // cls_btn = document.getElementById("slider_close_btn")
  Feture_product_1 = document.getElementById("Feture_Product_1_slider");

  Feture_product_1.style.display = "none";
}

function slider_open_btn() {
  // cls_btn = document.getElementById("slider_close_btn")
  Feture_product_1 = document.getElementById("Feture_Product_1_slider");

  Feture_product_1.style.display = "flex";
}

// <!-- ......................... Product image on mouse change in slider ................. -->

function Slider_Product_1_img_1() {
  sp_1 = document.getElementById("P_1");
  sp_1.src = "https://m.media-amazon.com/images/I/71aQwPEBQXL._AC_SY879_.jpg";
}
function Slider_Product_1_img_2() {
  sp_1 = document.getElementById("P_1");
  sp_1.src = "https://m.media-amazon.com/images/I/81IwjwnrlrL._AC_SY879_.jpg";
}
function Slider_Product_1_img_3() {
  sp_1 = document.getElementById("P_1");
  sp_1.src = "https://m.media-amazon.com/images/I/71R0j-LpxgL._AC_SY879_.jpg";
}
function Slider_Product_1_img_4() {
  sp_1 = document.getElementById("P_1");
  sp_1.src = "https://m.media-amazon.com/images/I/81S4gqc3x8L._AC_SY879_.jpg";
}
function Slider_Product_1_img_5() {
  sp_1 = document.getElementById("P_1");
  sp_1.src = "https://m.media-amazon.com/images/I/71hhUBx14ZL._AC_SY879_.jpg";
}
