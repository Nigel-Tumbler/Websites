// Simple form validation
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}



