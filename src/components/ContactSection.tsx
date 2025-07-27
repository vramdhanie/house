const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in This Property?
          </h2>
          <p className="text-xl text-green-100 mb-12">
            Contact us today to schedule a private viewing
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone Contact */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Now</h3>
                <a 
                  href="tel:+1-868-727-7371" 
                  className="text-3xl font-bold text-green-600 hover:text-green-700 transition-colors"
                >
                  (868) 727-7371
                </a>
                <p className="text-gray-600 mt-2">Available 24/7</p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <a 
                  href="mailto:hyatali@hotmail.com" 
                  className="text-xl font-semibold text-green-600 hover:text-green-700 transition-colors break-all"
                >
                  hyatali@hotmail.com
                </a>
                <p className="text-gray-600 mt-2">Quick response guaranteed</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 