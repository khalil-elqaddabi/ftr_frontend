const API_BASE_URL = "http://localhost:5000";

export async function checkApiConnection() {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Connection Failed:", error.message);
    throw error;
  }
}