﻿import ScrollMagic from "scrollmagic"
import Letterize from "letterizejs";
import anime from "animejs";

// Animations driven by scrollmagic
export class ScrollAnimations
{
    constructor() {
        // init controller
        const controller = new ScrollMagic.Controller();

        const serviceSceneParams = {
            triggerElement: "#services",
            triggerHook: 0.9, // show, when scrolled 10% into view
            // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        };

        new ScrollMagic.Scene(serviceSceneParams)
            .setClassToggle("#services .left-block", "animate__fadeInLeft") // left block
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene(serviceSceneParams)
            .setClassToggle("#services .middle-block", "animate__fadeIn") // add class to reveal
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene(serviceSceneParams)
            .setClassToggle("#services .right-block", "animate__fadeInRight") // add class to reveal
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        const aboutSceneParams = {
            triggerElement: "#about",
            triggerHook: 0.9, // show, when scrolled 10% into view
            // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        };

        new ScrollMagic.Scene(aboutSceneParams)
            .setClassToggle("#about .member-short", "animate__fadeInRight") // add class to reveal
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        const contactSceneParams = {
            triggerElement: "#contact",
            triggerHook: 0.9, // show, when scrolled 10% into view
            // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        };
        new ScrollMagic.Scene(contactSceneParams)
            .setClassToggle("#contact .contact-method", "animate__flipInX")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        // Scroll heading options
        const items = document.getElementsByClassName('heading-option');
        let index = 0;

        const entrance_effect = 'animate__fadeIn';
        const exit_effect = 'animate__fadeOut'

        setInterval(() => {
            items[(index) % (items.length)].classList.remove(entrance_effect);
            items[(index) % (items.length)].classList.add(exit_effect);
            items[(index) % (items.length)].classList.add('display-none');

            items[(index + 1) % (items.length)].classList.remove(exit_effect);
            items[(index + 1) % (items.length)].classList.remove('display-none');
            items[(index + 1) % (items.length)].classList.add(entrance_effect);

            index++;
            if (index >= items.length) {
                index = 0;
            }
        }, 2500);
    }
}

export class TextAnimation {
    // Also some fun with leterize
    constructor() {
        const funny_letters = new Letterize({
            targets: ".funny-letters"
        });

        funny_letters.listAll;
        for (let i = 0; i < funny_letters.listAll.length; i++) {
            funny_letters.listAll[i].addEventListener("mouseover", function(e) {
                anime({
                    targets: e.target,
                    duration: 100,
                    translateX: anime.random(-10,10),
                    translateY: anime.random(-10,10),
                    rotate: anime.random(-10,10),
                    opacity: 0.5
                });
            });

            funny_letters.listAll[i].addEventListener("mouseout", function(e) {
                anime({
                    targets: e.target,
                    duration: 3000,
                    opacity: 1
                });
            });
        }
    }

}
