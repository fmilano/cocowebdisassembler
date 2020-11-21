
export function setupNavBar(binaryBuffer, offset) {

    let currentLocation = window.location.pathname;


    let uploadActive = "";
    let sectionsActive = "";
    let disassemblyActive = "";
    let hexActive = "";

    switch(currentLocation) {
        case "/sections.html":
            sectionsActive = " active";
            break;
        case "/index.html":
            uploadActive = " active";
            break;
        case "/disassembly.html":
            disassemblyActive = " active";
            break;
        case "/hex.html":
            hexActive = " active";
            break;
        default:
            uploadActive = " active";    
    }

    document.getElementById('navbar').innerHTML = 
    `<nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-nav">
                <a class="nav-item nav-link` + uploadActive + `" href="index.html">Upload</a>
                <a class="nav-item nav-link` + sectionsActive + `" href="sections.html">Sections</a>
                <a class="nav-item nav-link` + disassemblyActive + `" href="disassembly.html">Disassembly</a>
                <a class="nav-item nav-link` + hexActive + `" href="hex.html">Hex</a>
            </div>
    </nav>`;


}

