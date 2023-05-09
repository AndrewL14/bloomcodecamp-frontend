async function fetcher (url, requestMethod, jwt, requestBody) {
    const fetchData = {
        headers: {
            "Content-Type": "application/json"
        },
        method: requestMethod
    }

    if (jwt) {
        fetchData.headers.Authorization = `Bearer ${jwt}`
    }

    if (requestBody) {
        fetchData.body = JSON.stringify(requestBody)
    }

    const res = await fetch(url, fetchData);
    if (res.status === 200)
        return res.json();
}
export default fetcher;