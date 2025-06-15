<?php
// ⚠️ Zugangsdaten wurden entfernt – bitte lokal ergänzen
$host = 'HOST';
$db   = 'DB_NAME';
$user = 'USERNAME';
$pass = 'PASSWORD';

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Datenbankverbindung fehlgeschlagen.";
    exit;
}
?>
