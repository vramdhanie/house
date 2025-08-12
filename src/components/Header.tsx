
const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Spacious Family Home</h1>
              <span className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-500">Kelly Village, Caroni</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-green-600">$1,950,000</div>
                <div className="text-sm text-gray-500">Asking Price</div>
                <div className="text-sm text-gray-400">Valued at $2,500,000</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-green-50 border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6">
            <a
              href="tel:+1-868-727-7371"
              className="inline-flex items-center text-sm sm:text-base text-green-700 hover:text-green-800 font-medium"
              aria-label="Call or text (868) 727-7371"
            >
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (868) 727-7371
            </a>
            <span className="hidden sm:inline text-green-300">|</span>
            <a
              href="mailto:house@sonikarustic.com"
              className="inline-flex items-center text-sm sm:text-base text-green-700 hover:text-green-800 font-medium break-all"
              aria-label="Email house@sonikarustic.com"
            >
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              house@sonikarustic.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 