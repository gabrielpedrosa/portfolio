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

    <link rel="stylesheet" href="../css/estilos.css">
    <script src="https://kit.fontawesome.com/cf83dd7f82.js" crossorigin="anonymous"></script>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


    <title>Detalhes Poço</title>
  </head>

  <body style="background: #E4E4E4">

  <div class="container">
  <div class="row d-flex justify-content-end">
            <form action="mostraPoco.php">
                <input type="hidden" name="poco" value="<?php echo($poco); ?>">
                <button type="submit" class="col-3 btn btn-primary me-md-2" style="background-color: #4361ee" type="button">Retornar para <?php echo($poco); ?></button>
            </form>
            
    </div>
  </div>
    
    <br>
   

    <div class="container text-left">
          
    </div>

    <br>
    <div class="container d-flex justify-content-center" style="background-color: #ffffff; ">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                <div class="col">
                    <br>
                <h4>Histórico de análises</h4>
            </div>
            <div class="col-12" style="margin: 10px;">
                <h5><?php echo($mostrarBuscarDia); ?></h5>
                <br>
                <div>Escolha um mês e dia para ver histórico:</div>
                <form action="historico.php" method="get">
                    <input name="poco" value="<?php echo($poco); ?>" type="hidden">
                    <input name="date" id="date" type="date" min="2021-10-30" max="<?php $hoje3 = date('Y-m-d'); echo($hoje3); ?>" onchange="this.form.submit()">
                </form>    
                
            </div>

            </div>   

                 
                        <table class="table table-lg text-center">
                            <thead>
                                <tr>
                                <th scope="col">Horário</th>
                                <th scope="col">Cloro Livre</th>
                                <th scope="col">Fluoreto</th>
                                <th scope="col">Turbidez</th>
                                <th scope="col">Cor</th>
                                <th scope="col">pH</th>
                                <th scope="col">Temperatura</th>
                                <th scope="col">Macro vazão</th>
                                <th scope="col">Macro diário</th>
                                </tr>
                            </thead>
                            <tbody>

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
                    
                 </div>
            </div>

           
            
        </div>
        
    
    </div>
                        
    <div class="container-fluid d-flex justify-content-center">
        <div id="chart_div2"></div>
    </div>

    


    <br><br>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>