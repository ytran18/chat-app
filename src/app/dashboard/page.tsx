"use client"; 

import * as React from 'react';

import { ResizablePanel, ResizableHandle } from '@/ui/resizable';

import DefaultLayout from '@/components/default-layout';

export default function Home() {
    return (
        <DefaultLayout>
            <ResizableHandle withHandle/>
            <ResizablePanel defaultSize={910}>
                <div className="flex items-center px-4 py-2">
                        <h1 className="text-xl font-bold">Home</h1>
                    </div>
            </ResizablePanel>
        </DefaultLayout>
    );
}