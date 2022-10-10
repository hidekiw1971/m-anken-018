jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".drawerMenu").click(function () {
    $(".drawerMenu").toggleClass("js-drawerMenu");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // swiper
  // swiper main
  const mySwiper_main = new Swiper(".swiper_main", {
    loop: true,
    loopedSlides: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // swiper thumbs
  const mySwiper_thumb = new Swiper(".swiper_thumb", {
    loop: true,
    loopedSlides: 8,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 8,
        spaceBetween: 8,
      },
    },
  });
  // controller
  mySwiper_main.controller.control = mySwiper_thumb;
  mySwiper_thumb.controller.control = mySwiper_main;

  // /swiper
});
