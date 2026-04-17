"use client"
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InteractionContext } from "../context/interactionContext";

const StatsPage = () => {
    const {interactions} = useContext(InteractionContext)
    console.log(interactions);
    const texts = interactions.filter(itr => itr.protocol==="text")
    const calls = interactions.filter(itr => itr.protocol==="call")
    const videos = interactions.filter(itr => itr.protocol==="video")
    
    const data = [
        {name: "Text", value:texts.length, fill: "#7E35E1"},
        {name: "Call", value:calls.length, fill: "#244D3F"},
        {name: "Video", value:videos.length, fill: "#37A163"},
    ]
    return (
        <div className="bg-[#f8fafc] py-20">
            <div className="w-9/12 mx-auto space-y-5">
                <h2 className="font-bold text-4xl">Friendship Analytics</h2>
                <div className="bg-white rounded-md shadow-sm p-7">
                    <h2 className="font-semibold mb-4">By Interaction Type</h2>
                    <div className="flex justify-center items-center">
                        <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
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