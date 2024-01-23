"use client"; 

import * as React from 'react';

import { ResizableHandle, ResizablePanel } from '@/ui/resizable';
import useWindowWidth from '@/utils/get-width';

import DefaultLayout from '@/components/default-layout';

export default function page() {

    const width = useWindowWidth();

    return (
        <DefaultLayout>
            <ResizableHandle withHandle={width < 768 ? false : true}/>
            <ResizablePanel className={`h-full`} defaultSize={910} minSize={30}>
                    <div className="flex items-center px-4 py-2">
                        <h1 className="text-xl font-bold">Junk</h1>
                    </div>
            </ResizablePanel>
        </DefaultLayout>
    );
}