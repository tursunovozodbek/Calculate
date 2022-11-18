let res = document.getElementById('textin')

function calc(num){
    res.value+=num
    console.log(res.value)
}

function equal(){
    res.value=eval(res.value)

}
function clr(){
    res.value=""

}

function del(){
    res.value = res.value.slice(0,-1)

}