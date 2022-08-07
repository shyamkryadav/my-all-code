let btn = document.getElementById('profilelogobtn')
let hide = document.getElementById('hide')
btn.addEventListener('click',()=>{
    if(document.getElementById('hide').style.display=='block'){
        document.getElementById('hide').style.display='none'
    }
    else{
        document.getElementById('hide').style.display='block'
    }
})

let manu = document.getElementById("meanu")
manu.addEventListener('click',()=>{  
     if(document.getElementById('ul').style.left=='-100%'){
    document.getElementById('ul').style.left='0%'
    document.getElementById('ul').style.transition='all 0.5s'
}
else{
    document.getElementById('ul').style.left='-100%'
}
})