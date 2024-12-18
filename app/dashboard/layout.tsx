'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('email');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div className="relative min-h-screen">
            <div 
                style={{ backgroundImage: `url('/media/bg.jpg')` }}
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
            />
            <div className="relative z-10 min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow overflow-auto">
                    <div className="container mx-auto px-4 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}