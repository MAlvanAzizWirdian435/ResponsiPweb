<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = htmlspecialchars($_POST['nama']);
    $jenis = htmlspecialchars($_POST['jenis']);
    $liter = htmlspecialchars($_POST['liter']);

    $transaksi = "$nama\t|\t$jenis\t|\t$liter\n";

    file_put_contents('catatan.txt', $transaksi, FILE_APPEND);

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>