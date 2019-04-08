export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  console.log(response)
  if (!response.ok) {
    throw new Error(response.statusText)
  } else {
    return await response.json()
  }
}