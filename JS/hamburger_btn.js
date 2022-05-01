
export default function showMenu(btn, menu,options){

    const d=document;

    d.addEventListener("click",e=>{


        if(e.target.matches(btn) || e.target.matches(`${btn} *`) ){
            console.log(e.target);
            d.querySelector(menu).classList.toggle("show-mobile-menu");
            d.querySelector(btn).classList.toggle("is-active");
        }

        if(e.target.matches(options)){
            d.querySelector(menu).classList.remove("show-mobile-menu");
            d.querySelector(btn).classList.toggle("is-active");
        }
    })

}