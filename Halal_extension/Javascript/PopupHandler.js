

const Toggle_Button = document.querySelector(".Toggle_Block");
const Censore_Button = document.querySelector(".Toggle_Censore");

chrome.storage.sync.get(["Toggled"]).then((Result) => {
    chrome.storage.sync.get(["Censored"]).then((C) => {

        if (Result.Toggled) {
            Enable_halal_mode();
        };
        if (!Result.Toggled) {
            Enable_haram_mode();
        };

        if (C.Censored) {
            Censore_Button.style.background = "#27a619"
            Censore_Button.innerHTML = "CENSOR - ON";
        }

        if (!C.Censored) {
            Censore_Button.style.background = "#ff0000"
            Censore_Button.innerHTML = "CENSOR - OFF";
        }

    });
});

const Enable_haram_mode = () => {

    const body = document.getElementsByTagName("body")[0];
    const Extension = document.querySelector(".Extension");
    const Title = document.querySelector(".Title");
    const Toggle_button = document.querySelector(".Toggle_Block");

    body.style.background = "linear-gradient(to left, #ff5959, #ff4242)";

    Extension.style.color = "#ff0000";
    Extension.innerHTML = "HARAM"

    Toggle_Button.style.background = "#ff0000"
    Toggle_Button.innerHTML = "BLOCK - OFF";

}


const Enable_halal_mode = () => {

    const body = document.getElementsByTagName("body")[0];
    const Extension = document.querySelector(".Extension");
    const Title = document.querySelector(".Title");
    const Toggle_button = document.querySelector(".Toggle_Block");

    body.style.background = "linear-gradient(to left, #30ff68, #00ff44)";

    Extension.style.color = "#2fb521";
    Extension.innerHTML = "HALAL"

    Toggle_Button.style.background = "#27a619"
    Toggle_Button.innerHTML = "BLOCK - ON";

}

Toggle_Button.addEventListener("click", () => {
    chrome.storage.sync.get(["Toggled"]).then((Result) => {
        chrome.storage.sync.get(["Censored"]).then((C) => {
            if (Result.Toggled) {
                chrome.storage.sync.set({ Toggled: false }).then(() => {
                    console.log("Toggled changed successfully!");
                });
                Enable_haram_mode();
            } else {
                chrome.storage.sync.set({ Toggled: true }).then(() => {
                    console.log("Toggled changed successfully!");
                });
                Enable_halal_mode();
            }
        });
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