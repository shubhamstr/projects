function check(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var msg = document.getElementById("msg");

    name.focus();
  
    if(name.value == ""){
        alert("Please Enter Name");
        return false;
    }
    else if(!isNaN(name.value)){
        alert("Plase Enter Only Characters");
        return false;
    }
    else if((name.value.length <= 2) || (name.value.length >= 25)){
        alert("Please Enter Name Between 3 to 25 Characters");
        return false;
    }else{
        email.focus();
    }
    

    if(email.value == ""){
        alert("Please Enter email");
        return false;
    }
    else if(email.value.indexOf('@') <= 0){
        alert("Invalid Position of @");
        return false;
    }
    else if((email.value.charAt(email.value.length - 4) != '.') && (email.value.charAt(email.value.length - 3) != '.')){
        alert("Invalid Position of . dot");
        return false;
    }
    else if((email.value.length <= 5) || (email.value.length >= 35)){
        alert("Invalid Email");
        return false;
    }
    else{
        phone.focus();
    }

    if(phone.value == ""){
        alert("Please Enter Phone Number");
        return false;
    }
    else if(isNaN(phone.value)){
        alert("Phone Number should have digits Only");
        return false;
    }
    else if(phone.value.length != 10){
        alert("Phone Number should have 10 digits");
        return false;
    }
    else if((phone.value.charAt(0) != 9) &&
    (phone.value.charAt(0) != 8) && 
    (phone.value.charAt(0) != 7)){
        alert("Phone Number should start with 9, 8 or 7");
        return false;
    }
    else{
        msg.focus();
    }

    if(msg.value == ""){
        alert("Please Enter Message ");
        return false;
    }
    else if((msg.value.length <= 10) || (msg.value.length >= 250)){
        alert("Message should have between 10 to 250 characters");
        return false;
    }
    
}