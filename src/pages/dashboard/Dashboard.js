import classes from './Dashboard.module.css';

import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import DashboardSidebar from '../../components/dashboard/sidebar/DashboardSidebar';
import DashHeader from '../../components/dashboard/header/DashHeader';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);


    useEffect(() => {
        axios.get('http://192.168.43.7:8000/api/welcome', {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setData(res.data);
            });
    }, []);

    const toggleSidebarHandler = () => {
        setSidebarIsOpen(prevState => !prevState);
    }

    return (
        <div className={classes.dashboard}>
            <DashboardSidebar isOpen={sidebarIsOpen} />
            <main>
                <DashHeader onClick={toggleSidebarHandler} />
                <Outlet />
            </main>
        </div>
    )
};

export default Dashboard;