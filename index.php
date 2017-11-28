<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>BBCG — B2B Conference group</title>
    <link rel="stylesheet" href="build/style.min.css">
</head>
<body>
<header class="main-header">
    <div class="wrapper">
        <div class="main-header-logo">
            <a href="index.php">
                <img src="images/logo.svg" alt="BBCG — B2B Conference Group">
            </a>
        </div>
        <nav class="main-header-menu">
            <ul>
                <li>
                    <a href="#">О компании</a>
                </li>
                <li class="parent">
                    <a href="#">Календарь саммитов</a>
                </li>
                <li>
                    <a href="#">Академия ретейла</a>
                </li>
                <li>
                    <a href="#">Новости</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </nav>
        <div class="main-header-lang">
            <a href="#" class="active">Рус</a>
            <a href="#">Eng</a>
        </div>
        <div class="main-header-userarea">
            <div class="main-header-userarea-login-register">
                <a href="#">Войти</a>
                <a href="#">Регистрация</a>
            </div>
        </div>
    </div>
</header>

<main class="main-container main-container-with-header">
    <?php include "blocks/events-block.php"; ?>
    <?php include "blocks/about-block.php"; ?>
    <?php include "blocks/summits-block.php"; ?>
    <?php include "blocks/programs-block.php"; ?>
    <?php include "blocks/news-block.php"; ?>
    <?php include "blocks/speakers-block.php"; ?>
    <?php include "blocks/partners-block.php"; ?>
    <?php include "blocks/media-block.php"; ?>
    <?php include "blocks/iphone-block.php"; ?>
    <?php include "blocks/register-block.php"; ?>
</main>

<?php include "blocks/footer.php"; ?>

<script src="build/scripts.min.js"></script>
</body>
</html>