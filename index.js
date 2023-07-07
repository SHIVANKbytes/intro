document.getElementById('submit').style.border = '2px solid pink'
document.getElementById('pwd').style.border = '2px solid pink'
document.getElementById('email').style.border = '2px solid pink'
document.getElementById('pwd').style.backgroundColor = 'seashell'
document.getElementById('email').style.backgroundColor = 'seashell'
document.getElementById('bdy').style.margin = '80px 550px'
document.getElementById('h2').style.border = '2px #E5E7E9'
function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "shivank268@gmail.com",
        Password: "cavrlglvznsgeydt",
        To: 'shivank2019ec035abesit@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Portfolio Message:: Subject: " + document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("number").value
            + "<br> Message: " + document.getElementById("message").value
      }).then(
        message => alert("Message Sent Succesfully")
      );
    }
document.getElementById('h2').style.width = '265px'
document.getElementById('h2').style.backgroundColor = 'RoyalBlue'
document.getElementById('s1').style.margin = '1px 30px'
document.getElementById('s2').style.margin = '1px 30px'
document.getElementById('s3').style.margin = '1px 30px'
document.getElementById('submit').style.margin = '10px 150px'
