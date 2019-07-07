$(function () {

    var controller = new ScrollMagic.Controller(),
        $heroText = $('.hero__text'),
        $paperCanvas = $('.paper__canvas'),
        $hero = $('.hero');
    //     blur = new TimelineMax();

    // blur.to($heroText, 1, {
    //         // filter: "blur(5px)",
    //         opacity: 0
    //     })
    //     .to($paperCanvas, 1, {
    //         // filter: "blur(5px)",
    //     }, '-=1');

    var blur = TweenLite.to($hero, 1, {
        // opacity: 0
        // x: '100%'
        rotate: '360'
    });

    var scene = new ScrollMagic.Scene({
            triggerElement: ".scroll-section",
            triggerHook: .9,
            duration: "50%"
        })
        .addIndicators({
            name: "blur"
        })
        .setTween(blur)
        .addTo(controller);
});