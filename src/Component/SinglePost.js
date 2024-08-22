import React, { useContext } from 'react';
import { LoginContext } from '../App';

const SinglePost = () => {
    const login = useContext(LoginContext);  // Consuming the context value
    console.log(login);
    
    return (
        <div>SinglePost - Login Context Value: {login}</div>
    );
}

export default SinglePost;
