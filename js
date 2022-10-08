<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>gg</title>
    <script>
        function hello() {
            let x = prompt('Введите ваше имя');
            document.write('Привет ' + x + ' и добро пожаловать!');
        }
    </script>
</head>

<body>
    <form action="javascript:hello()">
        <input type="submit" value="Сказать привет">
    </form>

</body>

</html>
