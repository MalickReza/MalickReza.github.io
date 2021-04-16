# MalickReza.github.io

Visit https://malickreza.github.io

To convert IPYNB to PDF, go to https://htmtopdf.herokuapp.com/ipynbviewer

## Portfolio

### To add a new filter

Go to `js/portfolio.js`. There will be a variable called `portfolioFilters`.

```
var portfolioFilters = [
    {
        "title": "Tableau",
        "data-filter": "tableau"
    },
    {
        "title": "Jupyter",
        "data-filter": "jupyter"
    }
];
```

E.g. If you want to add a filter called `Python`, the variable `portfolioFilters` would look like

var portfolioFilters = [
    {
        "title": "Tableau",
        "data-filter": "tableau"
    },
    {
        "title": "Jupyter",
        "data-filter": "jupyter"
    },
    {
        "title": "Python",
        "data-filter": "python"
    }
];
```

### To add a new card

Go to `js/portfolio.js`. There will be a variable called `portfolio`.

```
var portfolio = [
    // more items above
    {
        "title": "Southern Water Corp OLS Case Study",
        "filter": "jupyter",
        "img": "../assets/images/southern-water-corp-ols-case-study-student-facing.png",
        "href": "jupyter/Southern_Water_Corp_OLS_Case_Study_Student_Facing.pdf",
        "target": "_blank"
    }
];
```

If you would like to add another item, you would add the following to the `portfolio` variable.

```
var portfolio = [
    // more items above
    {
        "title": "Southern Water Corp OLS Case Study",
        "filter": "jupyter",
        "img": "../assets/images/southern-water-corp-ols-case-study-student-facing.png",
        "href": "jupyter/Southern_Water_Corp_OLS_Case_Study_Student_Facing.pdf",
        "target": "_blank"
    },
    {
        "title": "Title",
        "filter": "filter",
        "img": "../assets/images/image.png",
        "href": "/link/to/page-or-pdf",
        "target": "_blank"
    }
];
```

Key | Description
--- | ---
`title` | Title of card.
`filter` | Filter - check `portfolioFilters` for list of possible filters to use.
`img` | Path to image used for card.
`href` | Link to html page or pdf.
`target` | Set to `_blank` or `_self`. If `_blank`, then the page/pdf will open in a new tab. If `_self`, then the page/pdf will open in the same tab.
