'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DashboardCard from './dashboard-card';

const DashboardComponent = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const dashData = [
        {
            label: 'Houses',
            value: 0,
            color: 'blue',
        }, {
            label: 'Tenants',
            value: 0,
            color: 'orange',
        }, {
            label: 'Payments (this month)',
            value: 0,
            color: 'green',
        }
    ]
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Summary</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {
                        dashData.map((d, index) => (
                            <DashboardCard
                                key={index}
                                to={d.color}
                                from={d.color}
                                label={d.label}
                                subtitle="0"
                                mainLabel="0" />
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 gap-2">
                    {/*  Recent Transactions  */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">Recent Transactions</div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="ltr:rounded-l-md rtl:rounded-r-md">ID</th>
                                        <th>TENANT</th>
                                        <th>PAYMENT</th>
                                        <th>AMOUNT</th>
                                        <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
