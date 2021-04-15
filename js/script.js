var links = {
    "github": "https://github.com/MalickReza",
    "email": "mailto:mmrezajuly@gmail.com",
    "linkedin": "https://www.linkedin.com/in/malickmusfiquereza",
    "resume": "assets/Resume.pdf"
};

var portfolio = [
    
];

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

$("#resume").attr("href", window.location.protocol + "//" + window.location.hostname + "/" + links["resume"]);
