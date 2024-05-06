//Website Header Navigation
const bar = document.getElementById("bar"),
    headerLinks = document.getElementById("a-links"),
    xHeader = document.getElementById("x-header");


bar.addEventListener("click", (event) => {
    if (headerLinks.classList.contains("hidden") && xHeader.classList.contains("hidden")) {
        headerLinks.classList.remove("hidden");
        xHeader.classList.remove("hidden");
        bar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /></svg>`;
    } else {
        headerLinks.classList.add("hidden");
        xHeader.classList.add("hidden");
        bar.innerHTML = `<svg id="bar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>`
    }
});

// const postInput = document.getElementById("postInput");
// const searchingForm = document.getElementById("searchingForm");

// postInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         searchingForm.submit();
//     }
// })


const searchForm = document.getElementById("searchForm");
const postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", getSearchTerm);

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const postSearch = document.getElementById("postSearch");
    if (postSearch.value === "") return alert("Insert a search term!")
    else {
        searchForm.submit();
    }


})

async function getSearchTerm() {

    const postSearch = document.getElementById("postSearch");
    if (postSearch.value === "") return alert("Insert a search term!");
}