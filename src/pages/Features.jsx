import { CheckCircle2, Zap, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Inbox, Users, BarChart2, MessageSquare, MessageCircle } from 'lucide-react';

/* ─── shared util ─── */
function Container({ children }) {
    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
            {children}
        </div>
    );
}

function FadeIn({ children, delay = 0 }) {
    return (
        <div style={{ animation: `fadeUp 0.6s ease ${delay}ms both` }}>
            {children}
        </div>
    );
}

const features = [
    {
        icon: <Inbox size={28} />,
        color: '#a78bfa', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.15)',
        title: 'صندوق وارد موحد',
        tagline: 'كل القنوات — شاشة واحدة',
        desc: 'اجمع رسائل واتساب وفيسبوك وتيليغرام وإنستغرام في لوحة تحكم واحدة. فريقك يرى كل المحادثات بدون الحاجة لفتح تطبيق آخر.',
        points: ['عرض موحد لكل القنوات في نفس الوقت', 'تصفية حسب القناة أو الحالة أو الموظف', 'ملف عميل موحد مع تاريخ التواصل', 'بحث فوري في كل المحادثات'],
        useCase: '🍔 مطعم يستقبل طلبات من واتساب، حجوزات من فيسبوك، استفسارات من إنستغرام — كلها في شاشة واحدة لموظف واحد.',
    },
    {
        icon: <MessageSquare size={28} />,
        color: '#fbbf24', bg: 'rgba(251,191,36,0.10)', border: 'rgba(251,191,36,0.15)',
        title: 'ردود سريعة وقوالب',
        tagline: 'وفّر 80% من وقت الكتابة',
        desc: 'أنشئ قوالب ردود لأكثر الأسئلة تكرارًا. اضغط اختصارًا واحدًا للرد بدلًا من الكتابة من البداية في كل مرة.',
        points: ['قوالب غير محدودة قابلة للمشاركة', 'متغيرات تلقائية (اسم العميل، رقم الطلب)', 'اختصارات لوحة مفاتيح للردود السريعة', 'أيقونة إيموجي ووسائط مدعومة'],
        useCase: '💇 صالون تجميل يرد على "كم سعر قص الشعر؟" بنقرة واحدة — لكل موظفة في الفريق.',
    },
    {
        icon: <Users size={28} />,
        color: '#34d399', bg: 'rgba(52,211,153,0.10)', border: 'rgba(52,211,153,0.15)',
        title: 'إدارة الفريق والتوزيع',
        tagline: 'المحادثة الصح — للشخص الصح',
        desc: 'وزّع المحادثات على فريقك تلقائيًا وفق قواعد ذكية، أو عيّن يدويًا بنقرة. كل موظف يرى فقط ما يخصه.',
        points: ['توزيع تلقائي حسب القناة/القسم/الدوام', 'تعيين يدوي فوري بنقرة واحدة', 'حالات المحادثة: جديد، قيد الرد، مغلق', 'إشعارات فورية للموظف عند التعيين'],
        useCase: '🏢 شركة عقارات تحول استفسارات الشراء لقسم المبيعات وشكاوى الصيانة لقسم الخدمات — تلقائيًا.',
    },
    {
        icon: <BarChart2 size={28} />,
        color: '#60a5fa', bg: 'rgba(96,165,250,0.10)', border: 'rgba(96,165,250,0.15)',
        title: 'تحليلات ولوحة بيانات',
        tagline: 'قرارات بناءً على بيانات حقيقية',
        desc: 'تقارير يومية وأسبوعية تعرض كل ما تحتاج معرفته عن أداء فريقك وحجم التعاملات.',
        points: ['متوسط سرعة الرد لكل موظف', 'عدد المحادثات المفتوحة والمغلقة', 'معدل التحويل من رسالة لعملية بيع', 'تصدير التقارير Excel/CSV'],
        useCase: '🛍️ مدير متجر إلكتروني يكتشف أن 70% من العملاء يراسلون بعد منتصف الليل — فيفعّل الردود التلقائية.',
    },
    {
        icon: <MessageCircle size={28} />,
        color: '#25D366', bg: 'rgba(37,211,102,0.10)', border: 'rgba(37,211,102,0.15)',
        title: 'تكامل واتساب Business API',
        tagline: 'رسائل رسمية — بدون حظر أبدًا',
        desc: 'ربط معتمد مع Meta Business API للواتساب. رسائل غير محدودة، وسائط كاملة، شارة التوثيق.',
        points: ['توثيق رسمي عبر Meta للأعمال', 'رسائل نصية + صور + فيديو + مستندات', 'إرسال رسائل مُبادَرة للعملاء', 'تاريخ رسائل كامل محفوظ'],
        useCase: '🍕 مطعم يرسل عروض اليوم لكل عملائه عبر الواتساب — رسالة جماعية رسمية بدون خوف من الحظر.',
    },
    {
        icon: <Bot size={28} />,
        color: '#f472b6', bg: 'rgba(244,114,182,0.10)', border: 'rgba(244,114,182,0.15)',
        title: 'ذكاء اصطناعي (قريبًا)',
        tagline: 'الرد الذكي — حتى وأنت نائم',
        desc: 'ردود تلقائية تفهم اللهجة السعودية والخليجية. تجيب على الأسئلة الشائعة وتصعّد للموظف عند الحاجة.',
        points: ['فهم اللهجة السعودية والخليجية', 'رد تلقائي على أسئلة القائمة والأسعار', 'تصعيد ذكي للموظف عند الشكاوى', 'يتعلم من ردود فريقك بمرور الوقت'],
        useCase: '☕ مقهى يرد على "وش عندكم حلو؟" الساعة 3 صباحًا بقائمة الحلويات كاملة — تلقائيًا.',
        comingSoon: true,
    },
];

