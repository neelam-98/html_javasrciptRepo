
function validateForm() {
    // Retrieving the values of form elements 
    var fullname = document.contactForm.fullname.value;
    console.log(fullname);
    // var lastname = document.contactForm.lastname.value;
    // var address = document.contactForm.address.value;
    var city = document.contactForm.city.value;
    console.log(city);
    // // var state = document.contactForm.state.value;
    // // var pin = document.contactForm.pin.value;
    var mobile=document.contactForm.mobile.value;
    var email=document.contactForm.email.value;
    // // var hear_about=document.contactForm.hear_about.value;
    // // var gender=document.contactForm.gender.value;
    // var checkbox=document.contactForm.checkbox.value;
    var psw=document.contactForm.psw.value;




// Validate  fullname
if(fullname == "") {
    alert('Please Enter your   name')
    return false;
} 
else {
    let regex = /^[a-zA-Z\s]+$/;  
    console.log('regex',fullname.match(/^[a-zA-Z\s]+$/)) ;             
    if(regex.test(fullname) === false) {
        alert('Invalid input for first name')
        return false;
    } 
}
//  validate lastname

// if(lastname == "") {
//     alert('Please Enter your last name')
//     return false;
// } 
// else {
//     let regex = /^[a-zA-Z\s]+$/;                
//     if(regex.test(lastname) === false) {
//         alert('Invalid input for last name')
//         return false;
//     } 
// }

// //  validate address

// if(address == "") {
//     alert('Please Enter your address')
//     return false;
// }

//  validate city

if(city == " ") {
    alert('Please Enter city name')
    return false;
} 
else {
    let regex = /^[a-z&A-Z\s]+$/;                
    if(regex.test(city) === false) {
        alert('Invalid city name')
        return false;
    } 
}
// //  validate state

// if(state == "") {
//     alert('Please Enter state name')
//     return false;
// } 
// else {
//     let regex = /^[a-z.&A-Z\s]+$/;                
//     if(regex.test(state) === false) {
//         alert('Invalid state name')
//         return false;
//     } 
// }
// //validate pin code
// if(pin == "") {
//     alert('Please Enter pin code')
//     return false;
// } 
// else {
//     let regex = /^[1-9][0-9]{5}$/;                
//     if(regex.test(pin) === false) {
//         alert('Invalid pin code')
//         return false;
//     } 
// }

// Validate mobile number
if(mobile == "") {
    alert('Please Enter mobile number')
    return false;
} else {
    var regex = /^[7-9]\d{9}$/;
    if(regex.test(mobile) === false) {
        alert('Please Enter a valid 10 digit mobile number')
        return false;
    }
}

// Validate email
if(email == "") {
    alert('Please enter your email address')
    return false;
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
        alert('Invalid email address')
        return false;
    }
}

// // Validate password
if(psw == "") {
    alert('Please enter password')
    return false;
} else {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?_])[A-Za-z\d#$@!%&*?_]{8,12}$/;
    if(regex.test(psw) === false) {
        alert('Password must be 8-12 characters and contain at least one of the following:uppercase letter,lowercase letter,numbers and special characters.')
        return false;
    }
}
//  // validate dropdown

// // if(hear_about == "Select") {
// //     alert("Please select one option");
// //     return false;
// // }
// //  // Validate gender
// //  if() {
// //     alert("Please select your gender");
// //     return false;
// // }
// validate checkbox

// if(contactForm.checkbox.checked==false) {
//     alert("Please check the box if you want to proceed.");
//     return false;
// }

//localStorage
// let user_records=new Array();
// user_records=JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

// user_records.push({
//     First_name:firstname,
    
//     City:city,
//     Mobile_number:mobile,
//     email:email,
//     Gender:gender,
//     Password:psw


// })
// localStorage.setItem("users",JSON.stringify(user_records));

// window.location.replace("table.html");

// function deleteItems() {
//     localStorage.clear();
//   }


//trial and error

localStorage.setItem('fullname', JSON.stringify(fullname));
localStorage.setItem('city', JSON.stringify(city));
localStorage.setItem('mobile', JSON.stringify(mobile));
localStorage.setItem('email', JSON.stringify(email));
localStorage.setItem('psw', JSON.stringify(psw));



// console.log({
//     Name,  mobile, email, 
// })

// const Data = {
//     'fullname': fullname,
//     // 'mobile': mobile,
//     // 'email': email,
//     // 'city':city,
//     // 'Password':psw

// }
// debugger
// const userData = localStorage.setItem('Data', JSON.stringify(Data));

// console.log('userData', userData);
window.location.replace("table.html");
// // window.open('../HTML/formData_display.html')
// localStorage.setItem('firstname',firstname);



// 
}



