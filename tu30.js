console.log("This is tu 30.js was runing....")

class Employe {
    constructor(GivenName, GivenExprission, GivenDivision) {
        this.name = GivenName;
        this.exprission = GivenExprission;
        this.division = GivenDivision;
    }
    slogan(){
        return `I Am ${this.name} and my compny is the best.`
    }
}

Detail1 = new Employe("Dkumar",66,"Division-2")
console.log(Detail1);
console.log(Detail1.slogan());
