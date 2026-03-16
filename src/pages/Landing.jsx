import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    MessageCircle, Facebook, Send, Instagram,
    Inbox, Users, BarChart2, Zap, MessageSquare, ShieldCheck,
    Star, ChevronDown, ChevronUp, ArrowLeft, CheckCircle2,
    Clock, ArrowUpRight, Bot
} from 'lucide-react';

/* ─── Reveal component ─── */
function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}

/* ─── Shared container ─── */
function Container({ children, className = '' }) {
    return (
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 20px' }} className={className}>
            {children}
        </div>
    );
}

/* ─── entry ─── */
export default function Landing() {
    return (
        <>
            <HeroSection />
            <MarqueeBar />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <FinalCTA />
        </>
    );
}

/* ─────────────────── HERO ─────────────────── */
const WORDS = ['واتساب', 'فيسبوك', 'تيليغرام', 'إنستغرام'];

function HeroSection() {
    const [wordIdx, setWordIdx] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setWordIdx(i => (i + 1) % WORDS.length);
                setFade(true);
            }, 300);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    return (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px', overflow: 'hidden', textAlign: 'center' }}>
            {/* BG glows */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(109,40,217,0.10)', filter: 'blur(120px)' }} className="animate-glow-pulse" />
                <div style={{ position: 'absolute', bottom: 0, left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(245,158,11,0.08)', filter: 'blur(100px)' }} className="animate-glow-pulse delay-400" />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* Content wrapper */}
            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Badge */}
                <Reveal>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.20)', color: '#c4b5fd', fontSize: '14px', marginBottom: '32px' }}>
                        <Zap size={13} style={{ fill: '#a78bfa', color: '#a78bfa' }} />
                        <span>أول 3 أشهر بخصم 50% للعملاء الأوائل</span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa' }} className="animate-ping" />
                    </div>
                </Reveal>

                {/* H1 */}
                <Reveal delay={100}>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '24px', color: '#fff' }}>
                        توقّف عن فتح{' '}
                        <span
                            className="gradient-text"
                            style={{ display: 'inline-block', transition: 'opacity 0.3s, transform 0.3s', opacity: fade ? 1 : 0, transform: fade ? 'translateY(0)' : 'translateY(8px)' }}
                        >
                            {WORDS[wordIdx]}
                        </span>
                        <br />
                        تطبيقات لخدمة عملائك
                    </h1>
                </Reveal>

                {/* Subtitle */}
                <Reveal delay={150}>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.125rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '40px' }}>
                        أدِر واتساب وفيسبوك وتيليغرام من صندوق وارد واحد —<br />
                        وفريق واحد — ولوحة تحكم واحدة
                    </p>
                </Reveal>

                {/* CTAs */}
                <Reveal delay={220}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
                        <Link to="/register?plan=team" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
                            <Zap size={16} style={{ position: 'relative', zIndex: 1 }} />
                            <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا لأسبوعين</span>
                        </Link>
                        <Link to="/features" className="btn-outline" style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            شاهد كيف يعمل
                            <ArrowLeft size={16} />
                        </Link>
                    </div>
                </Reveal>

                {/* Inbox card */}
                <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
                    <Reveal delay={350}>
                        <InboxCard />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────── INBOX CARD ─────────────────── */
