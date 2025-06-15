<?php
session_start();
require_once '../system/config.php';
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Nicht eingeloggt"]);
    exit;
}

$listName = $_GET['list_name'] ?? 'Meine Liste';

$stmt = $pdo->prepare("SELECT id, item_text, checked FROM checklist_items WHERE user_id = ? AND list_name = ?");
$stmt->execute([$_SESSION['user_id'], $listName]);
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($items);
