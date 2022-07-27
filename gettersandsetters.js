console.log("getters and setters")

class Author {
    constructor(WriterName, BookTitle, BookDescripse, PageNo) {
        this.Name = WriterName;
        this.Title = BookTitle;
        this.Descripse = BookDescripse;
        this.Page = PageNo;
    }

    MyWord() {
        return `I am ${this.Name} my book is ${this.Title} and number of page ${this.Page} you fil so amezing`
    }
}

chetanBaght = new Author("Chetan Baghat", "Room 350", "Fil A Fear", 860)
JoanneKathleenRowling = new Author("Joanne Kathleen Rowling", " Fantastic Beasts & Where to Find Them (2001", "Fil A Fear", 1160)
JamesJoyce = new Author(" James Joyce", "Ulysses", "Ulysses is a modernist novel by Irish writer", 576)
console.log(chetanBaght.MyWord());
console.log(JoanneKathleenRowling.MyWord())
console.log(JamesJoyce.MyWord());

// This is new 

let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter').add('JK Wolring');
console.log(`The latest attendee is ${meeting.latest}.`);

// First-class citizen
function factory(Aclass) {
    return new Aclass();
}
let greeting = factory(class {
    sayHii() { console.log('Hi'); }
});

greeting.sayHii();

new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App')