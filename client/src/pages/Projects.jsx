import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include user registration, product search, cart management, and secure payment processing.',
      image: '/images/ecommerce-bg.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com/dhruvkamariya/ecommerce',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes task assignment, progress tracking, and team communication tools.',
      image: '/images/taskmanager-bg.jpg',
      technologies: ['React', 'Redux', 'Socket.io', 'Tailwind CSS'],
      category: 'frontend',
      githubUrl: 'https://github.com/dhruvkamariya/task-manager',
      liveUrl: 'https://task-manager-demo.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A responsive social media analytics dashboard with data visualization, user engagement metrics, and real-time updates. Features include custom charts, data filtering, and export capabilities.',
      image: '/images/dashboard-bg.jpg',
      technologies: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
      category: 'frontend',
      githubUrl: 'https://github.com/dhruvkamariya/social-dashboard',
      liveUrl: 'https://dashboard-demo.com'
    },
    {
      title: 'AI Chat Application',
      description: 'An AI-powered chat application with natural language processing, sentiment analysis, and real-time message translation. Includes chatbot integration, language detection, and conversation history.',
      image: '/images/aichat-bg.jpg',
      technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      category: 'fullstack',
      githubUrl: 'https://github.com/dhruvkamariya/ai-chat',
      liveUrl: 'https://ai-chat-demo.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout planning, progress tracking, and nutrition monitoring. Features include custom workout plans, progress charts, and meal tracking.',
      image: '/images/fitness-bg.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      category: 'mobile',
      githubUrl: 'https://github.com/dhruvkamariya/fitness-tracker',
      liveUrl: 'https://fitness-tracker-demo.com'
    },
    {
      title: 'Real Estate Platform',
      description: 'A real estate listing platform with property search, virtual tours, and agent-client communication features. Includes advanced search filters, property comparison, and virtual tour integration.',
      image: '/images/realestate-bg.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/dhruvkamariya/real-estate',
      liveUrl: 'https://real-estate-demo.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects; 