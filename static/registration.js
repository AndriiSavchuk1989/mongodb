window.onload = function () {

    document.getElementsByClassName('alert')[0].onclick = function (event) {
        let name = document.getElementById('fname');
        let lastName = document.getElementById('lname');
        let email = document.getElementById('subject');
        if (!name.value && !lastName.value && !email.value) {
            event.preventDefault();
            alert('Fill all fields');
        }
        const user = { name: name.value, surname: lastName.value, email: email.value };
        const options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        };
        fetch('/register-new-user', options)
            .then(function(response) {
                if(response.ok) {
                    console.log('click was recorded');
                    return;
                }
                throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
