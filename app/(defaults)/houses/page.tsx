import DatatableComponent from '@/components/datatables/datatable-component';
import InfoComponent from '@/components/layouts/info-component';
import { Metadata } from 'next';
import React from 'react';
import HousesDatatable from './HousesDatatable';
const metadata: Metadata = {
    title: 'Houses',
};
export { metadata };
const Page = () => {
    return (
        <div>
            <InfoComponent info="Houses" />
            <HousesDatatable

            />
        </div>
    );
};

export default Page;