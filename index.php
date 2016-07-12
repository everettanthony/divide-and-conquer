<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Divide & Conquer</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/styles.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">
      <div class="section" role="battle">
        <h1>Divide & Conquer</h1>
        <p class="lead">A battle of two armies.</p>

        <div id="battleStage">
          <div class="game">
            <div id="report" class="tactic"></div>
            <ul id="info-list" style="display:none">
              <li class="damage"></li>
              <li class="grandTotal"></li>
              <li class="remaining"></li>
            </ul>
          </div>
          <input type="submit" class="btn btn-default" id="turn" value="Begin the Battle" onClick="usa.attack(british)" />
        </div>
        <div id="loser"></div>
        <div id="narrator"></div>
      </div>

      <div class="section" role="form">
        <form id="theForm" action="stats.php" method="post" name="theForm">
          <input type="hidden" class="form-data" id="data" name="data" value="">
          <button type="submit" class="btn btn-default" id="submit" onclick="saveBattle(); return false;" style="display:none">Save Battle</button>
        </form>
        <div id="success"></div>
      </div>

    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
    <script src="js/game.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>