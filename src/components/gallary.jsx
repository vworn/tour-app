import React, {useEffect, useState} from 'react';
import TourCard from './tourcard';

const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'; // Replace with your API URL
const Gallary = ({tours, setTours, onRemove}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchTours = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('failed to fetch tours');
            }
            const data = await response.json();
            setTours(data);
        } catch (error) {
            console.log('fetch error:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchTours();
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Something went wrong</h1>;
    }
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    }
    return (
        <section className="gallary">
            {tours.map((tour) => (
                <TourCard
                key={tour.id}
                {...tour}
                onRemove={onRemove}
                />
            ))}
        </section>
    );
};
export default Gallary; 

//Fetch and render tour list with useEffect and state