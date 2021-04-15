var portfolio = [
    {
        "title": "Telco Customer Churn",
        "filter": "tableau",
        "img": "../assets/images/telco-customer-churn.png",
        "href": "viz/telco-customer-churn.html",
        "target": "_self"
    },
    {
        "title": "Capstone 2 Telco Customer Churn Revised",
        "filter": "jupyter",
        "img": "../assets/images/capstone-2-telco-customer-churn-revised.png",
        "href": "jupyter/Capstone_2_Telco_Customer_Churn_Revised.pdf",
        "target": "_blank"
    },
    {
        "title": "Heart Failure Prediction",
        "filter": "tableau",
        "img": "../assets/images/heart-failure-prediction.png",
        "href": "viz/heart-failure-prediction.html",
        "target": "_self"
    },
    {
        "title": "ChemCorp Case",
        "filter": "tableau",
        "img": "../assets/images/chemcorp-case.png",
        "href": "viz/chemcorp-case.html",
        "target": "_self"
    },
    {
        "title": "New York City Airbnb",
        "filter": "tableau",
        "img": "../assets/images/new-york-city-airbnb.png",
        "href": "viz/new-york-city-airbnb.html",
        "target": "_self"
    },
    {
        "title": "IBM Employee Attrition Analytics",
        "filter": "tableau",
        "img": "../assets/images/ibm-employee-attrition-analytics.png",
        "href": "viz/ibm-employee-attrition-analytics.html",
        "target": "_self"
    },
    {
        "title": "Southern Water Corp OLS Case Study",
        "filter": "jupyter",
        "img": "../assets/images/southern-water-corp-ols-case-study-student-facing.png",
        "href": "jupyter/Southern_Water_Corp_OLS_Case_Study_Student_Facing.pdf",
        "target": "_blank"
    }
];

function makePortfolioCards() {
    for (var i=0; i<portfolio.length; i++) {
        var item = portfolio[i];
        var element = "<div class='mix " + item["filter"] + " col-12 col-md-6 col-lg-4 portfolio-item-wrapper p-2'>";
        element += "<a href='" + item["href"] +"' target='" + item["target"] + "' class='m-1 portfolio-item shadow'>";
        element += "<img class='portfolio-item-img' src='" + item["img"] + "'><span class='portfolio-item-overlay'></span>"
        element += "<h4 class='portfolio-item-heading d-flex align-items-center justify-content-center'>" + item["title"] + "</h4></a></div>";
        $("#portfolio-row").append(element);
    }
}

makePortfolioCards();