function InboxCard() {
    const msgs = [
        { bg: '#25D366', icon: <MessageCircle size={13} />, name: 'أحمد العتيبي', text: 'وين وصل الطلب؟', time: 'الآن', dot: true },
        { bg: '#1877F2', icon: <Facebook size={13} />, name: 'منى الشهري', text: 'أريد حجز موعد قص شعر', time: 'دقيقتين' },
        { bg: '#0088CC', icon: <Send size={13} />, name: 'خالد القرني', text: 'ما هي أسعاركم الجديدة؟', time: '5 د' },
        { bg: null, gradient: true, icon: <Instagram size={13} />, name: 'سارة المالكي', text: 'هل المنتج موجود؟ 👀', time: '12 د' },
    ];

    return (
        <div className="animate-float glass noise" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 25px 50px rgba(109,40,217,0.20)', width: '100%' }}>
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', direction: 'rtl' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(248,113,113,0.6)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(251,191,36,0.6)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(52,211,153,0.6)' }} />
                <span style={{ color: 'rgba(255,255,255,0.30)', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginRight: '8px' }}>
                    <Inbox size={12} />
                    صندوق الوارد الموحد
                </span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', padding: '2px 8px', borderRadius: '9999px', background: 'rgba(139,92,246,0.15)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.20)' }} className="animate-badge-pop">
                    4 جديد
                </span>
            </div>

            {/* Messages */}
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {msgs.map((m, i) => (
                    <div key={i} className="inbox-msg" style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px',
                        border: i === 0 ? '1px solid rgba(139,92,246,0.15)' : '1px solid transparent',
                        background: i === 0 ? 'rgba(139,92,246,0.08)' : 'transparent',
                        direction: 'rtl',
                    }}>
                        {/* Channel avatar */}
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#fff', fontSize: '12px',
                            background: m.gradient
                                ? 'linear-gradient(135deg, #F58529, #E1306C, #833AB4)'
                                : m.bg,
                        }}>
                            {m.icon}
                        </div>
                        {/* Text */}
                        <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>{m.time}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    {m.dot && <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />}
                                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{m.name}</span>
                                </div>
                            </div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Reply bar */}
            <div style={{ padding: '8px 16px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', direction: 'rtl' }}>
                    <span style={{ flex: 1, fontSize: '12px', color: 'rgba(255,255,255,0.25)', textAlign: 'right' }}>اكتب ردًا...</span>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(139,92,246,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', flexShrink: 0 }}>
                        <Send size={13} />
                    </div>
                </div>
            </div>

            {/* Glow */}
            <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '240px', height: '80px', background: 'rgba(139,92,246,0.20)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }} />
        </div>
    );
}

