export default class NagyKartya {
    //adattagok
    #obj = {}; //privát adattag
    #szuloElem;
    //construktor -
    constructor(obj, szuloElem) {
      this.#obj = obj;
      this.#szuloElem = szuloElem;
      this.kiir();
      this.jobbELEM=$(".jobb")
      this.jobbELEM.on("click",()=>{ this.#esemenyTrigger("jobb")})
      
      this.balELEM=$(".bal")
      this.balELEM.on("click",()=>{ this.#esemenyTrigger("bal")})
     
    }
   
    kiir() {
      //egyetlen egy kép kíírása
      this.#szuloElem.append(`
            <button class="bal col-1">BAL</button>
            <div class="card  col-10" ">
                <div class="card-body">     
                    <h3>${this.#obj.cim}</h3>            
                    <img src="${this.#obj.kep}" alt="${this.#obj.cim}" class="card-img-top">
                    <p>${this.#obj.leiras}</p> 
                </div>
            </div>
            <button class="jobb col-1">JOBB</button>
            `);
    }
  
    //eseménykezelő a léptetőgombokra
    #esemenyTrigger(esemenynev){
      const e = new CustomEvent(esemenynev);
      window.dispatchEvent(e);
    }
  
  }
  