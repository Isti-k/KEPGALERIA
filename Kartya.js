export default class Kartya{
    //adattagok
    #obj={}
    #szuloElem
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kartyaKiir()
    }

    kartyaKiir(){
        this.#szuloElem.append(`
            <div class="card col-lg-4 col-md-6">
                <div class= "card-body">
                    <img src="${this.#obj.kep}" alt="auto" class = "w-100">
                </div>
            </div>
            `)
    }
}