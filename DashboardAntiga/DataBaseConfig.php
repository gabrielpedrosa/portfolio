<?php

class DataBaseConfig
{
    public $servername;
    public $username;
    public $password;
    public $databasename;

    public function __construct()
    {

        $this->servername = 'augen-poco-v1.cguqupcirzua.us-east-2.rds.amazonaws.com';
        $this->username = 'admin';
        $this->password = 'rcWNsyBK';
        $this->databasename = 'augen_pocos';

    }
}

?>
