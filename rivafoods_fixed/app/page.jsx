import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-4 shadow-sm bg-white">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Riva Foods Logo" className="w-12 h-12 rounded-xl object-cover" />
          <h1 className="text-2xl font-semibold tracking-wide">Riva Fine Foods Canada</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#about" className="hover:text-amber-600">About</a>
          <a href="#products" className="hover:text-amber-600">Products</a>
          <a href="#contact" className="hover:text-amber-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 text-white">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Taste the Fineness of Tradition
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Premium Indian sweets & fine foods crafted with authenticity, now in Canada.
            </motion.p>
            <a
              href="#products"
              className="inline-block bg-white text-amber-700 font-semibold px-6 py-3 rounded-2xl shadow hover:shadow-md"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            At <strong>Riva Fine Foods</strong>, we bring the richness of Indian culinary heritage to Canada. With
            roots in authentic recipes and a passion for quality, we craft sweets, snacks, and specialty foods that
            connect tradition with modern taste.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-10">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Sweets", desc: "Classic mithai and premium creations." },
              { name: "Snacks", desc: "Crisp, savory bites and namkeen." },
              { name: "Spices", desc: "Essential blends for home chefs." }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl shadow bg-white hover:shadow-lg transition p-6 text-center">
                <div className="w-full h-36 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-6xl">
                  🍽️
                </div>
                <h4 className="text-xl font-medium mt-4">{item.name}</h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-600 mb-6">
            Have a question or want to collaborate? Reach out to us at{" "}
            <a href="mailto:info@rivafoods.ca" className="font-semibold text-amber-700">info@rivafoods.ca</a>
          </p>
          <a href="mailto:info@rivafoods.ca" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-amber-700">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Riva Fine Foods Canada. All rights reserved.</p>
      </footer>
    </div>
  );
}
