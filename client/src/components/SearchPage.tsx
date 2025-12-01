import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FilterPage from './FilterPage';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SearchPage = () => {
    const prarams = useParams();
    const [searchQuery, setSearchQuery] = useState<string>("");
    return (
        <div className='max-w-7xl mx-auto my-10' >
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <FilterPage />
                <div className="flex-1  ">
                    {/* Search Input Field */}
                    <div className="flex items-center gap-2">
                        <Input
                            type='text'
                            value={searchQuery}
                            placeholder='Search by restaurant & cuisines'
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button  >Search</Button>
                    </div>
                    {/* Searched Items display here */}
                    <div className="">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
                            <h4 className="">(2) Search result found</h4>
                            <div className="">
                                {
                                    [1,2,3].map((seltedFilter:string,idx:number)=>(
                                        <div key={idx} className="relative inline-flex ">

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage