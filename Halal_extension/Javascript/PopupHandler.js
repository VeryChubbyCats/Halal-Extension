

const Toggle_Button = document.querySelector(".Toggle_Block");
const Censore_Button = document.querySelector(".Toggle_Censore");
const Blur_Button = document.querySelector(".Toggle_Blur");

chrome.storage.sync.get(["Toggled"]).then((Result) => {
    chrome.storage.sync.get(["Censored"]).then((C) => {
        chrome.storage.sync.get(["Blur"]).then((B) => {

            if (Result.Toggled) {
                Enable_halal_mode();

                Toggle_Button.style.background = "#27a619"
                Toggle_Button.innerHTML = "BLOCK - ON";
            };
            if (!Result.Toggled) {
                Enable_haram_mode();

                Toggle_Button.style.background = "#ff0000"
                Toggle_Button.innerHTML = "BLOCK - OFF";
            };
    
            if (C.Censored) {
                Censore_Button.style.background = "#27a619"
                Censore_Button.innerHTML = "CENSOR - ON";
            };
    
            if (!C.Censored) {
                Censore_Button.style.background = "#ff0000"
                Censore_Button.innerHTML = "CENSOR - OFF";
            };

            if (B.Blur) {
                Blur_Button.style.background = "#27a619"
                Blur_Button.innerHTML = "BLUR - ON";
            };

            if (!B.Blur) {
                Blur_Button.style.background = "#ff0000"
                Blur_Button.innerHTML = "BLUR - OFF";
            };

        });
    });
});

const Enable_haram_mode = () => {

    const body = document.getElementsByTagName("body")[0];
    const Extension = document.querySelector(".Extension");
    const Title = document.querySelector(".Title");
    const Toggle_button = document.querySelector(".Toggle_Block");

    body.style.background = "linear-gradient(to left, #ff5959, #ff4242)";

    Extension.style.color = "#ff0000";
    Extension.innerHTML = "HARAM";

}


const Enable_halal_mode = () => {

    const body = document.getElementsByTagName("body")[0];
    const Extension = document.querySelector(".Extension");
    const Title = document.querySelector(".Title");
    const Toggle_button = document.querySelector(".Toggle_Block");

    body.style.background = "linear-gradient(to left, #30ff68, #00ff44)";

    Extension.style.color = "#2fb521";
    Extension.innerHTML = "HALAL";

}

Toggle_Button.addEventListener("click", () => {
    chrome.storage.sync.get(["Toggled"]).then((Result) => {
        if (Result.Toggled) {
            chrome.storage.sync.set({ Toggled: false }).then(() => {
                console.log("Toggled changed successfully!");
            });
            Enable_haram_mode();

            Toggle_Button.style.background = "#ff0000"
            Toggle_Button.innerHTML = "BLOCK - OFF";
        } else {
            chrome.storage.sync.set({ Toggled: true }).then(() => {
                console.log("Toggled changed successfully!");
            });
            Enable_halal_mode();

            Toggle_Button.style.background = "#27a619"
            Toggle_Button.innerHTML = "BLOCK - ON";
        };
    });
});

Censore_Button.addEventListener("click", () => {
    chrome.storage.sync.get(["Toggled"]).then((Result) => {
        chrome.storage.sync.get(["Censored"]).then((C) => {
            if (C.Censored) {
                chrome.storage.sync.set({ Censored: false }).then(() => {
                    console.log("Censore changed successfully!");
                });

                Censore_Button.style.background = "#ff0000"
                Censore_Button.innerHTML = "CENSOR - OFF";
            } else {
                chrome.storage.sync.set({ Censored: true }).then(() => {
                    console.log("Censore changed successfully!");
                });

                Censore_Button.style.background = "#27a619"
                Censore_Button.innerHTML = "CENSOR - ON";
            };
        });
    });
});

Blur_Button.addEventListener("click", () => {
    chrome.storage.sync.get(["Toggled"]).then((R) => {
        chrome.storage.sync.get(["Blur"]).then((B) => {
            if (!B.Blur) {
                chrome.storage.sync.set({ Blur: true }).then(() => {
                    console.log("Blur changed successfully!");
                });

                Blur_Button.style.background = "#27a619"
                Blur_Button.innerHTML = "BLUR - ON";
            } else {

                chrome.storage.sync.set({ Blur: false }).then(() => {
                    console.log("Blur changed successfully!");
                });

                Blur_Button.style.background = "#ff0000"
                Blur_Button.innerHTML = "BLUR - OFF";
            };
        });
    });
});