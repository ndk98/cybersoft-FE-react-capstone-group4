import axios from "axios";
import { config } from "@/config";

const accessToken = localStorage.getItem("CUSTOMER_LOGGED")
    ? JSON.parse(localStorage.getItem("CUSTOMER_LOGGED")).accessToken
    : "";

const api = axios.create({
    baseURL: config.apiConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NzE4MDgwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3MzI4NDAwfQ.bqygxoVHbmcy6bdDT5IDHZGoA3eMAp4YV6_E_dO_XxI",
    },
});

export default api;
