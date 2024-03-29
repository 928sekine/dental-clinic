(window.onload = function () {
  // swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    // 自動再生
    delay: 2000, // 2秒後に次のスライド
  },
});
 });


// 診療科目クリックのモーダルの動き

// body
const body = document.body;
// ダイアログ要素
const modal = document.querySelector("dialog");
// ダイアログを開くボタン（水色の丸）
const dialogOpenButtons = document.querySelectorAll(".js-dialog-open");
// ダイアログを閉じるボタン（「閉じる」の四角いボタン）
const dialogCloseButtons = document.querySelectorAll(".js-dialog-close");
// 水色の丸が押されたら、ダイアログを開く、背景をスクロールさせない
dialogOpenButtons.forEach((button) => {
  const dialog = document.querySelector(button.dataset.dialog);
  button.addEventListener("click", () => {
    dialog.showModal();
    body.style.overflow = "hidden";
  });
});
// 閉じるボタンでダイアログを閉じる、背景をスクロールさせられるようにする
dialogCloseButtons.forEach((button) => {
  const dialog = button.closest("dialog");
  button.addEventListener("click", () => {
    dialog.close();
    body.style.overflow = "visible";
  });
});
// モーダルの外の黒い部分を押されたらダイアログを閉じる、背景をスクロールさせられるようにする
const modals = document.querySelectorAll(".top-menu-dialog");
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (!event.target.closest(".dialog_inner")) {
      modal.close();
      body.style.overflow = "visible";
    }
  });
});

// // エスケープキーを押されたら背景をスクロールさせられるようにする
modals.forEach((modal) => {
  modal.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      body.style.overflow = "visible";
    }
  });
});

// ハンバーガーメニューボタン
const hamburgerMenu = document.querySelectorAll(".hamberger");
// メニューのnav
const navMenu = document.querySelectorAll(".header-menu");
// メニューのアイテムひとつ
const topHeaderItem = document.querySelectorAll(".header-item");
hamburgerMenu.forEach(function (menu) {
  menu.addEventListener("click", function () {
    // クリックされたらネイビー背景のメニュー内容が表示されるように
    navMenu.forEach(function (nav) {
      nav.classList.toggle("active");
      // クリックされたらバツボタンが出るように
      menu.classList.toggle("active");
    });
  });
});
topHeaderItem.forEach(function (item) {
  item.addEventListener("click", function () {
    // メニューがクリックされたら閉じる
    console.log("liがクリックされた");
    navMenu.forEach(function (nav) {
      nav.classList.remove("active");
    });
    // ハンバーガーアイコンを元に戻す
    hamburgerMenu.forEach(function (menu) {
      menu.classList.remove("active");
    });
  });
});
// スムーズなスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute("href");
    let targetElement = document.getElementById(href.replace("#", ""));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 100;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}
