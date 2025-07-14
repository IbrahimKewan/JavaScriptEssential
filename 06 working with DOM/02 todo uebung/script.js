const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
let formular = document.getElementById('formular');
let arrInputs = [];

btnAdd.addEventListener('click', () =>{
    const input = document.getElementById('input').value;
    if(!input || input.trim() === ""){
        window.alert('Bitte textfeld eingeben!!!');
        return;
    }
    arrInputs.push(input);
    displayList();
});

function displayList(){
    formular.innerHTML = '';
    arrInputs.forEach((item,index) =>{
        const div = document.createElement('div');
        div.textContent = `${index+1}: ${item}`;
        formular.appendChild(div);
    });
}
btnDelete.addEventListener('click', () =>{
    arrInputs = [];
    displayList();
    document.getElementById('input').value = '';
});