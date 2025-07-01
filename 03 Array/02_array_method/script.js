const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
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
