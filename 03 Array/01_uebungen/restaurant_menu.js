const breakfastMenu = [
    {artikel : 'Pancakes', preis: 12},
    {artikel: 'Eggs Benedict' , preis: 22.99}, 
    {artikel: 'Oatmeal', preis: 21.99} , 
    {artikel: 'Frittata', preis: 15}
];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItems = breakfastMenu.map((item,index) =>
    `<p>Artikel ${index +1}: ${item.artikel} - Preis:${item.preis}$</p>`
);
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItems.join('');

let mainCourseMenuItems = "";
mainCourseMenu.forEach((item,index) =>
    mainCourseMenuItems += `<p>Artikel ${index+1}: ${item}</p>`
);
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItems;

let dessertMenuItems = "";
for (let index = 0; index < dessertMenu.length; index++) {
    dessertMenuItems += `<p>Artikel ${index+1}: ${dessertMenu[index]}</p>`;    
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItems;