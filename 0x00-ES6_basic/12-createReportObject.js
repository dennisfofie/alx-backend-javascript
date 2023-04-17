import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(
  employeesList = createEmployeesObject(),
) {
  createReportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
  return createReportObject;
}