export default function Features() {
    return (
        <div style={{ paddingTop: '96px' }}>
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* Page hero */}
            <section style={{ padding: '72px 0 56px' }}>
                <Container>
                    <FadeIn>
                        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
                            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: '#a78bfa', textTransform: 'uppercase' }}>تفاصيل المنصة</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 900, marginTop: '14px', marginBottom: '20px', lineHeight: 1.2, color: '#fff' }}>
                                كل أداة — مشروحة بالتفصيل
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '1.1rem', lineHeight: 1.75 }}>
                                لا وعود فضفاضة. هنا شرح دقيق لكل ميزة وكيف تساعد عملك تحديدًا.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Feature sections */}
            {features.map((f, i) => (
                <section key={i} style={{ padding: '80px 0', background: i % 2 === 0 ? '#0D0D12' : 'transparent' }}>
                    <Container>
                        <FadeIn delay={80}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '64px',
                                alignItems: 'center',
                            }} className="feature-grid">
                                {/* Text side — always render first in DOM for RTL */}
                                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                                    {/* Icon + badge */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                        <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: f.bg, border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>
                                            {f.icon}
                                        </div>
                                        {f.comingSoon && (
                                            <span style={{ padding: '4px 12px', borderRadius: '9999px', background: 'rgba(244,114,182,0.10)', color: '#f472b6', fontSize: '12px', fontWeight: 700, border: '1px solid rgba(244,114,182,0.20)' }}>
                                                قريبًا
                                            </span>
                                        )}
                                    </div>

                                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: f.color, marginBottom: '10px' }}>{f.tagline}</p>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.25 }}>{f.title}</h2>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: '28px', fontSize: '15px' }}>{f.desc}</p>

                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                                        {f.points.map((p, j) => (
                                            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px' }}>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                                    <CheckCircle2 size={11} />
                                                </div>
                                                <span style={{ color: 'rgba(255,255,255,0.70)' }}>{p}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ padding: '16px 20px', borderRadius: '14px', background: f.bg, border: `1px solid ${f.border}`, fontSize: '14px', lineHeight: 1.7 }}>
                                        <span style={{ color: f.color, fontWeight: 700 }}>مثال واقعي: </span>
                                        <span style={{ color: 'rgba(255,255,255,0.60)' }}>{f.useCase}</span>
                                    </div>
                                </div>

                                {/* Visual side */}
                                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                                    <div style={{ aspectRatio: '4/3', borderRadius: '20px', background: f.bg, border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ width: '64px', height: '64px', margin: '0 auto 12px', borderRadius: '18px', background: f.bg, border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color }}>
                                                {f.icon}
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>{f.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </Container>
                </section>
            ))}

            {/* CTA */}
            <section style={{ padding: '96px 0' }}>
                <Container>
                    <FadeIn>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>جاهز تجرب؟</h2>
                            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.1rem', marginBottom: '36px' }}>أسبوعان مجانًا — بدون بطاقة ائتمانية</p>
                            <Link to="/register?plan=team" className="btn-primary" style={{ padding: '14px 40px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '10px', position: 'relative', textDecoration: 'none' }}>
                                <Zap size={17} style={{ position: 'relative', zIndex: 1 }} />
                                <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا الآن</span>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .feature-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .feature-grid > div {
                        order: unset !important;
                    }
                }
            `}</style>
        </div>
    );
}
