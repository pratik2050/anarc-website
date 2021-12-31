function sendEmail() {
    var name = $("#Name").val();
    var email = $("#Email").val();
    var msg = $("#Message").val();

    var body = "Name : " + name + "<br>Email :" + email + "<br>Message : " + msg;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "upes2355@gmail.com",
        Password : "AD3EC8E64BF64ACBCDB4FBCA91148738E7EC",
        To : 'upes2355@gmail.com',
        From : 'upes2355@gmail.com',
        Subject : "Contact US ANARC",
        Body : body
    }).then(
      message => {
          if(message == "OK") {
              alert("Message Has Been Sent, We Will Contact You Soon.");
          } else {
              alert("An Error Occured, Plz Try Again");
          }
      }
    );
}