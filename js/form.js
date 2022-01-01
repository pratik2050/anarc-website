function sendEmail() {
    var name = $("#Name").val();
    var email = $("#Email").val();
    var msg = $("#Message").val();

    var body = "Name : " + name + "<br>Email :" + email + "<br>Message : " + msg;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anarc.nita.robotics@gmail.com",
        Password : "CF32FD8D55D330A484585972D2552DD5FAA6",
        To : 'anarc.nita.robotics@gmail.com',
        From : 'anarc.nita.robotics@gmail.com',
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
