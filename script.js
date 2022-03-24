var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


  //to validate the reset password
    
  function checkForm()
  { 
    var oldP=document.getElementById("oldP").value;
    var newP=document.getElementById("newP").value;
    var confirmP =document.getElementById("confirmP").value;

   if(oldP!=""&&newP!=""&&confirmP!="")
   {
     if(oldP!=newP)
     {
       if(newP==confirmP)
        {
         return true;
        }
        else
         {
           alert("Confirm password is not same as you new password.");
           return false;
         }
     }
     else
    {
     alert(" This Is Your Old Password,Please Provide A New Password");
     return false;
    }
   }
   else
   {
    alert("All Fields Are Required");
    return false;
   }
}



 

<button type="button" onclick="mainpage()">Go Back</button>
function mainpage(){
        location.href="index.html"}


        function dosomething() {
            var oldpassword = document.getElementById('oldpassword').value;
            var newpassword = document.getElementById('newpassword').value;
            var confirmpassword = document.getElementById('confirmpassword').value;
            if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
                alert('Please fill all the details');
            }
            else if (oldpassword == newpassword) {
                alert("Old password and New Password cannot be same");
            }
            else if (newpassword != confirmpassword) {
                alert("password mismatch");
            }
            else if(newpassword ==confirmpassword) {
                alert("password created")
            }    
            
        }


function dosomething() {
        var oldpassword = document.getElementById('oldpassword').value;
        var newpassword = document.getElementById('newpassword').value;
        var confirmpassword = document.getElementById('confirmpassword').value;
        if (oldpassword == "" || newpassword == "" || confirmpassword == "") {
            alert('Please fill all the details');
        }
        else if (oldpassword == newpassword) {
            alert("Old password and New Password cannot be same");
        }
        else if (newpassword != confirmpassword) {
            alert("password mismatch");
        }
        else if(newpassword ==confirmpassword) {
            alert("password created")
        }    
        
    }

   




