export default function darkTheme(btn){

    const d=document;
    const ls=localStorage;

    const moon ="🌙",
    sun="☀️";

   const $themeBtn=d.querySelector(btn),
    $darkThemeElements=d.querySelectorAll(".dark-theme-after"),
    mobileOption=d.querySelector(".dark-theme-mobile");





    const darkMode =()=>{
        $darkThemeElements.forEach((el)=>el.classList.add("show-dark-theme"));
        $themeBtn.textContent=sun;
        mobileOption.textContent=sun;
        ls.setItem("theme","dark");
    }


    const lightMode =()=>{
        $darkThemeElements.forEach((el)=>el.classList.remove("show-dark-theme"));
        $themeBtn.textContent=moon;
        mobileOption.textContent=moon;
        ls.setItem("theme","light");
    }



    d.addEventListener("click",e=>{

        if(e.target.matches(btn)){

            if($themeBtn.textContent===moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    })


    d.addEventListener("DOMContentLoaded",e=>{

        if(ls.getItem("theme")===null)ls.setItem("theme","light");

        if(ls.getItem("theme")==="light")lightMode();

        if(ls.getItem("theme")==="dark")darkMode();
    })

}