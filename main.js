import { jatekLISTA } from "./model/adat.js";
import Modell from "./model/Model.js";
import JatekTer from "./view/Jatekter.js";

import NagyKartya from "./view/NagyKartya.js";



const taroloELEM = $(".tartalom");
const kivELEM = $(".kivalasztott");

const modell=new Modell(jatekLISTA)

let index=0
new NagyKartya(jatekLISTA[index],kivELEM)
new JatekTer(jatekLISTA,taroloELEM)


$(window).on("kivalaszt",(event)=>{
    let index = modell.leptetJobb
   console.log(event.detail)
   //
   kivELEM.empty()
   index=event.detail.id
   new NagyKartya(event.detail,kivELEM)
})

$(window).on("jobb",(event)=>{  
    index++;
    if (index===jatekLISTA.length) {index=0}
    kivELEM.empty()
    new NagyKartya(jatekLISTA[index],kivELEM)
 })
 $(window).on("bal",(event)=>{  
    index--;
    if (index<0) {index=jatekLISTA.length-1}
    kivELEM.empty()
    new NagyKartya(jatekLISTA[index],kivELEM)
 })