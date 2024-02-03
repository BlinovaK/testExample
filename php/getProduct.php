<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Тестовое задание</title>
</head>

<body>
    <header class="header">
        <a href="/index.html"><img class="header_logo" src="/img/logo.png" alt="logo"></a>
        <div class="links">
            <div class="link_close-btn">
                <img class="link_close-btn_img" src="/img/close_btn.svg" alt="close_btn" onclick="closeMenu()">
                <a class="link" onclick="showMenu()">Меню</a>
                <div class="link_close_menu">
                    <a href="#" class="link">Услуги</a>
                    <a href="#" class="link">Статьи</a>
                    <a href="#" class="link">Вакансии</a>
                    <a href="#" class="link">Франшиза</a>
                </div>
            </div>
            <a href="#" class="link">Портфолио</a>
            <a href="/price.html" class="link">Цены</a>
            <a href="#" class="link">Схема работ</p>
                <a href="#" class="link">Отзывы</a>
                <a href="#" class="link">Контакты</a>
                <a href="#" class="link">Гарантия</a>
        </div>
        <button class="header_btn">Обратный звонок</button>
    </header>

    <div class="container-main-bn">
        <?php
        $login = "493358_stroyzar";
        $password = "sAVDkrEbqd";
        $art = $_POST['art'];
        $path = "https://api.forum-auto.ru/v2/listGoods?login=".$login."&pass=".$password."&art=".$art;

        $content = file_get_contents($path);
        $result  = json_decode($content);
        echo('<div class="products">
            <p>Найдено по артикулу: '.$art.'</p>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Название бренда</th>
                    <th>Артикул</th>
                    <th>Наименование </th>
                    <th>Кол-во дней доставки</th>
                    <th>Кол-во часов доставки</th>
                    <th>Кратность</th>
                    <th>Доступное кол-во</th>
                    <th>Цена</th>
                    <th>Склад</th>
                    <th>Возможен ли возврат</th>
                </tr>');
        foreach ($result as $item){
            $arr = get_object_vars($item);
            echo('<tr>
                <td>'.$arr['gid'].'</td>
                <td>'.$arr['brand'].'</td>
                <td>'.$arr['art'].'</td>
                <td>'.$arr['name'].'</td>
                <td>'.$arr['d_deliv'].'</td>
                <td>'.$arr['h_deliv'].'</td>
                <td>'.$arr['kr'].'</td>
                <td>'.$arr['num'].'</td>
                <td>'.$arr['price'].'</td>
                <td>'.$arr['whse'].'</td>
                <td>'.($arr['is_returnable'] ? 'Да' : 'Нет').'</td>
                </tr>');
        }
        echo('</table></div>');
        ?>
    </div>

<script src="../scripts/script.js"></script>


</body>

</html>
