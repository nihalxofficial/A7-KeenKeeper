"use client"
import TimelineCard from "../components/TimelineCard/TimelineCard";
import { useContext, useState } from "react";
import { InteractionContext } from "../context/interactionContext";

const TimelinePage = () => {
    const {interactions} = useContext(InteractionContext)
    const [selectedType, setSelectedType] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    const filteredInteractions = interactions.filter(itr => {
        const matchesType = selectedType ? itr.protocol === selectedType : true;
        const matchesSearch = searchTerm
            ? itr.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              itr.protocol?.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        return matchesType && matchesSearch;
    });  
    

    return (
        <div className="bg-[#f8fafc] py-20">
            <div className="w-9/12 mx-auto space-y-5">
                <h2 className="font-bold text-4xl">Timeline</h2>
                <div className="flex justify-between items-center flex-col md:flex-row gap-4">
                    <select onChange={(e)=>setSelectedType(e.target.value)} defaultValue="Filter timeline" className="select">
                        <option disabled={true} >Filter timeline</option>
                        <option value="text">Text</option>
                        <option value="call">Call</option>
                        <option value="video">Video</option>
                    </select>
                    <label className="input" onKeyDown={(e)=>{
                        e.key === "Enter" ? setSearchTerm(e.target.value) : ""
                    }} >
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                {interactions.length <=0 ? <div className="h-50 p-10 bg-white rounded-md shadow-sm flex justify-center items-center"><h2 className="font-semibold text-xl">No Interactions Yet...</h2></div>
                : filteredInteractions.map((interact, idx)=> <TimelineCard key={idx} interact={interact}></TimelineCard>)}

            </div>
            
        </div>
    );
};

export default TimelinePage;