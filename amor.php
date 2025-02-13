<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carta de San Valentín</title>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .background {
            min-height: 100vh;
            background: linear-gradient(-45deg, #ff1493, #f3bbd7);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    </style>
</head>

<body>
    <div class="background">

        <div id="hearts-container"></div>

            <div class="card">
                <h1>Para mi niña</h1>
                <p class="message">Desde que te conocí, supe que eras una mujer increíble Johanita bonita👑. Cada día a tu lado se vuelve más especial, Celestita 💙. Admiro tu sonrisa, tu fortaleza y todo lo que eres. Me quedaré siempre a tu lado por que <strong>TE AMO #7</strong> ❤️ </p>
                <p class="question">¿Quieres ser mi San Valentín?</p>
                <!-- Asegúrate de que estos botones tienen las clases correctas -->
                <div class="buttons-container">
                <button class="btn-si">Sí 💖</button>
                <button class="btn-no" id="botonNo" >No 💔</button>
            </div>
            <a id="descargar" href="Amor.pdf" download class="btn-download" style="display: none;">Descargar Carta ⬇️</a>
            </div>
    </div>
    <!-- Asegúrate de que el script se carga al final -->
    <script src="script.js" >
    </script>
</body>

</html>