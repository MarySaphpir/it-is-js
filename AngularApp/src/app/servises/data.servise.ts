export class DataService{
  
    private countries: object[] = [ 
        { id: 1, src: "flag_italija_enl.jpg", text: "Italy" },
        { id: 2, scr: "flag_belgija_enl.jpg", text: "Belgium" },
        { id: 3, src: "flag_danija_enl.jpg", text: "Denmark" },
        { id: 4, src: "flag_indija_new.jpg", text: "India" }
    ];
      
    getData(): object[] {
        return this.countries;
    }
}