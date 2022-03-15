function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "shivank268@gmail.com",
        Password: "bundeelgimzbnrds",
        To: 'shivank2019ec035abesit@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "And this is the body"
      }).then(
        message => alert(message)
      );
    }
