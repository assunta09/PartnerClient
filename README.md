![Alt text](/public/logo.png)
======

*Partner* analyzes data from IRS 990 Filings for nonprofit organizations from Amazon Web Services and visually displays information about an organization's expenses, sources of revenue, and significant contributions to the community.

## Background

Form 990 is the form used by the United States Internal Revenue Service (IRS) to gather financial information about nonprofit organizations. In June 2016, the IRS made 990 filing data available in bulk and in machine readable format, making it possible to systematically access and analyze information about nonprofit organizations in the United States.

Currently, Partner allows a user to search for organizations that fall under the categories of "Organization to Prevent Cruelty to Animals", "Organization to Prevent Cruelty to Children", and "Scientific Organization". A full listing of subsections and classification codes can be found [here]. In addition, several notable non-profit organizations were made search-able including:

* St. Jude Children's Research Hospital
* Partners in Health
* Habitat for Humanity
* American Cancer Society
* Human Rights Watch
* Susan G. Komen for the Cure
* Do Something
* National Public Radio

## About Partner

Partner has a decoupled architecture with a frontend built with React-Redux and a RESTful API built with Rails. Additional technologies included in the project were D3.js, Chart.js, and the MapBox API. The full list of libraries for the project can be found in the package.json file. If you would like to learn more about Partner's API, the repository can be found at [Partner API Repository](https://github.com/assunta09/partnerAPI). 


## Running the tests

[Jest](https://facebook.github.io/jest/) was used for testing Partner's client side, which mainly used the shallow rendering approach for each component. Additional testing tools include Partner's production team plans to write additional tests as the project is scaled. To run the tests, follow the node package manual instructions on the Jest website, configure the test script, and run:
```
npm install 
npm test
```
Partner's team encourages feedback regarding test construction. 

## Contributors

* Tedmund Chua <https://github.com/tchua93>
* Assunta Crux <https://github.com/assunta09>
* John Kim <https://github.com/soctkoren>
* Connor Ray <https://github.com/cray9503>
* Blake Wills <https://github.com/Baw25>

## Acknowledgments

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[here]: <https://www.irs.gov/pub/irs-soi/eo_info.pdf>

## License

MIT License

Copyright (c) 2016 Assunta Crux, Tedmund Chua, John Kim, Connor Ray, Blake Wills
