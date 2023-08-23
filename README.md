# Cafe-Hopping Website

Welcome to the Cafe-Hopping Website repository! This full stack web application is designed to bring together cafe enthusiasts who want to explore the vibrant cafe culture of South Korea. Users can share their favorite cafes, upload images, rate, comment, and more. The project is built using Node.js, Express, EJS, MongoDB, and PassportJS for authentication.


## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- User registration and authentication
- CRUD operations for cafes (Create, Read, Update, Delete)
- Uploading cafe images
- Posting reviews and ratings
- User-specific actions (delete cafes, edit profile)
- Community interaction through comments
- Intuitive user interface

## Demo

To see a live demo of the Cafe-Hopping Website, you can visit [Demo Link](https://cafe-hoppers.onrender.com)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/EliRen7/Cafe-Hoppers.git
  cd Cafe-Hoppers
```

2. Install dependencies:
  ```bash
  npm install
```

3. Create a .env file in the root directory and add your environment variables:
  ```bash
  DATABASE_URL=your_mongodb_connection_string
  SESSION_SECRET=your_session_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the application:
  ```bash
  npm start
```

## Usage

  1. Register an account to access all features.
  2. Explore cafes posted by other users.
  3. Add new cafes along with descriptions, locations, and images.
  4. Edit or delete cafes you've posted.
  5. Rate and comment on cafes to share your experiences.
  6. Engage with the community and get inspired by others' cafe adventures.

## Contributing
  1. Fork the repository.
  2. Create a new branch for your feature: git checkout -b feature-name
  3. Commit your changes: git commit -m 'Add some feature'
  4. Push to the branch: git push origin feature-name
  5. Open a pull request.


