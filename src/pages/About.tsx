
import PageHeader from '../components/PageHeader';
import { Code, Users, Rocket, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        description="We're a team of passionate developers dedicated to creating exceptional web experiences."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="p-6 glass-card rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 glass-card rounded-xl text-center">
                <Check size={20} className="text-primary mx-auto mb-2" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality, ensuring every project meets our high standards.",
    icon: <Code size={24} />
  },
  {
    title: "Client Focus",
    description: "Your success is our priority. We work closely with you to achieve your goals.",
    icon: <Users size={24} />
  },
  {
    title: "Innovation",
    description: "We stay ahead of trends to deliver cutting-edge solutions.",
    icon: <Rocket size={24} />
  }
];

const process = [
  {
    title: "Discovery",
    description: "We begin by understanding your business, goals, and requirements through detailed consultation."
  },
  {
    title: "Planning & Design",
    description: "Our team creates a comprehensive strategy and design that aligns with your vision."
  },
  {
    title: "Development",
    description: "We build your solution using modern technologies and best practices."
  },
  {
    title: "Testing & Launch",
    description: "Rigorous testing ensures a flawless product before we help you go live."
  }
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "AWS"
];

export default About;
