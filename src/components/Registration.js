import React, { useState } from 'react'

import './index.css'

export const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const handleFieldChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }

    const handleEmailFieldChange = (event) => {
        const value = event.target.value
        if (value.includes('@') && user.username === '') {
            const defaultUserName = value.split('@')[0]
            setUser({...user, [event.target.name]:value, ['username']:defaultUserName})}
        else {
            setUser({...user, [event.target.name]:value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // todo - not a good idea to log passwords, exercise requirements only
        console.log(user)
    }

    return (
        <div className={'form'}>
            <h1 className={'title'}>Registration</h1>
            <form className={'form border'} onSubmit={handleSubmit}>
                <input type={'email'} className={'field'} name={'email'} value={user.email} placeholder={'Email Address'} onChange={handleEmailFieldChange} />
                <input type={'text'} className={'field'} name={'username'} value={user.username} placeholder={'User Name'} onChange={handleFieldChange} />
                <input type={'password'} className={'field'} name={'password'} value={user.password} placeholder={'Password'} onChange={handleFieldChange} />
                <input type={'password'} className={'field'} name={'passwordConfirm'} value={user.passwordConfirm} placeholder={'Confirm Password'} onChange={handleFieldChange} />
                <input type={'submit'} value={'Register'} className={'confirmation'} />
            </form>
        </div>
    )
}