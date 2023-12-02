
/* global fetch */

async function getKanji(){
	const url = 'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e1f7f1f17mshde85943a4deb2b9p1aeed4jsn7367b14e5ec7',
		'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

console.log("1S")
}

document.addEventListener("DOMContentLoaded", getKanji())