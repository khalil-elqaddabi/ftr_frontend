import { apiRequest } from "../api/api";

export function login(credentials) {
return apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials)
})
}

export function refeshAccessToken(refreshToken) {
    return apiRequest("/api/auth/refresh", {
        metohd: "POST",
        body: JSON.stringify({refreshToken})
    })
    
}
export function register(userData) {
  return apiRequest("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}