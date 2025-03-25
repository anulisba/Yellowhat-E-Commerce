import TodaysDealsTable from "@/components/TodaysDealsTable";
import WeeklyDealsTable from "@/components/weeklyDeals";
import { FaBoxes, FaTags, FaLayerGroup } from "react-icons/fa";

const DashboardStats = () => {
    const stats = [
        { title: "Total Products", value: 34945, icon: <FaBoxes className="text-green-500 text-4xl" /> },
        { title: "Total Categories", value: 120, icon: <FaTags className="text-blue-500 text-4xl" /> },
        { title: "Total Brands", value: 45, icon: <FaLayerGroup className="text-purple-500 text-4xl" /> },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-4">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between h-[100px]">
                        <div className="flex flex-col">
                            <span className="text-gray-500">{stat.title}</span>
                            <span className="text-2xl font-bold">{stat.value}</span>
                        </div>
                        {stat.icon}
                    </div>
                ))}
            </div>
            <div className="py-4 flex flex-row gap-3 h-[70vh] pr-4">
                <div className="w-1/2">
                    <WeeklyDealsTable />
                </div>
                <div className="w-1/2">
                    <TodaysDealsTable />
                </div>

            </div>
        </div>
    );
};

export default DashboardStats;
