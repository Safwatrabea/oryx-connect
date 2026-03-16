import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/#features', label: 'المزايا' },
        { to: '/#pricing', label: 'الأسعار' },
        { to: '/features', label: 'تفاصيل المنصة' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-navy-950 font-bold text-lg transition-transform group-hover:scale-110">
                            W
                        </div>
                        <span className="text-xl font-bold text-white">Weoryx</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-sm text-slate-300 hover:text-teal-400 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/login"
                            className="text-sm text-slate-300 hover:text-white transition-colors"
                        >
                            تسجيل الدخول
                        </Link>
                        <Link
                            to="/register?plan=team"
                            className="px-5 py-2.5 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                        >
                            ابدأ مجانًا
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-navy-900/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="block text-slate-300 hover:text-teal-400 transition-colors py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/login"
                        className="block text-slate-300 hover:text-white transition-colors py-2"
                    >
                        تسجيل الدخول
                    </Link>
                    <Link
                        to="/register?plan=team"
                        className="block w-full text-center px-5 py-3 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-sm font-bold transition-all"
                    >
                        ابدأ مجانًا
                    </Link>
                </div>
            </div>
        </nav>
    );
}
