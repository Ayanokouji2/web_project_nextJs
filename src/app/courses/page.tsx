'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/app/components/ui/3d-card';
import courseData from '@/app/data/web_courses.json';

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

export default function Page() {
    return (
        <div className='flex flex-col items-center mt-32'>
            <div>
                <h1 className="uppercase text-5xl font-bold text-white">
                    All Courses ({courseData.courses.length})
                </h1>
            </div>
            <div className="h-min-screen py-12 grid lg:grid-cols-3 lg:-gap-y-40 px-7 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {courseData.courses.map((course: Course, index: number) => (
                    <CardContainer key={index} className="inter-var  ">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-semibold "
                            >
                                {course.title}
                            </CardItem>

                            <CardItem
                                translateZ="60"
                                className="text-sm font-light py-2"
                            >
                                Tutored By : {course.instructor}
                            </CardItem>
                            <CardItem translateZ="100">
                                <Image
                                    className="max-w-[400px] max-h-[300px]"
                                    src={course.image}
                                    alt={course.title}
                                    width={700}
                                    height={500}
                                ></Image>
                            </CardItem>
                            <div className="flex justify-between items-center mt-5">
                                <CardItem
                                    translateZ="50"
                                    className="text-sm font-light"
                                >
                                    Price: {course.price}
                                </CardItem>
                                <CardItem
                                    translateZ="50"
                                    as="button"
                                    className="text-sm font-light bg-blue-500 px-4 py-2 rounded-full"
                                >
                                    BUY
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
