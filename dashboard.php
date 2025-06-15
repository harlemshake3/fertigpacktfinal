<?php
session_start();
if (!isset($_SESSION['user_id'])) {
  header('Location: login.html');
  exit;
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Dashboard</title>
  <link rel="stylesheet" href="css/dashboard.css" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="dashboard-container">
    <h1>👋 Hallo, willkommen zurück!</h1>
    <p class="user-email"><?php echo htmlspecialchars($_SESSION['email']); ?></p>

    <div class="actions">
      <a href="checklist.html" class="button-link">📝 Zur Checkliste</a>
      <a href="countdown.html" class="button-link">⏰ Countdown</a>
      <a href="logout.php" class="button-link logout">🚪 Logout</a>
    </div>
  </div>
</body>
</html>
