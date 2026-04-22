"use client"
import { useContext, useState } from "react";
import { Legend, Pie, PieChart, Tooltip, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { InteractionContext } from "../context/interactionContext";
import { FaChartLine, FaChartPie, FaCalendarAlt, FaUsers, FaComments, FaPhone, FaVideo } from "react-icons/fa";

const StatsPage = () => {
    const { interactions } = useContext(InteractionContext);
    const [chartType, setChartType] = useState("pie");
    
    const texts = interactions.filter(itr => itr.protocol === "text");
    const calls = interactions.filter(itr => itr.protocol === "call");
    const videos = interactions.filter(itr => itr.protocol === "video");
    
    // Calculate unique friends count
    const uniqueFriends = new Set(interactions.map(itr => itr.name)).size;
    
    // Calculate average interactions per friend
    const avgInteractions = uniqueFriends > 0 ? (interactions.length / uniqueFriends).toFixed(1) : 0;
    
    // Get most recent interaction
    const mostRecent = interactions.length > 0 
        ? new Date(Math.max(...interactions.map(i => new Date(i.date).getTime())))
        : null;
    
    const data = [
        { name: "Text", value: texts.length, fill: "#10B981", color: "#10B981", icon: "💬" },
        { name: "Call", value: calls.length, fill: "#3B82F6", color: "#3B82F6", icon: "📞" },
        { name: "Video", value: videos.length, fill: "#8B5CF6", color: "#8B5CF6", icon: "🎥" },
    ];
    
    const totalInteractions = interactions.length;
    
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-xl">
                    <p className="text-white font-semibold">{payload[0].name}</p>
                    <p className="text-emerald-400 text-2xl font-bold">{payload[0].value}</p>
                    <p className="text-gray-400 text-xs">
                        {((payload[0].value / totalInteractions) * 100).toFixed(1)}% of total
                    </p>
                </div>
            );
        }
        return null;
    };
    
    const CustomLegend = ({ payload }) => {
        return (
            <div className="flex justify-center gap-6 mt-4 flex-wrap">
                {payload.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span className="text-gray-300 text-sm">{entry.value}</span>
                        <span className="text-gray-500 text-xs">({entry.payload.value})</span>
                    </div>
                ))}
            </div>
        );
    };
    
    const getProtocolColor = (protocol) => {
        switch(protocol) {
            case "text": return "text-emerald-400";
            case "call": return "text-blue-400";
            case "video": return "text-purple-400";
            default: return "text-gray-400";
        }
    };
    
    const getProtocolBg = (protocol) => {
        switch(protocol) {
            case "text": return "bg-emerald-500/10";
            case "call": return "bg-blue-500/10";
            case "video": return "bg-purple-500/10";
            default: return "bg-gray-500/10";
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20">
            <div className="w-10/12 mx-auto space-y-6">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="font-bold text-3xl md:text-4xl text-white mb-2">
                        Friendship Analytics
                    </h2>
                    <p className="text-gray-300 text-sm">
                        Track your connection patterns and interaction insights
                    </p>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-sm">Total Interactions</p>
                                <h3 className="text-3xl font-bold text-white mt-1">{totalInteractions}</h3>
                            </div>
                            <div className="p-2 rounded-lg bg-emerald-500/10">
                                <FaChartLine className="text-emerald-400 text-xl" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-sm">Unique Friends</p>
                                <h3 className="text-3xl font-bold text-white mt-1">{uniqueFriends}</h3>
                            </div>
                            <div className="p-2 rounded-lg bg-blue-500/10">
                                <FaUsers className="text-blue-400 text-xl" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-sm">Avg. Interactions/Friend</p>
                                <h3 className="text-3xl font-bold text-white mt-1">{avgInteractions}</h3>
                            </div>
                            <div className="p-2 rounded-lg bg-purple-500/10">
                                <FaChartPie className="text-purple-400 text-xl" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-400 text-sm">Most Recent</p>
                                <h3 className="text-lg font-bold text-white mt-1">
                                    {mostRecent ? mostRecent.toLocaleDateString() : "N/A"}
                                </h3>
                            </div>
                            <div className="p-2 rounded-lg bg-orange-500/10">
                                <FaCalendarAlt className="text-orange-400 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Chart Type Toggle */}
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={() => setChartType("pie")}
                        className={`px-4 py-2 cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 ${
                            chartType === "pie" 
                                ? "bg-emerald-600 text-white" 
                                : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                        <FaChartPie />
                        Pie Chart
                    </button>
                    <button
                        onClick={() => setChartType("bar")}
                        className={`px-4 py-2 cursor-pointer rounded-lg transition-all duration-200 flex items-center gap-2 ${
                            chartType === "bar" 
                                ? "bg-emerald-600 text-white" 
                                : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                        <FaChartLine />
                        Bar Chart
                    </button>
                </div>
                
                {/* Chart Section */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700">
                    <h2 className="font-semibold text-white mb-6 flex items-center gap-2">
                        <FaChartPie className="text-emerald-400" />
                        By Interaction Type
                    </h2>
                    
                    {totalInteractions === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📊</div>
                            <h3 className="text-white font-semibold text-lg mb-2">No Data Yet</h3>
                            <p className="text-gray-400 text-sm">
                                Start adding interactions to see your analytics
                            </p>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center">
                            {chartType === "pie" ? (
                                <div className="w-full max-w-[500px]">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <PieChart>
                                            <Pie
                                                data={data}
                                                innerRadius="60%"
                                                outerRadius="80%"
                                                cornerRadius={8}
                                                paddingAngle={5}
                                                dataKey="value"
                                                isAnimationActive={true}
                                                animationDuration={1000}
                                                animationBegin={0}
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                labelLine={false}
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip content={<CustomTooltip />} />
                                            <Legend content={<CustomLegend />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            ) : (
                                <div className="w-full">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <BarChart data={data}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                            <XAxis dataKey="name" stroke="#9CA3AF" />
                                            <YAxis stroke="#9CA3AF" />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Legend content={<CustomLegend />} />
                                            <Bar dataKey="value" radius={[8, 8, 0, 0]} animationDuration={1000}>
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                
                {/* Detailed Breakdown */}
                {totalInteractions > 0 && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700">
                        <h2 className="font-semibold text-white mb-4 flex items-center gap-2">
                            <FaChartLine className="text-emerald-400" />
                            Detailed Breakdown
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className={`${getProtocolBg("text")} rounded-lg p-4 text-center border border-emerald-500/20`}>
                                <div className="flex justify-center mb-2">
                                    <FaComments className="text-emerald-400 text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{texts.length}</h3>
                                <p className={`${getProtocolColor("text")} font-semibold`}>Text Messages</p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {((texts.length / totalInteractions) * 100).toFixed(1)}% of total
                                </p>
                            </div>
                            <div className={`${getProtocolBg("call")} rounded-lg p-4 text-center border border-blue-500/20`}>
                                <div className="flex justify-center mb-2">
                                    <FaPhone className="text-blue-400 text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{calls.length}</h3>
                                <p className="text-blue-400 font-semibold">Phone Calls</p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {((calls.length / totalInteractions) * 100).toFixed(1)}% of total
                                </p>
                            </div>
                            <div className={`${getProtocolBg("video")} rounded-lg p-4 text-center border border-purple-500/20`}>
                                <div className="flex justify-center mb-2">
                                    <FaVideo className="text-purple-400 text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{videos.length}</h3>
                                <p className="text-purple-400 font-semibold">Video Calls</p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {((videos.length / totalInteractions) * 100).toFixed(1)}% of total
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatsPage;