<?php
require "DataBase.php";
$db = new DataBase();

$hoje = date('d/m/Y'); 
$hoje2 = date('Y/m/d'); 

if ( isset($_GET['date']) ){
    $buscarDia = $_GET['date'];
    $mostrarBuscarDia = date("d/m/Y",strtotime($_GET['date']));
} else {
    $buscarDia = date('Y-m-d');
    $mostrarBuscarDia = date('d/m/Y');
}


if ( isset($_SESSION['func_usuario'])  && isset($_SESSION['func_senha']) ) {
    if ($db->dbConnect()) {
        if ($db->logIn("funcionarios", $_SESSION['func_usuario'], $_SESSION['func_senha'])) {
            
            $usuario = $_POST['func_usuario'];
            $senha = $_POST['func_senha'];
            echo ("logado");

        } else echo("");
    } else echo("");
} else echo("deslogado");

if ( isset($_GET['poco']) ) {

    $poco = $_GET['poco'];
    #echo($poco);
}

?>
<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">    
        <link rel="stylesheet" href="../css/historic.css">

        <title>Dashboard</title>

        <script src="https://kit.fontawesome.com/cf83dd7f82.js" crossorigin="anonymous"></script>
    </head>

    <body class="bg-light-gray">
    <?php

            # MEDIA TOTAIS DE TODOS OS DIAS
            $db->dbConnect();
            $query = "select * from medias_diarias where id_poco = '$poco'";
            $result = $db->executaQuery($query);

            $media_clorolivre_aux = 0;
            $media_fluoreto_aux = 0;
            $media_vazao_aux = 0;
            $count = 0;

            while( $row = mysqli_fetch_array($result)){
                $media_clorolivre_aux = $media_clorolivre_aux + $row['cloro_livre_PV'];
                $media_fluoreto_aux = $media_fluoreto_aux + $row['fluoreto_PV'];
                $media_vazao_aux = $media_vazao_aux + $row['macro_vazao'];
                $count = $count + 1;
            }

            $media_clorolivre = $media_clorolivre_aux / $count;
            $media_fluoreto = $media_fluoreto_aux / $count;
            $media_vazao = $media_vazao_aux / $count;


            $count = 0;
            $media_clorolivre_aux = 0;
            $media_fluoreto_aux = 0;
            $media_ph_aux = 0;
            $media_cor_aux = 0;
            $media_turbidez_aux = 0;
            $media_vazao_aux = 0;

            # MEDIA DO DIA ATUAL
            $db->dbConnect();
            $query = "select cloro_livre_PV, fluoreto_PV, turbidez, cor, ph, macro_vazao, macro_diario, horario
            from mapeamentos
            inner join entradas 
            on mapeamentos.id = entradas.id_mapeamento
            where horario >="."'$hoje2'"." and mapeamentos.id_poco ="."'$poco'"."
            order by entradas.horario DESC";
            $resultDia = $db->executaQuery($query);

            while ($row = mysqli_fetch_array($resultDia)){
                $media_clorolivre_aux = $media_clorolivre_aux + $row['cloro_livre_PV'];
                $media_fluoreto_aux = $media_fluoreto_aux + $row['fluoreto_PV'];
                $media_ph_aux = $media_ph_aux + $row['ph'];
                $media_cor_aux = $media_cor_aux + $row['cor'];
                $media_turbidez_aux = $media_turbidez_aux + $row['turbidez'];
                $media_vazao_aux = $media_vazao_aux + $row['macro_vazao'];
                $count = $count + 1;
            }
            $count = $count + 1;
            $media_clorolivre_dia = $media_clorolivre_aux / $count;
            $media_fluoreto_dia = $media_fluoreto_aux / $count;
            $media_ph_dia = $media_ph_aux / $count;
            $media_cor_dia = $media_cor_aux / $count;
            $media_turbidez_dia = $media_turbidez_aux / $count;
            $media_vazao_dia = $media_vazao_aux / $count;

            ?>
        
        <div class="container mg-v">
            <div class="d-flex justify-content-start w-50">
                <form action="index.php">
                    <input type="hidden" name="poco" value="<?php echo($poco); ?>">
                    <button type="submit" class="btn btn-primary me-md-2" style="border-radius: 5px;" type="button">Retornar para <?php echo($poco); ?></button>
                </form>
                
            </div>
            <div class="container box-container pd-v">
                <div class="row title">
                    <h2 class="text-light-blue">Últimas Análises</h2>
                    <h3><?php echo($mostrarBuscarDia); ?></h3>
                    <label>Escolha um mês e dia para ver histórico:</label>
                    <form class="mg-v-10" action="index.php" method="get">
                        <input name="poco" value="<?php echo($poco); ?>" type="hidden">
                        <input name="date" id="date" type="date" min="2021-10-30" max="<?php $hoje3 = date('Y-m-d'); echo($hoje3); ?>" onchange="this.form.submit()">
                    </form>  
                </div>
                <div class="table-responsive">
                    <?php if ($resultDia != null): ?>
                        <table class="table">
                            <thead class="thead-blue">
                                <tr>
                                <th scope="col">Horário</th>
                                <th scope="col">Cloro Livre</th>
                                <th scope="col">Fluoreto</th>
                                <th scope="col">Turbidez</th>
                                <th scope="col">Cor</th>
                                <th scope="col">pH</th>
                                <th scope="col">Macro Vazão</th>
                                <th scope="col">Macro Diário</th>
                                <th scope="col">Temperatura</th>
                                </tr>
                            </thead>
                            <tbody class="tbody-blue">
                                <?php 
                                    $db->dbConnect();
                                    $query = "select cloro_livre_PV, fluoreto_PV, turbidez, cor, ph, macro_vazao, macro_diario, temperatura, horario
                                    from mapeamentos
                                    inner join entradas 
                                    on mapeamentos.id = entradas.id_mapeamento
                                    where horario >="."'$buscarDia'"." and horario <="."'$buscarDia "." 23:59:5 ' and mapeamentos.id_poco ="."'$poco'"."
                                    order by entradas.horario DESC";
                                    $resultDia = $db->executaQuery($query);
                                    
                                    while ($row = mysqli_fetch_array($resultDia)): ?>
                                        <tr>
                                        <td><?php
                                        $date = new DateTime($row['horario']);
                                        echo $date-> format( 'H:i' );
                                        #echo($row['horario']); ?></td>
                                        <td><?php printf("%.2f",$row['cloro_livre_PV']); ?></th>
                                        <td><?php printf("%.2f",$row['fluoreto_PV']); ?></td>
                                        <td><?php printf("%.2f",$row['turbidez']); ?></td>
                                        <td><?php printf("%.2f",$row['cor']); ?></td>
                                        <td><?php printf("%.2f",$row['ph']); ?></th>
                                        <td><?php printf("%.2f",$row['temperatura']); ?></td>
                                        <td><?php printf("%.2f",$row['macro_vazao']); ?></td>
                                        <td><?php printf("%.2f",$row['macro_diario']); ?></td>
                        
                                        
                                        </tr>
                                    <?php endwhile; ?>
                            </tbody>
                        </table>
                    <?php endif;?>

                </div>
            </div>
        </div>
    </body>
</html>