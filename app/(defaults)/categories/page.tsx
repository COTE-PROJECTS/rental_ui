import DatatableComponent from '@/components/datatables/datatable-component';
import InfoComponent from '@/components/layouts/info-component';
import { Metadata } from 'next';
import React from 'react';
import CategoriesDatatable from './CategoriesDatatable';
export const metadata: Metadata = {
    title: 'House Categories',
}
const Page = () => {
    return (
        <div>
            <InfoComponent info='All House categories' />
            <CategoriesDatatable />
        </div>
    );
};

export default Page;