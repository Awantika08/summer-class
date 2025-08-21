import React from 'react';

function ProfessorInformation({
 id,
 name,
 username,
}: {
    id: number;
    name: string;
    username: string;
}) {
    return (
        <div>
            <h1>New Information</h1>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
        </div>
    );
}

export default ProfessorInformation;
