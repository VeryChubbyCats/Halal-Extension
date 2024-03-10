
const SetVariables = () => {

    chrome.storage.sync.set({ Toggled: true }).then(() => {
        console.log("Toggled variable was set correctly and successfully!");
    });
    
    chrome.storage.sync.set({ Censored: true }).then(() => {
        console.log("Censored variable was set correctly and successfully!");
    });
    
}; SetVariables();