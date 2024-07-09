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
    return await axios.get(`${API_URL}/events`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      throw error;
    });
}