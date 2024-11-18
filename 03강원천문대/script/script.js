$(".open-modal").click(function () {
    $(".modal").show();
})

$(".close-modal").click(function () {
    $(".modal").hide();
})


$(".btn-gal").click(function () {
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("backgroundColor", "#5f1c25");
    $(".btn-notice").css("backgroundColor", "#cccccc");
})

$(".btn-notice").click(function () {
    $(".notice").show();
    $(".gal").hide();

    $(".btn-gal").css("backgroundColor", "#cccccc");
    $(".btn-notice").css("backgroundColor", "#5f1c25");
})


$(".gnb>li").mouseover(function () {
    $(this).children(".sub").stop().slideDown();
})

$(".gnb>li").mouseleave(function () {
    $(".sub").stop().slideUp();
})