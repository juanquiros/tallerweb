<?php
    $data = array(
        'code' => 400,
        'status' => 'error',
        'message' => "Faltan datos en la petición"
    );
    if(isset($_POST['json']) && !empty($_POST['json'])){
            $usuario = json_decode($_POST['json']);
            if(isset($usuario) && !empty($usuario) &&
                    isset($usuario->email) && !empty($usuario->email) &&
                            isset($usuario->password) && !empty($usuario->password) ){            
                $data = array(
                    'code' => 200,
                    'status' => 'success',
                    'usuario' => $usuario
                );          
            }
                
    }
    echo json_encode($data,$data['code']);
    http_response_code($data['code']);
?>


        