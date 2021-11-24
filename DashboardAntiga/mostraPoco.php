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

    <br>
    <div class="container">
        <div class="row d-flex justify-content-end">
            <button onclick="location.href='dashboard.php'" class="col-3 btn btn-primary me-md-2" style="background-color: #4361ee" type="button">Voltar para Dashboard geral</button>
        </div>
        <br>
        <div class="row text-center d-flex justify-content-center">
            <div class="col-2 text-center "> <h2><?php echo($poco); ?></h2> </div> 
        </div>
      <hr>

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

    </div>
    
    <br>
    
    <div class="container-fluid d-flex justify-content-center">

        <br>
        
        <div class="row flex">
        
          <div class="dados col-5 d-flex justify-content-center" style="overflow: hidden; border-radius: 5%">
          
              <div>
              <table class="table table-responsive">
              <caption>Médias do dia até o momento*</caption>
                <thead>
                    <br>
                <h4>Dados gerais</h4>
                <th scope="col"><?php echo($hoje); ?></th>
                </thead>
                <tbody>
                    
                    <tr>
                    <td> <div class="bolinha"> </div></td>
                    <td><b>Cloro</b></td>
                    <td><b><?php printf("%.2f ",$media_clorolivre_dia); ?> ppm</b></td>
                    <td>SP 5,0 ppm</td>
                    </tr>
                    <tr>
                    <td> <div class="bolinha"> </td>
                    <td><b>Fluoreto</b></th>
                    <td><b><?php printf("%.2f ",$media_fluoreto_dia); ?>ppm</b></td>
                    <td>SP 5,0 ppm</td>
                    </tr>
                    <td> <div class="bolinha"> </td>
                    <td><b>pH</b></th>
                    <td><b><?php printf("%.2f ",$media_ph_dia); ?> pH</b></td>
                    <td>REF 14,0 pH</td>
                    </tr>
                    <td> <div class="bolinha"> </td>
                    <td><b>Cor</b></th>
                    <td><b><?php printf("%.2f ",$media_cor_dia); ?> uC</b></td>
                    <td>REF 12,0 uC</td>
                    </tr>
                    <td> <div class="bolinha"> </td>
                    <td><b>Turbidez</b></td>
                    <td><b><?php printf("%.2f ",$media_turbidez_dia); ?> NTU</b></td>
                    <td>REF 1,0 NTU</td>
                    </tr>
                    <td> <div class="bolinha"> </td>
                    <td><b>Vazão</b></td>
                    <td><b><?php printf("%.2f ",$media_vazao_dia); ?> L/seg</b></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>
                
                
              </div>
          </div>
            
          <div class="col-7 text-center d-flex justify-content-end"  >
            
          <div class="row">
          <br>
          <div class="text-start">
              <br>
             <h4>Desempenho Geral</h4>
             <br>
          </div>
            
              
            <div class="row row-cols-4">
            <div class="estatistica col">
                <br>
                <h5>Produção</h5> 
                <br><br>
                <h6>Vazão </h6>
                <h5 style="font-size: 25px"> <?php printf("%.2f ",$media_vazao); ?> ppm</h5>
                <br>
                <button type="button" class="btn btn-light">Detalhar</button> 
            </div>
            <div class="estatistica2 col">
                <br>
                <h5>Fluor</h5> 
                <br><br>
                <h6>Dosagem </h6>
                <h5 style="font-size: 25px"> <?php printf("%.2f ",$media_fluoreto); ?> ppm</h5>
                <br>
                <button type="button" class="btn btn-light">Detalhar</button> 
            </div>
            <div class="estatistica3 col">
                <br>
                <h5>Cloro</h5> 
                <br><br>
                <h6>Dosagem </h6>
                <h5 style="font-size: 25px"> <?php printf("%.2f ",$media_clorolivre); ?> ppm</h5>
                <br>
                <button type="button" class="btn btn-light">Detalhar</button> 
            </div>
            </div>
            <div class="col">
            </div>
            <div class="col">
                
            </div>
            <div class="col">
                <button class="btn btn-link" type="button">Acessar estatísticas gerais</button>        
            </div>
                
                
            
            

            
        </div>
            

            <!--
            <div class="estatistica">
                <br>
                <h5>Produção</h5> 
                <br><br>
                <h6>Vazão </h6>
                <h5 style="font-size: 30px"> <?php printf("%.2f ",$media_vazao); ?> ppm</h5>
                <br>
                <button type="button" class="btn btn-light">Detalhar</button> 
            </div>

            
            <div class="estatistica2">
                <br>
                <h5>Fluor</h5> 
                <br><br>
                <h6>Dosagem </h6>
                <h5 style="font-size: 30px"> <?php printf("%.2f ",$media_fluoreto); ?> ppm</h5>
                <br>
                <button type="button" class="btn btn-light">Detalhar</button> 
            </div>
            <div class="estatistica3">
                <br>
                <h5>Cloro</h5> 
                <br><br>
                <h6>Dosagem </h6>
                <h5 style="font-size: 30px"> <?php printf("%.2f ",$media_clorolivre); ?> ppm</h5>
                <br>
                <button type="button" class="btn btn-light">Detalhar</button> 
            </div>
            !-->
            
            
            
        
    </div>

    <br>

    <div class="container text-left">
          
    </div>

    <br>
    <div class="col-6 mx-auto d-flex justify-content-center" style="background-color: #ffffff; border-radius: 5%">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                <div class="col">
                    <br>
                <h4>Últimas análises</h4>
            </div>
            <div class="col-12" style="margin: 10px;">
                <h5><?php echo($mostrarBuscarDia); ?></h5>
                <div>Escolha um mês e dia para ver histórico:  
                <form action="mostraPoco.php" method="get">
                    <input name="poco" value="<?php echo($poco); ?>" type="hidden">
                    <input name="date" id="date" type="date" min="2021-10-30" max="<?php $hoje3 = date('Y-m-d'); echo($hoje3); ?>" onchange="this.form.submit()">
                </form>     
            </div>

            </div>   

                 <?php

                    if ($resultDia != null): ?>
                        <table class="table table-sm text-center">
                            <thead>
                                <tr>
                                <th scope="col">Horário</th>
                                <th scope="col">Cloro Livre</th>
                                <th scope="col">Fluoreto</th>
                                <th scope="col">Turbidez</th>
                                <th scope="col">Cor</th>
                                <th scope="col">pH</th>
                                <th scope="col">Macro vazão</th>
                                <th scope="col">Macro diário</th>
                                <th scope="col">Temperatura</th>
                                
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
                                order by entradas.horario DESC LIMIT 10";
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
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <form action="historico.php">
                            <input type="hidden" name="poco" value="<?php echo($poco); ?>">
                            <button type="submit" class="btn btn-primary me-md-2" type="button" style="background-color: #4361ee">Acessar histórico completo</button>
                        </form>
                        
                    </div>
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