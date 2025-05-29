# Portfolio Website Frontend

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Contact form with backend integration
- Project showcase
- Smooth animations
- SEO friendly

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components
├── pages/          # Route-level pages
├── styles/         # Global styles and Tailwind config
├── App.js          # Main app component
└── index.js        # Entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App

## Customization

1. Update personal information in components
2. Add your projects to the projects data
3. Customize colors and styles in `src/styles/main.css`
4. Update social links in the Footer component

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service of choice (Netlify, Vercel, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 