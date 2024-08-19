const btn = document.getElementById('btn');

const parentH2element = document.getElementById('text');

btn.addEventListener('click', () => {

    var x =document.getElementById('text');
    
    x.innerHTML= '';

    const newText = document.createElement('h2');

    newText.textContent = 'ボタンがクリックされました';

    text.appendChild(newText);

});