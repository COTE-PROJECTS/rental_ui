import InfoComponent from '@/components/layouts/info-component';
import { Metadata } from 'next';
import React from 'react';
import PaymentDataTable from './PaymentDataTable';
export const metadata: Metadata = {
    title: "Payments"
}
const Page = () => {
    return (
        <>
            <InfoComponent info='Payments' />
            {/* table */}
            <PaymentDataTable />
        </>
    );
};

export default Page;