var startingBook = 0;

const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + '&startIndex=' + startingBook + '&maxResults=30')
                .then(response => response.json())
                .then(json => this.result = json);
            document.querySelector("#paginationButtons").classList.remove("invisible");
        }
    }
})

function nextPage() {
    startingBook += 30;
    this.app.searchGoogleBooks;
    this.app.template
}

function previousPage() {
    startingBook -= 30;
}



