let googleUser;

window.onload = (event) => {
    // Use this to retain user state between html pages.
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('Logged in as: ' + user.displayName);
            const name = user.displayName
            const greeting = document.querySelector('#greeting')
            greeting.innerHTML =`Hello, ${name}`
            googleUser = user;
        } else {
            window.location = 'index.html'; // If not logged in, navigate back to login page.
        }
    });
};

const handleNoteSubmit = () => {
    // 1. Capture the form data
    const noteTitle = document.querySelector('#noteTitle');
    const noteText = document.querySelector('#noteText');
    const noteDate = Date.now();
    const noteLabel = document.querySelector('#tag').value
    
    
    // 2. Format the data and write it to our database
    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        text: noteText.value,
        date: noteDate,
        label: noteLabel
    })
        // 3. Clear the form so that we can write a new note
        .then(() => {
            noteTitle.value = "";
            noteText.value = "";
            noteLabel.value = "Happy"; 
        });
};