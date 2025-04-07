import axios from "axios";

export const getMovie = async () => {
    const baseUrl = import.meta.env.VITE_TMDB_BASE_URL ?? "";
    const apiKey = import.meta.env.VITE_TMDB_API_KEY ?? "";
    const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN ?? "";

    if (!baseUrl || !apiKey || !accessToken) {
        console.error("TMDB API credentials not set");
        return;
    }
    try {
        const response = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
            },
        });
        return response;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};

export const getDetailMovie = async (id) => {
    const baseUrl = import.meta.env.VITE_TMDB_BASE_URL?? "";
    const apiKey = import.meta.env.VITE_TMDB_API_KEY?? "";
    const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN?? "";

    if (!baseUrl || !apiKey || !accessToken) {
        console.error("TMDB API credentials not set");
        return;
    }
    try {
        const response = await axios.get(`${baseUrl}/movie/${id}?language=en-US`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
            },
        });
        return response;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

