import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import Container from "../common/Container";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Creators", to: "/creators/1" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-primary-700/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-b-m transition-colors ${
                    isActive ? "text-secondary-400" : "text-white/90 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/signin" className="text-b-m text-white/90 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link to="/signup" className="text-b-m text-white/90 hover:text-white transition-colors">
              Join Us
            </Link>
            <button
              aria-label="Cart"
              className="text-white/90 hover:text-white transition-colors"
            >
              <FiShoppingBag size={20} />
            </button>
          </div>

          <button
            aria-label="Menu"
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-primary-700"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-b-m text-white"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-white/15 my-2" />
              <Link to="/signin" onClick={() => setOpen(false)} className="text-b-m text-white">
                Sign In
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="text-b-m text-white">
                Join Us
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;