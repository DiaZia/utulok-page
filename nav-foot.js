document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'nav.html', true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('navigation').innerHTML = xhr.responseText;
}
};
    xhr.send();

    var xhrSidebar = new XMLHttpRequest();
    xhrSidebar.open('GET', 'footer.html', true);
    xhrSidebar.onreadystatechange = function() {
        if (xhrSidebar.readyState === 4 && xhrSidebar.status === 200) {
            document.getElementById('footer').innerHTML = xhrSidebar.responseText;
        }
    };
    xhrSidebar.send();
});
