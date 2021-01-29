import React from "react";
import {user} from './data'
const UserContext = React.createContext(user);
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
