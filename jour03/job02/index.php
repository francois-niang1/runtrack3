<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script type='text/javascript' src='script.js'></script>
    <title>Document</title>
</head>
<body>
    <main>
        <button id="button">Mélanger</button>
        <div id="rangees">
        </div>
        <div id="melangees">
            <div id="img1"><img src="img/arc1.png" alt=""></div>
            <div id="img2"><img src="img/arc2.png" alt=""></div>
            <div id="img3"><img src="img/arc3.png" alt=""></div>
            <div id="img4"><img src="img/arc4.png" alt=""></div>
            <div id="img5"><img src="img/arc5.png" alt=""></div>
            <div id="img6"><img src="img/arc6.png" alt=""></div>
        </div>

        <style>
            #melangees{
                display: flex;
                flex-direction: row;
                border: 1px solid black;
            }
            #rangees{
                display: flex;
                flex-direction: row;
                border: 1px solid black;
                height: 400px;
            }

            div{
                margin: 0.125rem;
            }
        </style>
    </main>
</body>
</html>