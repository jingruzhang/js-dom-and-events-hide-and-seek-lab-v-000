function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
    const lis = document.querySelectorAll(".ranked-list li");
    lis.forEach(function(li) {
        li.innerHTML = (parseInt(li.innerHTML) + n).toString()
    });
}

function deepestChild() {
    const tree = document.querySelector('div#grand-node');
    const length = tree.querySelectorAll('div').length;
    return tree.querySelectorAll('div')[length - 1];
}
