import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props {
//     name: string,
//     age?: number,
//     addUser: () => void
// }

interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div>
            <h2>Hi, Iam {user.name}.. Email:{user.email} </h2>
            <button onClick={() => addUser(user)}>Add me</button>
        </div>
    );
};

export default User;