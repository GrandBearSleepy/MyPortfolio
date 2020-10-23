$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY > 600) {
            $(".back-btn").show();
        }
        else {
            $(".back-btn").hide();
        }
    })

    //nav bar
    $(".mune-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".mune-btn i").toggleClass("active")
    })
})
