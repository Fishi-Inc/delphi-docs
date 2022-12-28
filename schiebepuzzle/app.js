//add eventlistener when highlight.js is done
document.addEventListener('DOMContentLoaded', function() {
    allPre = document.querySelectorAll('pre');
    for (var i = 0; i < allPre.length; i++) {
        var container = document.createElement('div');
        
        container.className = 'line-numbers';
        //instert container before the first child of the pre tag
        allPre[i].insertBefore(container, allPre[i].children[0]);
        lines = countLines(allPre[i].children[1]);

        allPre[i].children[0].innerHTML += '<span class="line-number"><br></span>'; 
        for (var j = 1; j <= lines; j++) {
            if (j == lines) {
                allPre[i].children[0].innerHTML += '<span class="line-number"><br></span>';
            } else {
                allPre[i].children[0].innerHTML += '<span class="line-number">' + j + '</span>';
            }
        }

        allPre[i].style.display = 'flex';
        allPre[i].style.flexDirection = 'row';
        allPre[i].style.flexWrap = 'nowrap';
        allPre[i].style.alignItems = 'flex-start';
        allPre[i].style.padding = '0 32px 0 0';
    }
})

countLines = function(code) {
    var lines = code.innerHTML.split(/\r\n|\r|\n/).length;
    return lines;
}

