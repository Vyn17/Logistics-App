import { usePage } from '@inertiajs/react';
import LandingPage from '@/components/Landing/LandingPage';

export default function Welcome() {
    const { auth } = usePage().props as any;

    return <LandingPage user={auth?.user || null} />;
}