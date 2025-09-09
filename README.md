# Freelance Bidding Platform

A Fiverr-like platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that connects clients with freelancers.

## Features

- User authentication (JWT)
- Job posting and management
- Bidding system
- Contract management
- User profiles and ratings
- Responsive design

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm (comes with Node.js)

## Setup Instructions

### 1. Clone or Download the Project

If you downloaded the project as a ZIP file, extract it to your desired location.

### 2. Install Dependencies

Navigate to the project root directory and install dependencies for both client and server:

```bash
# Install root dependencies (if any)
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Return to root directory
cd ..
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```
DATABASE=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/freelance-platform?retryWrites=true&w=majority
DATABASE_PASSWORD=your_mongodb_password
JWT_SECRET=your_super_secret_jwt_string_at_least_32_chars_long
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
NODE_ENV=development
PORT=5000
```

#### MongoDB Setup Options:

**Option A: MongoDB Atlas (Cloud)**
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and replace the DATABASE value in `.env`

**Option B: Local MongoDB**
1. Install MongoDB locally
2. Update the DATABASE value in `.env` to:
   ```
   DATABASE=mongodb://localhost:27017/freelance-platform
   ```
3. Remove the DATABASE_PASSWORD variable as it's not needed for local MongoDB

### 4. Start the Application

You can start the client and server separately or together:

#### Option A: Run Both Client and Server Together

From the root directory:
```bash
npm run dev
```

This command uses concurrently to run both the client and server.

#### Option B: Run Client and Server Separately

**Terminal 1 - Start the backend server:**
```bash
cd server
npm run dev
```
The server will run on http://localhost:5000

**Terminal 2 - Start the frontend client:**
```bash
cd client
npm start
```
The client will run on http://localhost:3000

### 5. Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

## Default Accounts

After starting the application, you can register new accounts or use these sample accounts:

**Client Account:**
- Email: client@example.com
- Password: password123
- Role: Client

**Freelancer Account:**
- Email: freelancer@example.com
- Password: password123
- Role: Freelancer

## API Endpoints

The server provides the following API endpoints:

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/jobs` - Get all jobs
- `POST /api/v1/jobs` - Create a new job (protected)
- `GET /api/v1/jobs/:id` - Get a specific job
- `POST /api/v1/bids` - Place a bid on a job (protected)
- `GET /api/v1/bids/job/:jobId` - Get bids for a specific job

## Project Structure

```
freelance-bidding-platform/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── package.json       # Client dependencies
├── server/                # Express.js backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── app.js             # Express app setup
│   ├── server.js          # Server entry point
│   └── package.json       # Server dependencies
└── README.md              # Project documentation
```

## Available Scripts

In the project root directory, you can run:

### `npm run dev`
Runs both the client app and the server concurrently in development mode.

### `npm run server`
Runs only the backend server.

### `npm run client`
Runs only the frontend client.

### `npm run build`
Builds the client app for production to the `build` folder.

## Troubleshooting

### Common Issues

1. **Port already in use**: 
   - Change the PORT value in server/.env file
   - Or kill the process using the port: `npx kill-port 3000` or `npx kill-port 5000`

2. **MongoDB connection errors**:
   - Check your MongoDB connection string in the .env file
   - Ensure MongoDB is running (if using local installation)

3. **Authentication errors**:
   - Verify your JWT_SECRET is set in the .env file
   - Check that passwords are being sent correctly in requests

4. **CORS errors**:
   - Ensure the client is making requests to the correct server URL
   - Check that the server CORS configuration allows requests from the client origin

## Technologies Used

- **Frontend**: React, React Router, Context API, Axios
- **Backend**: Node.js, Express.js, JWT authentication
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, rate limiting, JWT
- **Development**: Concurrently, Nodemon

## Further Development

To extend this project, consider adding:

- Payment integration with Stripe or PayPal
- Real-time messaging using Socket.io
- File upload functionality
- Advanced filtering and search
- Email notifications
- Admin dashboard
- Review and rating system

## License

This project is licensed under the MIT License.
