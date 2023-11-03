const image = document.querySelector("img");
const btn = document.querySelector(".btn");
const api = "https://api.imgflip.com/get_memes";

async function next() {
    try {
        const response = await axios.get(api);
        const item = response.data.data.memes;
        console.log(item);

        if (item.length > 0) {
            const randomMeme = item[Math.floor(Math.random() * item.length)];
            image.src = randomMeme.url;
        } else {
            console.log("No memes found in the response.");
        }
    } catch (error) {
        console.error("Error fetching memes:", error);
    }
}

next();

btn.addEventListener("click", next);
