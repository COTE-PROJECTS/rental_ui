import ComponentsDatatablesExport from '@/components/datatables/datatable-component';
import InfoComponent from '@/components/layouts/info-component';
import { Button } from '@mantine/core';
import { Metadata } from 'next';
import React from 'react';
import ReportsDatatable from './ReportsDatatable';
export const metadata: Metadata = {
    title: 'Payments',
}
const Page = () => {
    return (
        <div>
            <ReportsDatatable />
        </div>
    );
};

export default Page;