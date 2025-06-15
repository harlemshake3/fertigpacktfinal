<?php
session_start();
require_once '../system/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user_id'])) {
    $item = trim($_POST['item_text']);
    $list_name = trim($_POST['list_name'] ?? 'Meine Liste');

    if ($item !== '' && $list_name !== '') {
        $stmt = $pdo->prepare("INSERT INTO checklist_items (user_id, item_text, list_name) VALUES (?, ?, ?)");
        $stmt->execute([$_SESSION['user_id'], $item, $list_name]);
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Text oder Listenname fehlt"]);
    }
}
?>
