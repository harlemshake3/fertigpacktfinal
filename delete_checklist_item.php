<?php
session_start();
require_once '../system/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user_id'])) {
    $id = $_POST['id'] ?? null;

    if ($id) {
        $stmt = $pdo->prepare("DELETE FROM checklist_items WHERE id = ? AND user_id = ?");
        $stmt->execute([$id, $_SESSION['user_id']]);
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Keine ID erhalten"]);
    }
}
?>
