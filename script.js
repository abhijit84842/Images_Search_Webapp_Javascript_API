let accessKey="1isD3qmBjY_ZedU6cEeumex6KwbZwVGmvPH1mTYhXkg";
const searchForm = document.getElementById("search-form");

const searchBox = document.getElementById("search-box");
const searchbtn = document.getElementById("search-button");

const showData = document.querySelector(".show-data");
const showMoreBtn = document.getElementById("show-more-btn");

let page= 1;

const getData = async(searchValue)=>{

    const fetching = await fetch(`https://api.unsplash.com/photos/?page=${page}&query=${searchValue}&client_id=${accessKey}`);
    const jsondata = await fetching.json();
    console.log(jsondata);

    const results = jsondata;

    
    results.forEach(function(data){
        console.log(data.urls.small);

        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML=`
        <img src=${data.urls.small} alt="">
        <a href=""></a>
        `
        

    })

}


searchbtn.addEventListener("click" , function(e){
    let searchValue = searchBox.value ;
    e.preventDefault()
    
    getData(searchValue)
})
    
    


   
  

    /*results.map((result)=>{

        const image=document.createElement("img");
        image.src=result.urls.small;
        

        const imageLink=document.createElement("a");
        imageLink.href=result.links.html; 
        imageLink.target = "_blank";
       

       
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
       

    })*/





 






/*
    const accesskey="1isD3qmBjY_ZedU6cEeumex6KwbZwVGmvPH1mTYhXkg";

    const formEl = document.querySelector("form");
    
    const inputEl = document.getElementById("search-input");
    
    const searchResults = document.querySelector(".search_result");
    
    const showMore= document.getElementById("show-more-button"); 
    
    let inputData= "";
    let page = 1;
    
    async function searchImages(){
        inputData=inputEl.value; 
        const url =`https://api.unplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    
        const response= await fetch(url);       
        const data =await response.json();          
        console.log(data)
    
        //const results =data.results;     
    
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
    
           
            imageWrapper.appendChild(image)
            imageWrapper.appendChild(imageLink)
            searchResults.appendChild(imageWrapper)
    
        })
        page++
    
        if(page > 1){
            showMore.style.display="block"
    
    
        }
    
    }
    
    
    
    formEl.addEventListener("submit", (event)=>{
        event.preventDefault()
        page=1;
        searchImages()
    })
    
    
    showMore.addEventListener("click", ()=>{
        searchImages()
    })
*/







