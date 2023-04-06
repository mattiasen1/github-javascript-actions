const request = require("request-promise")

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
            "Writing JavaScrips action GitHub Skills course."
    },
    json: true
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;