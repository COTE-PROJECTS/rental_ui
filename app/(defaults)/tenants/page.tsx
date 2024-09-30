import DatatableComponent from '@/components/datatables/datatable-component';
import InfoComponent from '@/components/layouts/info-component';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: 'Tenants',
}
const Page = () => {
    return (
        <div>
            <InfoComponent info="Here are your tenants" />
            <DatatableComponent />
        </div>
    );
};

export default Page;