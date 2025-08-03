
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Property info */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-green-400">$1,950,000</div>
              <div className="text-sm text-gray-400">Asking Price</div>
              <div className="text-sm text-orange-500">Valued at $2,500,000</div>
            </div>
            <div className="hidden md:block text-gray-400">|</div>
            <div className="text-center md:text-left">
              <div className="font-semibold">Spacious Family Home</div>
              <div className="text-sm text-gray-400">Kelly Village, Caroni</div>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a 
                href="tel:+1-868-727-7371" 
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                (868) 727-7371
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a 
                href="mailto:house@sonikarustic.com" 
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                house@sonikarustic.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Sonika Rustic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 