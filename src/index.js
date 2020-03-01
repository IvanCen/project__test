import "./page/style.css";

$(".tab_content").hide();
$(".tab_content:first").show();

$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    let activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
    if($(".tab[rel^='tab1']").hasClass("active")){
        $(".accordion_item-sub").removeClass("accordion_item-sub_hover");
        $(".sub1").addClass("accordion_item-sub_hover");
    }
    if($(".tab[rel^='tab2']").hasClass("active")){
        $(".accordion_item-sub").removeClass("accordion_item-sub_hover");
        $(".sub2").addClass("accordion_item-sub_hover");
    }
    if($(".tab[rel^='tab3']").hasClass("active")){
        $(".accordion_item-sub").removeClass("accordion_item-sub_hover");
        $(".sub3").addClass("accordion_item-sub_hover");
    }
});
$(".sub1").on('click', function() {
    $(".tab_content").hide();
    $("ul.tabs li").removeClass("active");
    $(".accordion_item-sub").removeClass("accordion_item-sub_hover");
    $(".tab[rel^='tab1']").addClass('active');
    $(".tab_content:eq(0)").show();
    $(this).addClass('accordion_item-sub_hover');
});
$(".sub2").on('click', function() {
    $(".tab_content").hide();
    $("ul.tabs li").removeClass("active");
    $(".accordion_item-sub").removeClass("accordion_item-sub_hover");
    $(".tab[rel^='tab2']").addClass('active');
    $(".tab_content:eq(1)").show();
    $(this).addClass('accordion_item-sub_hover');
});
$(".sub3").on('click', function() {
    $(".tab_content").hide();
    $("ul.tabs li").removeClass("active");
    $(".accordion_item-sub").removeClass("accordion_item-sub_hover");
    $(".tab[rel^='tab3']").addClass('active');
    $(".tab_content:eq(2)").show();
    $(this).addClass('accordion_item-sub_hover');
});

$(".tab_accordion").click(function () {
    $(".tab_content").hide();
    let d_activeTab = $(this).attr("rel");
    if (!$(this).hasClass('d_active')) {
        $("#" + d_activeTab).fadeIn();
        $(this).addClass("d_active");
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    } else {
        $(".tab_content").hide();
        $(".tab_accordion").removeClass("d_active");
    }
});