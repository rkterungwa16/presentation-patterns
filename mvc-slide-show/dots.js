
/**
 * state: current dot
 * component view (span with a click event)
 */
define(function(require, exports, module) {
    const { currentSlide } = require("./slides");
    exports.createDots = function () {
        const parentDot = document.getElementById('dot');
        for (let dot = 0; dot < 3; ++dot) {
            const childElement = document.createElement('span');
            const appendChildElement = parentDot.appendChild(childElement);
            appendChildElement.className = "dot";
            appendChildElement.id= `dot-${dot}`;
            appendChildElement.addEventListener('click', (event) => {
                currentSlide(dot + 1)
            })
        }
    }
});