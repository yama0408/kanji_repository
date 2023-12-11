<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>kanjidojo</title>
        <!-- Fonts -->
        <link href="/css/index.css" rel="stylesheet">
    </head>
    <body>
        <script src="{{ asset("/js/play.js") }}"></script>
        <h1 class='subtitle'>読み問題 レベル{{$grade}}</h1>
        <div class="problem">エンターキーでスタートします</div>
        <div><input type="text" class="box" id="input"></div>
        <div class="result"></div>
        <div class="correct"></div>
        <div class="watch"></div>
        <div class="score"></div>
        <form><input id='result_send' type="text" value="testdayo" name="answers"></form>
    </body>
</html>