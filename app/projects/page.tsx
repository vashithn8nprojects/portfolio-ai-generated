import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pujala Sai Varshith - Projects',
  description: 'Explore the projects developed by Pujala Sai Varshith, including an AI Chat Application and an SMTP Email Service.',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Universal AI Chat Application',
      technologies: 'Next.js, APIs',
      description: 'Developed backend request handling and API integration. Implemented robust error handling and debugging mechanisms.',
    },
    {
      title: 'SMTP Email Service',
      technologies: 'Node.js, Gmail SMTP',
      description: 'Designed and implemented secure SMTP authentication and reliable email delivery. Incorporated comprehensive logging and failure handling to ensure service stability.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
            <p className="text-blue-600 text-lg font-medium mb-4">{project.technologies}</p>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
