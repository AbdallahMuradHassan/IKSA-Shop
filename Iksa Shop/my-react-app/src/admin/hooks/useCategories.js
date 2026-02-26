import { useState, useEffect } from "react";
import { categoryRoutes } from "../api/category.route";

export function useCategories() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(categoryRoutes.URLs.get);
            const json = await res.json();
            setData(json.products);
        } catch (err) {
            setError("Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, refetch: fetchData };
}