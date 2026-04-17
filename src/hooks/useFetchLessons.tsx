import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface LessonsResponse {
    id: string;
    title: string;
    slug: string;
    level: string[];
    description: string;
    tags: string[];
    img?: string;
}

export default function useFetchLessons() {
    const [data, setData] = useState<LessonsResponse[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLessons() {
            try {
                const response = await fetch(`${API_BASE_URL}/lessons/`);
                if (!response.ok) throw new Error("Failed to fetch lesson!");

                const json = await response.json();
                setData(json);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchLessons();
    }, [])
    return { data, error, loading };
}