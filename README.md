#  JWT-based Authentication System - Frontend
This is a JWT-based Authentication System developed using React and Symfony with LexikJWTAuthenticationBundle. The system allows users to register, login, and retrieve user information. Users can also update their name and address. The code prioritizes security and maintains high code quality for production readiness and post-launch support.

### `N.B. This is for the Frontend Repository`

[Please check Backend here](https://github.com/davidogundepo/backend)


## Getting Started

These instructions will help you set up and run the project locally on your machine.

### Prerequisites
Before running the project, you need to have the following software installed:

- Docker: [Download Docker](https://www.docker.com/get-started)
- Node.js: [Download Node.js](https://nodejs.org/en/download/)
- Composer: [Download Composer](https://getcomposer.org/download/)

### Instaliing
Follow these steps to get the project up and running:

Clone this repository to your local machine:

```
git clone <repository_url>
cd JWT-based-Authentication-System
```

### Frontend Setup
1. Open a new terminal window and navigate to the `frontend` folder:
   ```
   cd ../frontend
   ```

2. Install the  required Node.js packages:
   ```
   npm install
   ```
   
3. In the same `frontend` folder, create a `.env` file with the following content:
   ```
   REACT_APP_BACKEND_API=http://localhost:8000/api
   ```


## Running the Application
1. Go back to the root folder of the project:
   ```
   cd ..
   ```
2. Use `docker-compose` to start both the backend and frontend:
   ```
   docker-compose up -d
   ```
   This command will build and start the containers. The -d flag runs the containers in detached mode.

3. Access the frontend in your browser:
   Open **`http://localhost:8000/api`**  in your web browser to access the React frontend.


## Usage
Here are the main functionalities of the JWT-based Authentication System:

- **User Registration**: Visit the registration page on the frontend and provide your name, email address, and password to create an account. The system will validate the input and securely store user data.

- **User Login**: Visit the login page on the frontend and enter your registered email and password to log in. The system will authenticate you and generate a JWT token using LexikJWTAuthenticationBundle, providing it to the client for subsequent authenticated requests.

- **User Information Retrieval**: After successful login, you can retrieve your user information, including name, email, and address, by visiting the corresponding page on the frontend.

- **User Update**: Logged-in users can update their name and address securely by visiting the update page on the frontend and making the necessary changes.



## Testing
The project includes comprehensive unit tests for critical functionality. To run the tests, follow these steps:

For Frontend Tests:
```
cd frontend
npm test
```

## Built With
- **[React](https://reactjs.org/)** -  A JavaScript library for building user interfaces.
- **[Symfony](https://symfony.com)** - A PHP web application framework.
- **[LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle)** - A JWT authentication bundle for Symfony.
- **[Docker](https://www.docker.com)** - A platform for developing, shipping, and running applications in containers.

## Authors
- **[David Ogundepo](https://github.com/davidogundepo)**

## Licence
This project is licensed under the **[MIT License](https://opensource.org/license/mit/)**

## Acknowledgements
- **[John Mahood](https://www.linkedin.com/in/johnmahood2018/)** - For the job description and company overview.
- **[Pascal Marechal](https://github.com/PascalMarechal)** - For providing the job interview test and guidance.
- **[The Coaches' Voice Company](https://github.com/Jay-CoachesVoice)** - For reviewing and evaluating the project.
