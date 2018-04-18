import { 
    addNewEmployee, 
    getEmployees, 
    getEmployeeWithID, 
    updateEmployee,
    deleteEmployee 
} from '../controllers/employeeListController';

const routes = (app) => {
    app.route('/employees')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getEmployees)
    
    // POST endpoint
    .post(addNewEmployee);

    app.route('/employee/:employeeId')
    // get specific employee
    .get(getEmployeeWithID)
    
    // put request
    .put(updateEmployee)

    // delete request
    .delete(deleteEmployee);
}

export default routes;
