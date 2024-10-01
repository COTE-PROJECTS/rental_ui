
import DashboardComponent from '@/components/dashboard/dashboard-component';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const Sales = () => {
    return (
        <DashboardComponent />
    )
};

export default Sales;
