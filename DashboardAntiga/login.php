<?php
require "DataBase.php";
$db = new DataBase();
if (isset($_POST['usuario']) && isset($_POST['senha'])) {
    if ($db->dbConnect()) {
        if ($db->logIn("funcionarios", $_POST['usuario'],$_POST['senha'])) {
            
            $user = $db->getUsuario($_POST['usuario']);
            echo (json_encode($user));
            //echo "Login Success";
        } else echo "Username or Password wrong";
    } else echo "Error: Database connection";
} else echo "All fields are required";
?>
