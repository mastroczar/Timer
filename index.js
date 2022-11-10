const clock = document.querySelector('.counter')
const btnStart = document.querySelector('.start')
const btnPause = document.querySelector('.pause')
const btnRestart = document.querySelector('.restart')
let sec = 0
let timer

const createTime = (seconds) => {
    const newData = new Date(seconds * 1000)
    return newData.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const startClock = () => {
    timer = setInterval(() => {
    sec++
    clock.innerHTML = createTime(sec)
    }, 1000)
}

btnStart.addEventListener('click', () => {
    clearInterval(timer)
    startClock()
    clock.classList.remove('pausado')
})

btnPause.addEventListener('click', () => {
    clearInterval(timer)
    clock.classList.add('pausado')
})

btnRestart.addEventListener('click', () => {
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
    sec = 0 
    clock.classList.remove('pausado')
})