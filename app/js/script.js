const accordionBtn = document.querySelectorAll('.accordion__question');
const accordionContent = document.querySelectorAll('.accordion__collapse');

for(let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', () => {
        console.log('click!');
        accordionBtn[i].classList.toggle('open');

        if (accordionContent[i].style.maxHeight) {
            // if height is not 0, set height to null
            accordionContent[i].style.maxHeight = null;
        } else {
            // if height if 0, set height corresponding to content
            accordionContent[i].style.maxHeight = accordionContent[i].scrollHeight + "px";
        }
    });
}

