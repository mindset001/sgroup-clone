function showDashboard(){
    document.getElementById("dashboard").style.display = 'block'
}
function closeDashboard(){
    document.getElementById("dashboard").style.display = 'none'
}
function showDashboardM(){
    document.getElementById("mobile-dash").style.display = 'block'
}
function closeDashboardM(){
    document.getElementById("mobile-dash").style.display = 'none'
}

function showProfile(){
    document.getElementById("profile").style.display = "block"
}
function closeProfile(){
    document.getElementById("profile").style.display = "none"
}

function editProfile(){
    document.getElementById("pageSix").style.display='block'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="none";   
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="none";
    document.getElementById('page7').style.display="none";
}
function showCareer(){
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="none";   
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="none";
    document.getElementById('page7').style.display="block";
}


function showNotifyM(){ 
    document.getElementById("mobilenotify").style.display = "block"
}
function closeNotifyM(){ 
    document.getElementById("mobilenotify").style.display = "none"
}



// Get references to sidebar buttons and content pages
function showInvest(){
    document.getElementById('page3').style.display="block";
    document.getElementById('page1').style.display="none"; 
    document.getElementById('mobile-dash').style.display="none";
    document.getElementById('dashboard').style.display="none"  
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="none";
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page7').style.display="none";
}

function showEstate(){
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="none"; 
    document.getElementById('mobile-dash').style.display="none";
    document.getElementById('dashboard').style.display="none"; 
    document.getElementById('page4').style.display="block";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="none";
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page7').style.display="none";
}

function showMainDash(){
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="flex";
    document.getElementById('mobile-dash').style.display="none";
    document.getElementById('dashboard').style.display="none"
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="none";
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page7').style.display="none";
}
function showFinace(){
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="none";
    document.getElementById('mobile-dash').style.display="none";
    document.getElementById('dashboard').style.display="none"
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="block";
    document.getElementById('page8').style.display="none";
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page7').style.display="none";
}
function showTrans(){
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="none";
    document.getElementById('mobile-dash').style.display="none";
    document.getElementById('dashboard').style.display="none"
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="block";
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page7').style.display="none";
}
function showCareer(){
    document.getElementById('page3').style.display="none";
    document.getElementById('page1').style.display="none";
    document.getElementById('mobile-dash').style.display="none";
    document.getElementById('dashboard').style.display="none"
    document.getElementById('page4').style.display="none";
    document.getElementById('page5').style.display="none";
    document.getElementById('page8').style.display="none";
    document.getElementById("pageSix").style.display='none'
    document.getElementById("profile").style.display = "none"
    document.getElementById('page7').style.display="block";
}

function showComm(){
    document.getElementById('comm').style.display="block"
}
function release(){
    document.getElementById('comm').style.display="none"
}



