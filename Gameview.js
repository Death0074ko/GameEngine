<!DOCTYPE html>

<html>

<head>

    <title>Renderizador 3D</title>

    <style>

        body, html {

            margin: 0;

            padding: 0;

            overflow: hidden;

        }

        

        #canvas {

            width: 100%;

            height: 100%;

        }

    </style>

</head>

<body>

    <canvas id="canvas"></canvas>

    <script>

        var canvas = document.getElementById("canvas");

        var ctx = canvas.getContext("webgl");

        

        // Função para criar um cubo

        function createCube() {

            // Aqui você pode adicionar o código para criar um cubo usando o WebGL

            // Por exemplo, você pode usar funções como ctx.beginPath(), ctx.lineTo(), ctx.stroke(), etc.

        }

        

        // Chamada da função createCube() ao clicar no botão

        document.getElementById("createButton").addEventListener("click", function() {

            createCube();

        });

    </script>

    <button id="createButton">Criar Cubo</button>

</body>

</html>

