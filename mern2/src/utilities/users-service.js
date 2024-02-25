// import all names exports attached to a user 

import * as usersAPI from './users-api'


export async function signUp(userData){
    console.log('we are in the user-services', userData)

    const token = await usersAPI.signUp(userData);

    return token;
}

