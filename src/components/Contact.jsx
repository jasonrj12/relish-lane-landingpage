import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Visit us or get in touch!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-600">
                    3 Wellesley Avenue<br />
                    Iver, SL0 9AU<br />
                    United Kingdom
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=3+Wellesley+Avenue+Iver+SL0+9AU" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary font-medium inline-block mt-2"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a 
                    href="tel:01753926600" 
                    className="text-gray-600 hover:text-primary"
                  >
                    01753 926600
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:info@relishlane.co.uk" 
                    className="text-gray-600 hover:text-primary"
                  >
                    info@relishlane.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 12:00 PM - 10:00 PM</p>
                    <p>Saturday - Sunday: 12:00 PM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.6378102658296!2d-0.5068054410003731!3d51.50815923643401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487671007e8e7f35%3A0x4ecb4cb595f920ef!2sRelish%20Lane%20Multicuisine%20Takeaway!5e0!3m2!1sen!2slk!4v1769716844719!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Relish Lane Multicuisine Takeaway - 3 Wellesley Avenue, Iver, SL0 9AU"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Flavors?
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Order online now and enjoy authentic multi-cuisine takeaway delivered to your door.
          </p>
          <a 
            href="https://order.relishlane.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Order Online Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
