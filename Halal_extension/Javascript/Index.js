const Blocked_hostnames = chrome.runtime.getURL('Blocked_host.json');

const Blocked_Page_HTML = () => {
    return `
    <center>
        <h1 id="EXT">HALAL EXTENSION BLOCKER!</h1>
        <h1 id="HALAL">HARAM DETECTED!</h1>
        <h2 id="WHY1">ALLAH S.W.T WILL HOLD YOU ACCOUNTABLE FOR THIS SHAMEFUL ACTION!</h2>
        <a id="Google" href="https://www.google.com/"><img id="Google1" class="NO_TOUCH" src="https://i.ibb.co/GnwcX8P/chrome.png">Go to Google<img id="Google2" class="NO_TOUCH" src="https://i.ibb.co/GnwcX8P/chrome.png"></a>
        <a id="Github" href="https://github.com/VeryChubbyCats/Halal-Extension"><img id="Github1" class="NO_TOUCH" src="https://i.ibb.co/YQrNXBG/github.png">Go to Halal Extension Repository<img id="Github2" class="NO_TOUCH" src="https://i.ibb.co/YQrNXBG/github.png"></a>
    </center>
    <script>
        console.log("SITE CONTENT REMOVED / DESTROYED! SUCCESSFULL BLOCK!!!");
    </script>
    `
}

const Blocked_Page_Head = () => {
    return `
    
        <title>HARAM DETECTED!</title>
        <link rel="icon" href="https://i.ibb.co/0tDkyTY/16x-Detected.png">
        <style>
            body {
                background: linear-gradient(to right, #c41d1d, #f21b1b);
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img, Img, picture, Picture {
                width: 128px;
                filter: blur(0px) !important;
            }

            #Google1, #Google2, #Github1, #Github2 {
                width: 48px; 
                height: 48px;
                filter: blur(0px) !important;
            }
        </style>

    `
}

const Body_CSS = () => {
    return `
    background: linear-gradient(to right, #c41d1d, #f21b1b);
    display: flex;
    justify-content: center;
    align-items: center;
    `
}

const MainText_CSS = () => {
    return `
    color: #ffffff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 10rem;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    `
}

const SecondaryText_CSS = () => {
    return `
    color: #ff005c;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 4rem;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    `
}

const EXT_Text_CSS = () => {
    return `
    color: #1abd20;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 4.5rem;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    `
}

const Google_CSS = () => {
    return `
    color: #0088ff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 3.5rem;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    `
}

const Github_CSS = () => {
    return `
    color: #1ac91a;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 3.5rem;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    `
}

chrome.storage.sync.get(["Toggled"]).then((Result) => {
    if (Result.Toggled) {

        fetch(Blocked_hostnames).then((R) =>
            R.json()
        ).then((V) => {
            for (const block of V.Hostname) {
    
                if (window.location.hostname === block.toLowerCase()) {
            
                    document.head.innerHTML = Blocked_Page_Head();
                    document.body.innerHTML = Blocked_Page_HTML();
    
                    const body = document.getElementsByTagName("body")[0];
                    const Main_text = document.getElementById("HALAL");
                    const Secondary_text = document.getElementById("WHY1");
                    const EXT_text = document.getElementById("EXT");

                    const Google_Link = document.getElementById("Google");
                    const Github_Link = document.getElementById("Github");
    
                    body.style = Body_CSS();
                    Main_text.style = MainText_CSS();
                    Secondary_text.style = SecondaryText_CSS();
                    EXT_text.style = EXT_Text_CSS();
                    Google_Link.style = Google_CSS();
                    Github_Link.style = Github_CSS();
            
                };
            
            };
        });
    };
});