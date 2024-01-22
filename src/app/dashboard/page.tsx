"use client"; 

import * as React from 'react';

import { ResizablePanel } from '@/ui/resizable';

import DefaultLayout from '@/components/default-layout';

export default function Home() {
    return (
        <DefaultLayout>
            <ResizablePanel defaultSize={910}></ResizablePanel>
        </DefaultLayout>
    );
}