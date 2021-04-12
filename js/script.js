function initViz(project) {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://public.tableau.com/views/" + project;
    viz = new tableau.Viz(placeholderDiv, url);
}
