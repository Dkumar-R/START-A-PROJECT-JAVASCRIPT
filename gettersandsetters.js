console.log("getters and setters")

class Author{
    constructor(WriterName, BookTitle, BookDescripse, PageNo){
        this.Name = WriterName;
        this.Title = BookTitle;
        this.Descripse = BookDescripse;
        this.Page = PageNo;
    }

    MyWord(){
        return `I am ${this.Name} my book is ${this.Title} and number of page ${this.Page} you fil so amezing`
    }
}

chetanBaght = new Author("Chetan Baghat", "Room 350", "Fil A Fear",860)
chetanBaght2 = new Author("Chetan Baghat", "Room 350", "Fil A Fear",860)

console.log(chetanBaght.MyWord());
console.log(chetanBaght2.MyWord())