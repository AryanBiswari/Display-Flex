function loadScripts(filename) {
    let script = document.createElement('script');
    script.src = filename;
    document.body.appendChild(script);
}

loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

console.log(loadScripts);