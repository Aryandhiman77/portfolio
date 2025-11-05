document.getElementById("submit-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  emailjs.send("service_eatszcy", "template_h8y3fci", {
    to_name: "Aryan",
    from_name: email,
    message: message,
    subject: subject,
  });
  console.log(name, email, subject, message);

  alert("Email sent ! We will Contact you soon.");
});
