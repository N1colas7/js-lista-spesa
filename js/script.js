const list = [
    'Nutella',
    'Guanciale',
    'acqua',
    'zucchero',
    'sale',
    'pomodoro',
    'pasta'
]

const listContainer = document.querySelector('.lista-spesa');
 
let element =  '';
let i = 0;
while (i < list.length) {   
    let item = list[i];

    let element = `<li class="list-item">${item}</li>` 
    listContainer.innerHTML += element ;



    i++;
    

}