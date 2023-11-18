import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MarketingPage = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center flex-col'>
                <div className='mb-4 flex items-center border shadow-sm p-4 bg-rose-200 text-rose-700 rounded-full uppercase'>
                    <Medal className='h-6 w-6 mr-2' />
                    No 1 taks management
                </div>
                <h1 className='text-3xl md:text-6xl text-center mb-6 text-neutral-600'>Taskme help organize team work</h1>
                <div className='text-3xl bg-gradient-to-r from-indigo-400 to-indigo-800 text-white py-2 px-4 rounded-md w-fit'>Buil Together</div>
            </div>
            <div className='text-sm md:text-xl text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
                Your ultimate task companion. Seamlessly manage your to-dos with intuitive features, prioritize effortlessly, and boost productivity. From sleek design to smart reminders, Taskme empowers you to conquer your day. Elevate your task management experience - Taskme, where efficiency meets simplicity.
            </div>
            <Button className='mt-6' size="lg" asChild><Link href="/sign-up">Get Taskme for free</Link></Button>
        </div>
    )
}

export default MarketingPage