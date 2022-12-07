function loadScripts(filename, callback) {
    let script = document.createElement('script');
    script.src = filename;
    script.onload = function(){
        console.log("Script loaded" + filename);
        callback(filename);
    }
    document.body.appendChild(script);
}

function goodNight(name) {
    alert("Good night!" + name);
}

function goodEvening(name) {
    alert("Good evening!" + name);
}
loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
    alert("Good night!" + name);

    loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function goodNight(name) {
        alert("Good night!" + name);
    
    }});
