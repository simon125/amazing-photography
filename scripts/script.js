function smoothScroll(htmlElement, duration) {
    let target = document.querySelector(htmlElement)
    let targetPosition = target.getBoundingClientRect().top
    let startPosition = window.pageYOffset
    let distance = targetPosition - startPosition
    let startTime = null

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        let timeElapsed = currentTime - startTime
        let run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    const ease = (t, b, c, d) => {
        t /= d / 2
        if (t < 2) return c / 2 * t * t + b
        t--
        return (-c) / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
}



const button = document.querySelector('.btn')
button.addEventListener('click', ()=>{
    smoothScroll('.scrool-point', 900)
})