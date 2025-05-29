import React from 'react';
import { FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Figma'] }
  ];

  const experience = [
    {
      title: 'Student',
      description: 'web development of multiple web applications using React and Node.js.'
    },
    {
      title: 'student',
      period: 'continue from 2023',
      description: 'Developed and maintained web applications using modern JavaScript frameworks.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      school: 'charusat university',
      period: '2023-2027',
      description: 'Graduated with honors'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* About Me Section */}
      <section className="mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 mb-4">
            I'm a passionate full-stack developer with a strong foundation in web technologies
            and a keen eye for creating elegant solutions to complex problems.
          </p>
          <p className="text-lg text-gray-600">
            With several years of experience in the industry, I've worked on various projects
            ranging from small business websites to large-scale enterprise applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <FaCode className="mr-3" /> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <FaBriefcase className="mr-3" /> Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-blue-600 font-medium">{job.company}</p>
              <p className="text-gray-500 mb-2">{job.period}</p>
              <p className="text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <FaGraduationCap className="mr-3" /> Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-blue-600 font-medium">{edu.school}</p>
              <p className="text-gray-500 mb-2">{edu.period}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 