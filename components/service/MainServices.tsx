"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuBrain, LuCircleCheck, LuCloud, LuCode, LuShoppingCart } from "react-icons/lu";

const mainServices = [
  {
    icon: LuCode,
    title: "Web & Mobile Development",
    description: "Custom applications built with modern frameworks and scalable architecture",
    features: [
      "Progressive Web Applications",
      "Native Mobile Apps (iOS & Android)",
      "Responsive Website Design",
      "API Development & Integration",
    ],
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1625645262499-c2a1e2eb09a7?w=1080&q=80",
  },
  {
    icon: LuBrain,
    title: "Artificial Intelligence & Data",
    description: "Machine learning solutions and data-driven insights for intelligent automation",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Predictive Analytics",
      "Data Visualization",
    ],
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?w=1080&q=80",
  },
  {
    icon: LuShoppingCart,
    title: "Digital Commerce & Connectivity",
    description: "E-commerce platforms and seamless integration solutions",
    features: [
      "E-commerce Platform Development",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Third-party API Integration",
    ],
    color: "from-orange-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?w=1080&q=80",
  },
  {
    icon: LuCloud,
    title: "Cloud, QA & Support",
    description: "Infrastructure management, testing, and ongoing technical support",
    features: [
      "Cloud Architecture & Migration",
      "DevOps & CI/CD Pipelines",
      "Quality Assurance & Testing",
      "24/7 Technical Support",
    ],
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1771189956777-575006b6b145?w=1080&q=80",
  },
];

export function MainServices() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {mainServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={isEven ? "" : "lg:order-2"}>
                <div className="relative aspect-16/10 rounded-3xl overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-20`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                <div
                  className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl lg:text-4xl text-white">{service.title}</h2>
                <p className="text-white/70 leading-relaxed text-lg">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/80">
                      <LuCircleCheck  className="w-5 h-5 text-amber-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
