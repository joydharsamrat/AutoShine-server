# AutoShine

## Overview

This package includes the server components of A Car washing booking system application.

**[LIVE LINK](https://car-wash-booking-system-orcin.vercel.app/)**

## Features

- Secure sign-up and login using JWT.
- Admins can create, update, and delete car washing services.
- Users can see availability of slots and book available time slots for their preferred services.
- Admins can view and manage all bookings.

## Technologies Used

- Backend: Node.js, Express.js, Typescript
- Authentication: JWT (JSON Web Tokens)
- Database: MongoDB, Mongoose

## Cloning the Repositories

clone the repository:

```sh
git clone https://github.com/joydharsamrat/car-wash-booking-system-server.git
```

## Installing Dependencies

Navigate to the directory and install the required dependencies using npm.

```sh
cd car-wash-booking-system-server
npm install
```

## Environment Configuration

Create a .env file in the root directory with the following contents:

```sh
NODE_ENV=ENVIRONMENT_OF_THE_APP
PORT=THE_PORT_THIS_APP_WILL_RUN_ON
DB_URL=YOUR_DATABASE_URL
BCRYPT_SALT_ROUNDS=SALT_ROUNDS_FOR_BCRYPT
JWT_ACCESS_TOKEN_SECRET=SECRET_FOR_JWT_ACCESS_TOKEN
JWT_REFRESH_TOKEN_SECRET=SECRET_FOR_JWT_REFRESH_TOKEN

```

## Running the Application Locally

Run the development server:

```sh
npm run start:dev
```
