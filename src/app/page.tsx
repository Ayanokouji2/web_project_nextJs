import Image from 'next/image';
import Herosection from './components/Herosection';
import FeatureCourse from './components/FeatureCourse';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Herosection/>   
            <FeatureCourse/>   
            <WhyChooseUs />
        </main>
    );
}
