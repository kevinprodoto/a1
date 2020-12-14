export const createBD = (obj) => {
    let openRequest = indexedDB.open("store", 1);
    
    openRequest.onupgradeneeded = function() {

        let db = openRequest.result;
        if (!db.objectStoreNames.contains('books')) { // если хранилище "books" не существует
        db.createObjectStore('books', {keyPath: 'id'}); // создаем хранилище

      } 
        // срабатывает, если на клиенте нет базы данных
        // ...выполнить инициализацию...
    };
    
    openRequest.onerror = function() {
        console.error("Error", openRequest.error);
    };
    
    openRequest.onsuccess = function() {
        let db = openRequest.result;
        let transaction = db.transaction("books", "readwrite");
        let books = transaction.objectStore("books");
        

        // продолжить работу с базой данных, используя объект db
    };
}

// бд созджали надо туда залить наш json и пользоваться на здоровье
// сделать кнопку по нажатию которой будет записываться ответ с сервака