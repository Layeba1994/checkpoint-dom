

function  checknumber(){
 
   let price = document.getElementById('PRICE').innerText.split(' ')[0]
        console.log(price)
    let qty = document.getElementById('QUANTITY').value
       console.log(qty) 
    let subt=price*qty;
   document.getElementById('TOTAL').innerText= subt + "fr" 


const prix= document.getElementById('PRIX1').innerText.split(' ')[0]
console.log(prix)
const quantite =document.getElementById('QTY').value
  console.log(quantite)
let subtotal=prix*quantite
document.getElementById('TOTALE').innerText=subtotal + "fr"


const prx= document.getElementById('PRIX2').innerText.split(' ')[0]
console.log(prx)
const qte =document.getElementById('QTY1').value
  console.log(quantite)
let subtotale=prx*qte
document.getElementById('TLE').innerText=subtotale + "fr"

TOTALX()
}

function TOTALX() {

   let price = document.getElementById('PRICE').innerText.split(' ')[0]
        console.log(price)
    let qty = document.getElementById('QUANTITY').value
       console.log(qty) 
    let subt=price*qty;
  document.getElementById('TOTAL').innerText= subt + "fr" 


const prix= document.getElementById('PRIX1').innerText.split(' ')[0]
console.log(prix)
const quantite =document.getElementById('QTY').value
  console.log(quantite)
let subtotal=prix*quantite
document.getElementById('TOTALE').innerText=subtotal + "fr"


const prx= document.getElementById('PRIX2').innerText.split(' ')[0]
console.log(prx)
const qte =document.getElementById('QTY1').value
  console.log(quantite)
let subtotale=prx*qte
document.getElementById('TLE').innerText=subtotale + "fr"
let totaux  =subtotal  + subt + subtotale

document.getElementById('TOTALXXX').innerText=totaux + "fr"

}
function remove(toto){
   toto.parentElement.parentElement.remove()

}
let btnvar1 = document.getElementById('btnh1')

function like(btnvar1){
   if (btnvar1.style.ccolor =="red"){
      btnvar1.style.color ="grey"
   }
   else{
      btnvar1.style.color ="red"
   }

}
