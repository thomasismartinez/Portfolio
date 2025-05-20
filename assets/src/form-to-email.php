<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Portfolio.website';

	$email_subject = "About Me Contact Form";

	$email_body = "Message from $name:\n".
                            "\n$message";

    $to = "tjm7126@rit.edu";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    function IsInjected($str)
    {
        $injections = array('(\n+)',
            '(\r+)',
            '(\t+)',
            '(%0A+)',
            '(%0D+)',
            '(%08+)',
            '(%09+)'
            );
                
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        
        if(preg_match($inject,$str))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if(IsInjected($visitor_email))
    {
        echo "Bad email value!";
        exit;
    }

    mail($to,$email_subject,$email_body,$headers);
?>
<p>Thank you for contacting me!</p>
<a href="../../">Click here to return to site</a>