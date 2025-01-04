const employees = [
    {
        employeeId: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@xyz.com",
        departmentId: 1,
        roleId: 1,
    },
    {
        employeeId: 2,
        name: "Priya Singh",
        email: "priya.singh@xyz.com",
        departmentId: 2,
        roleId: 2,
    },
    {
        employeeId: 3,
        name: "Ankit Verma",
        email: "ankit.verma@xyz.com",
        departmentId: 1,
        roleId: 3,
    }
]

function getEmployees() {
    return employees;
}

function getEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

module.exports = { getEmployees, getEmployeeById };