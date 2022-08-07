let div = document.getElementById('dv')
let span = document.getElementById('span')
let btn = document.getElementById('btn')
let body = document.getElementById('body')
let showbtn = document.getElementById("show")
// styling dv

// #dv{
//     margin-top: 25vh;
//     height: 50vh;
//     width: 50vw;
//     background: lightgreen;
// }
showbtn.addEventListener('click', () => {


    div.style.marginTop = '25vh'
    div.style.height = '50vh'
    div.style.width = '50vw'
    div.style.backgroundColor = 'lightgreen'
    // styling body
    body.style.display = 'flex'
    body.style.alignContent = 'center'
    body.style.justifyContent = 'center'
    // styling btn

    btn.style.height = '50px'
    btn.innerText = 'Button'
    btn.style.width = "100px"
    btn.style.backgroundColor = 'lightgreen'
    btn.style.border = 'none'
    btn.style.borderRadius = '5px'
    btn.style.fontSize = '20px'
    btn.style.position = 'absolute'
    btn.style.left = '10vw'
    btn.addEventListener("mouseenter", () => {

        btn.style.backgroundColor = 'lightblue'
        btn.style.borderRadius = '0px'
        btn.style.transition = 'all 0.5s'
        btn.style.cursor = 'pointer'
        btn.style.color = 'blue'
        btn.style.height = '60px'
        btn.style.width = "110px"
    })
    btn.addEventListener("mouseout", () => {
        btn.style.color = 'black'

        btn.style.backgroundColor = 'lightgreen'
        btn.style.borderRadius = '5px'
        btn.style.transition = 'all 1s'
        btn.style.cursor = 'pointer'
        btn.style.height = '50px'
        btn.style.width = "100px"
    })
})