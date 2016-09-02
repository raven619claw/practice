var f=0;
var a=0;
var p=0;
var id="";
function main () {
  //console.log("inside main");
  
  //console.log(addressbutton);
 if(f<100) 
{   
   appearbutton();
}
    }

function appearbutton()
{
  var addressbutton=$(".add-button").length;

  if(parseInt(addressbutton)==1)
  {
    //console.log(observer);
    observer.disconnect();
    // console.log(f);
  }
  // console.log("f="+f);
//input type text
    var pin1 = $('input:text').filter(function() {return this.name.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).length;
    var pin2 = $('input:text').filter(function() {return this.id.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).length;
    var pin3 = $('input:text').filter(function() {return this.value.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).length;
    var pin4 = $('input:text').filter(function() {return this.name.match(/([P,p][I,i][N,n])/);}).length;
    var pin5 = $('input:text').filter(function() {return this.id.match(/([P,p][I,i][N,n])/);}).length;
    var pin6 = $('input:text').filter(function() {return this.value.match(/([P,p][I,i][N,n])/);}).length;
    var pin7 = $('input:text').filter(function() {return this.name.match(/([Z,z][I,i][P,p])/);}).length;
    var pin8 = $('input:text').filter(function() {return this.id.match(/([Z,z][I,i][P,p])/);}).length;
    var pin9 = $('input:text').filter(function() {return this.value.match(/([Z,z][I,i][P,p])/);}).length;
    var pin10= $('input:text').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).length;
    var pin11= $('input:text').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).length;
    var pin12= $('input:text').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).length;
    var pin13= $('input:text').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).length;
    var pin14= $('input:text').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).length;
    var pin15= $('input:text').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).length;
//input type tel
    var pin1a = $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).length;
    var pin2a = $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).length;
    var pin3a = $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).length;
    var pin4a = $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][I,i][N,n])/);}).length;
    var pin5a = $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][I,i][N,n])/);}).length;
    var pin6a = $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][I,i][N,n])/);}).length;
    var pin7a = $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([Z,z][I,i][P,p])/);}).length;
    var pin8a = $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([Z,z][I,i][P,p])/);}).length;
    var pin9a = $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([Z,z][I,i][P,p])/);}).length;
    var pin10a= $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).length;
    var pin11a= $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).length;
    var pin12a= $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).length;
    var pin13a= $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).length;
    var pin14a= $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).length;
    var pin15a= $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).length;
//sites using angular
    //var pinangular=$("input[ng-model*='pin']").length();


//console.log(pin1a+""+pin2a+""+pin4a+""+pin5a+""+pin7a+""+pin8a+""+pin8a);
//console.log(pin11a);
  var state1=$('input:text').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);}).length;
    var state2=$('input:text').filter(function() {return this.id.match(/([C,c][I,i][T,t][Y,y])/);}).length;
    var state3=$('input:text').filter(function() {return this.value.match(/([C,c][I,i][T,t][Y,y])/);}).length;

var city1=$('input:text').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);});
var city2=$('input:text').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);});
var city3=$('input:text').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);});

//console.log(city1.is(":visible"));
//console.log(city2.is(":visible"));
//console.log(city3.is(":visible"));

//visible
var add1v=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).is(":visible");
var add2v=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).is(":visible");
var add3v=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).is(":visible");
var add4v=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).is(":visible");
var add5v=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).is(":visible");
var add6v=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).is(":visible");
var add7v=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).is(":visible");
var add8v=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).is(":visible");
var add9v=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).is(":visible");
var add10v=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).is(":visible");
var add11v=$('textarea').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).is(":visible");
var add12v=$('textarea').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).is(":visible");
var add13v=$('textarea').filter(function() {return this.name.match(/([L,l][I,i][N,n][E,e])/);}).is(":visible");
var add14v=$('textarea').filter(function() {return this.id.match(/([L,l][I,i][N,n][E,e])/);}).is(":visible");

//console.log(add1v);
//console.log(add2v);
//console.log(add3v);
//console.log(add4v);
//console.log(add5v);
//console.log(add6v);
//console.log(add7v);
//console.log(add8v);
//console.log(add9v);
//console.log(add10v);
//console.log(add11v);
//console.log(add12v);
//console.log(add13v);
//console.log(add14v);
if(add1v==true||add2v==true||add3v==true||add4v==true||add5v==true||add6v==true||add7v==true||add8v==true||add9v==true||add10v==true||add11v==true||add12v==true||add13v==true||add14v==true)
{
  var toshow=1;
 
}


//


var add1=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).length;
var add2=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).length;
var add3=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).length;
var add4=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).length;
var add5=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).length;
var add6=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).length;
var add7=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).length;
var add8=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).length;
var add9=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).length;
var add10=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).length;
var add11=$('textarea').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).length;
var add12=$('textarea').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).length;
var add13=$('textarea').filter(function() {return this.name.match(/([L,l][I,i][N,n][E,e])/);}).length;
var add14=$('textarea').filter(function() {return this.id.match(/([L,l][I,i][N,n][E,e])/);}).length;

var element= $('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);});
//console.log(element[0]);
//function isVisible( elem ) { return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length ); }; 

//isVisible(element[1]);


    var total=state1+state2+state3+add1+add2+add3+add4+add5+add6+add7+add8+add9+add10+add12+add13+add14;
//console.log(total);
//console.log(state1+""+state2+""+state3+""+add1+""+add2+""+add3+""+add4+""+add5+""+add6+""+add7+""+add8+""+add9+""+add10+""+add12+""+add13+""+add14);
    if((pin1>0||pin2>0||pin4>0||pin5>0||pin7>0||pin8>0||pin10>0||pin11>0||pin13>0||pin14>0||pin1a>0||pin2a>0||pin4a>0||pin5a>0||pin7a>0||pin8a>0||pin10a>0||pin11a>0||pin13a>0||pin14a>0)&&total>0&& toshow==1)
    
    {
      //console.log("bhuwan");
      //console.log(pin1+""+pin2+""+pin4+""+pin5+""+pin7+""+pin8+""+pin8);
 
//if(state1>0||state2>0)
{


  var add_logo=returnResource("address.png");
 //$('body').append('<div class="add-button"><img src="'+add_logo+'"></div>');
 if(document.getElementById('hatke--address')==null)
 {
 $('body').append("<div class='hkExt-address hkE-animated hkE-bounceInUp' id='hatke--address'><div class='hkE-addr__main'><svg class='hkE-addr__icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.7 17.8'><g fill='none' stroke='#fff' stroke-width='1.39' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'><path d='M.7 6.9v-.5C.7 3.3 3.2.7 6.4.7S12 3.2 12 6.4v.5M6.4 17.1S.7 11.8.7 6.4M6.4 17.1s5.7-5.3 5.7-10.7'/><circle cx='6.4' cy='6.9' r='2.2'/></g></svg>Autofill <div class='hkE-addr__arrow'>&#9660;</div></div><div class='hkE-addr__options'><ul class='hkE-addr__optList'><li class='hkE-addr__optLi'><a target='_blank' href='chrome-extension://jaehkpjddfdgiiefcnhahapilbejohhj/options.html#address' class='hkE-addr__optLi--link'>+ Add New Address</a></li></ul>");
}
chrome.runtime.sendMessage({method: "getLocalStorage",key:"addressarray"}, function(response) {

if(response.data!=undefined)
{
var addressarray=JSON.parse(response.data);
//console.log(addressarray.address.length);
var addresses=addressarray.address;

for(var i=0;i<addressarray.address.length;i++)
{
  var id =addresses[i].type;
  //console.log(id);
  //console.log(document.getElementById(id));
  if(document.getElementById(id)==null)
  {
$('.hkE-addr__optList').append('<li class="hkE-addr__optLi hkE-addr__optLi--selectable" id ="'+addresses[i].type+'">'+addresses[i].type+'<div class="hkE-addr__expanded"><div class="hkE-addr__expAdd">'+addresses[i].fullname+'<br>'+addresses[i].address1+'<br>'+addresses[i].address2+'<br>'+addresses[i].landmark+'<br>'+addresses[i].city+'-'+addresses[i].pincode+'<br>'+addresses[i].state+'<br>'+'Ph:'+addresses[i].mobilenumber+'</div><div class="hkE-add__expBtnsWrap"><div class="hkE-addr__expBtns hkE-addr__expBtns--apply applybutton" id="'+addresses[i].type+'">Apply</div><div class="hkE-addr__expBtns hkE-addr__expBtns--red">Remove</div></div></div></li>');

}
}

if(p<1)
{
$(".applybutton").click(function()
{

var id =this.id;
//console.log(this.id);
//console.log(addresses.length);
for(var i=0;i<addresses.length;i++)
{

//console.log(addresses[i]);  
  if (addresses[i].type==id)
  {

    var fullname1=addresses[i].fullname;
    var mobile1=addresses[i].mobilenumber;
    var landmark1=addresses[i].landmark;
    var pincode1=addresses[i].pincode;
    var address1z=addresses[i].address1;
    var address2z=addresses[i].address2;
    var addressz=address1z+"\n"+address2z;
    var cityz=addresses[i].city;
    var statez=addresses[i].state;
    //console.log(mobile1);
    autofill(fullname1,mobile1,landmark1,pincode1,address1z,address2z,addressz,cityz,statez);
  }
}
});
p++;
}
//console.log(addressarray);
}
});


/*

  $('.add-button').click(function(){
autofill();
 });
*/

}
    }

f++;
}    



