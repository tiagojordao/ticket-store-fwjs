import axios from "axios";

const API_URL = 'http://localhost:3001';

export const authenticate = async (email: string, password: string) => {
    try {
        return await axios.get(`${API_URL}/user`)
        .then(response => {
            return response.data.find((user: { password: string, email: string }) => {
              if(user.email === email) {
                if(user.password === password) {
                  return user;
                }
                return (alert("Wrong Password!"));
              }
            });
        })
    } catch(error) {
        throw error;
    }
};

export const createUsers = async (name: string, email: string, password: string) => {
  return await axios.post(`${API_URL}/user`, {name, email, password})
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
    throw error;
  });
}


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