const formular = document.getElementById('formular');
const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
let liste = [];

btnAdd.addEventListener('click', () =>{
    const input = document.getElementById('input').value;
    if (!input || input.trim() === ""){
        window.alert('textbox darf nicht leer sein');
        return;
    }
    liste.push({text: input, done:false});
    displayList();
});

function displayList(){
    formular.innerHTML = '';
    liste.forEach((item,index) =>{
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        checkbox.id = `cbListe_${index}`;
        checkbox.type = 'checkbox';
        label.textContent = item.text;

        checkbox.checked = item.done;
        if (item.done){
            label.classList.add('done');
        }

        checkbox.addEventListener('change', () => {
            item.done = checkbox.checked;
            label.classList.toggle('done', item.done);
        });

        div.appendChild(checkbox);
        div.appendChild(label);
        formular.appendChild(div);
    });
}

btnDelete.addEventListener('click', (item, index) =>{
    liste = [];
    displayList();
    document.getElementById('input').value = '';
});