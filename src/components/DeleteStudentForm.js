import React from "react";
import { useParams } from "react-router-dom";
import CONSTANTS from "../data/config";

const DeleteStudent = () => {
    const { id } = useParams();

    const deleteStudent = () => {
        fetch(`${CONSTANTS.BASE_API_URL}students/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            console.log(response); // 디버깅을 위해 응답 로그 출력
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) });
            }
            return response.text(); // JSON 대신 text 응답을 기대합니다.
        })
        .then(() => {
            alert('Student deleted successfully!');
            // 삭제 후 페이지를 새로 고침하거나 리디렉션 할 수 있습니다.
            window.location.reload(); // 예시로 페이지 새로 고침을 추가
        })
        .catch(error => {
            console.error("Error:", error);
            alert('Failed to delete the student.');
        });
    };
    
    return (
        <React.Fragment>
            <form onSubmit={(e) => e.preventDefault()}>
                <h3>Delete Student</h3>
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="ID"
                        value={id}
                        readOnly // ID는 URL에서 가져온 값으로, 사용자가 변경할 수 없어야 합니다.
                    />
                </div>
                <input
                    type="button" // type을 'submit'에서 'button'으로 변경
                    onClick={deleteStudent}
                    className="btn btn-danger"
                    value="Delete"
                />
            </form>
        </React.Fragment>
    );
};

export default DeleteStudent;
