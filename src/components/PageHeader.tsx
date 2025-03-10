
interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white fade-in">{title}</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto slide-up">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
