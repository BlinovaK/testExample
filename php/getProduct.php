<?php
$login = "493358_stroyzar";
$password = "sAVDkrEbqd";
$art = $_POST['art'];
$path = "https://api.forum-auto.ru/v2/listGoods?login=".$login."&pass=".$password."&art=".$art;

$result = $_GET[$path];
echo($result);
?>
