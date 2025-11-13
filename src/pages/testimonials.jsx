import React from "react";
import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Freelance Designer",
    company: "",
    review:
      "This free invoice generator has transformed how I handle client billing. It's fast, clean, and incredibly user-friendly!",
  },
  {
    id: 2,
    name: "John Carter",
    role: "Startup Founder",
    company: "",
    review:
      "I've tried several invoice tools, but this one is by far the most intuitive. The templates are professional and print-ready.",
    avatar: " https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Accountant",
    company: "",
    review:
      "A must-have for small businesses. The export and PDF features are flawless. I recommend it to all my clients.",
    avatar: " https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Developer",
    company: "",
    review:
      "Open-source and free, yet it offers features you'd expect from premium tools. Highly polished UI and excellent export options.",
    avatar: " https://i.pravatar.cc/100?img=4",
  },
  {
    id: 4,
    name: "Senesie Khalifa",
    role: "Photographer",
    company: "",
    review:
      "I used to struggle with creating clean invoices for clients. This tool has made the process so smooth and professional.",
    avatar: " https://i.pravatar.cc/100?img=4",
  },
  {
    id: 4,
    name: "Karim Alaadi",
    role: "Event Planner",
    company: "",
    review:
      "I invoice clients weekly and this tool makes it fast and easy. The templates are modern and highly customizable.",
    avatar: " https://i.pravatar.cc/100?img=4",
  },
  {
    id: 4,
    name: "Josephine de Vries",
    role: "Small Business Owner",
    company: "",
    review:
      "I run a small design studio and this tool has made invoicing so simple. It's fast, free, and looks completely professional.",
    avatar: " https://i.pravatar.cc/100?img=4",
  },
  {
    id: 4,
    name: "Linda Lansana",
    role: "Bookkeeper",
    company: "",
    review:
      "This is a game-changer for small businesses. The export options are flawless and the templates are customizable to match branding.",
    avatar: " https://i.pravatar.cc/100?img=4",
  },
  {
    id: 4,
    name: "Ahmed Ali",
    role: "Marketing Consultant",
    company: "",
    review:
      "I can create and send invoices in under a minute. The PDF download is clean and client-ready every time.",
    avatar: " https://i.pravatar.cc/100?img=4",
  },    
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function Testimonials() {
  return (
    <section className="testimonials-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        What Our Users Say
      </motion.h2>
      <motion.div
        className="cards-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card"
            variants={cardVariants}
          >
            <div className="testimonial-header">
              
              <div className="user-info">
                <h4 className="user-name">{testimonial.name}</h4>
                <p className="user-role">
                  {testimonial.role}  {testimonial.company}
                </p>
              </div>
            </div>
            <p className="testimonial-text">"{testimonial.review}"</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Testimonials;