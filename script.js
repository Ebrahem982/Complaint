document.getElementById("complaintForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);

    // Convert form data to JSON
    var jsonObject = {};
    formData.forEach(function (value, key) {
        jsonObject[key] = value;
    });
    var jsonData = JSON.stringify(jsonObject);

    // Send data to server (replace 'submit_complaint.php' with your backend endpoint)
    fetch('submit_complaint.php', {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Display response message
            document.getElementById("response").innerText = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});