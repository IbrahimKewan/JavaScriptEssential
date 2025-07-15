const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
const output = document.getElementById('output');

let list = [];

btnAdd.addEventListener('click', () =>{
    const inputTxt = document.getElementById('inputTxt').value;
    const inputKategory = document.getElementById('inputKategory').value;
    
    if( (!inputTxt || !inputKategory) || (inputTxt.trim() === "") ){
        window.alert('Bitte beides eingeben !!!');
        return;
    }   
    list.push(
        {
            text: inputTxt,
            kategory: inputKategory
        }
    );
    displayList();
});

function displayList(){
    output.innerHTML = '';
    list.forEach((arr, index) => {
        const div = document.createElement('div');
        div.classList.add('entry', arr.kategory); 

        const label = document.createElement('span');
        label.classList.add('label');
        label.textContent = `${arr.text}`;

        const categoryTag = document.createElement('span');
        categoryTag.classList.add('category');
        categoryTag.textContent = arr.kategory;

        const btnDel = document.createElement('button');
        btnDel.textContent = '🗑️';
        btnDel.title = 'Löschen';
        btnDel.addEventListener('click', () => {
            list.splice(index, 1);
            displayList();
        });

        div.appendChild(label);
        div.appendChild(categoryTag);
        div.appendChild(btnDel);
        output.appendChild(div);
    });
}


btnDelete.addEventListener('click', () =>{
    list = [];
    document.getElementById('inputTxt').value = '';
    document.getElementById('inputKategory').value = '';
    displayList();
});