var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function Pro(){
    document.getElementById('forexPro').style.display="flex"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="block"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('warn').style.display="flex"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('dyna').style.display="block"
    document.getElementById('invest').style.display="block"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('pharm').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('mobil-invest').style.display="none"
    // document.getElementById('more-mobil').style.display="none";
    
}
function Optimal(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('forexOptimal').style.display="flex"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('optimalIncome').style.display="block"
    document.getElementById('warn').style.display="none"
    document.getElementById('dyna').style.display="block"
    document.getElementById('invest').style.display="block"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('pharm').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('mobil-invest').style.display="none"
    
}
function fore(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('fore').style.display="flex"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="block"
    document.getElementById('warn').style.display="none"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('dyna').style.display="block"
    document.getElementById('invest').style.display="block"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('pharm').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('mobil-invest').style.display="block"
    
    
}
function prime(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('warn').style.display="none"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('forexPrime').style.display="flex"
    document.getElementById('primeIncome').style.display="block"
    document.getElementById('dyna').style.display="block"
    document.getElementById('invest').style.display="block"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('pharm').style.display="none"
    document.getElementById('mobil-invest').style.display="none"
    
}
function pharm(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('warn').style.display="none"
    document.getElementById('warn2').style.display="flex"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('pharm').style.display="flex"
    document.getElementById('dyna').style.display="none"
    document.getElementById('invest').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('investment').style.display='flex'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('mobil-invest').style.display="none"
    
}
function ipo(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('warn').style.display="none"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="flex"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('pharm').style.display="none"
    document.getElementById('ipo').style.display="flex"
    document.getElementById('dyna').style.display="none"
    document.getElementById('invest').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='flex'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('mobil-invest').style.display="none"

    
}
function liquid(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('warn').style.display="none"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="flex"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('pharm').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="flex"
    document.getElementById('dyna').style.display="none"
    document.getElementById('invest').style.display="none"
    document.getElementById('crypto').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='flex'
    document.getElementById('balcrypto').style.display='none'
    document.getElementById('crptotrans').style.display='none'
    document.getElementById('mobil-invest').style.display="none"
    
    
}
function crypto(){
    document.getElementById('forexPro').style.display="none"
    document.getElementById('fore').style.display="none"
    document.getElementById('forexProIncome').style.display="none"
    document.getElementById('foreIncome').style.display="none"
    document.getElementById('warn').style.display="none"
    document.getElementById('warn2').style.display="none"
    document.getElementById('warn3').style.display="none"
    document.getElementById('warn4').style.display="none"
    document.getElementById('forexOptimal').style.display="none"
    document.getElementById('optimalIncome').style.display="none"
    document.getElementById('forexPrime').style.display="none"
    document.getElementById('primeIncome').style.display="none"
    document.getElementById('pharm').style.display="none"
    document.getElementById('ipo').style.display="none"
    document.getElementById('liquid').style.display="none"
    document.getElementById('crypto').style.display="flex"
    document.getElementById('dyna').style.display="none"
    document.getElementById('invest').style.display="none"
    document.getElementById('investment').style.display='none'
    document.getElementById('management').style.display='none'
    document.getElementById('balliquid').style.display='none'
    document.getElementById('balcrypto').style.display='flex'
    document.getElementById('crptotrans').style.display='block'
    document.getElementById('mobil-invest').style.display="none"
    
}


function Una(){
    document.getElementById('una').style.display="flex"
}
function Runa(){
    document.getElementById('una').style.display="none"
}
function Una2(){
    document.getElementById('una2').style.display="flex"
}
function Runa2(){
    document.getElementById('una2').style.display="none"
}
function Una3(){
    document.getElementById('una3').style.display="flex"
}
function Runa3(){
    document.getElementById('una3').style.display="none"
}
function UnaF(){
    document.getElementById('una4').style.display="flex"
}
function RunaF(){
    document.getElementById('una4').style.display="none"
}


function plan(){
    document.getElementById('plan').style.display="flex"
}
function Rplan(){
    document.getElementById('plan').style.display="none"
}
function plan2(){
    document.getElementById('plan2').style.display="flex"
}
function Rplan2(){
    document.getElementById('plan2').style.display="none"
}
function plan3(){
    document.getElementById('plan3').style.display="flex"
}
function Rplan3(){
    document.getElementById('plan3').style.display="none"
}
function planF(){
    document.getElementById('plan4').style.display="flex"
}
function RplanF(){
    document.getElementById('plan4').style.display="none"
}
function plan5(){
    document.getElementById('plan5').style.display="flex"
}
function Rplan5(){
    document.getElementById('plan5').style.display="none"
}
function plan6(){
    document.getElementById('plan6').style.display="flex"
}
function Rplan6(){
    document.getElementById('plan6').style.display="none"
}
function plan7(){
    document.getElementById('plan7').style.display="flex"
}
function Rplan7(){
    document.getElementById('plan7').style.display="none"
}


function plann(){
    document.getElementById('plann').style.display="flex"
}
function Rplann(){
    document.getElementById('plann').style.display="none"
}
function plann2(){
    document.getElementById('plann2').style.display="flex"
}
function Rplann2(){
    document.getElementById('plann2').style.display="none"
}
function plann3(){
    document.getElementById('plann3').style.display="flex"
}
function Rplann3(){
    document.getElementById('plann3').style.display="none"
}
function plannF(){
    document.getElementById('plann4').style.display="flex"
}
function RplannF(){
    document.getElementById('plann4').style.display="none"
}
function plann5(){
    document.getElementById('plann5').style.display="flex"
}
function Rplann5(){
    document.getElementById('plann5').style.display="none"
}
function plann6(){
    document.getElementById('plann6').style.display="flex"
}
function Rplann6(){
    document.getElementById('plann6').style.display="none"
}n
function plann(){
    document.etElementById('plann7').style.display="flex"
}
function Rplann7(){
    document.getElementById('plann7').style.display="none"
}



