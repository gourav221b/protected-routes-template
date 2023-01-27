import React from 'react'
import { Routes, Route, Router, Link } from 'react-router-dom'
import RequireAuth from '../components/RequireAuth'
import { roles } from '../constants/Roles'
import Main from '../pages/Main'

function RoutesPath() {
    return (

        <Routes>
            <Route path="/" element={<><Link to='/dashboard'>dashboard</Link><Link to='/calender'>calender</Link><Link to='/customer'>customer</Link></>} exact />
            <Route path="/calender" element={<>calender</>} />
            <Route path="/unauthorized" element={<>unauthorized</>} />
            <Route path="/login" element={<>login</>} />
            <Route
                element={
                    <RequireAuth
                        allowedRoles={[roles.ADMIN, roles.USER]}
                    />
                }
            >
                <Route path="profile" element={<>profile</>} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[roles.ADMIN]} />} >
                <Route path="/dashboard" element={<Main role={roles.ADMIN} />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[roles.USER]} />} >
                <Route path="/customer" element={<Main role={roles.USER} />} />
            </Route>

            <Route path="*" element={<>404 not found</>} />
        </Routes >

    )
}

export default RoutesPath