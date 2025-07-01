const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 7, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      { id: 4, name: 'test', age: 3, department: 'Finance', salary: 60000 },
      { id: 5, name: 'omar', age: 5, department: 'HR', salary: 6033000 },
      { id: 6, name: 'kerwa', age: 350, department: 'Finance', salary: 60000 },
      { id: 2, name: 'dada', age: 22, department: 'Finance', salary: 60000 },
    ];
function displayEmployees(){
  const displayEmployees = employees.map((employ,index) => 
    `<p>${employ.id}: ${employ.name} - ${employ.age} - ${employ.department} - ${employ.salary}</p>`
  ).join('');
  document.getElementById('employeesDetails').innerHTML = displayEmployees;
}

function calculateTotalSalaries(){
  const TotalSalaries = employees.reduce((speicher,aktElem) => {
    return speicher + aktElem.salary;
  },0);
  document.getElementById('employeesDetails').innerHTML = `<strong>Die gesamte gehalte:</strong> <mark>${TotalSalaries}</mark>`;
}

function displayHREmployees(){
  const HREmployees = employees.filter((employ) => employ.department === "HR");
  const displayHR = HREmployees.map((em) => `<br>ID: ${em.id} - name: ${em.name} - department: ${em.department}`).join('');
  document.getElementById('employeesDetails').innerHTML = `<div><strong>Mitarbeiter mit ID:</strong> <mark>${displayHR}</mark></div>`;
}

function findEmployeeById(idNr){
  const findID = employees.find((employ) => employ.id === idNr);
  let displayEmploy = "";
  if(findID){
    displayEmploy = `ID: ${findID.id} - name: ${findID.name}`;
  }else{
    displayEmploy = "ID wurde nicht gefunden ...";
  }
  document.getElementById('employeesDetails').innerHTML = `<div><strong>Die mitarbeiter HR:</strong> <mark>${displayEmploy}</mark></div>`;
}
