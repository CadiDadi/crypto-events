Assignment
    https://coursework.vschool.io/personal-react-site/

NOTE:
    THIS PROJECT IS NOT FULLY FUNCTIONAL, NOR IS IT MEANT TO BE, IT IS A LEARNING PROJECT OF EXPRESS.JS

TO DO:
    ☑️ proposal - PitchDeck - https://slides.com/cadidadi/crypto-events
        see WIREFRAME & MINDMAP free platforms below
    ☑️ install react-router
    ☑️ install axios
    ☑️ install react-router-dom

    convert dates - https://momentjs.com/ 
        ☑️ install (can be npm or use URL) - installed NPM
        ☑️ use in files - alternatives:
        ☑️ code for conversions - moment().format()

API:
    API - https://api.coinmarketcal.com (see GTasks/VSchool for acct info)
            *note - requires 'accept'
    EVENTS API 
        -do not forget to use can_occur_before field in the response object, this field is very important as some events can occur before the date stated.
        -can change settings (events/page, dates, etc) and generate new API URL
        API - needs a KEY called 'accept' (for Postman, et) - (ask Nate about)
            Curl
                curl -X GET "https://api.coinmarketcal.com/v1/events?access_token=YTY5YzYwNGE3YTk4NmI3YmUzMzMyMDFlOGRlY2MyZWNjNTU4OTAyYTZiZWRjNTk1YTM4MzVlN2ZkYzM5MGQ0NA&page=1&max=50" -H "accept: application/json"
            *use this - Request URL
                https://api.coinmarketcal.com/v1/events?access_token=YTY5YzYwNGE3YTk4NmI3YmUzMzMyMDFlOGRlY2MyZWNjNTU4OTAyYTZiZWRjNTk1YTM4MzVlN2ZkYzM5MGQ0NA&page=1&max=50



-------------

Personal React Site

18 AUGUST 2015 on Web Applications, HTTP/API, Level 2, Project

You are going to design and build your very own React site with a theme and content of your choosing.

This site will be a portfolio piece.

Project Requirements
Your site must integrate with an online API. Use the axios library to make client-side HTTP requests.
Here is a huge list of open APIs you can use. Some fun ones include:
Open Movie Database API
Rotten Tomatoes API
Weather Forecast API
Edmunds Vehicle API
Mashape API Library
Programmable Web API Library

Your site must have at least 3 views (pages) using React Router.
Use Context, render-props, and Higher Order Components (HOCs) where needed to help with writing DRY ('Don't Repeat Yourself') code.
Remember to use lifecycle methods like componentDidMount for managing HTTP requests.
Your site must be responsive. Can use any method to accomplish this you want.

One of the big challenges in accessing APIs is getting around the browser's "Same Origin Policy". Many of the APIs above require you to make requests from a server instead of the client. V School has built a small, simple request forwarder to help make this process easier. It may not work in all cases, and should only be used if you know your API of choice doesn't allow frontend requests.

* API Request Forwarding / CORS:
** may need V School's server/request forwarder - https://coursework.vschool.io/v-school-request-forwarding-cors-documentation/

Proposal
You must submit a proposal and have it passed by an instructor. This proposal is meant to help focus and scale your idea into a realistic MVP, or minimum viable product, within a reasonable time frame.

Your proposal must contain the following:

Paragraph describing your app idea. What are you building? Who is it for?

An easily describable MVP (minimum viable product). Remember you have a limited amount of time to develop this project. What is the minimum you can get done on this project to meet the requirements and get a product in someone's hand?

User Stories. What is a user going to do when they go to your site from the time they hit the landing page? What features do they need and which are optional? - https://www.mountaingoatsoftware.com/agile/user-stories

Wireframe. What is each page going to look like? What will be the layout, color scheme, etc? Check out wireframe.cc for a simple and free wireframing tool - https://wireframe.cc/

Mind Map - https://www.mindmup.com/ - What is the folder structure of your frontend app going to look like? Make a diagram representing its component hierarchy.

Once you have these items, you need to meet with your instructor to pass off your proposal before you can start coding.

