function Book(title,author,pubDate,pages){
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.pages = pages;
}

function addBook (title,author,pubDate,pages){
    const book = new Book(title,author,pubDate,pages);
    book.id = crypto.randomUUID();
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

