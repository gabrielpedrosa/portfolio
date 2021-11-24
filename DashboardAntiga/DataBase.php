<?php
require "DataBaseConfig.php";

class DataBase
{
    public $connect;
    public $data;
    private $sql;
    protected $servername;
    protected $username;
    protected $password;
    protected $databasename;

    public function __construct()
    {
        $this->connect = null;
        $this->data = null;
        $this->sql = null;
        $dbc = new DataBaseConfig();
        $this->servername = $dbc->servername;
        $this->username = $dbc->username;
        $this->password = $dbc->password;
        $this->databasename = $dbc->databasename;
    }

    function dbConnect()
    {
        $this->connect = mysqli_connect($this->servername, $this->username, $this->password, $this->databasename);
        return $this->connect;
    }

    function prepareData($data)
    {
        return mysqli_real_escape_string($this->connect, stripslashes(htmlspecialchars($data)));
    }

    function logIn($table, $username, $password)
    {
        $username = $this->prepareData($username);
        $password = $this->prepareData($password);
        //$password = password_hash($password, PASSWORD_DEFAULT);
        $password = md5($this->prepareData($password)); 
        $this->sql = "select * from " . $table . " where usuario = '" . $username . "'";
        $result = mysqli_query($this->connect, $this->sql);
		$row = mysqli_fetch_assoc($result);
		
        if (mysqli_num_rows($result) != 0) {
            $dbusername = $row['usuario'];
            $dbpassword = $row['senha'];
			
            if ($dbusername == $username && $password == $dbpassword) {
                $login = true;
            } else $login = false;
        } else $login = false;

        return $login;
    }
    
    function getUsuario($username)
    {
        $username = $this->prepareData($username);
        $this->sql = "select * from funcionarios where usuario = '".$username."'";
        $result = mysqli_query($this->connect, $this->sql);
        //$row = mysqli_fetch_assoc($result);
		$row = mysqli_fetch_assoc($result);
		
        if (mysqli_num_rows($result) != 0) {
            $dbusuario = $row['usuario'];
            $dbnome = $row['nome'];
            $dbfuncao = $row['funcao'];
            $dbcontato = $row['contato'];
            $dbidempresa = $row['id_empresa'];
			
        } 
        else return null;
        
        $usuario = array("usuario"=>$dbusuario, "nome"=>$dbnome, "funcao"=>$dbfuncao, "contato"=>$dbcontato, "id_empresa"=>$dbidempresa);

        return $usuario;
    }

    
    function insertUsuario ($fullname, $email, $company, $username, $password, $function)
    {
        $fullname = $this->prepareData($fullname);
        $username = $this->prepareData($username);
        $password = $this->prepareData($password);
        $company = $this->prepareData($company);
        $contato = $this->prepareData($email);
        $function = $this->prepareData($function);
        
        $password = md5($this->prepareData($password));
        //$password = password_hash($password, PASSWORD_DEFAULT);
        
        
        $this->sql =
            "INSERT INTO funcionarios (nome,usuario,senha,contato,id_empresa, funcao) VALUES ('" . $fullname . "','" . $username . "','" . $password . "','" . $contato . "','" . $company . "','" . $function . "')";
            
        if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
        
    }
    
    function deleteUsuario ($username)
    {
 
        $username = $this->prepareData($username);
        
        $this->sql =
            "DELETE FROM funcionarios where usuario = '" . $username . "' ";
            
        if (mysqli_query($this->connect, $this->sql)) {
            return true;
        } else return false;
        
    }

    function executaQuery($query){

        #$query = $this->prepareData($query);

        $this->sql = $query;

        $result = mysqli_query($this->connect, $this->sql) or die('Query failed: ' . mysql_error());
        
        if (mysqli_num_rows($result) != 0) {
            return $result;
        } else return $result;
    }


}

?>
