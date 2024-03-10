const Blocked_hostnames = chrome.runtime.getURL('Blocked_host.json');

const Blocked_Page_HTML = () => {
    return `
    <center>
        <h1 id="EXT">HALAL EXTENSION POLICE!</h1>
        <h1 id="HALAL">BRO, HARAM!</h1>
        <h2 id="WHY1">ALLAH S.W.T WILL HOLD YOU ACCOUNTABLE FOR THIS SHAMEFUL ACTION!</h2>
        <h2 id="WHY2">I AM TELLING YOUR LOCAL MOSQUE!</h2>
    </center>
    `
}

const Blocked_Page_Head = () => {
    return `
    
        <title>HARAM DETECTED!</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/1215809729935314964/1215809820775551057/16x_Detected.png?ex=65fe1a21&is=65eba521&hm=de77fa76c23698c38e252986fc9c4519ab319dd7ea1314ab5bb36fbdd2560192&" type="image/icon type">

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
    font-size: 13.5rem;
    user-select: none;
    `
}

const SecondaryText_CSS = () => {
    return `
    color: #ff005c;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 4rem;
    user-select: none;
    `
}

const ThirdText_CSS = () => {
    return `
    color: #ff005c;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 5rem;
    user-select: none;
    `
}

const EXT_Text_CSS = () => {
    return `
    color: #1abd20;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 4.5rem;
    user-select: none;
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
                    const Third_text = document.getElementById("WHY2");
                    const EXT_text = document.getElementById("EXT");
    
                    body.style = Body_CSS();
                    Main_text.style = MainText_CSS();
                    Secondary_text.style = SecondaryText_CSS();
                    Third_text.style = ThirdText_CSS();
                    EXT_text.style = EXT_Text_CSS();
            
                };
            
            };
        });
    };
});