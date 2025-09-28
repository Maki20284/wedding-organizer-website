import React from 'react';
import Navbar from '../components/customer/topNavbar';
import HeroSection from '../components/customer/beranda/heroSection';
import USP from '../components/customer/beranda/USP';
import Footer from '../components/customer/footer';

export default function Beranda() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <USP />
            <Footer />
        </div>
    )
}