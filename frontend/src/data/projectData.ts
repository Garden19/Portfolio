import type { Project } from "../types/Project";

import ohmsDesktop from "../assets/images/projects/ohms-law-calculator.png"
import ohmsMobile from "../assets/images/projects/ohms-law-calculator-mobile.png"
import cruiseDesktop from "../assets/images/projects/cruise-admin-dashboard.png"
import cruiseMobile from "../assets/images/projects/cruise-admin-dashboard-mobile.png"
import NorthernSpectreDesktop from "../assets/images/projects/northern-spectre-airsoft.png"
import NorthernSpectreMobile from "../assets/images/projects/northern-spectre-airsoft-mobile.png"
import justbyouDesktop from "../assets/images/projects/justbyou.png"
import justbyouMobile from "../assets/images/projects/justbyou-mobile.png"
import weatherDisruptionBookingDetails from "../assets/images/projects/weather-disruption-airtable-booking_details.png"
import weatherDisruptionAtRisk from "../assets/images/projects/weather-disruption-airtable.png"
import weatherDisruptionMakeAutomation from "../assets/images/projects/weather-disruption-make.png"


export const projects: Project[] = [
    {
        id: 1,
        "name": "Northern Spectre Airsoft",
        "type": "commercial-projects",
        "stack": [
            "Angular 20",
            "TypeScript",
            "Node.js",
            "Express.js",
        ],
        "url": "https://northernspectre-airsoft.co.uk/",
        "description" : "A responsive commercial website developed for Northern Spectre Airsoft, providing customers with information about game days, events, pricing and booking enquiries. The website combines branded visual design with accessible navigation and mobile-friendly layouts.",
        "problem" : "Northern Spectre Airsoft needed a professional online presence where potential customers could easily find information about its activities, pricing, event availability and booking requirements. The website needed to communicate important information clearly while reflecting the business's identity and working effectively across different devices.",
        "resolution" : "Developed a responsive branded website with dedicated pages for events, business information, pricing and customer enquiries. Structured the content to make important information easy to find, added images from previous game days and created clear contact information to help visitors enquire about bookings. Applied consistent styling and responsive layouts to provide a consistent experience across a range of devices.",
        "challenges": [
            "Translating business requirements into a clear website structure that allows visitors to navigate between events, pricing, general information and booking enquiries.",
            "Developing responsive layouts that accommodate different screen sizes while maintaining a consistent visual identity.",
            "Presenting different game day and private party pricing structures clearly so customers can understand the available options and requirements.",
            "Creating reusable page elements and navigation patterns to maintain consistency throughout the website.",
            "Integrating business branding, photography and interactive elements without compromising usability on smaller screens."
        ],
        "images": [
            {
                "type": "desktop",
                "path" : NorthernSpectreDesktop,
                "altInformation": "Desktop view of the Northern Spectre Airsoft homepage displaying four promotional cards for family days, birthdays, stag dos and corporate events, alongside a gallery of previous airsoft games."
            },
            {
                "type": "mobile",
                "path" : NorthernSpectreMobile,
                "altInformation": "Mobile view of the Northern Spectre Airsoft homepage featuring stacked cards promoting family days out and birthday parties, with airsoft photography, navigation links and contact information."
            },
        ]
    },
    {
        id: 2,
        "name": "Just B You By J",
        "type": "commercial-projects",
        "stack": [
            "Angular 20",
            "DaisyUI",
            "TypeScript"
        ],
        "url": "https://justbyoubyj.com/",
        "description" : "A responsive commercial website created for Just B You By J, a professional makeup artistry business based in Blackpool. The website showcases bridal, glam, prom and creative makeup services through a portfolio of featured looks, clear pricing information and booking enquiries.",
        "problem" : "Just B You By J required a professional online presence that reflected the artist's creative identity while making it easy for potential clients to explore makeup services, view examples of previous work and find pricing information. The website needed to balance a visually engaging presentation with clear navigation and accessible information across different screen sizes.",
        "resolution" : "Developed a branded website featuring a selection of makeup looks, service descriptions, pricing information and booking calls to action. Organised the content to help visitors understand the available services, introduced the people behind the business and incorporated photography to showcase the artist's work. Designed responsive layouts to maintain a consistent experience across desktop and mobile devices.",
        "challenges": [
            "Translating the business's creative identity into a consistent website design that reflects its makeup artistry and branding.",
            "Creating responsive layouts that showcase high-quality makeup photography effectively across desktop, tablet and mobile screens.",
            "Organising different makeup services, descriptions and starting prices into a clear structure that helps visitors compare their options.",
            "Balancing visually prominent photography with readable text and intuitive navigation.",
            "Providing clear booking calls to action throughout the website so visitors can easily take the next step after exploring the services."
        ],
        "images": [
            {
                "type": "desktop",
                "path" : justbyouDesktop,
                "altInformation": "Desktop view of the Just B You By J homepage displaying four makeup service cards for bridal, full glam, prom and creative makeup, with photographs, prices and booking buttons, above a Meet the Team section."
            },
            {
                "type": "mobile",
                "path" : justbyouMobile,
                "altInformation": "Mobile view of the Just B You By J homepage featuring a horizontally scrolling gallery of makeup services, with bridal makeup pricing and booking options, followed by a Meet the Team section."
            },
        ]
    },
    {
        id : 3,
        "name" : "Ohms Law calculator",
        "type" : "web-development",
        "stack" : ["Angular 20", "TypeScript", "ASP .NET Core", "C#"],
        "url" : "https://github.com/Garden19/Ohms-law-calculator",
        "description": "A full-stack Angular 20 and ASP.NET Core Web API Ohms Law calculator that checks whether a vape coil build is within the safe amp limit of the user's battery.",
        "problem" : "Users of unregulated mechanical vaping devices may lack the knowledge required to calculate the electrical current drawn by their coil. Without understanding Ohm's law and battery discharge limits, they risk exceeding the battery's rated capabilities, potentially causing overheating, battery failure or other safety hazards.",
        "resolution" : "Developed a full-stack application that allows users to enter their coil's resistance and select a battery. The application uses Ohm's law to estimate the current draw and compares the result against the selected battery's discharge rating, helping users identify potentially unsafe configurations before use.",
        "challenges" : [
            "Intergrating the Angular frontend with the ASP.NET Core Web API required understanding how to structure HTTP requests and transfer calculation inputs and handle responses between TypeScript and C#"
        ],
        "images": [
            {
                "type": "desktop",
                "path" : ohmsDesktop,
                "altInformation": "Desktop view of the Ohm's Law Calculator featuring a vape device illustration on the left and a calculation form on the right, with fields for battery selection, voltage, amp rating and coil resistance."
            },
            {
                "type": "mobile",
                "path" : ohmsMobile,
                "altInformation" : "Mobile view of the Ohm's Law Calculator displaying a vape device above a vertically arranged form for selecting a battery, entering voltage, amp rating and coil resistance, with a Calculate button below."
            },
        ]
    },
    {
        id: 4,
        "name": "Cruise Admin Dashboard",
        "type" : "web-development",
        "stack" : ["Angular 20", "TypeScript", "RxJS", "Angular Router", "Angular HttpClient", "Angular Reactive Forms"],
        "url": "https://github.com/Garden19/Cruise-admin-dashboard",
        "description" : "A responsive Angular 20 administration dashboard for managing customer cruise enquiries. The application demonstrates CRUD operations, reactive state management with RxJS, form validation, routing and external API integration.",
        "problem" : "Managing cruise enquiries requires a structured way to view customer information, add new enquiries and track their progress. I wanted to develop a practical application that would allow me to explore how Angular components, services and reactive state management work together to handle changing data across multiple pages.",
        "resolution" : "Developed a responsive Angular application with an enquiry management interface that allows users to create enquiries, update their statuses and remove existing records. Implemented a shared Angular service using an RxJS BehaviorSubject to maintain enquiry data across components, alongside reactive forms for data entry and HttpClient for retrieving sample dashboard content from an external API.",
        "challenges" : [
            "Implementing shared state management using RxJS BehaviorSubject to ensure that changes to enquiry data were reflected across different Angular components.",
            "Understanding how Observables and subscriptions work when passing data between Angular services and components.",
            "Implementing create, update and delete operations using immutable array updates while maintaining consistent application state.",
            "Building reactive forms with TypeScript and Angular validators to capture enquiry information and prevent incomplete submissions.",
            "Integrating Angular HttpClient with an external API and using the returned data to dynamically render dashboard content.",
            "Organising the application into reusable components, services and routed pages to keep responsibilities separated."
        ],
        "images" : [
            {
                type: "desktop",
                path: cruiseDesktop,
                altInformation:
                    "Cruise Admin Dashboard enquiries page displaying six customer enquiry cards in a three-column grid, each showing a destination image, customer details, travel dates, budget and booking status."
            },
            {
                type: "mobile",
                path: cruiseMobile,
                altInformation:
                    "Mobile view of the Cruise Admin Dashboard enquiries page, displaying customer enquiry cards vertically with cruise images, customer details, destinations, budgets, travel dates and booking statuses beneath a collapsible navigation menu."
            }
        ]
    },
    {
        id: 5,
        "name": "Weather Disruption Monitor",
        "type": "automation",

        "stack": ["Make.com", "Airtable", "REST API", "HTTP", "JSON"],
        "url": "",
        "description" : "A flight disruption monitoring solution built using Make.com, Airtable and a weather forecast API. The project combines booking information, flight connection times and weather conditions to help identify potentially at-risk journeys and present relevant information through an Airtable dashboard.",
        "problem" : "Flight delays and adverse weather conditions can significantly affect passengers with connecting flights, particularly when delays reduce the time available to make their next departure. Manually reviewing individual bookings, checking weather forecasts and identifying potentially missed connections can be time-consuming and difficult to manage consistently. I wanted to explore how automation could bring this information together and make potential disruption risks easier to identify.",

        "resolution" : "Developed a workflow using Make.com to retrieve booking records from Airtable, request weather forecast information through an HTTP API and update the corresponding records with relevant weather data. Created Airtable interfaces to present at-risk bookings and detailed journey information, including routes, connection times, delays, risk levels and weather conditions. This brings information from multiple sources into one central interface to support the identification and assessment of potentially disrupted journeys.",
        "challenges" : [
            "Integrating Make.com with Airtable to retrieve booking records and update the correct records after processing external data.",
            "Configuring HTTP requests to a weather forecast API and understanding how to extract relevant information from JSON responses.",
            "Mapping weather forecast data to the appropriate booking records, including conditions at the origin and connecting airports.",
            "Presenting scheduled connection times, current delays and remaining connection minutes in a format that makes potentially problematic journeys easier to identify.",
            "Designing Airtable interfaces that separate an overview of at-risk bookings from the more detailed information required to assess an individual journey.",
            "Organising the automation into a maintainable workflow with clearly defined steps for retrieving, processing and updating information."
        ],
        "images": [
            {
                type: "desktop",
                path: weatherDisruptionMakeAutomation,
                altInformation : "Make automation workflow connecting three modules: an Airtable record search, an HTTP request to a weather forecast API and an Airtable record update."
            },
            {
                type: "desktop",
                path: weatherDisruptionAtRisk,
                altInformation : "Airtable interface displaying a searchable list of at-risk flight bookings with colour-coded risk levels and time-to-act estimates, alongside the selected booking's route, delay and connection details."
            },
            {
                type: "desktop",
                path: weatherDisruptionBookingDetails,
                altInformation : "Airtable booking details interface showing a high-risk flight connection, including the traveller's route, remaining connection time, current delay, risk reason and weather conditions at the airports."
            }
        ]
    }
]