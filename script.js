const toggleBtn = document.getElementById(`toggle-btn`);
const detail = document.getElementById(`detail`);

toggleBtn.addEventListener(`click`, () => {
  detail.classList.toggle(`hidden`);
});

const menuBtn = document.querySelector(`.menu-btn`);
const menu = document.querySelector(`.menu`);

// メニューが開いているかどうか
let isMenuOpen = false;

// メニューを開く
function openMenu() {
  menu.classList.remove("hidden");
  isMenuOpen = true;
};

// メニューを閉じる
function closeMenu () {
  menu.classList.add("hidden");
  isMenuOpen = false;
};

// ボタンクリックで開閉
menuBtn.addEventListener(`click`, (e) => {
  // 外クリック判定に引っかからないようにする
  e.stopPropagation();

  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// メニューを外クリックで閉じる
document.addEventListener(`click`, (e) =>{
  if(!isMenuOpen) return;

  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMenu();
  }
});

// ESCキーで閉じる
document.addEventListener("keydown", (e) => {
  if(!isMenuOpen) return;

  if(e.key === "Escape") {
    closeMenu();
  }
});

const buttons = document.querySelectorAll(`.faq-btn`);

buttons.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    // 今開いているものを全部閉じる
    document.querySelectorAll(`.faq-answer`).forEach((answer) => {
      answer.classList.add(`hidden`);
    });

    const answer = btn.nextElementSibling;
    answer.classList.toggle(`hidden`);
  });
});

// メニュー内リンクを押したら閉じる
menu.addEventListener("click", (e) =>{
  if (!isMenuOpen) return;
  if(e.target.tagName !== "A") return;

  closeMenu();
});