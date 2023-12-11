/*global fetch*/
document.addEventListener("DOMContentLoaded", function () {
    async function fetchData(grade) {
        let answer = '';
        const ploblemsList = [];
        const answersList = [];
        let count = 0;
        let bonus = 0;
        // ランダム漢字生成とその他の処理
        const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${grade}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e1f7f1f17mshde85943a4deb2b9p1aeed4jsn7367b14e5ec7',
                'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
            }
        };
        const input = document.getElementById("input");
        const result = document.querySelector('.result');
        const correct = document.querySelector('.correct');
        const problem = document.querySelector('.problem');

        for (let i = 0; i < 10; i++) {
            try {
                // ランダム漢字生成
                const res = await fetch(url, options);
                const data = await res.json();
                const response = data[Math.floor(Math.random() * 81)].kanji.character;
                const url1 = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${response}`;
                const res1 = await fetch(url1, options);
                const data1 = await res1.json();
                const response1 = data1.examples[0].japanese;
                const Kanji = response1.split('（');
                const question = Kanji[0];
                answer = Kanji[1].slice(0, -1);
                ploblemsList.push(question);
                answersList.push(answer);
                console.log(answersList);
            } catch (error) {
                console.error(error);
            }
        }
        //タイマー機能
        const limitTime = 300;
        let time = limitTime;
        const watch = document.querySelector('.watch');
        let timer = limitTime;
        let intervalId;
        function startTimer() {
            intervalId = setInterval(() => {
                timer--;
                watch.innerHTML = `<p>残り時間: ${timer/10}秒</p>`;
                if (timer <= 0) {
                    clearInterval(intervalId);
                    count === 10;
                    time = timer;
                    showScore();
                }
            }, 100); // カウントダウン
        }
        //スコア表示
        function showScore() {
            const score = timer*10 + bonus;
            result.innerHTML = `<p>あなたのスコアは ${score} 点です</p>`;
        }
        
        //回答処理
        var answers = {};
        input.addEventListener("keydown", async (event) => {
            if (event.keyCode === 13) {
                if (count === 0) {
                    startTimer(); // タイマー開始
                    event.preventDefault();
                    problem.innerHTML = `<p>${ploblemsList[count]}</p>`;
                    count++;
                } else if (count === 10){
                    clearInterval(intervalId); // タイマー停止
                    event.preventDefault();
                    if (input.value === answersList[count]) {
                        result.innerHTML = `<p>正解です</p>`;
                        correct.innerHTML = `<p></p>`;
                        answers[ploblemsList[count-1]]= '正';
                        bonus += 500;
                    } else {
                        result.innerHTML = `<p>不正解です(答:${answersList[count-1]})</p>`;
                        answers[ploblemsList[count-1]] = '誤';
                    }
                    problem.innerHTML = `<p>終了</p>`;
                    count++;
                    document.getElementById('result_send').value=JSON.stringify(answers);
                    console.log(document.getElementById('result_send').value);
                } else if (count === 11){
                    showScore();
                    count++;
                } else if (count > 11){
                    event.preventDefault();
                    problem.innerHTML = `<p>終了</p>`;
                    console.log(answers);
                    result.innerHTML = `<p></p>`;
                    correct.innerHTML = `<p></p>`;
                    bonus = 500;
                    count++;
                } else {
                    event.preventDefault();
                    if (input.value === answersList[count-1]) {
                        result.innerHTML = `<p>正解です</p>`;
                        correct.innerHTML = `<p></p>`;
                        answers[ploblemsList[count-1]] = '正';
                        bonus += 500;
                    } else {
                        result.innerHTML = `<p>不正解です(答:${answersList[count-1]})</p>`;
                        answers[ploblemsList[count-1]] = '誤';
                    }
                    problem.innerHTML = `<p>${ploblemsList[count]}</p>`;
                    input.value = '';
                    count++;
                }
            }
        });
    }
    
    const currentPage = window.location.pathname;
    if (currentPage.includes('/reading')) {
        const grade = currentPage.substr(currentPage.length-1);
        fetchData(grade);
    }
    
});