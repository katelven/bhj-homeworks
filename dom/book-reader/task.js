const book = document.getElementById('book');
const sizeItems = Array.from(document.getElementsByClassName('font-size'));

for(let i = 0; i < sizeItems.length; i++) {
    let currentSize = sizeItems[i];
    currentSize.addEventListener('click', function(event) {
        sizeItems.forEach(el => el.classList.remove('font-size_active'));
        currentSize.classList.add('font-size_active');
        event.preventDefault();
        let size = currentSize.dataset.size;
        switch(size) {
            case undefined:
                book.setAttribute('class','book');
                break;
                case 'small':
                    book.setAttribute('class','book');
                    book.classList.add('book_fs-small');
                    break;
                    case 'big':
                        book.setAttribute('class','book');
                        book.classList.add('book_fs-big');

        }
    })
}