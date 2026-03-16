import { Link } from 'react-router-dom';
import { MessageCircle, Facebook, Send, Instagram } from 'lucide-react';

export default function Footer() {
    const sections = [
        {
            title: 'المنصة', links: [
                { to: '/features', label: 'المزايا' },
                { to: '/pricing', label: 'الأسعار' },
                { to: '/register?plan=team', label: 'تجربة مجانية' },
            ]
        },
        {
            title: 'الدعم', links: [
                { to: '/#faq', label: 'الأسئلة الشائعة' },
                { href: 'mailto:help@weoryx.com', label: 'الدعم الفني' },
                { href: 'mailto:sales@weoryx.com', label: 'فريق المبيعات' },
            ]
        },
        {
            title: 'قانوني', links: [
                { to: '#', label: 'سياسة الخصوصية' },
                { to: '#', label: 'شروط الاستخدام' },
                { to: '#', label: 'اتفاقيات SLA' },
            ]
        },
    ];

    const channels = [
        { icon: <MessageCircle size={16} />, bg: 'rgba(37,211,102,0.12)', color: '#25D366', label: 'WhatsApp' },
        { icon: <Facebook size={16} />, bg: 'rgba(24,119,242,0.12)', color: '#1877F2', label: 'Facebook' },
        { icon: <Send size={16} />, bg: 'rgba(0,136,204,0.12)', color: '#0088CC', label: 'Telegram' },
        { icon: <Instagram size={16} />, bg: 'rgba(244,114,182,0.12)', color: '#f472b6', label: 'Instagram' },
    ];

    const linkStyle = {
        color: 'rgba(255,255,255,0.40)', fontSize: '14px',
        textDecoration: 'none', lineHeight: 1,
        transition: 'color 0.2s', display: 'block',
    };

    return (
        <footer style={{ background: '#0D0D12', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 0 }}>
            {/* Top gradient line */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent)' }} />

            <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '64px 32px 48px' }}>
                {/* Main grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
                    {/* Brand col */}
                    <div>
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
                            <div style={{ position: 'relative', width: '36px', height: '36px', flexShrink: 0 }}>
                                <div style={{ position: 'absolute', inset: 0, borderRadius: '10px', background: 'linear-gradient(135deg, #8B5CF6, #F59E0B)' }} />
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '16px' }}>W</div>
                            </div>
                            <span style={{ fontWeight: 700, color: '#fff', fontSize: '16px' }}>Weoryx Connect</span>
                        </Link>
                        <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '14px', lineHeight: 1.75, maxWidth: '260px', marginBottom: '24px' }}>
                            منصة موحدة لإدارة رسائل عملاء الشركات السعودية الصغيرة والمتوسطة عبر جميع القنوات.
                        </p>
                        {/* Channel pills */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {channels.map((c, i) => (
                                <div key={i} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    padding: '6px 12px', borderRadius: '9999px',
                                    background: c.bg, color: c.color, fontSize: '12px',
                                }}>
                                    {c.icon}
                                    <span dir="ltr">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {sections.map((s, i) => (
                        <div key={i}>
                            <h5 style={{ color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '20px', lineHeight: 1 }}>{s.title}</h5>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {s.links.map((l, j) => (
                                    <li key={j}>
                                        {l.href
                                            ? <a href={l.href} style={linkStyle}
                                                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.80)'}
                                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.40)'}>
                                                {l.label}
                                            </a>
                                            : <Link to={l.to} style={linkStyle}
                                                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}
                                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.40)'}>
                                                {l.label}
                                            </Link>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.20), transparent)', marginBottom: '28px' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '13px' }}>
                        © {new Date().getFullYear()} Weoryx. جميع الحقوق محفوظة.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '13px' }} dir="ltr">
                        connect.weoryx.com
                    </p>
                </div>
            </div>

            {/* Responsive stacked grid */}
            <style>{`
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
}
