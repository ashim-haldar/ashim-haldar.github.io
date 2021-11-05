function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "avishekh694@gmai.com",
    Password: "spelllightmother",
    To: "avishekhaldar2000@gmail.com",
    From: email,
    Subject: "<email subject>",
    Body: "<email body>",
  }).then((message) => alert("mail sent successfully"));
}
