import {Dom} from './class/dom.js';
import {LocalStorage} from "./class/LocalStorage.js";

export const getImg = async (page=1) => {
    const fData = await fetch(`https://api.unsplash.com/photos?page=${page}&client_id=KMmZNQrtb8gJYpZ880Rjyms1eS5MXuHAE_p5JzAzP9A`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return await fData.json();
}

export const displayImg = (page, parent, like) => {
    const img =  getImg(page)
    img.then((data) => {
        data.forEach((item) => {
            const dom = new Dom(
                'img',
                {
                    src: item.urls.regular,
                    class: 'cursor-pointer',
                },
                 parent,
                {
                    type: 'click',
                    callback: (e) => {
                        const img = e.target.src;
                        console.log(img)
                        const saved = new LocalStorage();
                        saved.saveImage(img)
                        const render = new Dom(
                            'img',
                            {
                                src: img,
                                class: 'rounded-md cursor-pointer',
                            },
                            like,
                            {
                                type: 'click',
                                callback: (e) => {
                                    window.location.href = e.target.src;
                                }
                            }
                        );
                        render.create();
                    }
            })
            dom.create();
        });
    })
}

export const getSavedImage = () => {
    const saved = new LocalStorage();
    return saved.getImageFromlstg();
}