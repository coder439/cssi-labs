// import { Hashes } from './hashes.js';
const submitMessage = () => {
    const passwordInput = document.querySelector('#password').value;
    const messageInput = document.querySelector('#message').value;
    var MD5 = new Hashes.MD5
        if (messageInput.toString().length >=10){
            console.log("input greater than 10")
            alert("please keep your message under 10 characters")
        }
        else {
        console.log(passwordInput)
        console.log(messageInput)
        var hashedPassword = MD5.hex(passwordInput)
        console.log(hashedPassword)
        firebase.database().ref().push({
            password: hashedPassword,
            message: messageInput
        });
    }
};
