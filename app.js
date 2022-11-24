import {Selector} from "./assets/js/class/Selector.js";
import {Dom} from "./assets/js/class/Dom.js";
import {displayImg, getSavedImage} from "./assets/js/fetch.js";
import {observer} from "./assets/js/observer.js";
import {liked} from "./assets/js/liked.js";

const like = document.querySelector('.lists')
const next = document.querySelector('.next');
const overlay = document.querySelector('.overlay')
const item = document.querySelector('.liked')
const saved = new Selector('.saved');
const parent = new Selector('section');

window.addEventListener('DOMContentLoaded', () => {
    liked('click', saved, overlay, item)
    let call = 0;
    const display = () => {
        call++;
        displayImg(call, parent.getSelect(), like);
    }

    observer(next, display);

    getSavedImage().forEach((item) => {
        const all = new Dom(
            'img',
            {
                src: item,
                class: 'rounded-md cursor-pointer',
            },
            like,
            {
                type: 'click',
                callback: (e) => {
                    window.location.href = e.target.src;
                }
            }
        )
        all.create();
    });

});



