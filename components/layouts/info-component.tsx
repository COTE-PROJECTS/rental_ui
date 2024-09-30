import React from 'react';
import IconBell from '../icon/icon-bell';

const InfoComponent = ({ info }: { info: string; }) => {
    return (
        <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
            <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                <IconBell />
            </div>
            <span className="ltr:mr-3 rtl:ml-3">INFO: </span>
            <span>{info}</span>
        </div>
    );
};

export default InfoComponent;