const API_KEY = "52238d7fab5c2c01b99e751619dd16ec";
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "en-US";

// Genel fetch fonksiyonu
export async function fetchFromAPI(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", LANGUAGE);

  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, value)
  );

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("API bağlantı hatası");
    return await res.json();
  } catch (err) {
    console.error("API Hatası:", err.message);
    throw err;
  }
}
