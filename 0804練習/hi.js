document.querySelector(".main").addEventListener("cilck",(el) => {
    const abc = ()=>{
        document.querySelectorAll(".clicked").forEach((box) => {
            box.classList.remove("clicked")
        })
    }
    el.target.classList.add("clicked")
})