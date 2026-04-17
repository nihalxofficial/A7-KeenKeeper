"use client"
import { TiTick } from "react-icons/ti";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import { useContext } from "react";
import { InteractionContext } from "../context/interactionContext";

const TimelinePage = () => {
    const {interactions} = useContext(InteractionContext)
    return (
        <div className="bg-[#f8fafc] py-20">
            <div className="w-9/12 mx-auto space-y-5">
                <h2 className="font-bold text-4xl">Timeline</h2>
                <select defaultValue="Filter timeline" className="select">
                    <option disabled={true} >Filter timeline</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option>
                    <option value="video">Video</option>
                </select>
                {interactions.length <=0 ? <div className="h-50 p-10 bg-white rounded-md shadow-sm flex justify-center items-center"><h2 className="font-semibold text-xl">No Interactions Yet...</h2></div>
                : interactions.map((interact, idx)=> <TimelineCard key={idx} interact={interact}></TimelineCard>)}

            </div>
            
        </div>
    );
};

export default TimelinePage;