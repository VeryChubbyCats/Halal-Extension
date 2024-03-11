const body = document.getElementsByTagName("body")[0];

const Blocked_words = [
    /porn/gi,
    /sex/gi,
    /sexual/gi,
    /nudes/gi,
    /gambling/gi,
    /gore/gi,
    /dick/gi,
    /cock/gi,
    /bully/gi,
    /bullying/gi
]

const Block_text = (Element) => {

    if (Element.hasChildNodes()) {
        Element.childNodes.forEach(Block_text);
    } else if (Element.nodeType === Text.TEXT_NODE) {

        for (const B of Blocked_words) {

            if (Element.textContent.match(B)) {
                Element.textContent = Element.textContent.replace(B, `██████████`);
            };
        };
    };

};

chrome.storage.sync.get(["Censored"]).then((R) => {
    if (R.Censored) {
        Block_text(body);
    };
});