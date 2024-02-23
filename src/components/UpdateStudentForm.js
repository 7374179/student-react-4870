import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CONSTANTS from "../data/config";
import { Navigate } from 'react-router-dom';


const UpdateStudent = ({ initialStudentInfo }) => {
    console.log(initialStudentInfo);
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');

    useEffect(() => {
        if (initialStudentInfo) {
            setFirstName(initialStudentInfo.firstName);
            setLastName(initialStudentInfo.lastName);
            setSchool(initialStudentInfo.school);
        }
    }, [initialStudentInfo]);
    const updateStudentDetails = () => {
        fetch(`${CONSTANTS.BASE_API_URL}students/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                studentId: id,
                firstName: firstName,
                lastName: lastName,
                school: school,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error("Error:", error));

            // Navigate('/list',{state:{refresh:true}});
            // <Navigate to={{pathname:"/list",state:{refresh:true}}}/>;
    
    };

    return (
        <React.Fragment>
            <form onSubmit={(e) => e.preventDefault()}>
                <h3>Update Student</h3>
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        className="form-control"
                        type="number"
                        value={Number(id)}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={firstName}
                        onChange={(event) =>
                            setFirstName(event.target.value)
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={lastName}
                        onChange={(event) =>
                            setLastName(event.target.value)
                        }
                    />
                </div>
                <div className="form-group">
                    <label>School:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={school}
                        onChange={(event) =>
                            setSchool(event.target.value)
                        }
                    />
                </div>

                <button type="button" onClick={updateStudentDetails} className="btn btn-success">
                    Update
                </button>
            </form>
        </React.Fragment>
    );
};

export default UpdateStudent;