
var h2=document.getElementById("ere");
var h3=document.getElementById("er");
var counter=1;
var rubl=document.getElementById('rubl');

function plus(el){
    h3.innerHTML=1500;
    h2.innerHTML=800;
      counter++;

    if(counter>=1){
     h2.innerHTML=h2.innerHTML*counter;
     h3.innerHTML=h3.innerHTML*counter;
  el.innerHTML=counter;
  h2.style.fontSize=26;
  h2.style.marginLeft=14;
  rubl.style.fontSize=26;
  rubl.style.left=69;
  if (counter>=13) {
      h2.style.fontSize=23;
      h2.style.marginLeft=7; 
      rubl.style.fontSize=23;
      rubl.style.left=69;
     } 
  }
}
 function minus(el){
    if(counter>=2){
         counter --;
         h2.innerHTML=h2.innerHTML-800;
         h3.innerHTML=h3.innerHTML-1500;
         el.innerHTML=counter;
         if(counter<13){
            h2.style.fontSize=26;
            h2.style.marginLeft=14;
            rubl.style.fontSize=26;
            if (counter==1) {
                rubl.style.left=61;
            }

         }
     }
 }
 var main=document.getElementById("mainphoto");
 var girl=document.getElementById("girl");
 var girlback=document.getElementById("girlback");
 var boy=document.getElementById("boy");
 var itemfront=document.getElementById("itemfront");
 var itemback=document.getElementById("itemback");
 girl.addEventListener('click',function () {
   girl.style.opacity=1;
   boy.style.opacity=0.6;
   girlback.style.opacity=0.6;
   itemfront.style.opacity=0.6;
   itemback.style.opacity=0.6;
   main.src="img\girl.png";
   console.log("10")
 })
 boy.addEventListener('click',function () {
  girl.style.opacity=0.6;
  boy.style.opacity=1;
  girlback.style.opacity=0.6;
  itemfront.style.opacity=0.6;
  itemback.style.opacity=0.6;
   main.src="img\main.png";
   console.log("10")
 })
 girlback.addEventListener('click',function () {
  girl.style.opacity=0.6;
  boy.style.opacity=0.6;
  girlback.style.opacity=1;
  itemfront.style.opacity=0.6;
  itemback.style.opacity=0.6;
   main.src="img\girlback.png";
   console.log("10")
 })
 itemfront.addEventListener('click',function () {
  girl.style.opacity=0.6;
  boy.style.opacity=0.6;
  girlback.style.opacity=0.6;
  itemfront.style.opacity=1;
  itemback.style.opacity=0.6;
   main.src="img\itemfront.png";
   console.log("10")
 })
 itemback.addEventListener('click',function () {
  girl.style.opacity=0.6;
  boy.style.opacity=0.6;
  girlback.style.opacity=0.6;
  itemfront.style.opacity=0.6;
  itemback.style.opacity=1;
   main.src="img\itemback.png";
   console.log("10")
 })

var backgroundtoygirl=document.getElementById("id1");
function go1(){
  backgroundtoygirl.style.opacity=1;
  console.log("1")
}
function mouseleave1(){
  backgroundtoygirl.style.opacity=0;
}

var backgroundgirl2=document.getElementById("id2");
function go2(){
  backgroundgirl2.style.opacity=1;
  console.log("1")
}
function mouseleave2(){
  backgroundgirl2.style.opacity=0;
}

var backgroundbear=document.getElementById("id3");
function go3(){
  backgroundbear.style.opacity=1;
  console.log("1")
}
function mouseleave3(){
  backgroundbear.style.opacity=0;
}

var backgroundlilboy=document.getElementById("id4");
function go4(){
  backgroundlilboy.style.opacity=1;
  console.log("1")
}
function mouseleave4(){
  backgroundlilboy.style.opacity=0;
}

var backgroundboy1=document.getElementById("id5");
function go5(){
  backgroundboy1.style.opacity=1;
  console.log("1")
}
function mouseleave5(){
  backgroundboy1.style.opacity=0;
}
var itemname=document.getElementById("right111")
function additem(){
  document.getElementById("youadded1").style.zIndex = 2;
  document.getElementById("youadded1").style.opacity = 1;
  document.getElementById("textinbox").style.top=28;
  document.getElementById("apparebox").style.height=200;
document.getElementById("textinbox").innerHTML="Товар-"+itemname.innerHTML+" добавлен в корзину<span class='textinboxbr'> количество:"+counter+"</span>";
}
function closeaddbox(){
  document.getElementById("youadded1").style.zIndex = -1;
  document.getElementById("youadded1").style.opacity = 0;
}
function addfavorite(){
  document.getElementById("youadded1").style.zIndex = 2;
  document.getElementById("youadded1").style.opacity = 1;
  document.getElementById("textinbox").style.left=16;
  document.getElementById("textinbox").style.top=25;
  document.getElementById("apparebox").style.height=141;
document.getElementById("textinbox").innerHTML="Товар-"+itemname.innerHTML+" добавлен в избранное";
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
  alert("Вы подписались")

return true;
}
else
{
alert("Вы ввели неверний адрес электронной почты");

return false;
}
}
function remove(){
  document.getElementById("inputText").value="";
}

function menuclick(){
  document.getElementById("menuclick").style.display = "flex";
  document.getElementById("menuclick").style.zIndex = 10;
  document.getElementById("header").style.display = "none";
}

function menubuttonclick(){
  document.getElementById("menuclick").style.display = "none";
  document.getElementById("menuclick").style.zIndex = 0;
  document.getElementById("header").style.display = "block";
}