import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Thagu',
      text: 'Wonderful place! Food was very tasty. And the staff were very nice and friendly. If you want to get a taste of South Indian food, I highly recommend! Also try the Korean dishes :)',
      rating: 5,
    },
    {
      name: 'Trail Blazer',
      text: "My second visit to Relish Lane and once again the food was outstanding. Everything is cooked fresh and absolutely bursting with flavour. I've had the Madras chicken and the Dosa — both cooked to perfection.",
      rating: 5,
    },
    {
      name: 'Abhilash G',
      text: 'The food here is absolutely excellent. I tried about four different items from the menu, and every single dish was superb. They have fantastic South Indian options, with the Kerala dishes being a real highlight—authentic and full of flavor. What makes this place unique is that they also serve very good Korean and Chinese food too, offering a delightful culinary mix. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Shaeba Ann',
      text: "I recently tried the Pothichoru from Relish, and it was really delicious. There aren't many South Indian food options in the Langley–Iver area, so if you're craving authentic South Indian food, this place is definitely worth a visit. The delivery was quick, and the food arrived hot. Thank you, Team Relish!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Voices of Relish Lane</h2>
          <p className="section-subtitle">
            Hear why our community keeps coming back for more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-200 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
