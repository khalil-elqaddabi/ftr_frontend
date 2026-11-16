const API_BASE_URL = import.meta.env.VITE_API_URL

export async function apiRequest(endpoint, options = {}) {
  const {token, headers ={}, ...fetchOptions} = options

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers :{
      "Content-type" : "application/json",
      ...(token && {Authorization: `Bearer ${token}`}),
      ...headers
    },
  })
  const data = await response.json().catch(() => null)

  if(!response.ok){
    const error = new Error( 
      data?.message || `HTTP Error ${response.status}`
     )
     error.status = response.status
     error.data = data
     throw error
  }
  return data

}