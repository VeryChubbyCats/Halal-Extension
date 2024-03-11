const Head = document.getElementsByTagName("head")[0];

const AddBlur = () => {

    let style = document.createElement("style");

    const CSS = `
    
    img, Img, Picture, picture, pic, Pic, photo, Photo {
        filter: blur(25px) !important;
    }

    `

    Head.appendChild(style);
    style.appendChild(document.createTextNode(CSS));

};

chrome.storage.sync.get(["Blur"]).then((R) => {
    if (R.Blur) {
        AddBlur();
    };
});