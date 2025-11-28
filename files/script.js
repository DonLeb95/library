function Book(title,author,pubDate,pages){
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.pages = pages;
}

function addBook (title,author,pubDate,pages,readState){
    const book = new Book(title,author,pubDate,pages);
    const readAns = (a) => {
        if(a == "true"){
            return "yes"
        }
        else if(a == "false"){
            return "no"
        } else return "unknown"
    }
    book.read = readAns(readState);
    book.id = crypto.randomUUID(); 
    library.push(book);
}

const threeBody = new Book("The Three-Body Problem","Liu Cixin",2008,390);
const darkForest = new Book("The Dark Forest","Liu Cixin",2008,400);
const deathEnd = new Book("Death's End","Liu Cixin",2010,592);

const library = [threeBody,darkForest,deathEnd,threeBody,darkForest,deathEnd,threeBody,darkForest,deathEnd];

function searchLibrary(){
    library.map((arrCont) => {
        let book_card = document.createElement("div");
        book_card.className = "book_cards";
        for(let objCont in arrCont){
            let bookData = document.createElement("p");
            bookData.textContent = `${objCont} : ${arrCont[objCont]}`;
            bookData.className = "book_data";
            book_card.append(bookData);  
        }//all good so far here
        const removeBookBtn = document.createElement("button");
        removeBookBtn.textContent = "Remove from library";
        removeBookBtn.addEventListener("click", (rb) => {
            rb.preventDefault();
            const container = rb.currentTarget.closest(".book_cards");
            const pNodeList = container.querySelectorAll("p");
            const pArray = [...pNodeList];
            //uncharted territory here
            const idRemove = pArray.find((p) => p.textContent.includes("id : ")).textContent.replace("id : ", "");
            library.splice(library.indexOf(library.find((obj)=> obj.id == idRemove)),1);
            container.remove();
        })
        book_card.append(removeBookBtn);
        lib.append(book_card);
        //untested, also create stylings for cards and library divs 
    })   
}

const newBookBtn = document.getElementById("new_book");

newBookBtn.addEventListener("click",(e) => {
    document.querySelector("#form_display").showModal();
});

const bookFormBtn = document.querySelector(`#submit, #cancel`);
bookFormBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const bookForm = new FormData(document.querySelector("#new_book_entry"));
    const userTitle = bookForm.get("title");
    const userAuthor = bookForm.get("author");
    const userPubDate = bookForm.get("pubDate");
    const userPages = bookForm.get("pages");
    const userReadState = bookForm.get("read");

    if(e.target.textContent == "Add Book"){
        addBook(userTitle,userAuthor,userPubDate,userPages,userReadState);
        document.querySelector("#form_display").close();
    } else 
    if(e.target.textContent == "Cancel"){document.querySelector("#form_display").close()}
});

//create display of books
const lib = document.querySelector("#library");
const displayLibraryBtn = document.querySelector("#display_library");
displayLibraryBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    //lib.style.display = "flex";
    searchLibrary();

    //check library content
    //extract data
    //create book card for each data set

});

function removeBook(){
    
}