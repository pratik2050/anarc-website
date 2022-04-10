function sendEmail() {
    var name = $("#Name").val();            //JS for SMTP (Don't Change send method)
    var email = $("#Email").val();
    var msg = $("#Message").val();

    var body = "Name : " + name + "    " + "Email :" + email +  "    " +"Message : " + msg;


    emailjs.send("service_ygycc19","template_21ttgmp",{
      from_name: "ANARC Website",
      to_name: "ANARC",
      message: body,
      }).then(
      message => {
        alert("Message Has Been Sent, We Will Contact You Soon.");
      }
    );
}

function print(x) {
  console.log(x + "is prime");
}
function isprime(x) {
  for (var i=2; i<x; i++) {
    if (x%i==0) {
      return false;
    }
  }

  return print(x);
}
