
var allproducts=document.querySelectorAll(".list li")
var content=document.querySelector("#content")
var btn =document.querySelector("#addTocart")
var totalprice=0;
allproducts.forEach(function(item){
  item.onclick=function(){
    totalprice +=parseInt(item.getAttribute("price"))
    content.innerHTML += item.textContent+" ";
 
  if (content.innerHTML != ""){
    btn.style.display="block"
  }
}
})
btn.onclick=function(){
  document.getElementById("result").innerHTML=totalprice
}
