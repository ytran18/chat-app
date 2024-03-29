"use client"; 

import * as React from 'react';

import { ResizableHandle, ResizablePanel } from '@/ui/resizable';
import { Separator } from '@/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { Input } from '@/ui/input';
import { MailList } from '@/components/mail-list';
import { MailDisplay } from '@/components/mail-display';
import { useMail } from '@/utils/use-mail';

import DefaultLayout from '@/components/default-layout';

import { mails } from '@/utils/data';

import { Search } from 'lucide-react';

export default function page() {

    const [isSelectChat, setIsSelectChat] = React.useState(false);
    const [width, setWidth] = React.useState(0);
    const [isShowProfile, setShowProfile] = React.useState(width > 1024 ? true : false);
    const [mail] = useMail();


    const handleSelectChat = () => {
        if (width >= 768) return;
        setIsSelectChat(prev => !prev);
    };

    React.useEffect(() => {
        setWidth(window.innerWidth);
    },[])

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (window.innerWidth > 1024) setShowProfile(true);
            if (window.innerWidth <= 1024 && window.innerWidth >= 1000) setShowProfile(false);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleShowProfile = (type: string) => {
        if (type === 'prev') {
            setShowProfile(prev => !prev);
        };
        if (type === 'false') {
            setShowProfile(false);
        };
    };

    return (
        <DefaultLayout>
            <ResizableHandle disabled={width < 768 ? true : false} withHandle={width < 768 ? false : true}/>
            <ResizablePanel className={`h-full ${isSelectChat ? 'hidden' : 'block'} md:block`} defaultSize={270} maxSize={50} minSize={30}>
                <Tabs defaultValue='all'>
                    <div className="flex items-center px-4 py-2">
                        <h1 className="text-xl font-bold">Inbox</h1>
                        <TabsList className="ml-auto">
                            <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">All messages</TabsTrigger>
                            <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">Unread</TabsTrigger>
                        </TabsList>
                    </div>
                    <Separator />
                    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search" className="pl-8" />
                            </div>
                        </form>
                    </div>
                    <TabsContent value='all' className='m-0'>
                        <MailList items={mails} handleSelectChat={handleSelectChat}/>
                    </TabsContent>
                    <TabsContent value="unread" className="m-0">
                        <MailList items={mails.filter((item) => !item.read)} handleSelectChat={handleSelectChat} />
                    </TabsContent>
                </Tabs>
            </ResizablePanel>
            <ResizableHandle withHandle className='hidden md:flex'/>
            <ResizablePanel defaultSize={910} className={`${isSelectChat ? 'block' : 'hidden'} md:block`}>
                <MailDisplay
                    mail={mails.find((item) => item.id === mail.selected) || null}
                    width={width}
                    isShowProfile={isShowProfile}
                    handleSelectChat={handleSelectChat}
                    handleShowProfile={handleShowProfile}
                />
            </ResizablePanel>
        </DefaultLayout>
    );
}