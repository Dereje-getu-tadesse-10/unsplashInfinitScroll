export const liked = (event,btn,overlay,item) => {
    btn.event(event, () => {
        overlay.classList.toggle('hidden')
        setTimeout(()=>{
            item.classList.toggle('translate-x-[110%]')
        }, 100)
    })
}