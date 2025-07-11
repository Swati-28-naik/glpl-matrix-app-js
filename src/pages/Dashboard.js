import React from 'react';
import Header from '../components/Header';
import DrawerMenu from '../components/DrawerMenu';
import ProjectList from '../components/ProjectList';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <DrawerMenu />
            <ProjectList />
        </div>
    );
};

export default Dashboard;