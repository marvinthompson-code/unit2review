let key = "qUSS2GIYec24dYynCRbZQ322SyvWJLxE"

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let userInput = document.querySelector("#userInput");
    let select = document.querySelector("select");
    let submit = document.querySelector("#submit");
    let content = document.querySelector(".content");
    let search = "cats"


    let h1 = document.createElement("h1");

    const showGifs = (arr) => { 
        arr.forEach((gif) => {
            let image = document.createElement("img")
            image.src = gif.images.downsized.url
            content.appendChild(image)
        }) 
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        searchInput(userInput.value, select.value);
    })
    
    select.addEventListener("change", (e) => {
        select.value = e.target.value
    })
    
    const searchInput = async (userInput, limit) => {
        try {
            content.innerHTML = ""
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${limit}`) 
            let imageArr = res.data.data
            showGifs(imageArr)
        } catch (error) {
            console.log(error)
        }
    }

    const populateSelect = () => {
        for (let i = 1; i <= 25; i++) {
                    let option = document.createElement("option");
                    option.innerText = i;
                    option.value = i
                    select.appendChild(option);
        }
    }
    populateSelect()


})






