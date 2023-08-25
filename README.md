# UMich Web REST API 🌐

Welcome to the UMich Web REST API, a comprehensive backend solution developed as part of the University of Michigan-Dearborn web development course. This API provides endpoints for user management and image operations, ensuring a seamless integration for web applications.

## 🚀 Features

- **User Management**: Register, login, and manage user profiles.
- **Image Operations**: Upload, retrieve, and manage images.
- **Secure Authentication**: Robust authentication using JWT tokens.
- **Error Handling**: Middleware for handling and logging errors.

## 🛠️ Installation & Setup

1. **Clone the Repository**:
```bash
git clone https://github.com/ItsAlexousd/umich-web-rest-api.git
cd umich-web-rest-api
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Run the API**:
```bash
npm start
```

## 📄 API Endpoints

### User

- Register: `POST /api/user/register`
- Login: `POST /api/user/login`
- Get Profile: `GET /api/user/profile`

### Image

- Upload Image: `POST /api/image/upload`
- Get All Images: `GET /api/image/all`
- Get Image by ID: `GET /api/image/:id`
