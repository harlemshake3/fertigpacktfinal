<?php
session_start();
require_once '../system/config.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Nicht eingeloggt"]);
    exit;
}

$stmt = $pdo->prepare("SELECT DISTINCT list_name FROM checklist_items WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$lists = $stmt->fetchAll(PDO::FETCH_COLUMN);

echo json_encode($lists);
?>
