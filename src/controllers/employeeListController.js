import mongoose from 'mongoose';
import { EmployeeSchema } from '../models/employeeListModel';

const Employee = mongoose.model('Employee', EmployeeSchema);

export const addNewEmployee = (req, res) => {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

export const getEmployees = (req, res) => {
    Employee.find({}, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
};

export const getEmployeeWithID = (req, res) => {
    Employee.findById(req.params.employeeId, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    });
}

export const updateEmployee = (req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.employeeId}, req.body, { new: true }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

export const deleteEmployee = (req, res) => {
    Employee.remove({ _id: req.params.employeeId }, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted employee'});
    })
}
