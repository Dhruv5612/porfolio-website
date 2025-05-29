import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: '/images/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/dhruvkamariya/ecommerce',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/images/taskmanager.jpg',
      technologies: ['React', 'Redux', 'Socket.io', 'Tailwind CSS'],
      githubUrl: 'https://github.com/dhruvkamariya/task-manager',
      liveUrl: 'https://task-manager-demo.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A responsive social media analytics dashboard with data visualization, user engagement metrics, and real-time updates.',
      image: '/images/dashboard.jpg',
      technologies: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
      githubUrl: 'https://github.com/dhruvkamariya/social-dashboard',
      liveUrl: 'https://dashboard-demo.com'
    },
    {
      title: 'AI Chat Application',
      description: 'An AI-powered chat application with natural language processing, sentiment analysis, and real-time message translation.',
      image: '/images/aichat.jpg',
      technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      githubUrl: 'https://github.com/dhruvkamariya/ai-chat',
      liveUrl: 'https://ai-chat-demo.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout planning, progress tracking, and nutrition monitoring.',
      image: '/images/fitness.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      githubUrl: 'https://github.com/dhruvkamariya/fitness-tracker',
      liveUrl: 'https://fitness-tracker-demo.com'
    },
    {
      title: 'Real Estate Platform',
      description: 'A real estate listing platform with property search, virtual tours, and agent-client communication features.',
      image: '/images/realestate.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/dhruvkamariya/real-estate',
      liveUrl: 'https://real-estate-demo.com'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-blue-600">Dhruv Kamariya</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A passionate full-stack developer building modern web applications
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  View My Work
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 