
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Spacious Family Home</h1>
            <span className="ml-4 text-sm text-gray-500">Kelly Village, Caroni</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-lg font-semibold text-green-600">$1,950,000</div>
              <div className="text-sm text-gray-500">Asking Price</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 