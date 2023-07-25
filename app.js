function checkPasswordMatch() {
    const password = document.querySelector('#password');
    const confirmation = document.querySelector('#confirmation')
    const passwordNotification = document.querySelector('.password-notification');

    if(password.value !== confirmation.value) {
        password.classList.add('invalid');
        confirmation.classList.add('invalid');
        passwordNotification.style.visibility = "visible";
    }
    else {
        password.classList.remove('invalid');
        confirmation.classList.remove('invalid');
        passwordNotification.style.visibility = "hidden";
    }
}

function main() {
    const passwords = document.querySelectorAll('#password, #confirmation');
    passwords.forEach(password => password.addEventListener('change', checkPasswordMatch));
}

main();