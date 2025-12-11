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

const library = [
    {
        title:"Exotic Tales",
        author:"Legolas Smith",
        pubdate: 2025,
        pages:676,
        read:"yes",
        id: "7hvb23@ow09bFaW45%"
    }
];

function searchLibrary(){
    library.map((arrCont) => {
        let book_card = document.createElement("div");
        book_card.className = "book_cards";
        for(let objCont in arrCont){
            let bookData = document.createElement("p");
            bookData.textContent = `${objCont} : ${arrCont[objCont]}`;
            bookData.className = "book_data";
            book_card.append(bookData);  
        }
        let readCount = 0;
        const readSt = document.createElement("button");
        readSt.textContent = "Change read status";
        readSt.addEventListener("click",(a) => {
            a.preventDefault();
            const container = a.currentTarget.closest(".book_cards");
            const readPNode = container.querySelector("p:nth-child(5)");
            const readOptions = ["unsure","no","yes"];
            readPNode.textContent = `read : ${readOptions[readCount]}`;
            readCount++;
            if (readCount >= 3){
                readCount = 0;
            }
        })


        const removeBookBtn = document.createElement("button");
        removeBookBtn.textContent = "Remove from library";
        removeBookBtn.addEventListener("click", (rb) => {
            rb.preventDefault();
            const container = rb.currentTarget.closest(".book_cards");
            const pNodeList = container.querySelectorAll("p");
            const pArray = [...pNodeList];
            const idRemove = pArray.find((p) => p.textContent.includes("id : ")).textContent.replace("id : ", "");
            library.splice(library.indexOf(library.find((obj)=> obj.id == idRemove)),1);
            container.remove();
        })

        book_card.append(readSt);
        book_card.append(removeBookBtn);

        lib.append(book_card); 
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

const lib = document.querySelector("#library");
const displayLibraryBtn = document.querySelector("#display_library");
let libClickCount = 0;
displayLibraryBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    libClickCount++;
    if (libClickCount < 2){
        searchLibrary();
        lib.style.display = "grid";
    } else {
        document.querySelectorAll(".book_cards").forEach(n => n.remove());
        lib.style.display = "none";
        libClickCount = 0;
    }
});