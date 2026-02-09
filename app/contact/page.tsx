import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pujala Sai Varshith - Contact',
  description: 'Contact Pujala Sai Varshith via phone, email, LinkedIn, or GitHub for internship and entry-level software opportunities.',
};

export default function ContactPage() {
  const contactInfo = {
    phone: '8185958336',
    email: 'saivarshith8284@gmail.com',
    linkedin: 'linkedin.com/in/sai-varshith-pujala-704036252',
    github: 'github.com/saivarshithnaidu',
  };

  return (
    <section className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 md:py-24">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Get in Touch</h1>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            <span className="font-semibold text-gray-800">Location:</span> India
          </p>
          <p>
            <span className="font-semibold text-gray-800">Phone:</span>{' '}
            <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-800">Email:</span>{' '}
            <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
              {contactInfo.email}
            </a>
          </p>
          <p>
            <span className="font-semibold text-gray-800">LinkedIn:</span>{' '}
            <Link href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {contactInfo.linkedin.replace('https://', '')}
            </Link>
          </p>
          <p>
            <span className="font-semibold text-gray-800">GitHub:</span>{' '}
            <Link href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {contactInfo.github.replace('https://', '')}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