function autofill(fullname1,mobile1,landmark1,pincode1,address1z,address2z,addressz,cityz,statez)
{

//console.log(mobile1);
//Address Auto Fill

var address1a=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).length;
var address1b=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).length;
var addressline1a=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).length;
var addressline1b=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).length;
var addressline2a=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).length;
var addressline2b=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).length;
var address2a=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).length;
var address2b=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).length;
var addressa=$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).length;
var addressb=$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).length;


//console.log("Address1a--"+address1a);
//console.log("Address1b--"+address1b);
//console.log("AddressLine1a--"+addressline1a);
//console.log("AddressLine1b--"+addressline1b);
//console.log("AddressLine2a--"+addressline2a);
//console.log("AddressLine2b--"+addressline2b);
//console.log("Address2a--"+address2a);
//console.log("Address2b--"+address2b);
//console.log("addressa--"+addressa);
//console.log("Adressab--"+addressb);

if((address1a>0||addressline1a>0)&&(address1b>0||addressline1b>0))
{
  chrome.runtime.sendMessage({method: "getLocalStorage",key:"address1"}, function(response) {
  var address1 = address1z;
  

    $( document ).ready(function() {
$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address1).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][1])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address1).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address1).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][1])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address1).css("background-color", "#cce6ff").focus();

});
  
   
});


chrome.runtime.sendMessage({method: "getLocalStorage",key:"address2"}, function(response) {
  var address2= address2z;
 
 
    $( document ).ready(function() {
$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address2).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][L,l][I,i][N,n][E,e][2])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address2).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address2).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s][2])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address2).css("background-color", "#cce6ff").focus();




});
  
   
});

}
else
{
 
 chrome.runtime.sendMessage({method: "getLocalStorage",key:"address"}, function(response) {
  var address=addressz;
  //console.log(address);
 
 
    $( document ).ready(function() {
$('input:text').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address).css("background-color", "#cce6ff").focus();
$('input:text').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address).css("background-color", "#cce6ff").focus();
$('textarea').filter(function() {return this.name.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address).css("background-color", "#cce6ff").focus();
$('textarea').filter(function() {return this.id.match(/([A,a][D,d][D,d][R,r][E,e][S,s][S,s])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address).css("background-color", "#cce6ff").focus();
$('textarea').filter(function() {return this.name.match(/([L,l][I,i][N,n][E,e])/);}).filter(function(){return this.name.match(/^((?!city)[\s\S])*$/)}).val(address).css("background-color", "#cce6ff").focus();
$('textarea').filter(function() {return this.id.match(/([L,l][I,i][N,n][E,e])/);}).filter(function(){return this.id.match(/^((?!city)[\s\S])*$/)}).val(address).css("background-color", "#cce6ff").focus();


});
  
   
});

}
  
//Landmark  Auto Fill
 chrome.runtime.sendMessage({method: "getLocalStorage",key:"landmark"}, function(response) {
  var landmark = landmark1;
  
$( document ).ready(function() {
    $('input:text').filter(function() {return this.name.match(/([L,l][A,a][N,n][D,d][M,m][A,a][R,r][K,k])/);}).val(landmark).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([L,l][A,a][N,n][D,d][M,m][A,a][R,r][K,k])/);}).val(landmark).css("background-color", "#cce6ff").focus();
   
});
 
});

