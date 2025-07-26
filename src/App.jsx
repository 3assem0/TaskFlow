// eslint-disable-next-line no-unused-vars
import { useAnimation, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { CheckIcon } from '@heroicons/react/24/solid';

const SectionWrapper = ({ children }) => {
  const controls = useAnimation();
  return (
    <InView triggerOnce onChange={(inView) => inView && controls.start({ opacity: 1, y: 0 })}>
      {({ ref }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="w-full max-w-7xl mx-auto">{children}</div>
        </motion.section>
      )}
    </InView>
  );
};

export default function TaskFlow() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-[#eef2ff] to-white">
      {/* Hero */}
      <SectionWrapper>
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-blue-700">
            Organize Your Life with TaskFlow
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage tasks effortlessly, boost productivity, and stay focused every day.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: '🧠', title: 'Smart Lists', desc: 'Auto-sort your tasks smartly.' },
              { icon: '🔔', title: 'Custom Alerts', desc: 'Never miss a deadline.' },
              { icon: '📈', title: 'Analytics', desc: 'Visualize productivity.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Reviews */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-14 text-gray-800">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex J.', quote: '“TaskFlow changed how I plan my week.”' },
              { name: 'Sara K.', quote: '“Reminders save my life every day.”' },
              { name: 'David M.', quote: '“Perfect for team workflows.”' }
            ].map((r, i) => (
              <div key={i} className="bg-white/90 border shadow-lg rounded-2xl p-6 backdrop-blur">
                <p className="text-gray-700 mb-4">{r.quote}</p>
                <p className="text-sm font-semibold text-blue-600 text-right">– {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-14 text-gray-800">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                features: ['Basic Lists', '1 Project', 'Email Support'],
                highlighted: false,
              },
              {
                name: 'Pro',
                price: '$9',
                features: ['Unlimited Projects', 'Smart Reminders', 'Analytics'],
                highlighted: true,
              },
              {
                name: 'Team',
                price: '$19',
                features: ['Team Tools', 'Admin Access', 'Priority Support'],
                highlighted: false,
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 text-center shadow-md border ${
                  p.highlighted ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-white'
                }`}
              >
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className={`text-3xl font-extrabold ${p.highlighted ? 'text-white' : 'text-blue-600'} mb-4`}>
                  {p.price}/mo
                </p>
                <ul className={`space-y-2 mb-6 ${p.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2">
                      <CheckIcon className={`w-5 h-5 ${p.highlighted ? 'text-white' : 'text-blue-600'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    p.highlighted
                      ? 'bg-white text-blue-700 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {p.highlighted ? 'Most Popular' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 text-center">
        <p className="text-lg font-semibold text-gray-700 mb-3">Connect with us</p>
        <div className="flex justify-center gap-6">
          {['Twitter', 'LinkedIn', 'GitHub'].map((s, i) => (
            <a key={i} href="#" className="text-blue-600 hover:underline text-sm">
              {s}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">© 2025 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
