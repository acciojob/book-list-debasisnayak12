//your JS code here. If required.
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const tableBody = document.getElementById('book-list');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();

	const title = titleInput.value.trim();
	const author = authorInput.value.trim();
	const isbn = isbnInput.value.trim();

	if(title && author && isbn){
		const newBook = {
			title,
			author,
			isbn
		};
		createNewBookInTable(newBook);

		titleInput.value = '';
		authorInput.value = '';
		isbnInput.value = '';
	} else{
		alert("Please Enter all required Fields");
	}
});

function createNewBookInTable(book) {
	const newRow = document.createElement('tr');

	const titleCell = document.createElement('td');
	titleCell.innerText = book.title;

	const authorCell = document.createElement('td');
	authorCell.innerText = book.author;

	const isbnCell = document.createElement('td');
	isbnCell.innerText = book.isbn;

    const clearBtn = document.createElement('button');
	clearBtn.className = 'delete';
	clearBtn.innerHTML = `<span class="material-icons">close</span>`

	clearBtn.addEventListener('click', () => {
		newRow.parentNode.removeChild(newRow);
	});
	
	newRow.append(titleCell,authorCell,isbnCell,clearBtn);
	tableBody.appendChild(newRow);
}