//Pincode Auto Fill
chrome.runtime.sendMessage({method: "getLocalStorage",key:"pincode"}, function(response) {
  var pincode = pincode1;
//
{

    $('input:text').filter(function() {return this.name.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([P,p][I,i][N,n])/);}).filter(function(){return this.name.match(/^((?!hipping)[\s\S])*$/)}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([P,p][I,i][N,n])/);}).filter(function(){return this.id.match(/^((?!hipping)[\s\S])*$/)}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([P,p][I,i][N,n])/);}).filter(function(){return this.value.match(/^((?!hipping)[\s\S])*$/)}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([Z,z][I,i][P,p])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([Z,z][I,i][P,p])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([Z,z][I,i][P,p])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    //input type tel
}

{
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][I,i][N,n][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][I,i][N,n])/);}).filter(function(){return this.name.match(/^((?!hipping)[\s\S])*$/)}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][I,i][N,n])/);}).filter(function(){return this.id.match(/^((?!hipping)[\s\S])*$/)}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][I,i][N,n])/);}).filter(function(){return this.value.match(/^((?!hipping)[\s\S])*$/)}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([Z,z][I,i][P,p])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([Z,z][I,i][P,p])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([Z,z][I,i][P,p])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][C,c][O,o][D,d][E,e])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).val(pincode).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][O,o][S,s][T,t][A,a][L,l])/);}).val(pincode).css("background-color", "#cce6ff").focus();
   


}
//
   var s = document.createElement('script');
   var pincodez =document.createElement("div");
   pincodez.id="bhtk-pincode";
  pincodez.innerText= pincode;
   s.id="bhuwan";
 //  console.log(pincode);
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('address_script.js');
s.onload = function(pincode) {
    //this.remove();
   // console.log(pincode);
};
(document.head || document.documentElement).appendChild(s);
(document.head || document.documentElement).appendChild(pincodez);


   
});
//Name Auto Fill

  

 chrome.runtime.sendMessage({method: "getLocalStorage",key:"fullname"}, function(response) {
  var fullname   = fullname1;
  
$( document ).ready(function() {
   
   $('input:text').filter(function() {return this.name.match(/([N,n][A,a][M,m][E,e])/);}).filter(function() {return !this.name.match(/([C,c][I,i][T,t][Y,y])/);}).val(fullname).css("background-color", "#cce6ff").focus();
   $('input:text').filter(function() {return this.id.match(/([N,n][A,a][M,m][E,e])/);}).filter(function() {return !this.name.match(/([C,c][I,i][T,t][Y,y])/);}).val(fullname).css("background-color", "#cce6ff").focus();
    

   });
 
});
//Mobile Auto Fill
  chrome.runtime.sendMessage({method: "getLocalStorage",key:"mobilenumber"}, function(response) {
  var mobile = mobile1;
  
$( document ).ready(function() {
    $('input:text').filter(function() {return this.name.match(/([N,n][U,u][M,m][B,b][E,e][R,r])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([N,n][U,u][M,m][B,b][E,e][R,r])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([N,n][U,u][M,m][B,b][E,e][R,r])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([M,m][O,o][B,b][I,i][L,l][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([M,m][O,o][B,b][I,i][L,l][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([M,m][O,o][B,b][I,i][L,l][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([P,p][H,h][O,o][N,n][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([P,p][H,h][O,o][N,n][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([P,p][H,h][O,o][N,n][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([C,c][O,o][N,n][T,t][A,a][C,c][T,t])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([C,c][O,o][N,n][T,t][A,a][C,c][T,t])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([C,c][O,o][N,n][T,t][A,a][C,c][T,t])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.name.match(/([M,m][O,o][B,b][N,n][O,o])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([M,m][O,o][B,b][N,n][O,o])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([M,m][O,o][B,b][N,n][O,o])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    
    //input type tel
     $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([N,n][U,u][M,m][B,b][E,e][R,r])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([N,n][U,u][M,m][B,b][E,e][R,r])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([N,n][U,u][M,m][B,b][E,e][R,r])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([M,m][O,o][B,b][I,i][L,l][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([M,m][O,o][B,b][I,i][L,l][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([M,m][O,o][B,b][I,i][L,l][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([P,p][H,h][O,o][N,n][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([P,p][H,h][O,o][N,n][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([P,p][H,h][O,o][N,n][E,e])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([C,c][O,o][N,n][T,t][A,a][C,c][T,t])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([C,c][O,o][N,n][T,t][A,a][C,c][T,t])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([C,c][O,o][N,n][T,t][A,a][C,c][T,t])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.name.match(/([M,m][O,o][B,b][N,n][O,o])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.id.match(/([M,m][O,o][B,b][N,n][O,o])/);}).val(mobile).css("background-color", "#cce6ff").focus();
    $('input[type="tel"],input[type="number"]').filter(function() {return this.value.match(/([M,m][O,o][B,b][N,n][O,o])/);}).val(mobile).css("background-color", "#cce6ff").focus();
   
});
 
});


//Street Auto fill


chrome.runtime.sendMessage({method: "getLocalStorage",key:"address1"}, function(response) {
  var street = address1z;
  

    $( document ).ready(function() {
    $('input:text').filter(function() {return this.name.match(/([S,s][T,t][R,r][E,e][E,e][T,t])/);}).val(street).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([S,s][T,t][R,r][E,e][E,e][T,t])/);}).val(street).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([S,s][T,t][R,r][E,e][E,e][T,t])/);}).val(street).css("background-color", "#cce6ff").focus();
   


});
  
   
});

//Area Auto Fill
chrome.runtime.sendMessage({method: "getLocalStorage",key:"address2"}, function(response) {
  var area = address2z;
 
 
    $( document ).ready(function() {
    $('input:text').filter(function() {return this.name.match(/([A,a][R,r][E,e][A,a])/);}).val(area).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([A,a][R,r][E,e][A,a])/);}).val(area).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([A,a][R,r][E,e][A,a])/);}).val(area).css("background-color", "#cce6ff").focus();
   


});
  
   
});

/*
//Country Auto Fill
chrome.runtime.sendMessage({method: "getLocalStorage",key:"country"}, function(response) {
  var country0 = response.data;
   String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var country= country0.capitalize();
//console.log(country0);
var uppcountry=country0.toUpperCase();
//console.log(uppcountry);
   
        $( document ).ready(function() {
    var country1= $('select').filter(function() {return this.name.match(/([C,c][O,o][U,u][N,n][T,t][R,r][Y,y])/);}).attr('id');
    var country2= $('select').filter(function() {return this.id.match(/([C,c][O,o][U,u][N,n][T,t][R,r][Y,y])/);}).attr('id');
    var country3= $('select').filter(function() {return this.value.match(/([C,c][O,o][U,u][N,n][T,t][R,r][Y,y])/);}).attr('id');
    var country4= $('select').filter(function() {return this.name.match(/([C,c][O,o][U,u][N,n][T,t][R,r][I,i][E,e][S,s])/);}).attr('id');
    var country5= $('select').filter(function() {return this.id.match(/([C,c][O,o][U,u][N,n][T,t][R,r][I,i][E,e][S,s])/);}).attr('id');
    var country6= $('select').filter(function() {return this.value.match(/([C,c][O,o][U,u][N,n][T,t][R,r][I,i][E,e][S,s])/);}).attr('id');



//console.log(country1);
$("#"+country1+">"+"option").filter(function() { return $(this).text() == uppcountry; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country2+">"+"option").filter(function() { return $(this).text() == uppcountry; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country3+">"+"option").filter(function() { return $(this).text() == uppcountry; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country4+">"+"option").filter(function() { return $(this).text() == uppcountry; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country5+">"+"option").filter(function() { return $(this).text() == uppcountry; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country6+">"+"option").filter(function() { return $(this).text() == uppcountry; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();     
$("#"+country1+">"+"option").filter(function() { return $(this).text() == country; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country2+">"+"option").filter(function() { return $(this).text() == country; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country3+">"+"option").filter(function() { return $(this).text() == country; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country4+">"+"option").filter(function() { return $(this).text() == country; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country5+">"+"option").filter(function() { return $(this).text() == country; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+country6+">"+"option").filter(function() { return $(this).text() == country; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();

});

   
});
*/
//condition if the city and state does not get automatically filled
setTimeout(function(){
var c1=$('input:text').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);}).val();
var c2=$('input:text').filter(function() {return this.id.match(/([C,c][I,i][T,t][Y,y])/);}).val();
var c3=$('input:text').filter(function() {return this.value.match(/([C,c][I,i][T,t][Y,y])/);}).val();


//console.log(c1+""+c2+""+c3);
if(c1==""||c2==""||c3=="")
{
//console.log("bhuwan");  
//State Auto Fill
chrome.runtime.sendMessage({method: "getLocalStorage",key:"state"}, function(response) {
  var state0 = statez;
  //console.log(statez);
   String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var state=state0.capitalize();
//console.log(state);
  var uppstate=state0.toUpperCase();
 //console.log(uppstate);  
    
    $( document ).ready(function() {
    $('input:text').filter(function() {return this.name.match(/([S,s][T,t][A,a][T,t][E,e])/);}).val(state).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([S,s][T,t][A,a][T,t][E,e])/);}).val(state).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([S,s][T,t][A,a][T,t][E,e])/);}).val(state).css("background-color", "#cce6ff").focus();
   var state1=$('select').filter(function() {return this.name.match(/([S,s][T,t][A,a][T,t][E,e])/);}).attr('id');
   var state2=$('select').filter(function() {return this.id.match(/([S,s][T,t][A,a][T,t][E,e])/);}).attr('id');
   var state3=$('select').filter(function() {return this.value.match(/([S,s][T,t][A,a][T,t][E,e])/);}).attr('id');
 //console.log(state1);
 //console.log(state2);
 //console.log(state3);
    
$("#"+state1+">"+"option").filter(function() { return $(this).text() == uppstate; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state2+">"+"option").filter(function() { return $(this).text() == uppstate; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state3+">"+"option").filter(function() { return $(this).text() == uppstate; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state1+">"+"option").filter(function() { return $(this).text() == state; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state2+">"+"option").filter(function() { return $(this).text() == state; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state3+">"+"option").filter(function() { return $(this).text() == state; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state1+">"+"option").filter(function() { return $(this).text() == " "+uppstate; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state2+">"+"option").filter(function() { return $(this).text() == " "+uppstate; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state3+">"+"option").filter(function() { return $(this).text() == " "+uppstate; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state1+">"+"option").filter(function() { return $(this).text() == " "+state; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state2+">"+"option").filter(function() { return $(this).text() == " "+state; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();
$("#"+state3+">"+"option").filter(function() { return $(this).text() == " "+state; }).attr('selected', true).parent().css("background-color", "#cce6ff").focus();

   
  

});
 
   
});


//City Auto Fill
chrome.runtime.sendMessage({method: "getLocalStorage",key:"city"}, function(response) {
  var city0 = cityz;
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var city=city0.capitalize();
//console.log(city);
  var uppcity=city0.toUpperCase();
   
    
    $( document ).ready(function() {
    $('input:text').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);}).val(city).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.id.match(/([C,c][I,i][T,t][Y,y])/);}).val(city).css("background-color", "#cce6ff").focus();
    $('input:text').filter(function() {return this.value.match(/([C,c][I,i][T,t][Y,y])/);}).val(city).css("background-color", "#cce6ff").focus();
    var city1=$('select').filter(function() {return this.name.match(/([C,c][I,i][T,t][Y,y])/);}).attr('id');
   var city2=$('select').filter(function() {return this.id.match(/([C,c][I,i][T,t][Y,y])/);}).attr('id');
   var city3=$('select').filter(function() {return this.value.match(/([C,c][I,i][T,t][Y,y])/);}).attr('id');

    
    
$("#"+city1+">"+"option").filter(function() { return $(this).text() == uppcity; }).parent().attr('selected', true);
$("#"+city2+">"+"option").filter(function() { return $(this).text() == uppcity; }).parent().attr('selected', true);
$("#"+city3+">"+"option").filter(function() { return $(this).text() == uppcity; }).parent().attr('selected', true);
$("#"+city1+">"+"option").filter(function() { return $(this).text() == city; }).parent().attr('selected', true);
$("#"+city2+">"+"option").filter(function() { return $(this).text() == city; }).parent().attr('selected', true);
$("#"+city3+">"+"option").filter(function() { return $(this).text() == city; }).parent().attr('selected', true);


});
  
   
});

}
},2000);

}
var target=document.querySelector('body');
////console.log(target);

var observer = new WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
     // console.log("bhuwan");
     // //console.log("Success");
      main();
      
              //$('#log').text('input text changed: "' + target.text() + '"');
        ////console.log(mutation, mutation.type);
    });    
});
if(window.location.href.split('myntra.com').length >1){
  observer.observe(target, { attributes: true, childList: true, subtree:true});
}
else {
  observer.observe(target, { childList: true, subtree:true});
}
//console.log(observer);

/*
var insertedNodes = [];
var observer = new MutationObserver(function(mutations) {
 mutations.forEach(function(mutation) {
   for (var i = 0; i < mutation.addedNodes.length; i++)
     insertedNodes.push(mutation.addedNodes[i]);
   
 })
 //console.log(insertedNodes);
 //console.log("succ")
});
observer.observe(target, { childList: true });

*/








