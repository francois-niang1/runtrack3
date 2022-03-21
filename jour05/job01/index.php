<?php
session_start();

if(!isset($_SESSION['login'])){?>

    <a href="connection.php"><button>Connexion</button></a>
    <a href="register.php"><button>Inscription</button></a>

<?php
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <title>index</title>
</head>
<body>
<?php
    if(isset($_SESSION)){
        echo "<p>";
        echo "Bonjour  ".$_SESSION['name'];
        echo "</p>";
    }
    ?>
</body>
</html>