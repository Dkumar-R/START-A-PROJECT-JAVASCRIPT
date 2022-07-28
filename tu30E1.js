console.log("Start tu30E1.js..");

class wineShop{
    constructor(Name, Make, Prize, ){
        this.name = Name;
        this.Make = Make;
        this.prize = Prize;
    }

    YearOld(){
        return `${this.name} is ${year-this.Make} Year Old`
    }
}

date = new Date;
year = date.getFullYear();
console.log(year);


Detail = new wineShop("Albariño, Vento Mareiro","2020","$9.96");
Detail2 = new wineShop('Yemanueva Airén de Pie Franco, Bodega La Tercia',"2019","$8.96");
Detail3 = new wineShop("Finca Valdeguinea, Joven, Rioja","2011","$7.96");
console.log(Detail,Detail2,Detail3);
console.log(Detail.YearOld(),Detail2.YearOld());
