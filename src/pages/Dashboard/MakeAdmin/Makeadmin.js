import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';



const Makeadmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    // console.log(email);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                // console.log(data);
            })
        e.preventDefault()
    }
    return (
        <div className='text-center'>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdmin}>

                <TextField sx={{ width: '50%' }} type='email' onBlur={handleOnBlur} label="Email" variant="standard" />
                <br /><br />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default Makeadmin;