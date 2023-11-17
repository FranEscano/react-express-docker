const axios = require('axios')

const getNewsDataAsync = async () => {
    try{
        const responseNews = await axios.get("https://content.guardianapis.com/search?show-fields=all&api-key=647eea2e-e426-4a85-9fc7-4466c09b7447");
        return responseNews.data.response.results
    } catch(e){
        return {error: `Error`}
    }
}

module.exports = getNewsDataAsync