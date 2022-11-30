document.addEventListener("click",(e)=>{
    const clickedEl = e.target;
    const names = ["zinaida","manuel","san"];
    const clickedName = clickedEl.innerText.toLowerCase()
    if (names.includes(clickedName)){

        names.map((e)=>{
            let katas = document.getElementById("z-kata-" + e);
            console.log(katas);
            if (e === clickedName && katas.classList.contains("hide")) {
                katas.classList.remove("hide");
            } else if (e !== clickedName && !katas.classList.contains("hide")){
                katas.classList.add("hide");
            }
        });
        
    }
})