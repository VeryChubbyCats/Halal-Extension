

const Toggle_Button = document.querySelector(".Toggle");

chrome.storage.sync.get(["Toggled"]).then((Result) => {
    if (Result.Toggled) {
        Enable_halal_mode();
    };
    if (!Result.Toggled) {
        Enable_haram_mode();
    };
});

const Enable_haram_mode = () => {

    const body = document.getElementsByTagName("body")[0];
    const Extension = document.querySelector(".Extension");
    const Title = document.querySelector(".Title");
    const Toggle_button = document.querySelector(".Toggle");

    body.style.background = "linear-gradient(to left, #ff5959, #ff4242)";

    Extension.style.color = "#ff0000";
    Extension.innerHTML = "HARAM"

    Toggle_Button.style.background = "#ff0000"
    Toggle_Button.innerHTML = "OFF";

}


const Enable_halal_mode = () => {

    const body = document.getElementsByTagName("body")[0];
    const Extension = document.querySelector(".Extension");
    const Title = document.querySelector(".Title");
    const Toggle_button = document.querySelector(".Toggle");

    body.style.background = "linear-gradient(to left, #30ff68, #00ff44)";

    Extension.style.color = "#2fb521";
    Extension.innerHTML = "HALAL"

    Toggle_Button.style.background = "#27a619"
    Toggle_Button.innerHTML = "ON";

}

Toggle_Button.addEventListener("click", () => {
    chrome.storage.sync.get(["Toggled"]).then((Result) => {
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