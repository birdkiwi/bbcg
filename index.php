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

<main class="main-container">
    <?php include "blocks/events-block.php"; ?>

    <section class="about-block">
        <div class="wrapper">
            <div class="about-block-left">
                <div class="about-block-title">
                    B2B Conference Group
                </div>
                <div class="about-block-stats">
                    <div class="about-block-stats-item">
                        <div class="about-block-stats-item-value">
                            17
                        </div>
                        <div class="about-block-stats-item-desc">
                            лет работы
                        </div>
                    </div>

                    <div class="about-block-stats-item">
                        <div class="about-block-stats-item-value">
                            300
                        </div>
                        <div class="about-block-stats-item-desc">
                            топ спикеров
                        </div>
                    </div>

                    <div class="about-block-stats-item">
                        <div class="about-block-stats-item-value">
                            100
                        </div>
                        <div class="about-block-stats-item-desc">
                            компаний партнеров
                        </div>
                    </div>
                </div>

                <div class="about-block-desc">
                    BBCG — лидер в организации ежегодных деловых саммитов первых лиц бизнеса в ключевых отраслях экономики России. Наша миссия — давать идеи для вашего роста, расти вместе с вами, опережая рынок.
                </div>

                <div class="about-block-button">
                    <a href="#" class="button button-light-burgundy">
                        Регистрация
                    </a>

                    <div class="about-block-button-desc">
                        Эксклюзивная информация и полезные контакты в сфере ритейла.
                    </div>
                </div>
            </div>
            <div class="about-block-right">
                <div class="about-block-seo">
                    <div class="about-block-seo-bubble">
                        <div class="about-block-seo-bubble-title">
                            Уважаемые, коллеги, друзья!
                        </div>
                        <p>
                            Ритейл меняется, и с каждым годом скорость изменений нарастает. Сегодня уже недостаточно один-два раза в год обмениваться информацией, чтобы оставаться «в рынке». Это должен быть непрерывный процесс.
                        </p>
                        <p>
                            За 17 лет работы BBCG накоплена уникальная база знаний и контактов участников рынка. Мы готовы поделиться этой информацией с вами.
                        </p>
                        <p>
                            Приглашаем вас стать участниками саммитов BBCG!
                        </p>
                    </div>
                </div>
                <div class="about-block-seo-photo"></div>
                <div class="about-block-seo-desc">
                    <div class="about-block-seo-desc-name">
                        Алексей Филатов
                    </div>
                    <div class="about-block-seo-desc-title">
                        Управляющий директор <br>
                        «B2B Conference Group»
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include "blocks/summits-block.php"; ?>
    <?php include "blocks/programs-block.php"; ?>
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