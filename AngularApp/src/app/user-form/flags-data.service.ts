export class DataService{
  
    private countries: object[] = [ 
        { name: "Italy", src: "flag_italija_enl.jpg" },
        { name: "Belgium", scr: "flag_belgija_enl.jpg" },
        { name: "Denmark", src: "flag_danija_enl.jpg" },
        { name: "India", src: "flag_indija_new.jpg" }
    ];
      
    getData(): object[] {
        return this.countries;
    }
}
