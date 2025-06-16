function calculateArea(){
    let length;
    let width;

    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerText = `The area of rechEck ist: ${area}`;
}

function calculateGrocery(){
    let gercery_1 = parseFloat(document.getElementById("1_Lebensmittel").value);
    let gercery_2 = parseFloat(document.getElementById("2_Lebensmittel").value);
    let gercery_3 = parseFloat(document.getElementById("3_Lebensmittel").value);
    let sum =  gercery_1 + gercery_2 + gercery_3;
    document.getElementById("result_Grocery").innerText = `Die gesamte kauf ist: ${sum}`;
}