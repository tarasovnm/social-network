import React from "react";

function Users(props) {
    return (
        <div>
            {props.users.map(u => {
                return (
                    <div>user</div>
                );
            })}
        </div>
    );
}

export default Users;

