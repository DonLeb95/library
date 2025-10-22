function Book(title,author,pubDate,pages){
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.pages = pages;

    Book.prototype.genID = crypto.randomUUID;
}

function addBook (title,author,pubDate,pages){
    const book = new Book(title,author,pubDate,pages);
    book.id = book.genID();
    library.push(book);
}

const library = [
    {
        title:"The Three-Body Problem",
        author:"Liu Cixin",
        pubDate:2008,
        pages:390
    },

    {
        title:"The Dark Forest",
        author:"Liu Cixin",
        pubDate:2008,
        pages:400
    },

    {
        title:"Death's End",
        author:"Liu Cixin",
        pubDate:2010,
        pages:592
    }
];

function searchLibrary(){
    library.map((arrCont) => {
        let bookData = ``;
        for(let objCont in arrCont){
            bookData +=`${objCont} : ${arrCont[objCont]}\n`;  
        }
        console.log(bookData);
    })   
}//what is going on here?