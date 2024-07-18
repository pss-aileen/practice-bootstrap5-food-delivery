import "./../scss/style.scss";
import * as bootstrap from "bootstrap";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// ヒーローエリアの高さを過ぎたら、navの背景色を変える
// ヒーローエリアの高さを取得
// スクロールの高さを取得、一定の範囲を超えたらイベント発火、クラスをつける
// 一定の範囲を戻ったら、クラスを外す
// ナビを開いた時に背景色を変える

const menuDom = document.querySelectorAll("#menu li a");
console.log(menuDom);

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight

const promotionDom = document.getElementById("promotion");
console.log(promotionDom.offsetTop);
const foodCategoryDom = document.getElementById("food-category");
console.log(foodCategoryDom.offsetTop);

document.addEventListener("scroll", (event) => {
  const position = window.scrollY;
  console.log(position);

  if (position > promotionDom.offsetTop && position < promotionDom.offsetTop + promotionDom.offsetHeight) {
    menuDom[1].classList.add("active");
    console.log("he");
  } else {
    menuDom[1].classList.remove("active");
    console.log("のおお");
  }
});
