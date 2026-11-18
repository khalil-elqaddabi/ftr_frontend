
import { apiRequest } from "../api/api";

export function getChauffeursCount(token) {
  return apiRequest("/api/users/chauffeurs/count", {
    method: "GET",
    token,
  });
}
