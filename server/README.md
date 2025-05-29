# Portfolio Contact Form Server

A secure and efficient backend server for handling contact form submissions from your portfolio website.

## Features

- Input validation
- Rate limiting
- Secure email sending
- Error handling
- CORS enabled

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   NODE_ENV=development
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   EMAIL_RECIPIENT=your-email@gmail.com
   ```

3. For Gmail users:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in EMAIL_PASS

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project."
}
```

Response:
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Security Features

- Rate limiting (5 requests per 15 minutes)
- Input validation
- Secure email transport
- Error handling
- Environment variable protection 