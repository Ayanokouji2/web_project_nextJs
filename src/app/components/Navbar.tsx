'use client';

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { cn } from '@/app/utils/cn';
import Link from 'next/link';

export default ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                'fixed top-10 inset-x-0 max-w-2xl mx-auto z-50',
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem
                        active={active}
                        setActive={setActive}
                        item="Home"
                    ></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web_developement">
                            Introduction to Web Development
                        </HoveredLink>
                        <HoveredLink href="/html_css">
                            Advanced HTML and CSS
                        </HoveredLink>
                        <HoveredLink href="/javascript">
                            Introduction to Javascript
                        </HoveredLink>
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                    </div>
                </MenuItem>
                <Link href='/contact'>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Us"
                    ></MenuItem>
                </Link>
            </Menu>
        </div>
    );
};
