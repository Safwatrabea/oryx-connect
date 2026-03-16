import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    const links = [
        { to: '/features', label: 'المزايا' },
        { to: '/pricing', label: 'الأسعار' },
        { to: '/#faq', label: 'الأسئلة الشائعة' },
    ];

    return (
        <>
            <header style={{
                position: 'fixed', inset: '0 0 auto 0', zIndex: 50,
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(13,13,18,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
            }}>
                <div style={{
                    maxWidth: '1152px', margin: '0 auto',
                    padding: '0 32px', height: '72px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <div style={{ position: 'relative', width: '38px', height: '38px', flexShrink: 0 }}>
                            <div style={{ position: 'absolute', inset: 0, borderRadius: '12px', background: 'linear-gradient(135deg, #8B5CF6, #F59E0B)', opacity: 0.9 }} />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '17px' }}>W</div>
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '18px', color: '#fff', letterSpacing: '0.01em' }}>
                            Weoryx <span style={{ color: 'rgba(255,255,255,0.40)', fontWeight: 400, fontSize: '14px' }}>Connect</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
                        {links.map(l => (
                            <Link key={l.to} to={l.to} style={{
                                fontSize: '15px', color: 'rgba(255,255,255,0.60)',
                                textDecoration: 'none', transition: 'color 0.2s',
                                lineHeight: 1,
                            }}
                                onMouseEnter={e => e.target.style.color = '#fff'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.60)'}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop actions */}
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="desktop-actions">
                        <Link to="/login" style={{
                            fontSize: '14px', color: 'rgba(255,255,255,0.60)',
                            textDecoration: 'none', padding: '10px 16px',
                            borderRadius: '10px', transition: 'all 0.2s',
                            lineHeight: 1,
                        }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.60)'; e.currentTarget.style.background = 'transparent'; }}
                        >
                            دخول
                        </Link>
                        <Link to="/register?plan=team" className="btn-primary" style={{
                            padding: '10px 22px', fontSize: '14px',
                            display: 'inline-flex', alignItems: 'center',
                            gap: '7px', textDecoration: 'none',
                            position: 'relative',
                        }}>
                            <Zap size={14} style={{ position: 'relative', zIndex: 1, flexShrink: 0 }} />
                            <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا</span>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button onClick={() => setOpen(!open)} className="mobile-menu-btn" style={{
                        display: 'none', background: 'none', border: 'none',
                        color: '#fff', cursor: 'pointer', padding: '8px',
                        borderRadius: '8px',
                    }}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {/* Mobile drawer */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 40,
                opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
                transition: 'opacity 0.25s ease',
            }} className="mobile-only">
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }} onClick={() => setOpen(false)} />
                <div style={{
                    position: 'absolute', top: '72px', left: 0, right: 0,
                    background: '#13131A', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px',
                    transform: open ? 'translateY(0)' : 'translateY(-8px)',
                    transition: 'transform 0.25s ease',
                }}>
                    {links.map(l => (
                        <Link key={l.to} to={l.to} style={{
                            display: 'block', color: 'rgba(255,255,255,0.70)',
                            fontSize: '16px', padding: '14px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            textDecoration: 'none',
                        }}>
                            {l.label}
                        </Link>
                    ))}
                    <Link to="/login" style={{
                        display: 'block', color: 'rgba(255,255,255,0.60)',
                        fontSize: '16px', padding: '14px 0', textDecoration: 'none',
                    }}>دخول</Link>
                    <Link to="/register?plan=team" className="btn-primary" style={{
                        display: 'block', textAlign: 'center', marginTop: '8px',
                        padding: '14px', fontSize: '15px', textDecoration: 'none',
                        position: 'relative',
                    }}>
                        <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا — أسبوعان مجانًا</span>
                    </Link>
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav { display: flex !important; }
                    .desktop-actions { display: flex !important; }
                    .mobile-menu-btn { display: none !important; }
                    .mobile-only { display: none !important; }
                }
                @media (max-width: 767px) {
                    .desktop-nav { display: none !important; }
                    .desktop-actions { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                    .mobile-only { display: block !important; }
                }
            `}</style>
        </>
    );
}
