"use client"; 

import * as React from 'react';

import { ResizableHandle, ResizablePanel } from '@/ui/resizable';

import DefaultLayout from '@/components/default-layout';

export default function page() {

    return (
        <DefaultLayout>
            <ResizableHandle withHandle/>
            <ResizablePanel className={`h-full`} defaultSize={910} minSize={30}>
                    <div className="flex items-center px-4 py-2">
                        <h1 className="text-xl font-bold">Sent</h1>
                    </div>
            </ResizablePanel>
        </DefaultLayout>
    );
}