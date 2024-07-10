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

export const areUserInscribed = async (userId: string, eventId: string) => {
  return await axios.get(`${API_URL}/userEvents`)
  .then(response => {
    return response.data.find((userEvent: { userId: string, eventId: string }) => {
      if(userEvent.userId === userId && userEvent.eventId === eventId)
        return userEvent;
    })
  }).catch((error: any) => {
    throw error;
  });
};

export const subscribeEvent = async (userId: string, eventId: string) => {
  const areUserAlreadyInscribed = await areUserInscribed(userId, eventId);

  if(areUserAlreadyInscribed) {
    alert("User already inscribed in this event!");
    return "User already inscribed in this event!";
  }

  return await axios.post(`${API_URL}/userEvents`, {userId, eventId})
  .then((response) => {
    alert("You are now subscribed!");
    return response.data;
  }).catch((error) => {
      console.log("Can't substribe on Event!");
      throw error;
  });
};

export const listEventsByUserId = async (userId: string) => {
  let idEventsList: any[] = [];
  let events: any[] = [];

  idEventsList =  await axios.get(`${API_URL}/userEvents`)
  .then(response => {
    return response.data.filter((userEvent: { userId: string, eventId: string }) => {
      return (userEvent.userId === userId);
    })
  }).catch((error: any) => {
    throw error;
  });
  
  events =  await axios.get(`${API_URL}/events`)
  .then((response) => {
     return response.data;
  }).catch((error: any) => {
    throw error;
  });

  let list: any[] = [];
  idEventsList.forEach((userEvent: { eventId: string }) => {
    events.forEach((event: { id: string }) => {
      if(userEvent.eventId === event.id) {
        list.push(event);
      }
    });
  });
  return list;
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
};