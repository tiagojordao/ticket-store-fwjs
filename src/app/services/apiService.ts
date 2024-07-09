import axios from "axios";
import { EventModel } from "../models/EventModel";

const API_URL = 'http://localhost:3001';

export const authenticate = async (email: string, password: string) => {
    try {
        
    } catch(error) {
        throw error;
    }
};

export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`);
        return response;
    } catch(error) {
        throw error;
    }
}