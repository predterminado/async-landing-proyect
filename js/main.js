const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '39063ceed4msh95c1f5d4d06b313p1d1392jsn102501123ecd',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};
let iterableArray = []
async function getChanell() {
    try {
        let response = await fetch(url, options);
        let data = await response.json();
        console.log(data)
        return data
    }
    catch(e){ 
        return console.log(`sorry mai manitou ;( ${e}`)
    }

}

const chanellSection = document.querySelector(".content-space-fetch");

let arrayChanels 

async function getInfo() {
    let data = await getChanell();
    arrayChanels = data.items;
    console.log(arrayChanels);
    console.log(arrayChanels[0]);
    console.log(arrayChanels[0].snippet.title);
    console.log(arrayChanels[0].snippet.thumbnails);
    for (let i = 0; i < arrayChanels.length; i++) {
        let element = arrayChanels[i];
        let videoTemplate = `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${element.snippet.thumbnails.high.url}" alt="${element.snippet.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"><a href="https://www.youtube.com/watch?v=${element.id.videoId}" target="_blank">${element.snippet.title}</a></span>
                    ${element.snippet.title}
                    </h3>
                </div>
            </div>`
        chanellSection.innerHTML += videoTemplate;
    }
}

getInfo()



