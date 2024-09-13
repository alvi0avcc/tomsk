<?php
    if ( $_SERVER['REQUEST_METHOD'] == 'POST' ){
        echo 'Добрый день<br>';
        echo json_encode($_POST).'<br>';
        if ( $_POST['primer'] == 5 ){
            echo 'Вы успешно зарегистрованы';
        } else echo 'Вы не рещили пример, регистрация отменена.';
    } else {
        echo 'Что Вы хотите?';
    };
?>