import React from 'react';
import { useLoaderData } from 'react-router';
import Assignment from './Assignment';

const AllAssignments = () => {
    const data = useLoaderData();
    return (
        <div className='xl:max-w-10/12 max-lg:max-w-10/12 px-6 max-lg:container mx-auto py-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.map(asm => <Assignment asm={asm} />)}
            </div>
        </div>
    );
};

export default AllAssignments;