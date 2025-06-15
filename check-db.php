<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once 'system/config.php';

try {
    $stmt = $pdo->query("SELECT COUNT(*) FROM users");
    echo "✅ Verbindung erfolgreich. Anzahl Benutzer: " . $stmt->fetchColumn();
} catch (Exception $e) {
    echo "❌ Fehler: " . $e->getMessage();
}
?>
