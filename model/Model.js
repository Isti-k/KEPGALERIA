import { jatekLISTA } from "./adat";

export default class Modell{
    #lista=[]
    #index
    constructor(lista){
        this.#lista=lista
        this.#index=0
    }

    getIndex(){
        return this.#index;
    }

    leptetBal(){
        this.#index--;
        if(this.#index < 0){
            this.#index = jatekLISTA.length - 1;
        }
        return this.#index;
    }

    leptetJobb(){
        this.#index++;
        if(this.#index < 0){
            this.#index = jatekLISTA.length - 1;
        }
        return this.#index;
    }

}