document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email, password }),
    });

    const text = await response.text();
    console.log("Antwort vom Server:", text);

    const result = JSON.parse(text);

    if (result.status === "success") {
      window.location.href = "dashboard.php";
    } else {
      alert("Fehler: " + result.message);
    }
  } catch (err) {
    console.error("Fehler beim Parsen oder Netzwerk:", err);
    alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
  }
});
