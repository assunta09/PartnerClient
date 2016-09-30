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

Partner was built with a decoupled architecture, using the Ruby on Rails framework as a RESTful API for consumption by our frontend framework built with the React framework, which can be found at [Partner Client Repository](https://github.com/assunta09/PartnerClient).

Form 990 was delivered in XML format. Data points were parsed by targeting tags common to each form.
```
officers_and_key_employee_salary_total = doc.search('ReturnData/IRS990/CompCurrentOfcrDirectorsGrp/TotalAmt').text
```


## Running the tests

To run the tests, run
```
bundle exec rspec spec
```
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
