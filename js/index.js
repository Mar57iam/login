var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputPass = document.getElementById('inputPass');
var myBtn = document.getElementById('myBtn')
var signBtn = document.getElementById('signBtn')
var notValid = document.querySelector('.notValid');
var valid = document.querySelector('.valid');
var exists  = document.getElementById('exists');
let email = document.getElementById('email')
let password = document.getElementById('pass')
let incorrect = document.getElementById('incorrect')
let required = document.getElementById('required')
let home = document.getElementById('home')

var loginList =[]
function signUp(){
      if (inputName.classList.contains('is-valid')&&
        inputEmail.classList.contains('is-valid')){
            var login = {
                inputname:inputName.value,
                 email:inputEmail.value,
                 pass:inputPass.value
             }
             
             var isExists = false;
             for( var i = 0 ; i < loginList.length ; i++){
         
                 if (loginList[i].email == login.email){
                     isExists=true
         }
         
             }
         
             
             if(isExists){
                 exists.classList.remove('d-none')
                 valid.classList.add('d-none')
                 notValid.classList.add('d-none')
             }
             else{
                 loginList.push(login)
                 localStorage.setItem('memory' , JSON.stringify(loginList))
                 
             }
         
            clear()
      } else {
        
        incorrect.classList.remove('d-none')
        valid.classList.add('d-none')
        notValid.classList.add('d-none')
      }

   

}

 function signupClick(){
    

    if(  inputName.value.length  == 0 || inputEmail.value.length  == 0 || inputPass.value.length ==0 ){
        notValid.classList.remove('d-none');
        valid.classList.add('d-none');
        exists.classList.add('d-none');
    }
    else{
        valid.classList.remove('d-none');
        notValid.classList.add('d-none');
        exists.classList.add('d-none');
        signUp()
    }
}

function clear(){
    inputName.value = null;
    inputEmail.value = null;
    inputPass.value = null;
}


function signIn(){
    
    var value = JSON.parse(localStorage.getItem('memory')) 
    var mariam = {
        em :email.value,
        pas:  password.value
    }
    
    for(  var i =0  ; i < value.length    ; i++ ){
        value[i].email
        if ( value[i].email == mariam.em && value[i].pass == mariam.pas ){
            // exists.classList.remove('d-none');
            window.location = './home.html' ;
        }else{
            incorrect.classList.remove('d-none')
        }
    }
}


function logOut(){
    console.log('hello');
    
    window.location = './index.html' ;
}

function validateInputs(ele){

var regex ={
    inputName:/^[a-zA-Z]{3,}$/,
    inputEmail: /^[a-z0-9_]{3,10}@(yahoo|gmail)\.(com|net)$/ ,
    // inputPass : / ^[0-9]{6,}$/

}
if(regex[ele.id].test(ele.value) == true ){

ele.classList.add('is-valid')
ele.classList.remove('is-invalid')

} else{
    ele.classList.add('is-invalid')
ele.classList.remove('is-valid')

}
}


