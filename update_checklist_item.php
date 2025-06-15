<?php
session_start();
require_once '../system/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user_id'])) {
    $id = $_POST['id'] ?? null;
    $checked = $_POST['checked'] ?? null;

    if ($id !== null && $checked !== null) {
        $stmt = $pdo->prepare("UPDATE checklist_items SET checked = ? WHERE id = ? AND user_id = ?");
        $stmt->execute([$checked, $id, $_SESSION['user_id']]);
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Ungültige Eingaben"]);
    }
}
?>
