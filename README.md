# Shortly Project

## ℹ️ About
Shortly is a URL shortening web application that allows users to shorten long URLs into shorter, more manageable links. The main features of the project include:

- User authentication with signup and signin functionalities.
- Shorten a long URL and generate a unique short URL.
- Retrieve information about a shortened URL, including its original URL and visit count.
- Delete a shortened URL.
- View user-specific information, including the number of visits and total links created.
- Ranking of the top 10 users based on the total number of visits and links created.
  
Shortly was developed as a personal project to practice building a full-stack web application and demonstrate my proficiency in creating user authentication, API endpoints, and database management.

## 🛠️ Technologies
- Node.js with Express.js for the server-side logic and API endpoints.
- MongoDB for the database to store user information and URL data.
- React.js for the front-end user interface and components.
- Axios for making HTTP requests to the server.
- React Router for managing application routes.
- JWT (JSON Web Tokens) for user authentication and authorization.
- Styled Components for styling the user interface.

## ⚙️ Endpoints
- POST /signup: Creates a new user account with the provided name, email, password, and confirmPassword. Responds with a status code of 201 upon successful account creation. Validates the request body for empty values, data types, field names, password matching, and valid email format. If there are any errors in the request body, it responds with a status code of 422 and the corresponding error messages. If the email is already registered, it responds with a status code of 409.

- POST /signin: Authenticates the user with the provided email and password. Responds with a status code of 200 and a generated token upon successful authentication. Validates the request body for empty values, data types, field names, and valid email format. If there are any errors in the request body, it responds with a status code of 422 and the corresponding error messages. If the user email or password is incorrect or does not exist, it responds with a status code of 401.

- POST /urls/shorten: Creates a shortened URL for the authenticated user with the provided original URL. Requires a valid JWT token in the Authorization header. Responds with a status code of 201 and the shortened URL object containing its ID and short URL. Validates the request body for empty values and the presence of a valid JWT token. Uses the nanoid library to generate the short URL. If the JWT token is missing or invalid, it responds with a status code of 401. If there are any errors in the request body, it responds with a status code of 422 and the corresponding error messages.

- GET /urls/:id: Retrieves information about the specified shortened URL. Responds with a status code of 200 and the shortened URL object containing its ID, short URL, and original URL. If the shortened URL does not exist, it responds with a status code of 404.

- GET /urls/open/:shortUrl: Redirects the user to the corresponding original URL associated with the short URL, increases the visit count of the link, and responds with a status code of 301 or 404 if the short URL does not exist.

- DELETE /urls/:id: Deletes the specified shortened URL if it belongs to the authenticated user. Requires a valid JWT token in the Authorization header. Responds with a status code of 204 upon successful deletion. If the JWT token is missing or invalid, it responds with a status code of 401. If the shortened URL does not exist or does not belong to the user, it responds with a status code of 404.

- GET /users/me: Retrieves user-specific information for the authenticated user. Requires a valid JWT token in the Authorization header. Responds with a status code of 200 and the user object containing the user's ID, name, visit count (sum of all link visits), and an array of shortened URL objects containing each URL's ID, short URL, original URL, and visit count. If the JWT token is missing or invalid, it responds with a status code of 401.

- GET /ranking: Retrieves the top 10 users based on the total number of visits and links created. Responds with a status code of 200 and an array of user objects, each containing the user's ID, name, links count, and visit count. The list is ordered by the sum of visits for all links created by each user. If there are users with zero visits or links, they will be included in the ranking. The list is limited to 10 users.

## 🚀 Next Steps
Implement a password reset functionality for users.
Add a feature for users to update their account information.
Improve error handling and error messages for a better user experience.
Implement pagination for the /urls and /users/me endpoints to handle large datasets efficiently.

## 🖇 How to run
To run this project locally, you'll need to follow these steps:

1. Clone this repository: git clone https://github.com/natividadesusana/projeto17-shortly.git
2. Install the dependencies: npm install
3. Set up the environment variables:
- Create a .env file in the root directory of the project.
- Add the following environment variables to the .env file:

      MONGODB_URI=<your-mongodb-uri>
      JWT_SECRET=<your-jwt-secret>

- Replace <your-mongodb-uri> with the connection URI for your MongoDB database.
- Replace <your-jwt-secret> with a secret key for JWT token generation.
6. Run the development server: npm start
7. Access http://localhost:3000 in your browser to see the app running.

## How to Contribute
Contributions are always welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or pull request.
