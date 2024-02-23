import React from 'react';
import StudentList from '../components/StudentList';
import students from '../data/students.js.not-used';

const StudentListPage = (param) => {
    let filteredStudents = students;
    if (param.exceptId !== undefined) {
        filteredStudents = students.filter((p) => p.studentId !== param.exceptId);
    }

    return (
        <React.Fragment>
            <h1>Student List Page</h1>
            <StudentList />
        </React.Fragment>
    );
}
export default StudentListPage;
