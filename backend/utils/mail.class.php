<?php
class mail{

    function enviar_email($arr) {
        $html = '';
        $subject = '';
        $body = '';
        $ruta = '';
        $return = '';
        
        switch ($arr['type']) {
            case 'alta':
                $subject = 'Tu Alta en ViniloShop';
                $ruta = '<a href="http://localhost/ViniloShop_Angular_Framework/#/login/activate/'. $arr['token'] .'">aqu&iacute;</a>';
         /*        $ruta = "<a href='" . amigable("?module=login&function=active_user&param=" . $arr['token'], true) . "'>aqu&iacute;</a>"; */
                $body = 'Gracias por unirte a nuestra aplicaci&oacute;n<br> Para finalizar el registro, pulsa ' . $ruta;
                $from = 'abelclasse6@gmail.com';
                $email = $arr['inputEmail'];
                break;
    
             case 'changepass':
                $subject = 'Cambio de contraseña en ViniloShop';
                $ruta = '<a href="http://localhost/ViniloShop_Angular_Framework/#/login/recover/'. $arr['token'] .'">aqu&iacute;</a>';
                $body = 'Para cambiar tu password pulsa ' . $ruta;
                $from = 'abelclasse6@gmail.com';
                $email = $arr['inputEmail'];
                break; 
                
            case 'contact':
                $subject = 'Tu Petici&oacute;n a Ohana_dogs ha sido enviada<br>';
                $ruta = '<a href=' . 'http://localhost/Vinilo_framework/#/home/active_user/'. '>aqu&iacute;</a>';
                $body = 'Para visitar nuestra web, pulsa ' . $ruta;
                break; 
    
            case 'admin':
                $subject = $arr['inputSubject'];
                $body = 'inputName: ' . $arr['inputName']. '<br>' .
                'inputEmail: ' . $arr['inputEmail']. '<br>' .
                'inputSubject: ' . $arr['inputSubject']. '<br>' .
                'inputMessage: ' . $arr['inputMessage'];
                break;
        }
        
        $html .= "<html>";
        $html .= "<body>";
            $html .= "Asunto:";
            $html .= "<br><br>";
	       $html .= "<h4>". $subject ."</h4>";
           $html .= "<br><br>";
           $html .= "Mensaje:";
           $html .= "<br><br>";
           $html .= $arr['inputMessage'];
           $html .= "<br><br>";
	       $html .= $body;
	       $html .= "<br><br>";
	       $html .= "<p>Enviado por ViniloShop</p>";
		$html .= "</body>";
		$html .= "</html>";

        //set_error_handler('ErrorHandler');
        try{
         /*    if ($arr['type'] === 'admin')
                $address = 'mataix.ab@gmail.com';
            else
                $address = $arr['inputEmail']; */
            $result = self::send_mailgun($from, $email, $subject, $html);    
        } catch (Exception $e) {
			$return = 0;
		}
		//restore_error_handler();
        return $result;
    }

function send_mailgun($from, $email, $subject, $html){
    $config = array();
	$config['api_key'] = "1e61530f62a32451983f2396662884ea-b6d086a8-21ec6691"; //API Key
    $config['api_url'] = "https://api.mailgun.net/v3/sandboxead8ae468a9840f3bd705fd0d43cea1a.mailgun.org/messages"; //API Base URL

   $message = array();
   $message['from'] = $from;
   $message['to'] =  $email;
   $message['h:Reply-To'] = "abelclasse6@gmail.com";
   $message['subject'] = $subject;
   $message['html'] = $html;

   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $config['api_url']);
   curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
   curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
   curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
   curl_setopt($ch, CURLOPT_POST, true);
   curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
   $result = curl_exec($ch);
   curl_close($ch);
   return $result;
 }

}
    
