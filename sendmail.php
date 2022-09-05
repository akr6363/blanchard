<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);


$mail->setFrom('blanchard_19@mail.ru');
$mail->addAddress('akr6363@mail.ru');
$mail->Subject = 'Заявка с сайта Blanchard';

$body.='<p><strong>Имя:<strong> '.$_POST['name'].'</p>;

$body.='<p><strong>Телефон:<strong> '.$_POST['tel'].'</p>;

$mail->Body = $body;

if(!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
