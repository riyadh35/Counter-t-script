import React, { ChangeEvent, FormEvent, useState } from 'react';



interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleIncrease = (): void => {
        setCounter(counter + 1)
    }
    const handleDecrease = (): void => {
        setCounter(counter - 1)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Jon',
            job: 'police'
        }
        setUser(userData)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }

    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>

            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;