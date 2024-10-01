import DatatableComponent from '@/components/datatables/datatable-component';
import InfoComponent from '@/components/layouts/info-component';
import { Metadata } from 'next';
import React from 'react';
import TenantsDataTable from './TenantsDataTable';
export const metadata: Metadata = {
    title: 'Tenants',
}
const Page = () => {
    return (
        <div>
            <InfoComponent info="Here are your tenants" />
            <TenantsDataTable />
        </div>
    );
};

export default Page;