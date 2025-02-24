
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight fade-in">
              We Create <span className="text-primary">Digital Experiences</span>
              <br /> That Matter
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto slide-up">
              Your vision, our expertise. We transform ideas into powerful web solutions that drive business growth.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                View Our Work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 glass-card rounded-2xl hover:translate-y-[-4px] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's turn your vision into reality. Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored websites and web applications built to meet your specific business needs and goals."
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement."
  },
  {
    title: "E-commerce Solutions",
    description: "Powerful online stores that help you reach customers and grow your business globally."
  }
];

export default Home;
