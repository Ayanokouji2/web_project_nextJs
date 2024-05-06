import { StickyScroll } from "./ui/sticky-scroll-reveal"

const webDevelopmentCourses = [
    {
        title: 'Learn Web Development Basics',
        description: 'Start your journey into web development with our beginner-friendly courses. Whether you\'re completely new to coding or looking to refresh your skills, we offer comprehensive lessons in HTML, CSS, and JavaScript fundamentals.'
    },
    {
        title: 'Front-End Development Mastery',
        description: 'Master the art of building beautiful and interactive user interfaces. Dive deep into HTML5, CSS3, JavaScript, and popular frameworks like React.js and Vue.js. Our courses cover everything from responsive design to advanced front-end techniques.'
    },
    {
        title: 'Back-End Development Essentials',
        description: 'Explore server-side programming and build robust web applications. Learn Node.js, Express.js, databases, APIs, and more to become a back-end expert. Our hands-on projects and real-world examples ensure you\'re ready for any back-end challenge.'
    },
    {
        title: 'Full Stack Web Development Bootcamp',
        description: 'Become a full-stack developer and build complete web applications from scratch. Combine front-end and back-end skills to develop fully functional web apps. Our bootcamp-style courses provide intensive training and mentorship to launch your career in web development.'
    },
    {
        title: 'Advanced Web Development Techniques',
        description: 'Stay ahead in the rapidly evolving field of web development. Explore advanced topics like progressive web apps, serverless architecture, and microservices. Our expert instructors guide you through cutting-edge technologies and industry best practices.'
    }
];


export default () => {
    return (
        <div className="p-10">
            <StickyScroll content={webDevelopmentCourses}/>
        </div>
    )
}