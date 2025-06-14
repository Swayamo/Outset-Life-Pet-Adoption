
function click2() {
    var element = document.getElementById("change"); 
        element.innerHTML = "Booked";
        alert("Your session is booked.");
        element.style.backgroundColor = "green";
        
}

function click3(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}
function click4(){
    var element = document.getElementById('bb1');
    element.style.backgroundColor ="rgb(239, 237, 237)";
    var element2 = document.getElementById('bb2');
    element2.style.backgroundColor ="white";
    
}
function click5(){
    var element = document.getElementById('bb2');
    element.style.backgroundColor ="rgb(239, 237, 237)";
    var element = document.getElementById('bb1');
    element.style.backgroundColor ="white";
}
function click6(){
    var element = document.getElementById('bb3');
    element.style.backgroundColor ="rgb(239, 237, 237)";
    var element2 = document.getElementById('bb4');
    element2.style.backgroundColor ="white";
    var element3 =document.getElementById('mt1p5');
    element3.innerHTML ="&#8377;299/walk";
    var element3 =document.getElementById('mt1p2');
    element3.innerHTML ="&#8377;149";
    
}
function click7(){
    var element = document.getElementById('bb4');
    element.style.backgroundColor ="rgb(239, 237, 237)";
    var element2 = document.getElementById('bb3');
    element2.style.backgroundColor ="white";
    var element3 =document.getElementById('mt1p5');
    element3.innerHTML ="&#8377;499/walk";
    var element3 =document.getElementById('mt1p2');
    element3.innerHTML ="&#8377;199";
}
function click8() {
    var element = document.getElementById("change8"); 
        element.innerHTML = "Booked";
        alert("Your session is booked.");
        element.style.backgroundColor = "green";
}

function mo(){
   var p= document.getElementById('phone').value;
   let ct=0;
   while(p){
    if(p%10>=0 && p%10<10){
        ct++;
    }
    p=p/10;
   }
   if(ct==10)return 1;
   else return 0;

}
function click9(){
    var name =document.getElementById('inp11');
    var address =document.getElementById('inp12');
    var state =document.getElementById('inp13');
    var city =document.getElementById('inp14');
    var details =document.getElementById('inp15');
    var email =document.getElementById('inp16');
    var date =document.getElementById('inp17');
    var phone =document.getElementById('phone');
    
    if((name.value===''|| phone.value ===''|| date.value===''|| details.value===''|| email.value===''|| address.value===''|| state.value===''|| city.value==='')&& mo());
    else{
        alert("Your details were Submitted.");
    }
}
function click10(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}


function click11() {
    var element = document.getElementById("breed1"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click111() {
    var element = document.getElementById("breed11"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click12() {
    var element = document.getElementById("breed2"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click121() {
    var element = document.getElementById("breed21"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click13() {
    var element = document.getElementById("breed3"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click131() {
    var element = document.getElementById("breed31"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click14() {
    var element = document.getElementById("breed4"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click141() {
    var element = document.getElementById("breed41"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click15() {
    var element = document.getElementById("breed5"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click151() {
    var element = document.getElementById("breed51"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click16() {
    var element = document.getElementById("breed6"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click161() {
    var element = document.getElementById("breed61"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click17() {
    var elements = document.getElementsByClassName("brdd1");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Select";
        elements[i].style.backgroundColor ="#e66c08";
    }
}
function click18(){
    alert("Selected pets will be delivered to your address.");
}
function click19() {
    var element = document.getElementById("breed7"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}
function click20() {
    var element = document.getElementById("breed8"); 
        element.innerHTML = "Selected";
        element.style.backgroundColor = "green";
}

   