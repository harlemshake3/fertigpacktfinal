document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("api/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email, password }),
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Konto erstellt! Du kannst dich jetzt einloggen.");
      window.location.href = "login.html";
    } else {
      alert("Fehler: " + result.message);
    }
  } catch (error) {
    console.error(error);
    alert("Ein Fehler ist aufgetreten.");
  }
});
