import { TiTick } from "react-icons/ti";
import TimelineCard from "../components/TimelineCard/TimelineCard";

const page = () => {
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
                <TimelineCard/>
                <TimelineCard/>
                <TimelineCard/>
                <TimelineCard/>

            </div>
            
        </div>
    );
};

export default page;