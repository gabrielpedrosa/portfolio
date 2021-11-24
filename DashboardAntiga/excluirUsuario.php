<?php
require "DataBase.php";
$db = new DataBase();
if ( isset($_POST['usuario']) && isset($_POST['func_usuario']) && isset($_POST['func_senha']) ) {
    if ($db->dbConnect()) {
        if ($db->logIn("funcionarios", $_POST['func_usuario'], $_POST['func_senha'])) {
            
            if ($db->deleteUsuario($_POST['usuario'])){
                
                echo ("Sucess");
                
            } else echo "Fail";
        } else echo "Username or Password wrong";
    } else echo "Error: Database connection";
} else echo "All fields are required";
?>
