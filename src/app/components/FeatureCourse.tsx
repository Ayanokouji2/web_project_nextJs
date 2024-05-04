import courseData from '@/app/data/web_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';

interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    price: string;
    isFeatured: boolean;
    image: string;
}

export default () => {
    const data = courseData.courses.filter(
        (course: Course) => course.isFeatured
    );
    return (
        <div className="py-12">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                        Featured Course
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Learn With The Best
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-4">
                    {data.map((course: Course) => (
                        <div className="flex justify-center" key={course.id}>
                            <BackgroundGradient  className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    height="400"
                                    width="400"
                                    className="object-scale-down"
                                />
                                 <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}
                                </p>
                                
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                   {course.description}
                                </p>
                                
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Buy now </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        {course.price}
                                    </span>
                                </button> 
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link
                    href="/courses"
                    className="py-2 px-4 rounded-xl bg-slate-900 text-white  dark:bg-black dark:text-white border "
                >
                    View All Courses
                </Link>
            </div>
        </div>
    );
};
