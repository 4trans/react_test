import React from "react";

export interface UserInfo {
    authenticated: boolean,
    authToken?: string,
    refreshToken?: string,
    email?: string,
}

export const OAuth = React.createContext<UserInfo>({authenticated: false});