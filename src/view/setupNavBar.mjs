
export function setupNavBar(binaryBuffer, offset) {
    document.getElementById('navbar').innerHTML = 
    `<nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="index.html">Upload <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="listSections.html">Sections</a>
                <a class="nav-item nav-link" href="#">Disassembly</a>
                <a class="nav-item nav-link disabled" href="#">Hex</a>
            </div>
        </div>
    </nav>`;


}

