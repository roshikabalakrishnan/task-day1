let employees=[];

function addEmp(id,name,salary=true){
    employees.push({id,name,salary});
    console.log("employee added",employees);
}
addEmp(1,"vikashini",2000)
addEmp(2, "hari",30000)
addEmp(3,"john",10000)

function updateEmp(id,newdetail){
    const emp=employees.find(e=>e.id==id)
    if(emp){
        Object.assign(emp,newdetail);
        console.log("updated",employees)
    }else{
        console.log("employees not found")
    }
}
updateEmp(3,{name:"joe"});

function removeEmp(id){
    const index=employee.findindex((e)=>e.id === id);
    if(index !== -1){
        employees.splice(index ,id)
        console.log("employee removed",employees)
    } else {
        console.log("employee not found");
 }
}
removeEmp(1)
///calculate total  salary
function totalsalary(){
    const total=employees.reduce((sum,emp) =>sum+emp.salary ,0);
    console.log("total salary is ",total)
}
totalsalary()