document.getElementById("loan-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value) / 100 / 12;
    const years = parseInt(document.getElementById("years").value);
    const payments = years * 12;
  
    const x = Math.pow(1 + interest, payments);
    const monthly = (amount * x * interest) / (x - 1);
  
    const resultDiv = document.getElementById("results");
    if (isFinite(monthly)) {
      resultDiv.innerHTML = `<p>Monthly Payment: $${monthly.toFixed(2)}</p>`;
    } else {
      resultDiv.innerHTML = "<p>Please check your inputs.</p>";
    }
  });
  
  // Contact form handling using EmailJS
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_2271", "template_foil3sl", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message: " + error.text);
      });
  });
  