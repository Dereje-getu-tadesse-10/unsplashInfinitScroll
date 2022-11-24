

export class LocalStorage {

    saveImage(img) {
        const imgArr = JSON.parse(localStorage.getItem('img')) || [];
        imgArr.push(img);
        localStorage.setItem('img', JSON.stringify(imgArr));
    }

    getImageFromlstg() {
        return JSON.parse(localStorage.getItem('img')) || [];
    }

}