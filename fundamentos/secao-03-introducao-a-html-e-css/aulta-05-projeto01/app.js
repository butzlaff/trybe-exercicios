function changeColor(divId){
    console.log(localStorage.getItem('cor'))
    document.getElementById(divId.id).style.backgroundColor = localStorage.getItem('cor')
}

function getColor(color){
//    localStorage.removeItem(color.id)
    localStorage.setItem('cor', `${color.id}`)
}
