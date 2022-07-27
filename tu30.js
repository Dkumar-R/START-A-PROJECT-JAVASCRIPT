console.log("This is tu 30.js was runing....")

class Employe {
    constructor(GivenName, GivenExprission, GivenDivision ) {
        this.name = GivenName;
        this.exprission = GivenExprission;
        this.division = GivenDivision;
    }
    slogan(){
        return `I Am ${this.name} and my compny is the best.`
    }
    jioningYear(){
        return `I am Join ${2020-this.exprission}`
    }
    static add(a,b){
        return a + b;
    }
}

// Detail1 = new Employe("Dkumar",66,"Division-2")
// console.log(Detail1);
// console.log(Detail1.slogan());
// console.log(Detail1.jioningYear());

class Programmer extends Employe{
    constructor(GiveName, GivenExprission,GivenDivision,Language,github) {
        super(GiveName,GivenDivision,GivenExprission,Language);
        this.Language = Language;
        this.github = github;
    }
    FavoriteLangage(){
        const w = "Over FavoriteLangage"
        if (this.Language == 'python') {
            return w +' python';
        }else{
           return w + ' Javascript';
        }
    }
    static muliiply(a, b){
        return a*b;
    }
}
console.log(Employe.add(34,1));
rohan = new Programmer("Rohan",3 ,"Lays","python", "Rohan@12" ,);
console.log(rohan);;
console.log(rohan.FavoriteLangage());