function moreMobil(){
    document.getElementById('more-mobil').style.display="block";
    document.getElementById('less-mobil').style.display="none"
}
function lessMobil(){
    document.getElementById('more-mobil').style.display="none";
    document.getElementById('less-mobil').style.display="block"
}

function moreMobil2(){
    document.getElementById('less-mobil2').style.display="none"
    document.getElementById('more-mobil2').style.display="block";
    
}
function lessMobil2(){
    document.getElementById('more-mobil2').style.display="none";
    document.getElementById('less-mobil2').style.display="block"
}


function moreMobil3(){
    document.getElementById('less-mobil3').style.display="none"
    document.getElementById('more-mobil3').style.display="block";
    
}
function lessMobil3(){
    document.getElementById('more-mobil3').style.display="none";
    document.getElementById('less-mobil3').style.display="block"
}

function moreMobil4(){
    document.getElementById('less-mobil4').style.display="none"
    document.getElementById('more-mobil4').style.display="block";
    
}
function lessMobil4(){
    document.getElementById('more-mobil4').style.display="none";
    document.getElementById('less-mobil4').style.display="block"
}

function moreMobil5(){
    document.getElementById('less-mobil5').style.display="none"
    document.getElementById('more-mobil5').style.display="block";
    
}
function lessMobil5(){
    document.getElementById('more-mobil5').style.display="none";
    document.getElementById('less-mobil5').style.display="block"
}

function moreMobil6(){
    document.getElementById('less-mobil6').style.display="none"
    document.getElementById('more-mobil6').style.display="block";
    
}
function lessMobil6(){
    document.getElementById('more-mobil6').style.display="none";
    document.getElementById('less-mobil6').style.display="block"
}

function moreMobil7(){
    document.getElementById('less-mobil7').style.display="none"
    document.getElementById('more-mobil7').style.display="block";
    
}
function lessMobil7(){
    document.getElementById('more-mobil7').style.display="none";
    document.getElementById('less-mobil7').style.display="block"
}

function moreMobil8(){
    document.getElementById('less-mobil8').style.display="none"
    document.getElementById('more-mobil8').style.display="block";
    
}
function lessMobil8(){
    document.getElementById('more-mobil8').style.display="none";
    document.getElementById('less-mobil8').style.display="block"
}


function Disp() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("tlearn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "To learn more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide"; 
      moreText.style.display = "inline";
    }
  }

//   real estate 

function moreMobile(){
    document.getElementById('more-mobile').style.display="block";
    document.getElementById('less-mobile').style.display="none"
}
function lessMobile(){
    document.getElementById('more-mobile').style.display="none";
    document.getElementById('less-mobile').style.display="block"
}



// Finaance 

function withdraw(){
    document.getElementById('withdraw').style.display="block"
    document.getElementById('reple').style.display="none"
}

function reple(){
    document.getElementById('withdraw').style.display="none"
    document.getElementById('reple').style.display="block"
}

function fast(){
    document.getElementById('defr').style.display="none"
    document.getElementById('defrr').style.display="none"
    document.getElementById('fast').style.display="flex"
    document.getElementById('fastt').style.display="flex"
}
function defr(){
    document.getElementById('fast').style.display="none"
    document.getElementById('defr').style.display="flex"
    document.getElementById('fastt').style.display="none"
    document.getElementById('defrr').style.display="flex"
}


// profile 

// const toggPassword = document.querySelector('.toggPassword');
//   const password = document.getElementById('id_password');

//   toggPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    // const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    // password.setAttribute('type', type);
    // console.log( 'bbbbbb');
    // toggle the eye slash icon
    // this.classList.toggle('fa-eye-slash');
// });


function hideEye(){
    let eye = document.querySelector('input.idpassword')
    let icon = document.querySelector('i#anything')
    let currentType = eye.type
    if(currentType == 'password'){
        eye.type ='text'
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')

    }else{
        eye.type = 'password'
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
       
    }
    // console.log(icon);
}
function hideeEye(){
    let eyee = document.querySelector('input.iddpassword')
    let iconn = document.querySelector('i#anyything')
    let currenttType = eyee.type
    if(currenttType == 'password'){
        eyee.type ='text'
        iconn.classList.remove('fa-eye')
        iconn.classList.add('fa-eye-slash')

    }else{
        eyee.type = 'password'
        iconn.classList.remove('fa-eye-slash')
        iconn.classList.add('fa-eye')
       
    }
    // console.log(iconn);
}

