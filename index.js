let key = "qUSS2GIYec24dYynCRbZQ322SyvWJLxE"

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let userInput = document.querySelector("#userInput");
    let select = document.querySelector("select");
    let submit = document.querySelector("#submit");
    let content = document.querySelector(".content");
    let limit = 10;
    let search = "cats"


    let h1 = document.createElement("h1");
    form.addEventListener("submit", () => {
        searchInput(userInput, limit)
    })
    const searchInput = async (userInput, limit) => {
        try {
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${limit}`)
            console.log(res)
        } catch (error) {
            debugger   
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






