import Herosection from './components/Herosection';
import FeatureCourse from './components/FeatureCourse';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import UpCommingWebinars from './components/UpCommingWebinars';
import MeetOurInstructor from './components/MeetOurInstructor';

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <Herosection/>   
            <FeatureCourse/>   
            <WhyChooseUs />
            <Testimonials />
            <UpCommingWebinars />
            <MeetOurInstructor />
        </main>
    );
}
