const accesskey="V7K1GWIm31P4W6c1XOL9Ehz1ZWw8eEzvSwsf1j21FC4";

const formEl = document.querySelector("form");

const inputEl = document.getElementById("search-input");

const searchResults = document.querySelector(".search_result");

const showMore= document.getElementById("show-more-button");

let inputData= "";
let page = 1;

async function searchImage(){
    inputData=inputEl.value; 
    const url =`https://api.unplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response= await fetch(url);        /*take the data from url*/
    const data =await response.json();          /* url data convert in json format */ 

    const results =data.results;     /*convert json to image format */

    if (page===1){
        searchResults.innerHTML="";
    }
    results.map((result)=>{

        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("image_search")

        const image=document.createElement("img")
        image.src=result.urls.small
        image.alt=result.alt_description

        const imageLink=document.createElement("a")
        imageLink.href=result.links.html 
        imageLink.target = "_blank"
        imageLink.textContent=result.alt_description

        /*append those element in html page */
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)

    })
    page++

    if(page > 1){
        showMore.style.display="block"


    }

}


/* event listener */
formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    page=1
    searchImage()
})


showMore.addEventListener("click", ()=>{
    searchImage()
})

