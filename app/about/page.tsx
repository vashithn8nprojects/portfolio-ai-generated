import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pujala Sai Varshith - About',
  description: 'Learn more about Pujala Sai Varshith\'s education, technical skills, certifications, and soft skills in backend development and software engineering.',
};

export default function AboutPage() {
  const skills = {
    programming: ['Java', 'C', 'JavaScript'],
    backend: ['Node.js', 'REST APIs', 'OOP', 'Debugging'],
    tools: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code'],
    networkingWeb: ['TCP/IP Basics', 'SMTP', 'Web Fundamentals'],
  };

  const certifications = ['Cyber Security (AICTE)', 'Data Engineering in AWS', 'Google Analytics'];
  const softSkillsInterests = ['Problem Solving', 'Debugging', 'Communication', 'Team Collaboration', 'Backend Development', 'Software Engineering'];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">About Me</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Computer Science undergraduate with strong fundamentals in backend development, programming, and debugging. Hands-on experience in API integration, email automation, and Linux-based development. Seeking internship or entry-level software roles.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Education</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <h3 className="text-xl font-semibold">B.Tech – Computer Science and Engineering</h3>
            <p>Vasireddy Venkatadri Institute of Technology | 2023–2026</p>
            <p>GPA: 6.5</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Diploma – Engineering</h3>
            <p>Chundi Ranganayakula Polytechnic College | 2019–2023 | 70%</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Secondary School (Class X)</h3>
            <p>St. Ann’s Centenary English Medium School | 2019 | GPA: 8.7</p>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <ul className="list-disc list-inside ml-4">
              {skills.programming.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="list-disc list-inside ml-4">
              {skills.backend.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <ul className="list-disc list-inside ml-4">
              {skills.tools.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Networking/Web</h3>
            <ul className="list-disc list-inside ml-4">
              {skills.networkingWeb.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Certifications</h2>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          {certifications.map((cert) => <li key={cert}>{cert}</li>)}
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">Soft Skills & Interests</h2>
        <ul className="list-disc list-inside ml-4 text-gray-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {softSkillsInterests.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
