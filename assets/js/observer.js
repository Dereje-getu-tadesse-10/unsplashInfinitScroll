


export const observer = (target, callback) => {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting){
            callback();
        }
    }, {});
    observer.observe(target);
}

