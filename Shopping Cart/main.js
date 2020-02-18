const cross = document.getElementsByClassName("crosslogo")
const heart = document.getElementsByClassName("heartlogo")
const plus = Array.from(document.getElementsByClassName("plusbutton"))
const minus = Array.from(document.getElementsByClassName("minusbutton"))
const quantity = Array.from(document.getElementsByClassName("quantitynumber"))
const itemprice = Array.from(document.getElementsByClassName("price"))
const carttotal = document.getElementById("totalcart")
const Cards=Array.from(document.getElementsByClassName("card"))
const  total=()=> {
    let sum=0
    for (let i = 0; i < plus.length; i++) {
    
sum+=quantity[i].innerHTML*itemprice[i].innerHTML
}
return sum

}
for (let i = 0; i < plus.length; i++) {
    let btn = plus[i]
    btn.addEventListener("click", function () {
        console.log('testtt',btn)
       
      
        btn.nextElementSibling.innerHTML = parseInt(btn.nextElementSibling.innerHTML)+1;
        carttotal.innerHTML=total()
    })}
for (let i = 0; i < minus.length; i++) {
    let btn = minus[i]
    
btn.addEventListener("click", function () {
    console.log('test',btn)

        if (btn.previousElementSibling.innerHTML > 0) {
            btn.previousElementSibling.innerHTML = parseInt(btn.previousElementSibling.innerHTML)-1
            carttotal.innerHTML=total()
        }})}
for (let i = 0; i < plus.length; i++){
cross[i].addEventListener("click",function(){
    quantity[i].innerHTML=0
    carttotal.innerHTML=total()
    Cards[i].style.display="none"

})}
for (let i = 0; i < plus.length; i++){
    heart[i].addEventListener("click", function () {
        heart[i].style.fill="red"   
    })}