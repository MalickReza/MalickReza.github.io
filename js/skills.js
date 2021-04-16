var skillsFilters = [
    {
        "title": "Finance",
        "data-filter": "finance"
    },
    {
        "title": "Data",
        "data-filter": "data"
    },
    {
        "title": "Visualization",
        "data-filter": "visualization"
    }
];

var skills = [
    {
        "title": "Financial Planning",
        "icon": "fa fa-chart-line",
        "filter": "finance"
    },
    {
        "title": "Budgeting & Forecasting",
        "icon": "fa fa-calculator",
        "filter": "finance"
    },
    {
        "title": "Python",
        "icon": "fab fa-python",
        "filter": "data"
    },
    {
        "title": "Microsoft Excel",
        "icon": "fa fa-file-excel",
        "filter": "data"
    },
    {
        "title": "Microsoft Access",
        "icon": "fa fa-table",
        "filter": "data"
    },
    {
        "title": "Microsoft Power BI",
        "icon": "fa fa-chart-bar",
        "filter": "data"
    },
    {
        "title": "SQL",
        "icon": "fa fa-database",
        "filter": "data"
    },
    {
        "title": "Visual Basic",
        "icon": "fa fa-code",
        "filter": "data"
    },
    {
        "title": "Tableau",
        "icon": "fa fa-chart-pie",
        "filter": "visualization"
    }
];

function makeSkillsControls() {
    if (skillsFilters.length > 0) {
        $("#skills-controls").append("<button type='button' class='btn skills-btn mx-1' data-filter='all'>All</button>");
    }
    for (var i=0; i<skillsFilters.length; i++) {
        var item = skillsFilters[i];
        var element = "<button type='button' class='btn skills-btn mx-1' data-filter='." + item["data-filter"] + "'>" + item["title"] + "</button>";
        $("#skills-controls").append(element);
    }
}

function makeSkillCards() {
    for (var i=0; i<skills.length; i++) {
        var item = skills[i];
        var element = "<div class='mix " + item["filter"] + " col-12 col-md-6 col-lg-4 my-2'>";
        element += "<div class='d-flex flex-row align-items-center justify-content-center'>"
        element += "<div class='d-flex flex-row align-items-center justify-content-center skills-icon'><i class='" + item["icon"] + "'></i></div>";
        element += "<div class='ml-2 skills-heading'>" + item["title"] + "</div></div></div>";
        $("#skills-row").append(element);
    }
}

makeSkillsControls();
makeSkillCards();
