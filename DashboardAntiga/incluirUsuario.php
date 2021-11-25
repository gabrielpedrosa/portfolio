<?php
require "DataBase.php";
$db = new DataBase();
if ( isset($_POST['usuario']) && isset($_POST['senha']) && isset($_POST['nome']) && isset($_POST['funcao']) && isset($_POST['contato']) && isset($_POST['id_empresa']) && isset($_POST['func_usuario']) && isset($_POST['func_senha']) ) {
    if ($db->dbConnect()) {
        if ($db->logIn("funcionarios", $_POST['func_usuario'], $_POST['func_senha'])) {
            
            if ($db->insertUsuario($_POST['nome'],$_POST['contato'],$_POST['id_empresa'],$_POST['usuario'],$_POST['senha'],$_POST['funcao'])){
                
                echo ("Sucess");
                
            } else echo "Fail";
        } else echo "Username or Password wrong";
    } else echo "Error: Database connection";
} else echo "All fields are required";
?>
