"use client"; 

import * as React from 'react';

import { ResizablePanel, ResizableHandle } from '@/ui/resizable';

import DefaultLayout from '@/components/default-layout';

export default function Home() {
    return (
        <DefaultLayout>
            <ResizableHandle withHandle className='hidden md:flex'/>
            <ResizablePanel defaultSize={910}></ResizablePanel>
        </DefaultLayout>
    );
}