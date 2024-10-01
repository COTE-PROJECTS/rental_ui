'use client';
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconMail from '@/components/icon/icon-mail';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import IconUser from '../icon/icon-user';

const ComponentsAuthLoginForm = () => {
    const router = useRouter();
    const submitForm = (e: any) => {
        e.preventDefault();
        router.push('/');
    };

    return (
        <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
            <div>
                <label htmlFor="Email">Username</label>
                <div className="relative text-white-dark">
                    <input id="username" type="text" placeholder="Enter username" className="form-input ps-10 placeholder:text-white-dark" />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <IconUser fill={true} />
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <div className="relative text-white-dark">
                    <input id="Password" type="password" placeholder="Enter Password" className="form-input ps-10 placeholder:text-white-dark" />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <IconLockDots fill={true} />
                    </span>
                </div>
            </div>
            <div>
                <label className="flex flex-row justify-between cursor-pointer items-end">
                    <div></div>
                    {/* <input type="checkbox" className="form-checkbox bg-white dark:bg-black" /> */}
                    <Link href="/auth/password-reset" className="text-white-dark">Forgot password?</Link>
                </label>
            </div>
            <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                Sign in
            </button>
        </form>
    );
};

export default ComponentsAuthLoginForm;
