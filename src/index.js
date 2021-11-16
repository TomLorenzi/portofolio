import "./style.scss";

const scroll = new LocomotiveScroll();


const App = {};

App.init = function() {
    
};

const items = document.querySelectorAll('body');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add('in-view');
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //App.loadWeb3();
    App.init();
});

window.addEventListener('load', callbackFunc);
window.addEventListener('resize', callbackFunc);
window.addEventListener('scroll', callbackFunc);