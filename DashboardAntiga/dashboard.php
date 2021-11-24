<?php
require "DataBase.php";
$db = new DataBase();
if ( ( isset($_POST['func_usuario']) && isset($_POST['func_senha']) ) || ( isset($_SESSION['func_usuario']) && isset($_SESSION['func_senha']) ) ) {
    if ($db->dbConnect()) {
        if ($db->logIn("funcionarios", $_POST['func_usuario'], $_POST['func_senha'])) {
            

            #$usuario = $_POST['func_usuario'];
            #$senha = $_POST['func_senha'];
            $usuario = "pedro";
            $senha = "123";
            if (session_status() !== PHP_SESSION_ACTIVE) {//Verificar se a sessão não já está aberta.
              session_start();
              $_SESSION['func_usuario'] = $usuario;
              $_SESSION['func_senha'] = $senha;
            } else {
              session_unset();
              session_destroy();
              session_start();
              $_SESSION['func_usuario'] = $usuario;
              $_SESSION['func_senha'] = $senha;
            }
        } else echo("");
    } else echo("");
} else {
  echo ("deslogado"); 
}
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Bootstrap CSS -->
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://kit.fontawesome.com/cf83dd7f82.js" crossorigin="anonymous"></script>

    <script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Status', 'Poços'],
          ['Crítico',      2],
          ['Médio',      3],
          ['Ok',  14],
          ['Sem dados',  2]
        ]);

        var options = {
          pieSliceText: 'none',
          pieSliceTextStyle: {
            color: 'black',
          },
          title: '',
          backgroundColor: '#E4E4E4' ,
          slices: {
            0: { color: '#b32c2c' },
            1: { color: '#eabc1a' },
            2: { color: '#15b27e' },
            3: { color: 'grey' },
          },
          legend: 'bottom',
          pieHole: 0.7,
          chartArea: {
          backgroundColor: {
            fill: '#FF0000',
            fillOpacity: 0.4
            },
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
    </script>


    <title>Dashboard geral</title>

  </head>

  <body style="background: #E4E4E4">
    <br>
    <div class="container ">
      <div class="row">
          
      </div>
      <br>

      <?php

        $db->dbConnect();
        $query = "select * from pocos";
        $result = $db->executaQuery($query);

      ?>

      <div class="row flex nowrap">
          <div class=""> <h3><?php $hoje = date('d/m/Y'); echo($hoje); ?></h4> </div> 
          <div class="flex-col justify-center select">
            <form action="mostraPoco.php" method="get">
              <select name="poco" onchange="this.form.submit()"> 
                  <option value="" selected>Selecione um poço para detalhar </option>
                  <?php while ($row = mysqli_fetch_array($result)): ?>
                      <option name="poco" value="<?php echo($row['id']); ?>"><?= $row['id'] ?></option>
                  <?php endwhile; ?>
               </select>
            </form>
                
          </div>

          <!-- <div class="col-2"> <button type="button" class="btn btn-primary" style="background: #4361ee; border-radius: 20px; width: 50%; padding: 9px 13px;">Ir</button> </div> 
          !-->
            
      </div>


    </div>
    
    <br>
    
    

    <div class="container justify-content-center flex">

        <div class="flex-2">
          <div class="flex-col legend">
              <div id="donutchart" style="width: 100%; height: 100%;"></div>
          </div>
            
          <div class="flex-col text-center d-flex justify-content-center flex">
              <div class="estatistica">
                <br>
                  <h5>Produção</h5>
                  <button type="button" class="btn btn-light">Detalhar</button> 
              </div>
              <div class="estatistica2">
                <br>
                  <h5>Fluor</h5> 
                  <button type="button" class="btn btn-light">Detalhar</button> 
              </div>
              <div class="estatistica3">
                <br>
                  <h5>Cloro</h5> 
                  <button type="button" class="btn btn-light">Detalhar</button> 
              </div>
          </div>
            
        </div>  
        
    </div>

    <br>

    <div class="container d-flex justify-content-start ">
        <div class="row w-100">
            <div class="col-12">
                 <div class="col justify-center">
                      <h4>Status poços mês</h4>
                 </div>
                 <div class="container-fluid d-flex justify-content-start">
                 <div class="flex">
                    <div class="col testbutton" style="margin: 10px;">
                        <h6>Jan</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Fev</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Mar</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Abr</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Mai</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Jun</h6>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Jul</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Ago</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Set</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Out</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Nov</h6>
                    </div>
                    <div class="col testbutton"style="margin: 10px;">
                        <h6>Dez</h6>
                    </div>
                  </div>
                    
                 </div>
            </div>
            
        </div>
    
    </div>
         
    
    <div class="container-fluid d-flex justify-content-center">
        Ainda sem dados de outros meses.
    </div>

  

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