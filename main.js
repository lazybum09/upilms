// window.onload = function () {
//     setTimeout(() => { document.getElementById('my-audio').play() }, 1000)
//     document.getElementById('my-audio').play();
// }

// let btn = document.getElementById('btn')
// let audio = document.getElementById('my-audio')
// btn.addEventListener('click', () => {
//     audio.play()
// })let paradiv = document.getElementById('para-div')

// let allbtn = document.getElementById('allbtn')
let rectangle = document.getElementById('rectangle')
let right = document.getElementById('right')
let wrong = document.getElementById('wrong')
let head = document.getElementById('header')

window.onload = function () {

    window.setTimeout(() => {
        document.getElementById('rectangle').style.display = 'block'
    }, 3000)
    window.setTimeout(() => {
        document.getElementById('para-div').style.display = 'block'
    }, 4000)
    window.setTimeout(() => {
        document.getElementById('right').style.display = 'block'
    }, 20000)
    window.setTimeout(() => {
        document.getElementById('wrong').style.display = 'block'
    }, 21000)
    window.setTimeout(() => {
        document.getElementById('header').style.display = 'block'
    }, 1000)





}





var btnend = document.querySelector('.button_next')
var btnback = document.querySelector('.back-btn')

let showimg = document.getElementById('ans1')
let myimg = document.getElementById('right-img')
let mypara = document.getElementById('my-para')
var ans1 = document.getElementById('ans1')
var ans2 = document.getElementById('ans2')
// var gif = document.getElementById('gif')
var audio = document.getElementById('audio-1')


showimg.addEventListener('click', () => {
    myimg.classList.toggle('visible')
    mypara.classList.toggle('para-vis')
    // gif.classList.toggle('gifvis')
    // ans2.style.pointerEvents = 'none'
    ans2.style.pointerEvents = 'none'
    // btnend.classList.add('btn-end-animation')
    // btnend.classList.remove('dis')
    btnback.classList.remove('back-btn')
    btnback.classList.add('back-btn')
    function able() {
        btnback.style.opacity = '1';
        btnback.style.pointerEvents = 'initial'
    }
    able()
    audio.pause()


    // myimg.style.display = 'block'
    // mypara.style.display = 'block'
})



let showimgWrong = document.getElementById('ans2')
let myimgWrong = document.getElementById('wrong-img')
let myparawrong = document.getElementById('my-para-wrong')
var wrongaudio = document.getElementById('wrong-audio')

showimgWrong.addEventListener('click', () => {
    myimgWrong.classList.toggle('vis')
    myparawrong.classList.toggle('para-viss')
    ans1.style.pointerEvents = 'none'
    // btnend.classList.add('btn-end-animation')
    // btnend.classList.remove('dis')
    btnback.classList.remove('back-btn')
    btnback.classList.add('back-btn')
    function able() {
        btnback.style.opacity = '1';
        btnback.style.pointerEvents = 'initial'
    }
    able()
    audio.pause()
    function abc() {
        ans1.addEventListener('click', () => {
            myparawrong.style.display = 'none'
        })

    } abc()

    function clickrightbutton() {
        showimg.addEventListener('click', () => {
            wrongaudio.pause()
        })
    }
    clickrightbutton()

})
