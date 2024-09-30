import Link from 'next/link';
import React from 'react';

interface SidebarTileProps {
    icon: React.ReactNode;
    url: string;
    label: string;
}
const SidebarTile = ({ icon, url, label }: SidebarTileProps) => {
    return (
        <li className="menu nav-item">
            <Link href={url} className="group">
                <div className="flex items-center">
                    {icon}
                    <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                        {label}
                    </span>
                </div>
            </Link>
        </li>
    );
};

export default SidebarTile;