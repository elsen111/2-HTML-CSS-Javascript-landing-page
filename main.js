let topNav = document.getElementById('top-navbar');
let cover = document.getElementById('cover');



// Show top menu
const showNav = () => {
    topNav.style.transform = 'translateX(0)';
    cover.style.opacity = '0.7';
    document.body.style.overflowY = 'hidden';
    cover.style.transitionDuration = '2s';
}





// Activating scroll and hiding navbar
const activateScroll = () => {
    window.matchMedia("(max-width: 992px)").matches
        ? topNav.style.transform = 'translateX(400%)'
        : topNav.style.transform = 'translateX(0))'

    document.body.style.overflowY = 'auto';
    cover.style.opacity = '0';
    cover.style.transitionDuration = '0s';
}

cover.addEventListener('click', () => {
    activateScroll()
})









// Hiding to-top-button and resizing header
window.addEventListener('scroll', () => {
    let topBtn = document.querySelector('.to-top')
    let header = document.querySelector('header')
    let listItems = document.querySelectorAll('#top-navbar ul li')

    window.scrollY <= 300
        ? (
            topBtn.style.opacity = '0', 
            header.style.height = '8.3rem'         
        )
        : (
            topBtn.style.opacity = '0.5',
            header.style.height = '6.5rem'
        )
    
        for(let item of listItems) {
            window.matchMedia("(max-width: 992px)").matches
            ? null
            : item.style.height = '100%';
        }
})





// Head Slider
const handleSlide = (e) => {
    e.id === 'right-arrow'
        ? nextSlide()
        : prevSlide()
}


const nextSlide = () => {
    let slider = document.getElementById('intro-slider')
    let introSection = document.getElementById('intro')
    let sliderTemplate = `
        <div id="intro-slider" class="transition">
            <div id="slides-container" class="flex">
                <div id="slide1" class="bg-img" >
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <!-- <br> -->
                            Dolor iste assumenda unde, adipisci earum consectetur?
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>

                <div id="slide2" class="bg-img">
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Labtech strives to integrate professionals with
                            <br>
                            companies and organizations around the world
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>

                <div id="slide3" class="bg-img">
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <br>
                            Dolor iste assumenda unde, adipisci earum consectetur?
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>

                <div id="slide4" class="bg-img">
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <br>
                            Eos id, ipsam in possimus deleniti eligendi.
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    
    if(slider.style.left === '') {
        slider.style.left = '-100%'
    } else {
        let sliderLocation = slider.style.left.slice(0, slider.style.left.indexOf('%'));
        
        if(sliderLocation === '-300') {
            slider.remove()
            introSection.insertAdjacentHTML('beforeend', sliderTemplate);
            let newSlider = document.getElementById('intro-slider');
            console.log(newSlider)
        } else {
            newSliderLocation = `${sliderLocation - 100}%`,
            slider.style.left = newSliderLocation
        }
    }
}


const prevSlide = () => {
    let slider = document.getElementById('intro-slider');
    let introSection = document.getElementById('intro')
    let sliderTemplate = `
        <div id="intro-slider" class="transition">
            <div id="slides-container" class="flex">
                <div id="slide1" class="bg-img" >
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <!-- <br> -->
                            Dolor iste assumenda unde, adipisci earum consectetur?
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>

                <div id="slide2" class="bg-img">
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Labtech strives to integrate professionals with
                            <br>
                            companies and organizations around the world
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>

                <div id="slide3" class="bg-img">
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <br>
                            Dolor iste assumenda unde, adipisci earum consectetur?
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>

                <div id="slide4" class="bg-img">
                    <div class="slide container flex flex-column">
                        <h1 class="text-uppercase fw-700 text-white">
                            advances of science
                            <br>
                            make easier life
                        </h1>

                        <p class="para text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <br>
                            Eos id, ipsam in possimus deleniti eligendi.
                        </p>

                        <div>
                            <a href="#" class="flex btn-border link text-white text-capitalize fs-16 fw-600 transition"> read more </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    let sliderLocation = slider.style.left.slice(0, slider.style.left.indexOf('%'));
        
    if(sliderLocation === ''  ||  sliderLocation === '0') {
        slider.remove()
        introSection.insertAdjacentHTML('beforeend', sliderTemplate);

        let newSlider = document.getElementById('intro-slider');

        newSlider.style.left = '-300%'
        console.log(newSlider)
    } else {
        newSliderLocation = `${Number(sliderLocation) + 100}%`,
        slider.style.left = newSliderLocation
    }
}