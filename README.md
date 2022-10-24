# cs465-fullstack
CS-465 Full Stack Development with MEAN
# Architecture
*Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?*

  The types of frontend development used were Express.js, and Angular for SPA. Express had a lot of ease of use and through Node.js, I was able to have an easier understanding of the connection between the front and and back end. Using handlebars through express allowed for easily templated pages. 
  The frontend framework Angular made making an SPA very straight forward and what seems to be a very efficient and fast web page. Once the page loads, the user experience is very user friendly. 
  The backend used a NoSQL MongoDB. This increases its speed and ability to be more flexible as a standard SQL DB is a more structured database. 

# Functionality
*How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*
  JSON can be created or accessed by Javascript. Javascript will create and hold functions that use information provided within the JSON. The important and most helpful part of JSON is that it can be used for both ends of the stack. 
  In this project, the trips.json file is a simple file that provides the initial trips that the website starts with. This json file is parsed by both ends of the stack. 

# Testing
*Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*

  The process of testing the connection of the SPA and the API was to mostly just run the functions and test if they could first run properly, and then populate the data correctly. I ran into errors when testing the connection the SPA and the API had. I found it was some of the more simple errors that could cause huge issues. I believed my issues at first to be caused my incorrect angular files. I found I was reading the error messages incorrectly and most issues I had was the SPA not connecting to the correct methods in the API. I used two methods for testing throughout. I would first use Postman, to shoot the data right into the app_api on the Local:3000 location. I would then test the actual functionality on the front facing sight by attempting to GET or PUT the same data that I passed through Postman. Throughout this process, I would then run into errors. The easiest way I found to located errors was to edit the already existing console.log outputs. The initial ones were a bit too vague and I needed to be more precise of where the errors were coming from. This debugging method was super helpful, but still took a lot of time. The development tool on Chrome also helped in assisting as it would pass the same error codes but give a bit more information on the locations. 

# Reflection
*How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*

  Overall, I really enjoyed the process of building RESTful Web app and a Single Page Application. It has provided me with a clearer view of the full stack and how each element interacts with one another. I think that is an important bit of knowledge that will help make me become a more marketable candidate. An understanding of the full stack allows me to have a deeper understanding of my work even if I am working on just a part of the stack. 
