
// анимација користећи jQuery у засебној датотеци
$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            "background-color": "rgb(255, 0, 0)",
            "background-color": "red",
            left: '250px',
            opacity: '1',
            height: '150px',
            width: '150px',
            // animate() method is only effective in the case of numerical properties!
            //backgroundColor: "blue"
        }, 1000)
        // So, this could be one solution:
        // css() method of jQuery is a form of basic CSS √
        //.css({backgroundColor: "red"})
        // or like this
        .css({"background-color": "blue"});

        // jQuery Animation Background Color | Delft Stack
        // https://www.delftstack.com/howto/jquery/jquery-animation-background-color/
    });
});