let myLibrary= []; 
let container = document.querySelector(`.container`);
const totalCount = document.querySelector(`#total_count`);
const readCount = document.querySelector(`#read_count`);
const unreadCount = document.querySelector(`#unread_count`);
const addButton = document.querySelector(`.add`);
const modal = document.querySelector(`.modal`);


function Book(titleIn, authorIn, pagesIn, statusIn){
    this.title = titleIn;
    this.author = authorIn;
    this.pages = pagesIn;
    this.status = statusIn;
}


function add_book(){
    const newBook = new Book("GOT", "MARTIN", 250, false);
    myLibrary.push(newBook);
}


add_book();
add_book();
add_book();
add_book();
add_book();
console.log(myLibrary);
fill_page();



function fill_page(){
    container = document.querySelector(`.container`);
    let add = ``;
    let read = 0;
    let unread =0;
        for(let i=0; i<myLibrary.length;i++)
        {
            if(myLibrary.status)
                read++;
            else
                unread++;
        add+=`<div class="card transparent" data-id=${i}>
                <h1> ${myLibrary[i].title}</h2>
                <h3> author: ${myLibrary[i].author}</h2>
                <h3> pages: ${myLibrary[i].pages}</h2>
                <h3> status: ${myLibrary[i].status}</h2>
                <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
                </label>
              </div>`;
        }
    container.innerHTML = add;

totalCount.innerHTML = myLibrary.length;
readCount.innerHTML = read;
unreadCount.innerHTML = unread;
}

addButton.addEventListener('click',()=>
    modal.style.display = 'block'
    // modal.style.display = 'block'
);

