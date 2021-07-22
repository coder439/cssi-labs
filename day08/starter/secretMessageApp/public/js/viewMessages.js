console.log("view file")
var count = 0; 
const getMessages = () => {
console.log("hello");
    const messagesRef = firebase.database().ref();
        messagesRef.on('value', (snapshot) => {
        const messages = snapshot.val();
        console.log(messages); 
        if (count == 3){
            lockUser();
        }
        else {
            validateMessages(messages);
        }
    });
}
function validateMessages(messages){
    const passwordAttempt = document.querySelector('#password').value;
    var match = new Boolean (false); 
    for (message in messages){
        const messageData = messages[message]; 
        if (messageData.password  === passwordAttempt){
            console.log("correct password"); 
            match = true;
            renderMessageAsHtml(messageData.message);
        }
    }
    if (match == false){
        count +=1
        triesLeft = 3-count
        renderErrorMessage("The password you entered was incorrect, please try again. You have " + triesLeft + " tries left.")
    }

}
function renderErrorMessage(str){
    alert(str);
}
function renderMessageAsHtml(messageContent){
    //hide input form 
    const passwordInput = document.querySelector('#passwordInput'); 
    //hide it 
    passcodeInput.style.display = 'none';
//Render message as html 
    const messageDiv = document.querySelector("#message")
    messageDiv.innerHTML = messageContent; 
}
function lockUser(){
    const messageDiv = document.querySelector("#message")
    messageDiv.innerHTML = "You have been locked out, sorry."
}