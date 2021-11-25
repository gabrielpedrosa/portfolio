<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://kit.fontawesome.com/cf83dd7f82.js" crossorigin="anonymous"></script>

        <link rel="stylesheet" href="../css/flexStyle.css">

        <title>Dashboard</title>
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
    </head>

    <body class="bg-light-gray">
        <div class="container pd-30">
            <div class="row pd-30">
                <div class="col-2">
                    <div class="labelTitle">
                        <label class=""><a href="dashboard.php">Dashboard</a></label>
                    </div>
                </div>
                <div class="col-2">
                    <select>
                        <option>Poço 1</option>
                        <option>Poço 2</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="graphContent">
                        <div id="donutchart" style="width: 400px; height: 300px;"></div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-2">
                            <label class="labelCard">texto card</label>
                        </div>
                        <div class="col-2">
                            <label class="labelCard">texto card</label>
                        </div>
                        <div class="col-2">
                            <label class="labelCard">texto card</label>
                        </div>  
                    </div>  
                </div>  
            </div>
        </div>
    </body>
</html>
