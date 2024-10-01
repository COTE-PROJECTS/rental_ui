"use client"
import DatatableComponent from '@/components/datatables/datatable-component';
import { Button } from '@mantine/core';
import React from 'react';

const ReportsDatatable = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center overflow-x-auto whitespace-nowrap p-3 mx-[20em] text-primary">
                <input type="month" name="" id="payment-month" className='form-input mx-3' />
                <button className='btn btn-primary btn-md w-36 m-1 p-2' type='button'>Filter</button>
            </form>
            <DatatableComponent addLabel='' />
        </div >
    );
};

export default ReportsDatatable;