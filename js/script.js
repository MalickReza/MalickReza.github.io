var links = {
    "github": "https://github.com/MalickReza",
    "email": "mailto:mmrezajuly@gmail.com",
    "linkedin": "https://www.linkedin.com/in/malickmusfiquereza",
    "resume": "assets/Resume.pdf"
};

var portfolio = [
    
];

function getRelativePath(pathFrom, pathTo) {
    var fromArr = pathFrom.split("/"),
        toArr = pathTo.split("/"),
        index = -1,
        relPath = "";
    for (var i=0; i<fromArr.length; i++) {
        if (fromArr[i] != toArr[i]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return "./" + pathTo;
    }
    for (var i=0; i<(fromArr.length-index-1); i++) {
        relPath += "../";
    }
    return relPath + pathTo;
}

function setNavLink(element, key) {
    element.href = links[key];
}

function initViz(project) {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://public.tableau.com/views/" + project;
    viz = new tableau.Viz(placeholderDiv, url);
}

$(".nav-icon").each(function() {
    $(this).attr("href", links[$(this).attr("aria-label")]);
});
