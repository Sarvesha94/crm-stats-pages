import { useState, useEffect } from 'react';

// Dummy data API
const DATA_API = 'https://jsonplaceholder.typicode.com/users'; // Example API

export default function Home() {
    const [data, setData] = useState([]);
    const [timeFrame, setTimeFrame] = useState('1w');

    // Fetch data from the API
    useEffect(() => {
        fetch(DATA_API)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    // Filter data based on time frame
    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
        // Implement filtering logic based on timeFrame
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">CRM Statistics</h1>

            {/* Time Selector */}
            <div className="mb-4">
                <label htmlFor="timeframe" className="mr-2">Select Time Frame:</label>
                <select id="timeframe" value={timeFrame} onChange={handleTimeFrameChange} className="p-2 border rounded">
                    <option value="1d">Last 1 Day</option>
                    <option value="1w">Last 1 Week</option>
                    <option value="1m">Last 1 Month</option>
                </select>
            </div>

            {/* Display User Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((user) => (
                    <div key={user.id} className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold">{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                ))}
            </div>

            {/* You can add Pie Charts, Line/Bar charts here */}
        </div>
    );
}

import PieChart from '../components/PieChart'; // Import the PieChart component

// ...

const chartData = {
    labels: ['User A', 'User B', 'User C'],
    values: [12, 19, 3],
};

// ...

return (
    <div className="container mx-auto p-4">
        {/* ... other components ... */}
        
        {/* Pie Chart */}
        <h2 className="text-xl font-bold mt-4">User Distribution</h2>
        <PieChart data={chartData} />
    </div>
);
