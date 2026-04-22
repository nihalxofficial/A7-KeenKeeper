"use client"
import TimelineCard from "../components/TimelineCard/TimelineCard";
import { useContext, useState, useEffect } from "react";
import { InteractionContext } from "../context/interactionContext";
import { FaSearch, FaFilter, FaCalendarAlt } from "react-icons/fa";

const TimelinePage = () => {
    const { interactions } = useContext(InteractionContext);
    const [selectedType, setSelectedType] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [localSearch, setLocalSearch] = useState("");
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(localSearch);
        }, 500);
        return () => clearTimeout(timer);
    }, [localSearch]);
    
    const filteredInteractions = interactions.filter(itr => {
        const matchesType = selectedType ? itr.protocol === selectedType : true;
        const matchesSearch = searchTerm
            ? itr.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              itr.protocol?.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        return matchesType && matchesSearch;
    });
    
    const getInteractionCount = () => {
        const total = filteredInteractions.length;
        if (total === 0) return "No interactions";
        return `${total} interaction${total !== 1 ? 's' : ''} found`;
    };
    
    const clearFilters = () => {
        setSelectedType("");
        setLocalSearch("");
        setSearchTerm("");
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20">
            <div className="w-10/12 mx-auto space-y-6">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="font-bold text-3xl md:text-4xl text-white mb-2">
                        Interaction Timeline
                    </h2>
                    <p className="text-gray-300 text-sm">
                        Track and review all your meaningful connections
                    </p>
                </div>
                
                {/* Filters Section */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            {/* Filter Dropdown */}
                            <div className="relative">
                                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                                <select 
                                    onChange={(e) => setSelectedType(e.target.value)} 
                                    value={selectedType}
                                    className="pl-9 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer hover:bg-gray-700"
                                >
                                    <option value="">All Types</option>
                                    <option value="text">💬 Text</option>
                                    <option value="call">📞 Call</option>
                                    <option value="video">🎥 Video</option>
                                </select>
                            </div>
                            
                            {/* Search Input */}
                            <div className="relative flex-1 min-w-[200px]">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                                <input 
                                    type="search" 
                                    value={localSearch}
                                    onChange={(e) => setLocalSearch(e.target.value)}
                                    placeholder="Search by name or type..." 
                                    className="w-full pl-9 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>
                        </div>
                        
                        {/* Clear Filters Button */}
                        {(selectedType || searchTerm) && (
                            <button 
                                onClick={clearFilters}
                                className="px-4 py-2 text-sm text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all duration-200"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                    
                    {/* Results count */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">
                                {getInteractionCount()}
                            </p>
                            {filteredInteractions.length > 0 && (
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                    <FaCalendarAlt className="text-xs" />
                                    Latest: {new Date(filteredInteractions[filteredInteractions.length - 1]?.date).toLocaleDateString()}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Timeline List */}
                {interactions.length <= 0 ? (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-12 flex justify-center items-center border border-gray-700">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📭</div>
                            <h2 className="font-semibold text-xl text-white mb-2">No Interactions Yet</h2>
                            <p className="text-gray-400 text-sm">
                                Start connecting with your friends to build your timeline
                            </p>
                        </div>
                    </div>
                ) : filteredInteractions.length <= 0 ? (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-12 flex justify-center items-center border border-gray-700">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🔍</div>
                            <h2 className="font-semibold text-xl text-white mb-2">No Matching Interactions</h2>
                            <p className="text-gray-400 text-sm mb-4">
                                Try adjusting your filters or search term
                            </p>
                            <button 
                                onClick={clearFilters}
                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-200"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3 animate-fadeIn">
                        {filteredInteractions.map((interact, idx) => (
                            <TimelineCard 
                                key={interact.id || idx} 
                                interact={interact}
                                isLast={idx === filteredInteractions.length - 1}
                            />
                        ))}
                    </div>
                )}
            </div>
            
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default TimelinePage;