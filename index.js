const body = document.querySelector('body');

function buildTitle(element) {
    const h1 = document.createElement('h1');
    h1.textContent = element.title;
    
    body.appendChild(h1);
}

function buildText(element) {
    element.paragraphs.forEach(item => {
        const p = document.createElement('p')
        p.textContent = item
        body.appendChild(p)
    })
}

fetch('./database.json')
    .then(response => response.json())
    .then(data => {
        const texts = data.texts
        
        texts.reverse().forEach(element => {
            buildTitle(element)
            buildText(element)
        });
    });