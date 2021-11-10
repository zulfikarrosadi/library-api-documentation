# Documentation For Library API

this project is focused on creating API documentation using swagger

to run this project, run this command in this project directory on your terminal
```
  npm install
  npm run dev
```
And go to ```http://localhost:3000/api/docs``` to see the documentation
but, make sure you have Node.js and MySQL installed

all of API documentation is in ```docs``` directory
```
docs
 ┣ books
 ┃ ┣ createBook.js
 ┃ ┣ deleteBookById.js
 ┃ ┣ getAllBooks.js
 ┃ ┣ getBookById.js
 ┃ ┣ index.js
 ┃ ┗ updateBookById.js
 ┣ basicinfo.js
 ┣ components.js
 ┣ index.js
 ┣ servers.js
 ┗ tags.js
 ```
and inside the ```docs``` (outside the ```books```) directory, all basic 
information about the openAPI version, Libray API version, servers is in there

and for ```docs/components.js``` file, all book schemes is defined there.
in ```docs/books``` directory, each of Book endpoints will docuemnted here

it's not the best documentation at all,
but as long as I'm still breathing, it will get better :cowboy_hat_face:
