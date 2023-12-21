import axios from "axios";

export const commanRequest = async (method, url, body) => {
    let axiosConfig = {
        method,
        url,
        data: body,
        headers: {
            'content-type': "application/json"
        }
    }

    return await axios(axiosConfig).then((res) => {
        return res
    }).catch(rej => {
        return rej
    })
}