function hideEyee(){
    let eyye = document.querySelector('input.idpasssword')
    let icoon = document.querySelector('i#anytthing')
    let currentTyype = eyye.type
    if(currentTyype == 'password'){
        eyye.type ='text'
        icoon.classList.remove('fa-eye')
        icoon.classList.add('fa-eye-slash')

    }else{
        eyye.type = 'password'
        icoon.classList.remove('fa-eye-slash')
        icoon.classList.add('fa-eye')
       
    }
    // console.log(icoon);
}


function passw(){
    document.getElementById('prof').style.display='none';
    document.getElementById('fa2').style.display='none';
    document.getElementById('passw').style.display='flex';
    document.getElementById('mark').style.display='none';
    document.getElementById('pword').style.display='flex';
    document.getElementById('markt').style.display='none';
    document.getElementById('notif').style.display='none';
    document.getElementById('file').style.display='none';
}
function prof(){
    document.getElementById('prof').style.display='flex';
    document.getElementById('fa2').style.display='none';
    document.getElementById('passw').style.display='none';
    document.getElementById('mark').style.display='none';
    document.getElementById('pword').style.display='none';
    document.getElementById('markt').style.display='none';
    document.getElementById('notif').style.display='none';
    document.getElementById('file').style.display='block';
}
function fact(){
    document.getElementById('prof').style.display='none';
    document.getElementById('fa2').style.display='flex';
    document.getElementById('passw').style.display='none';
    document.getElementById('mark').style.display='none';
    document.getElementById('pword').style.display='none';
    document.getElementById('markt').style.display='none';
    document.getElementById('notif').style.display='block';
    document.getElementById('file').style.display='none';
}
function mark(){
    document.getElementById('prof').style.display='none';
    document.getElementById('fa2').style.display='none';
    document.getElementById('passw').style.display='none';
    document.getElementById('mark').style.display='flex';
    document.getElementById('pword').style.display='none';
    document.getElementById('markt').style.display='block';
    document.getElementById('notif').style.display='none';
    document.getElementById('file').style.display='none';
}

// transaction history 

function person(){
    document.getElementById('person').style.display="block";
    document.getElementById('company').style.display="none";
    document.getElementById('sub').style.display="none";
    document.getElementById('person1').style.display="flex";
    document.getElementById('company1').style.display="none";
    document.getElementById('sub1').style.display="none";

}
function company(){
    document.getElementById('person').style.display="none";
    document.getElementById('company').style.display="block";
    document.getElementById('sub').style.display="none";
    document.getElementById('person1').style.display="none";
    document.getElementById('company1').style.display="flex";
    document.getElementById('sub1').style.display="none";

}
function sub(){
    document.getElementById('person').style.display="none";
    document.getElementById('company').style.display="none";
    document.getElementById('sub').style.display="block";
    document.getElementById('person1').style.display="none";
    document.getElementById('company1').style.display="none";
    document.getElementById('sub1').style.display="flex";

}

function table(){
    document.getElementById('table').style.display='block'
    document.getElementById('showt').style.display='none'
    document.getElementById('hidet').style.display='flex'
}
function hideTable(){
    document.getElementById('table').style.display='none'
    document.getElementById('showt').style.display='flex'
    document.getElementById('hidet').style.display='none'
}

// career 

function hideSub(){
    document.getElementById('subbb').style.display="block"
    document.getElementById('sub-hide').style.display="none"
}
function showSub(){
    document.getElementById('subbb').style.display="none"
    document.getElementById('sub-hide').style.display="block"
}

function levelOne(){
    document.querySelector(".lev-img").style.backgroundColor='#c0c2d3';
    document.querySelector(".level1").style.backgroundColor='#fff'
}
function levelROne(){
    document.querySelector(".lev-img").style.backgroundColor='#eaedf3';
    document.querySelector(".level1").style.backgroundColor='transparent'
}
function level2(){
    document.querySelector(".lev-down2").style.backgroundColor='#c0c2d3';
    document.querySelector(".level2").style.backgroundColor='#fff'
}
function levelR2(){
    document.querySelector(".lev-down2").style.backgroundColor='#eaedf3';
    document.querySelector(".level2").style.backgroundColor='transparent'
}
function level3(){
    document.querySelector(".lev-down3").style.backgroundColor='#c0c2d3';
    document.querySelector(".level3").style.backgroundColor='#fff'
}
function levelR3(){
    document.querySelector(".lev-down3").style.backgroundColor='#eaedf3';
    document.querySelector(".level3").style.backgroundColor='transparent'
}

