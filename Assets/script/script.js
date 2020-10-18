$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
    })
    //nav bar
    $(".mune-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".mune-btn i").toggleClass("active")
    })
})
