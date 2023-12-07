/*global fetch*/
document.addEventListener("DOMContentLoaded", function () {

    let answer = '';
    const ploblemsList = [];
    const answersList = [];
    let count = 0;
    document.getElementById("reading1").addEventListener("click", async () => {

        const two = 2;
        const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${two}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e1f7f1f17mshde85943a4deb2b9p1aeed4jsn7367b14e5ec7',
                'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
            }
        };

        for (let i = 0; i < 10; i++) {
            
            // ランダム漢字生成
            var response = await fetch(url, options)
                .then(res => res.json())
                .then(data => data[Math.floor(Math.random() * 81)].kanji.character)
                .catch(error => {
                    console.error(error);
                });

            const url1 = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${response}`;
            const options1 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '2e1f7f1f17mshde85943a4deb2b9p1aeed4jsn7367b14e5ec7',
                    'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
                }
            };

            // 漢字の読み入手
            var response1 = await fetch(url1, options1)
                .then(res => res.json())
                .then(data => data.examples[0].japanese)
                .catch(error => {
                    console.error(error);
                });

            const Kanji = response1.split('（');
            const question = Kanji[0];
            answer = Kanji[1].slice(0, -1);

            ploblemsList.push(question);
            answersList.push(answer);
            console.log(answersList);
        }

        const textArea = document.querySelector('.textarea');
        textArea.innerHTML = `<p>${ploblemsList[0]}</p>`;

    });
    
    
    document.getElementById("input").addEventListener("keydown", async (event) => {
        if (event.keyCode === 13) {
            if (count != 10) {
                event.preventDefault(); 
                const textbox = document.getElementById("input");
                const result = document.querySelector('.result');
            
                if (textbox.value === answersList[count]){
                    console.log("正解です");
                    result.innerHTML = `<p>正解です</p>`;
                } else {
                    console.log("不正解です"); 
                    result.innerHTML = `<p>不正解です</p>`;
                }
            
                count++;
                console.log(count);
                console.log(ploblemsList[count]);
                const textArea = document.querySelector('.textarea');
                textArea.innerHTML = `<p>${ploblemsList[count]}</p>`;
            
                // 入力欄をクリアする
                textbox.value = '';
                }
            
            else {
                event.preventDefault(); 
                const textbox = document.getElementById("input");
                const result = document.querySelector('.result');
            
                if (textbox.value === answersList[count]){
                    console.log("正解です");
                    result.innerHTML = `<p>正解です</p>`;
                } else {
                    console.log("不正解です"); 
                    result.innerHTML = `<p>不正解です</p>`;
                }
                
                
                count++;
                console.log(count);
                console.log(ploblemsList[count]);
                const textArea = document.querySelector('.textarea');
                textArea.innerHTML = `<p>あなたのスコアは～です</p>`;
            
                
                
            }
            
            
            
        }
    });
        
  
});

