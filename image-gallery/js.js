// Создание узлов
let input = document.querySelector('input');
let submit = document.querySelector('label');
let grid = document.querySelector('#grid');

// Cоздание запроса для первоначальных картинок
let url = 'https://api.unsplash.com/search/photos?query=spring&client_id=4i7AedcwOXwSYnpCBKgBOfbcmnB2Pf0ybKkUy_--MJY';

// Cоздание функции вывода картинок на экран
function showData(data) {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = data.results[0].urls.regular;
    img.alt = 'image';
    grid.append(img);
}

// Вывод картинок при открытии приложения
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    function showData(data) {
        data.results.map((elem) => {
            const img = document.createElement('img');
            img.classList.add('gallery-img');
            img.src = elem.urls.regular;
            img.alt = 'image';
            grid.append(img);
        })
    }
    showData(data);
}
getData();

// Поиск картинок по запросу при клике на лупу
submit.addEventListener('click', function() {
    let images = document.querySelectorAll('.gallery-img');
    for (img of images) {
        img.remove();
    }
    url = `https://api.unsplash.com/search/photos?query=${input.value}&client_id=4i7AedcwOXwSYnpCBKgBOfbcmnB2Pf0ybKkUy_--MJY`;
    async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        function showData(data) {
            data.results.map((elem) => {
                const img = document.createElement('img');
                img.classList.add('gallery-img');
                img.src = elem.urls.regular;
                img.alt = 'image';
                grid.prepend(img);
            })
        }
        showData(data);
    }
    
    getData();
})

// Поиск картинок по запросу при нажатии Enter
input.addEventListener('keydown', async function(event) {
    if (event.code == 'Enter') {
        let images = document.querySelectorAll('.gallery-img');
    for (img of images) {
        img.remove();
    }
    url = `https://api.unsplash.com/search/photos?query=${input.value}&client_id=4i7AedcwOXwSYnpCBKgBOfbcmnB2Pf0ybKkUy_--MJY`;
    }
    const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        function showData(data) {
            data.results.map((elem) => {
                const img = document.createElement('img');
                img.classList.add('gallery-img');
                img.src = elem.urls.regular;
                img.alt = 'image';
                grid.prepend(img);
            })
        }
        showData(data);
})