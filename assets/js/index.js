function isInputString(evt) {
    const char = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(char))) {

    } else {
        evt.preventDefault();
    }
}

const formInput = document.getElementById('inputCallMask');
putMask(formInput);

function putMask(el) {
    if(el) {
        const phoneMask = IMask(el, {
            mask: '+{998} 00 000-00-00',
            lazy: false,
            placeholderChar: 'X'
        });
    }
}

// slider for mobile code start
const sliderTabBtns = document.querySelectorAll('.slider-tab-btn');
const sliderWrappers = document.querySelectorAll('.mobile-slider');
if(sliderTabBtns) {
    sliderTabBtns.forEach(function(btn) {
        btn.addEventListener('click', e => {
            sliderWrappers.forEach(function(wrapper) {
                if(e.target.id == wrapper.dataset.target) {
                    wrapper.classList.add('active');
                } else {
                    wrapper.classList.remove('active')
                }
            })
        })
    })
}
// slider for mobile code end

window.onload = function() {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
};