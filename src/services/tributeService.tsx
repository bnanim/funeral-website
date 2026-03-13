const API_BASE_URL = "http://localhost:5000/api/tributes";

export interface TributePayload {
    name: string;
    relationship: string;
    message: string;
}

export interface Tribute extends TributePayload {
    id: string | number;
}

export const fetchTributes = async (): Promise<Tribute[] | undefined> => {
    try {
        const response = await fetch(`${API_BASE_URL}/`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) throw new Error(`Fetch error: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('fetchTributes error', error);
        return undefined;
    }
}

export const addTribute = async (payload: TributePayload): Promise<Tribute | null> => {
    try {
        const response = await fetch(`${API_BASE_URL}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Add tribute failed: ${response.status} ${text}`);
        }

        const created = await response.json();
        return created;
    } catch (error) {
        console.error('addTribute error', error);
        return null;
    }
}