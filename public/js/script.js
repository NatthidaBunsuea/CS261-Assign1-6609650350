function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU6218a6f65e773647ae9e9595bcc33543b3180ebf07c32ec065e8236cbfa8111d72f77145f4bdd34a087f40ab95d1a494'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            document.getElementById('message').innerText = "Login successful!";
            
            // Assuming 'data.user' contains user information such as name and email
            const userInfo = `
                <p><strong>Name:</strong> ${data.user.name}</p>
                <p><strong>Email:</strong> ${data.user.email}</p>
                <p><strong>Role:</strong> ${data.user.role}</p>
            `;
            document.getElementById('userInfo').innerHTML = userInfo;
        } else {
            document.getElementById('message').innerText = data.message || "Login failed!";
        }
    })
    .catch(error => {
        document.getElementById('message').innerText = `Error: ${error.message}`;
        console.error('Error:', error);
    });
}


/*
function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/https://restapi.tu.ac.th/api/v1/auth/Ad/verify/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TU6218a6f65e773647ae9e9595bcc33543b3180ebf07c32ec065e8236cbfa8111d72f77145f4bdd34a087f40ab95d1a494'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}*/

