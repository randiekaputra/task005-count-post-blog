// alert("please fill in correctly 😁🙏")

function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if(name == ''){
        return alert("Name is required ☹")
    } else if(email == ''){
        return alert("Email is required ☹")
    } else if(phone == ''){
        return alert("Phone Number is required ☹")
    } else if(subject == 'select'){
        return alert("Subject is required ☹")
    } else if(message == ''){
        return alert("Your Message is required ☹")
    }

    let emailReceiver = "randiekaputra1@gmail.com"
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${message} contact me at ${phone} Email: ${email}`
    a.click()

}
