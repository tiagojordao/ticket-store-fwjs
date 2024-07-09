import axios from "axios";

const API_URL = 'http://localhost:3001';

export const authenticate = async (email: string, password: string) => {
    try {
        return await axios.get(`${API_URL}/user`)
        .then(response => {
            return response.data.array.forEach((element: { email: string; password: string; }) => {
                if(element.email === email) {
                    if(element.password === password) {
                        return element
                    }
                }
            });
        })
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