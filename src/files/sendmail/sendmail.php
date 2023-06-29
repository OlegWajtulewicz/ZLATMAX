<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'vajoleg@gmail.com';                     //SMTP username
	$mail->Password   = 'clknsvhejzanvlhl';                               //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465; 

	//Від кого лист
	$mail->setFrom('vajoleg@gmail.com', 'Это наконец я'); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('vajoleg@gmail.com'); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Привет! Это я';

		//Тело письма
		$body = '<h1>Встречайте супер письмо!</h1>';
	
		if(trim(!empty($_POST['name']))){
			$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
		}
		if(trim(!empty($_POST['email']))){
			$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
		}
		if(trim(!empty($_POST['phone']))){
			$body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
		}
		// if(trim(!empty($_POST['hand']))){
		// 	$body.='<p><strong>Рука:</strong> '.$hand.'</p>';
		// }
		// if(trim(!empty($_POST['age']))){
		// 	$body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
		// }
		
		if(trim(!empty($_POST['message']))){
			$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
		}

	//if(trim(!empty($_POST['email']))){
		//$body.=$_POST['email'];
	//}	
	
	//Прикрепить файл
	//if(trim(!empty($_FILES['image']['tmp_name'])))  {
		// $fileTmpName = $_FILES['image']['tmp_name'];
		// $fileName = $_FILES['image']['tmp_name'];
		// $mail->addAttachment($fileTmpName, $fileName);
		//путь загрузки файла
		// $filePath = __DIR__ . "/files/" . $_FILES['image']['name']; 
		// //грузим файл
		// if (copy($_FILES['image']['tmp_name'], $filePath)){
		// 	$fileAttach = $filePath;
		// 	$body.='<p><strong>Фото в приложении</strong>';
		// 	$mail->addAttachment($fileAttach);
		// }
		//}

	$mail->Body = $body;

	//Відправляємо
	if (!$mail->send()) {
		$message = 'Помилка';
	} else {
		$message = 'Дані надіслані!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>