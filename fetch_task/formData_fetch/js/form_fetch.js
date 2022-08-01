function validateForm() {
    var fullname = document.contactForm.fullname.value;
    console.log(fullname);
    var city = document.contactForm.city.value;
    console.log(city);
    var mobile=document.contactForm.mobile.value;
    var email=document.contactForm.email.value;
    var psw=document.contactForm.psw.value;

// Validate  fullname
if(fullname == "") {
    alert('Please Enter your  full name')
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

// Validate password
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
//  validate checkbox
// if(contactForm.checkbox.checked==false) {
//     alert("Please check the box if you want to proceed.");
//     return false;
// }

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        fullname:fullname,
        city:city,
        mobile:mobile,
        email:email,
        password:psw
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response => { return response.json();})
    .then(json => console.log(json));



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));


}