/* ─────────────────── MARQUEE BAR ─────────────────── */
function MarqueeBar() {
    const items = [
        { icon: <MessageCircle size={16} />, label: 'WhatsApp Business API', color: '#25D366' },
        { icon: <Facebook size={16} />, label: 'Facebook Messenger', color: '#1877F2' },
        { icon: <Send size={16} />, label: 'Telegram Bot', color: '#0088CC' },
        { icon: <Instagram size={16} />, label: 'Instagram DM', color: '#f472b6' },
        { icon: <Clock size={16} />, label: 'وفّر 3 ساعات يوميًا', color: '#fbbf24' },
        { icon: <BarChart2 size={16} />, label: 'تحليلات فورية', color: '#a78bfa' },
        { icon: <Users size={16} />, label: 'توزيع تلقائي', color: '#34d399' },
        { icon: <ShieldCheck size={16} />, label: 'بيانات آمنة 100%', color: '#fbbf24' },
    ];
    const doubled = [...items, ...items];

    return (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#0D0D12', overflow: 'hidden', padding: '16px 0', position: 'relative' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, width: '96px', height: '100%', background: 'linear-gradient(to left, #0D0D12, transparent)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: '96px', height: '100%', background: 'linear-gradient(to right, #0D0D12, transparent)', zIndex: 10, pointerEvents: 'none' }} />
            <div className="animate-marquee" style={{ display: 'flex', gap: '40px', whiteSpace: 'nowrap' }} dir="ltr">
                {doubled.map((item, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', flexShrink: 0, color: item.color }}>
                        {item.icon}
                        <span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────── SECTION WRAPPER ─────────────────── */
function Section({ children, bg, id }) {
    return (
        <section id={id} style={{ padding: '96px 0', background: bg || 'transparent' }}>
            <Container>
                {children}
            </Container>
        </section>
    );
}

function SectionHeader({ tag, tagColor = '#a78bfa', title, subtitle }) {
    return (
        <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: tagColor, textTransform: 'uppercase' }}>{tag}</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, marginTop: '12px', marginBottom: '16px', lineHeight: 1.2, color: '#fff' }}>{title}</h2>
                {subtitle && <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto' }}>{subtitle}</p>}
            </div>
        </Reveal>
    );
}

/* ─────────────────── PROBLEM ─────────────────── */
function ProblemSection() {
    const cards = [
        { emoji: '📱', num: '5', title: 'تطبيقات مفتوحة', desc: 'تتنقل بين الواتساب والفيسبوك وتيليغرام وإنستغرام — وكل تطبيق جرس منفصل', from: 'rgba(239,68,68,0.10)', to: 'rgba(127,29,29,0.05)', border: 'rgba(239,68,68,0.10)' },
        { emoji: '😤', num: '40%', title: 'رسائل بدون رد', desc: 'رسائل عملاء تضيع بين الموظفين ولا أحد يعرف مَن مسؤول عن الرد', from: 'rgba(245,158,11,0.10)', to: 'rgba(120,53,15,0.05)', border: 'rgba(245,158,11,0.10)' },
        { emoji: '🤷', num: 'صفر', title: 'بيانات أداء', desc: 'لا تعرف سرعة الرد، ولا من يرد، ولا كم عميلًا تم تحويله — قرارات عمياء', from: 'rgba(139,92,246,0.10)', to: 'rgba(76,29,149,0.05)', border: 'rgba(139,92,246,0.10)' },
    ];

    return (
        <Section>
            <SectionHeader tag="المشكلة" title="هل يحدث هذا معك كل يوم؟" subtitle="كل رسالة ضائعة تكلفك عميلًا — وكل تطبيق إضافي يكلفك وقتًا" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {cards.map((card, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div style={{ borderRadius: '16px', padding: '28px', background: `linear-gradient(135deg, ${card.from}, ${card.to})`, border: `1px solid ${card.border}`, height: '100%' }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{card.emoji}</div>
                            <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '6px' }}>{card.num}</div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{card.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7 }}>{card.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ─────────────────── SOLUTION ─────────────────── */
function SolutionSection() {
    const [active, setActive] = useState(0);

    const tabs = [
        {
            icon: <Inbox size={18} />, label: 'صندوق موحد',
            headline: 'كل رسائلك — شاشة واحدة',
            body: 'واتساب، فيسبوك، تيليغرام، إنستغرام — كلها تصل لمكان واحد. فريقك يرد من لوحة تحكم موحدة بدون تبديل تطبيقات.',
            points: ['عرض موحد لكل القنوات', 'تصنيف تلقائي بالأولوية', 'ملف عميل موحد', 'بحث فوري في كل المحادثات'],
        },
        {
            icon: <Users size={18} />, label: 'توزيع ذكي',
            headline: 'وزّع — تلقائيًا أو يدويًا',
            body: 'كل محادثة تروح للشخص الصح تلقائيًا. تعيين يدوي بنقرة. لا يوجد "اللي يرد أول".',
            points: ['توزيع حسب القناة أو القسم', 'تعيين يدوي بنقرة واحدة', 'حالات المحادثة الكاملة', 'إشعارات فورية للموظف'],
        },
        {
            icon: <BarChart2 size={18} />, label: 'تحليلات',
            headline: 'بيانات — لا تخمينات',
            body: 'تقارير يومية على متوسط الرد، أعداد المحادثات، الموظفين الأكثر إنتاجية — لتتخذ قرارات بثقة.',
            points: ['متوسط سرعة الرد', 'معدل إغلاق المحادثات', 'تقارير يومية وأسبوعية', 'تصدير Excel/CSV'],
        },
    ];

    return (
        <Section bg="#0D0D12">
            <SectionHeader tag="الحل" tagColor="#34d399" title="ثلاث أدوات — حل واحد" />

            <Reveal>
                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
                    {tabs.map((t, i) => (
                        <button key={i} onClick={() => setActive(i)} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '10px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 600,
                            border: active === i ? '1px solid rgba(139,92,246,0.40)' : '1px solid rgba(255,255,255,0.08)',
                            background: active === i ? 'rgba(139,92,246,0.15)' : 'transparent',
                            color: active === i ? '#c4b5fd' : 'rgba(255,255,255,0.50)',
                            cursor: 'pointer', transition: 'all 0.2s',
                        }}>
                            {t.icon} {t.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="glass noise" style={{ padding: '40px', borderRadius: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <h3 className="gradient-text-2" style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '16px' }}>
                                {tabs[active].headline}
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '28px', fontSize: '1rem' }}>
                                {tabs[active].body}
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {tabs[active].points.map((p, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(52,211,153,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <CheckCircle2 size={12} style={{ color: '#34d399' }} />
                                        </div>
                                        <span style={{ color: 'rgba(255,255,255,0.75)' }}>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(139,92,246,0.10), #13131A, rgba(245,158,11,0.05))', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12), transparent 70%)' }} />
                            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '64px', height: '64px', margin: '0 auto 12px', borderRadius: '16px', background: 'rgba(139,92,246,0.20)', border: '1px solid rgba(139,92,246,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa' }}>
                                    {tabs[active].icon}
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>{tabs[active].label}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}

/* ─────────────────── FEATURES ─────────────────── */
function FeaturesSection() {
    const features = [
        { icon: <Inbox size={22} />, title: 'صندوق وارد موحد', desc: '4 قنوات — شاشة واحدة. لا رسالة تضيع.', color: '#a78bfa', bg: 'rgba(167,139,250,0.10)' },
        { icon: <MessageSquare size={22} />, title: 'ردود سريعة', desc: 'قوالب جاهزة تختصر 80% من وقت الكتابة.', color: '#fbbf24', bg: 'rgba(251,191,36,0.10)' },
        { icon: <Users size={22} />, title: 'إدارة الفريق', desc: 'عيّن محادثات — تلقائيًا أو يدويًا — لكل موظف.', color: '#34d399', bg: 'rgba(52,211,153,0.10)' },
        { icon: <BarChart2 size={22} />, title: 'لوحة تحليلات', desc: 'تقارير يومية: سرعة الرد، الإغلاقات، الأداء.', color: '#60a5fa', bg: 'rgba(96,165,250,0.10)' },
        { icon: <MessageCircle size={22} />, title: 'واتساب API رسمي', desc: 'ربط معتمد — رسائل غير محدودة بدون حظر.', color: '#25D366', bg: 'rgba(37,211,102,0.10)' },
        { icon: <Bot size={22} />, title: 'AI (قريبًا)', desc: 'ردود تلقائية ذكية تفهم اللهجة السعودية.', color: '#f472b6', bg: 'rgba(244,114,182,0.10)' },
    ];

    return (
        <Section id="features">
            <SectionHeader tag="المزايا" tagColor="#fbbf24" title="كل أداة تحتاجها" subtitle="صُممت للشركات السعودية — بسيطة، قوية، تعمل فورًا" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {features.map((f, i) => (
                    <Reveal key={i} delay={i * 80}>
                        <div className="glass glass-hover" style={{ padding: '28px', borderRadius: '20px', height: '100%', cursor: 'default' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'transform 0.2s' }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{f.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.7 }}>{f.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ─────────────────── PRICING ─────────────────── */
function PricingSection() {
    const plans = [
        {
            name: 'خطة الفريق', price: '1,500', discounted: '750',
            features: ['صندوق وارد موحد', '3 قنوات', '5 مستخدمين', 'ردود سريعة', 'تقارير أساسية', 'دعم بريد إلكتروني'],
            plan: 'team', featured: false,
        },
        {
            name: 'خطة الأعمال', price: '2,500', discounted: '1,250',
            features: ['كل مزايا الفريق', 'جميع القنوات', '15 مستخدم', 'توزيع تلقائي', 'تحليلات متقدمة', 'API مفتوح', 'أولوية دعم', 'مدير حساب', 'محادثات لا محدودة', 'تدريب الفريق'],
            plan: 'business', featured: true,
        },
    ];

    return (
        <Section id="pricing" bg="#0D0D12">
            <SectionHeader
                tag="الأسعار"
                title={<>أقل من راتب موظف واحد —<br />وأكثر فاعلية بمراحل</>}
                subtitle="ابدأ بأسبوعين مجانًا — لا بطاقة ائتمانية"
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '760px', margin: '0 auto' }}>
                {plans.map((p, i) => (
                    <Reveal key={i} delay={i * 130}>
                        <div style={{
                            position: 'relative', borderRadius: '16px', padding: '32px',
                            display: 'flex', flexDirection: 'column', height: '100%',
                            background: p.featured ? 'linear-gradient(180deg, rgba(139,92,246,0.08), #13131A)' : 'rgba(255,255,255,0.03)',
                            border: p.featured ? '1px solid rgba(139,92,246,0.30)' : '1px solid rgba(255,255,255,0.08)',
                        }}>
                            {p.featured && (
                                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: '9999px', background: '#7C3AED', color: '#fff', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                    الأكثر طلبًا ⭐
                                </div>
                            )}

                            <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', background: 'rgba(251,191,36,0.10)', color: '#fbbf24', fontSize: '12px', fontWeight: 700, marginBottom: '16px', border: '1px solid rgba(251,191,36,0.15)' }}>
                                <Zap size={11} /> خصم 50% — 3 أشهر
                            </div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>{p.name}</h3>

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', margin: '16px 0' }}>
                                <span className={p.featured ? 'gradient-text' : ''} style={{ fontSize: '2.5rem', fontWeight: 900, color: p.featured ? undefined : '#fff' }}>{p.discounted}</span>
                                <span style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px' }}>ريال/شهر</span>
                                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', textDecoration: 'line-through', marginRight: '4px' }}>{p.price}</span>
                            </div>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', flex: 1 }}>
                                {p.features.map((f, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                                        <CheckCircle2 size={15} style={{ color: p.featured ? '#a78bfa' : '#34d399', flexShrink: 0 }} />
                                        <span style={{ color: 'rgba(255,255,255,0.65)' }}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to={`/register?plan=${p.plan}`}
                                className={p.featured ? 'btn-primary' : 'btn-outline'}
                                style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '14px', position: 'relative' }}>
                                {p.featured && <span style={{ position: 'absolute', inset: 0, borderRadius: '12px' }} />}
                                <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا لأسبوعين</span>
                            </Link>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ─────────────────── TESTIMONIALS ─────────────────── */
function TestimonialsSection() {
    const items = [
        { quote: 'كنا نفقد 30% من العملاء لأن الرسائل تضيع. بعد Weoryx ما فات علينا رسالة واحدة.', name: 'عبدالرحمن الرشيد', role: 'مطعم — الرياض', stars: 5 },
        { quote: 'فريقي من 3 موظفين صار يتعامل مع ضعف عدد العملاء بنفس الوقت. الأداة غيّرت كل شيء.', name: 'منيرة الحربي', role: 'صالون فاخر — جدة', stars: 5 },
        { quote: 'التقارير أقنعتني أن 60% من عملائي يراسلون ليلًا — حلينا ذلك بردود تلقائية.', name: 'سلطان العمري', role: 'متجر إلكتروني — الدمام', stars: 5 },
    ];

    return (
        <Section>
            <SectionHeader tag="آراء العملاء" tagColor="#34d399" title="ماذا يقولون عنا؟" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {items.map((t, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div className="glass" style={{ padding: '28px', borderRadius: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                                {[...Array(t.stars)].map((_, j) => (
                                    <Star key={j} size={14} style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                                ))}
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.70)', lineHeight: 1.8, fontSize: '14px', flex: 1, marginBottom: '20px', fontStyle: 'italic' }}>
                                "{t.quote}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(167,139,250,0.30), rgba(251,191,36,0.30))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{t.name}</p>
                                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ─────────────────── FAQ ─────────────────── */
function FAQSection() {
    const [open, setOpen] = useState(null);
    const faqs = [
        { q: 'هل يدعم الذكاء الاصطناعي؟', a: 'قريبًا! نعمل على ردود تلقائية بالذكاء الاصطناعي تفهم اللهجة السعودية والخليجية — ستتوفر ضمن خطة الأعمال.' },
        { q: 'هل يمكن الإلغاء في أي وقت؟', a: 'نعم. لا عقود ولا التزامات — تلغي الاشتراك بنقرة واحدة من لوحة التحكم.' },
        { q: 'هل أحتاج WhatsApp Business API؟', a: 'نعم، لكننا نساعدك في الحصول عليه وربطه خلال 24-48 ساعة — مجانًا ضمن الاشتراك.' },
        { q: 'كم يستغرق التفعيل؟', a: 'فيسبوك وتيليغرام فورية. واتساب 24-48 ساعة. فريقنا يرافقك في كل خطوة.' },
        { q: 'هل البيانات آمنة؟', a: 'تشفير SSL كامل، خوادم في المملكة، امتثال كامل لنظام حماية البيانات الشخصية السعودي.' },
        { q: 'هل يعمل على الجوال؟', a: 'المنصة متجاوبة 100% مع الجوال عبر المتصفح. تطبيق iOS وAndroid في الطريق.' },
    ];

    return (
        <Section id="faq" bg="#0D0D12">
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                <SectionHeader tag="FAQ" title="أسئلة شائعة" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {faqs.map((f, i) => (
                        <Reveal key={i} delay={i * 50}>
                            <div style={{
                                borderRadius: '16px', overflow: 'hidden',
                                border: open === i ? '1px solid rgba(139,92,246,0.25)' : '1px solid rgba(255,255,255,0.06)',
                                background: open === i ? 'rgba(139,92,246,0.04)' : 'rgba(255,255,255,0.03)',
                                transition: 'border-color 0.2s, background 0.2s',
                            }}>
                                <button onClick={() => setOpen(open === i ? null : i)} style={{
                                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '18px 20px', textAlign: 'right', cursor: 'pointer',
                                    background: 'transparent', border: 'none', color: '#fff',
                                }}>
                                    <span style={{ fontWeight: 700, fontSize: '15px' }}>{f.q}</span>
                                    <div style={{
                                        width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0, marginRight: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: open === i ? 'rgba(139,92,246,0.20)' : 'rgba(255,255,255,0.05)',
                                        color: open === i ? '#a78bfa' : 'rgba(255,255,255,0.40)',
                                        transition: 'all 0.2s',
                                    }}>
                                        {open === i ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                    </div>
                                </button>
                                <div style={{
                                    maxHeight: open === i ? '200px' : '0',
                                    overflow: 'hidden', transition: 'max-height 0.3s ease',
                                }}>
                                    <p style={{ padding: '0 20px 18px', color: 'rgba(255,255,255,0.50)', fontSize: '14px', lineHeight: 1.8 }}>{f.a}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ─────────────────── FINAL CTA ─────────────────── */
function FinalCTA() {
    return (
        <Section>
            <Reveal>
                <div style={{
                    position: 'relative', overflow: 'hidden', borderRadius: '24px', padding: '80px 40px',
                    textAlign: 'center', border: '1px solid rgba(139,92,246,0.15)',
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(13,13,18,1) 60%, rgba(251,191,36,0.05) 100%)',
                }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '384px', height: '160px', background: 'rgba(139,92,246,0.15)', filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '256px', height: '128px', background: 'rgba(251,191,36,0.08)', filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none' }} />

                    <div style={{ position: 'relative' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.60)', fontSize: '13px', marginBottom: '32px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }} className="animate-ping" />
                            50+ شركة سعودية تستخدم Weoryx الآن
                        </div>

                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2, color: '#fff' }}>
                            انضم إليهم —<br />
                            <span className="gradient-text">ابدأ اليوم مجانًا</span>
                        </h2>

                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
                            أسبوعان مجانًا — لا بطاقة ائتمانية — إلغاء في أي وقت
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                            <Link to="/register?plan=team" className="btn-primary" style={{ padding: '16px 40px', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
                                <Zap size={18} style={{ position: 'relative', zIndex: 1 }} />
                                <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا الآن</span>
                            </Link>
                            <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.50)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}>
                                مقارنة الخطط
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}
