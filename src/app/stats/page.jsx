"use client"
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InteractionContext } from "../context/interactionContext";

const StatsPage = () => {
    const {interactions} = useContext(InteractionContext)
    console.log(interactions);
    const texts = interactions.filter(itr => itr.protocol==="text")
    const audios = interactions.filter(itr => itr.protocol==="call")
    const videos = interactions.filter(itr => itr.protocol==="video")
    
    const data = [
        {name: "Text", value:texts.length, fill: "#a855f7"},
        {name: "Audio", value:audios.length, fill: "#22c55e"},
        {name: "Video", value:videos.length, fill: "#3b82f6"},
    ]
    return (
        <div className="bg-[#f8fafc] py-20">
            <div className="w-9/12 mx-auto space-y-5">
                <h2 className="font-bold text-4xl">Friendship Analytics</h2>
                <div className="bg-white rounded-md shadow-sm p-7">
                    <h2 className="font-semibold">By Interaction Type</h2>
                    <div className="flex justify-center items-center">
                        <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            {/* <RechartsDevtools /> */}

                                <Legend wrapperStyle={{ paddingTop: '25px' }} />
                            <Tooltip/>
                        </PieChart>
                    </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default StatsPage;