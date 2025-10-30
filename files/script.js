function Book(title,author,pubDate,pages){
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.pages = pages;
}

function addBook (title,author,pubDate,pages,readState){
    const book = new Book(title,author,pubDate,pages);
    book.id = crypto.randomUUID(); 
    const readAns = (a) => {
    if(a == "true"){
        return "yes"
    }
    else if(a == "false"){
        return "no"
    } else return "unknown"
    }
    book.read = readAns(readState);
    library.push(book);
}

const threeBody = new Book("The Three-Body Problem","Liu Cixin",2008,390);
const darkForest = new Book("The Dark Forest","Liu Cixin",2008,400);
const deathEnd = new Book("Death's End","Liu Cixin",2010,592);

const library = [];

function searchLibrary(){
    library.map((arrCont) => {
        let bookData = ``;
        for(let objCont in arrCont){
            bookData +=`${objCont} : ${arrCont[objCont]}\n`;  
        }
        console.log(bookData);
    })   
}

const newBookButton = document.getElementById("new_book");

newBookButton.addEventListener("click",(e) => {
    document.querySelector("dialog").showModal();
});

const bookFormButtons = document.querySelector(`#submit, #cancel`);
bookFormButtons.addEventListener("click",(e) => {
    e.preventDefault();
    const bookForm = new FormData(document.querySelector("#new_book_entry"));
    const userTitle = bookForm.get("title");
    const userAuthor = bookForm.get("author");
    const userPubDate = bookForm.get("pubDate");
    const userPages = bookForm.get("pages");
    const userReadState = bookForm.get("read");

    if(e.target.textContent == "Add Book"){
        addBook(userTitle,userAuthor,userPubDate,userPages,userReadState);
        document.querySelector("dialog").close();
    } else 
    if(e.target.textContent == "Cancel"){document.querySelector("dialog").close()}
});