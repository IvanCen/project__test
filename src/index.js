import "./page/style.css";

// вкладки с содержанием
// http://dbmast.ru
$(".tab_content").hide();
$(".tab_content:first").show();
/* в режиме вкладок */
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
/* в режиме аккордеона */
$(".tab_accordion").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    if (!$(this).hasClass('d_active')) {
        $("#" + d_activeTab).fadeIn();
        $(this).addClass("d_active");
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    }else {
        $(".tab_content").hide();
        $(".tab_accordion").removeClass("d_active");
    }
});
/* дополнительный класс tab_last, 
чтобы добавить границу к правой 
стороне последней вкладки. */
$('ul.tabs li').last().addClass("tab_last");

let main = document.querySelector(".main");
let container = document.querySelector(".container");
let titleBlock = document.querySelectorAll(".title_block");
main.style.backgroundImage = `url('./src/images/main__pic.png')`;
(function () {
    for (let item of titleBlock) {
        item.addEventListener('click', () => {
            //container.style.backgroundImage = `url('./src/images/futures__pic.png')`;
            container.style.backgroundImage = ``;
            container.classList.toggle("container-background");
        });
    }
})();