function level4(){
    document.querySelector(".lev-down4").style.backgroundColor='#c0c2d3';
    document.querySelector(".level4").style.backgroundColor='#fff'
}
function levelR4(){
    document.querySelector(".lev-down4").style.backgroundColor='#eaedf3';
    document.querySelector(".level4").style.backgroundColor='transparent'
}
function level5(){
    document.querySelector(".lev-down5").style.backgroundColor='#c0c2d3';
    document.querySelector(".level5").style.backgroundColor='#fff'
}
function levelR5(){
    document.querySelector(".lev-down5").style.backgroundColor='#eaedf3';
    document.querySelector(".level5").style.backgroundColor='transparent'
}

function level6(){
    document.querySelector(".lev-down6").style.backgroundColor='#c0c2d3';
    document.querySelector(".level6").style.backgroundColor='#fff'
}
function levelR6(){
    document.querySelector(".lev-down6").style.backgroundColor='#eaedf3';
    document.querySelector(".level6").style.backgroundColor='transparent'
}
function level7(){
    document.querySelector(".lev-down7").style.backgroundColor='#c0c2d3';
    document.querySelector(".level7").style.backgroundColor='#fff'
}
function levelR7(){
    document.querySelector(".lev-down7").style.backgroundColor='#eaedf3';
    document.querySelector(".level7").style.backgroundColor='transparent'
}

function level8(){
    document.querySelector(".lev-down8").style.backgroundColor='#c0c2d3';
    document.querySelector(".level8").style.backgroundColor='#fff'
}
function levelR8(){
    document.querySelector(".lev-down8").style.backgroundColor='#eaedf3';
    document.querySelector(".level8").style.backgroundColor='transparent'
}
function level9(){
    document.querySelector(".lev-down9").style.backgroundColor='#c0c2d3';
    document.querySelector(".level9").style.backgroundColor='#fff'
}
function levelR9(){
    document.querySelector(".lev-down9").style.backgroundColor='#eaedf3';
    document.querySelector(".level9").style.backgroundColor='transparent'
}

function level10(){
    document.querySelector(".lev-down10").style.backgroundColor='#c0c2d3';
    document.querySelector(".level10").style.backgroundColor='#fff'
}
function levelR10(){
    document.querySelector(".lev-down10").style.backgroundColor='#eaedf3';
    document.querySelector(".level10").style.backgroundColor='transparent'
}
function level11(){
    document.querySelector(".lev-down11").style.backgroundColor='#c0c2d3';
    document.querySelector(".level11").style.backgroundColor='#fff'
}
function levelR11(){
    document.querySelector(".lev-down11").style.backgroundColor='#eaedf3';
    document.querySelector(".level11").style.backgroundColor='transparent'
}

function level12(){
    document.querySelector(".lev-down12").style.backgroundColor='#c0c2d3';
    document.querySelector(".level12").style.backgroundColor='#fff'
}
function levelR12(){
    document.querySelector(".lev-down12").style.backgroundColor='#eaedf3';
    document.querySelector(".level12").style.backgroundColor='transparent'
}
function level13(){
    document.querySelector(".lev-down13").style.backgroundColor='#c0c2d3';
    document.querySelector(".level13").style.backgroundColor='#fff'
}
function levelR13(){
    document.querySelector(".lev-down13").style.backgroundColor='#eaedf3';
    document.querySelector(".level13").style.backgroundColor='transparent'
}
function level14(){
    document.querySelector(".lev-down14").style.backgroundColor='#c0c2d3';
    document.querySelector(".level14").style.backgroundColor='#fff'
}
function levelR14(){
    document.querySelector(".lev-down14").style.backgroundColor='#eaedf3';
    document.querySelector(".level14").style.backgroundColor='transparent'
}
function level15(){
    // document.querySelector(".lev15").style.backgroundColor='#c0c2d3';
    document.querySelector(".level15").style.backgroundColor='#fff'
}
function levelR15(){
    // document.querySelector(".lev15").style.backgroundColor='#eaedf3';
    document.querySelector(".level15").style.backgroundColor='#eaedf3'
}