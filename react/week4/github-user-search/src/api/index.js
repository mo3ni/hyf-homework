const ROOT_URL = "https://api.github.com/search";

const ENDPOINT ={
    USERS: "/users?q="
};
 async function getUsers(username){
     const response = await fetch(`${ROOT_URL}${ENDPOINT.USERS}${username}`);
    return response.json();
    }
    export {getUsers};

