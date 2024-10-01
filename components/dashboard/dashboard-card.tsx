import React from 'react';
import IconEye from '../icon/icon-eye';
interface DashCardInterface {
    to: string;
    from: string;
    label: string;
    subtitle: string;
    mainLabel: string;
}
const DashboardCard = ({ to, from, label, subtitle, mainLabel, }: DashCardInterface) => {
    return (
        <>
            {/* {from} */}
            <div className={`panel bg-${from}-600`}>
                <div className="flex justify-between">
                    <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">{label}</div>
                </div>
                <div className="mt-5 flex items-center">
                    <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {mainLabel} </div>
                    {/* <div className="badge bg-white/30">- 0.35% </div> */}
                </div>
                <div className="mt-5 flex items-center font-semibold">
                    <IconEye className="shrink-0 ltr:mr-2 rtl:ml-2" />
                    {subtitle}
                </div>
            </div>
        </>

    );
};

export default DashboardCard;