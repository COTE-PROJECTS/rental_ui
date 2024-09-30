import ComponentsDatatablesExport from '@/components/datatables/datatable-component';
import InfoComponent from '@/components/layouts/info-component';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Payments',
}
const Page = () => {
    return (
        <div>
            <InfoComponent info="Here are your payments" />
            <ComponentsDatatablesExport />
        </div>
    );
};

export default Page;