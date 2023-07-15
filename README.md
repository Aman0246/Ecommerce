
# Ecommerce Vegetable Web App

The Ecommerce Vegetable Web App is a full-stack web application that allows users to buy fresh vegetables online. This README provides an overview of the project, its components, and instructions for setting up and running the application.

#image

![React App - Brave 15-07-2023 09_47_06](https://github.com/Aman0246/Ecommerce/assets/130737436/2f98a0c4-daff-4ee4-8cdb-eb4de9c6cbd0)
![React App - Brave 15-07-2023 09_48_37](https://github.com/Aman0246/Ecommerce/assets/130737436/326f05b4-2ce5-46dd-b916-cc0a6a2113cc)
![React App - Brave 15-07-2023 09_49_14](https://github.com/Aman0246/Ecommerce/assets/130737436/5f3052c6-97d9-4549-8520-09f2bfc507ee)
![React App - Brave 15-07-2023 09_49_29](https://github.com/Aman0246/Ecommerce/assets/130737436/62b98941-1969-44f7-bad0-b3a8986dac3d)

## Technologies Used
The Ecommerce Vegetable Web App is built using the following technologies:

### Backend
- Express: A minimal and flexible Node.js web application framework.
- Node.js: A JavaScript runtime environment that executes server-side code.
- bcrypt: A library used for hashing passwords.
- MongoDB: A NoSQL database used to store application data.

### Frontend
- React.js: A popular JavaScript library for building user interfaces.
- Redux Toolkit: A state management library for managing the application state.
- React Router DOM: A library used for routing within the React application.

## Features
- User registration and authentication with encrypted passwords.
- Browse a wide range of fresh vegetables available for purchase.
- Add items to the shopping cart and adjust quantities.
- Checkout and place orders securely.
- View order history and order statuses.
- User-friendly and responsive user interface.

## Getting Started

### Prerequisites
- Node.js and npm (Node Package Manager) should be installed on your system. You can download and install them from the official Node.js website: https://nodejs.org/

### Installation
1. Clone the repository to your local machine using `git clone <repository-url>`
2. Navigate to the project directory: `cd ecommerce-vegetable-web-app`
3. Install backend dependencies: `npm install`
4. Navigate to the client directory: `cd client`
5. Install frontend dependencies: `npm install`

## Configuration
Before running the application, you need to configure the database connection and other environment variables.

1. Backend Configuration:
   - Create a `.env` file in the root of the `ecommerce-vegetable-web-app` directory.
   - Set the following variables in the `.env` file:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

2. Frontend Configuration:
   - Create a `.env` file in the `client` directory.
   - Set the following variable in the `.env` file:
     ```
     REACT_APP_API_BASE_URL=http://localhost:3000/api
     ```

## Running the Application
1. Start the backend server:
   - Navigate to the root directory: `cd ecommerce-vegetable-web-app`
   - Run the command: `npm start`

2. Start the frontend development server:
   - Navigate to the client directory: `cd client`
   - Run the command: `npm start`

The application should now be running on `http://localhost:3000`.

## API Endpoints
The backend provides the following API endpoints:

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate a user and generate a JWT token.
- `GET /api/vegetables`: Get a list of available vegetables.
- `POST /api/orders`: Place a new order.


## Frontend
The frontend of the application is built using React.js and Redux Toolkit. The main codebase for the frontend can be found in the `client` directory. The `src` folder contains the application components, Redux store, actions, and reducers.

## Contributing
Contributions to the Ecommerce Vegetable Web App are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
