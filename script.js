let myLibrary= []; 
let container = document.querySelector(`.container`);
const totalCount = document.querySelector(`#total_count`);
const readCount = document.querySelector(`#read_count`);
const unreadCount = document.querySelector(`#unread_count`);
const addButton = document.querySelector(`.add`);
const modal = document.querySelector(`.modal`);
const closeForm = document.querySelector(`.close`);
const submitForm = document.querySelector(`.submit_form`);
let removeBook = document.querySelectorAll(`.remove`);
let statusUpdate = document.querySelectorAll(`#book_state`);
let card = document.querySelectorAll(`.card`);
const readColor = `linear-gradient(156deg, #b3f6d8 0%, #03191e 74%)`;
const unreadColor = `linear-gradient(156deg, rgb(11 4 4) 0%, #d6d6d6 74%)`;


function Book(titleIn, authorIn, pagesIn, statusIn){
    this.title = titleIn;
    this.author = authorIn;
    this.pages = pagesIn;
    this.status = statusIn;
}


function add_book(){
    const newBook = new Book("GOT", "MARTIN", 250, true);
    myLibrary.push(newBook);
}


add_book();
add_book();
add_book();
add_book();
add_book();
fill_page();



function fill_page(){
    container = document.querySelector(`.container`);
    let add = ``;
    let read = 0;
        for(let i=0; i<myLibrary.length;i++)
        {
            let checked = "";
            if(myLibrary[i].status)
                read++;
            if(myLibrary[i].status)
                checked = "checked";
        add+=`<div class="card transparent" data-id=${i}>
                <h1> ${myLibrary[i].title}</h2>
                <h3> author: ${myLibrary[i].author}</h2>
                <h3> pages: ${myLibrary[i].pages}</h2>
                <div class= icons>
                <h4>Unread</h4>
                <label class="switch">
                
                <input id="book_state" type="checkbox" ${checked} data-id=${i}>
                <span class="slider round"></span>
                
                </label><h4>Read</h4>
                
                <button class="remove" data-id=${i}>Remove</button>
                </div>
              </div>`;
        }
    container.innerHTML = add;
    removeBook = document.querySelectorAll(`.remove`);
    card = document.querySelectorAll(`.card`);

    card.forEach(c => {
        if(myLibrary[c.dataset.id].status)
            c.style.backgroundImage = readColor;
    });
    removeBook.forEach(book=> book.addEventListener('click', ()=>{
        myLibrary.splice(book.dataset.id,1);
        fill_page();
    }))

    statusUpdate = document.querySelectorAll(`#book_state`);
    statusUpdate.forEach(button => button.addEventListener('click', ()=>{
            const state = myLibrary[button.dataset.id].status;
            let switchcard = card[0];
            card.forEach(c=>{
                   if(c.dataset.id === button.dataset.id)
                {
                    switchcard =c;
                }
        })
            if(state){
                read--;
                switchcard.style.backgroundImage = unreadColor;
                switchcard.style.color = `white`;
            }
            else{
            
            switchcard.style.backgroundImage = readColor;
                switchcard.style.color = `white`;
                read++;
            }
            myLibrary[button.dataset.id].status = !state;
                readCount.innerHTML = read;
                unreadCount.innerHTML = myLibrary.length- read;
            
    }))
    totalCount.innerHTML = myLibrary.length;
    readCount.innerHTML = read;
    unreadCount.innerHTML = myLibrary.length- read;
}

addButton.addEventListener('click',()=>
    modal.style.display = 'block'
);

closeForm.addEventListener('click',()=>
    modal.style.display = 'none'
);

submitForm.addEventListener('click',()=>{
    const newBook = new Book(document.querySelector(".title").value,
    document.querySelector(".author").value,
    document.querySelector(".pages").value,
    document.querySelector(".status").checked);
    myLibrary.push(newBook)
    fill_page();
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".pages").value = "";
    document.querySelector(".status").checked = false;
    modal.style.display = 'none'
});











