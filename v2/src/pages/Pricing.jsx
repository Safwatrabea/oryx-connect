import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, X, Zap, TrendingDown, ArrowLeft, Calculator } from 'lucide-react';

function Container({ children }) {
    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
            {children}
        </div>
    );
}

export default function Pricing() {
    return (
        <div style={{ paddingTop: '96px' }}>
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            <PricingHero />
            <PricingCards />
            <ComparisonTable />
            <ROISection />
            <PricingBottom />
        </div>
    );
}

function PricingHero() {
    return (
        <section style={{ padding: '72px 0 48px' }}>
            <Container>
                <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto', animation: 'fadeUp 0.6s ease both' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: '#a78bfa', textTransform: 'uppercase' }}>الأسعار</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginTop: '14px', marginBottom: '20px', lineHeight: 1.2, color: '#fff' }}>
                        أقل من راتب موظف —<br />وأكثر فاعلية بمراحل
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '1.1rem', lineHeight: 1.75 }}>
                        جميع الخطط تشمل أسبوعين مجانًا — لا بطاقة ائتمانية — إلغاء في أي وقت
                    </p>
                </div>
            </Container>
        </section>
    );
}

function PricingCards() {
    const plans = [
        {
            name: 'خطة الفريق',
            price: '1,500', discounted: '750',
            desc: 'للمشاريع الصغيرة والفرق من 2 إلى 5 أشخاص',
            featured: false, plan: 'team',
            features: [
                'صندوق وارد موحد',
                'واتساب + فيسبوك + تيليغرام',
                '5 مستخدمين',
                'ردود سريعة وقوالب',
                'تقارير أساسية',
                '1,000 محادثة/شهر',
                'دعم عبر البريد الإلكتروني',
            ],
        },
        {
            name: 'خطة الأعمال',
            price: '2,500', discounted: '1,250',
            desc: 'للشركات التي تحتاج أدوات متقدمة وفريقًا أكبر',
            featured: true, plan: 'business',
            features: [
                'كل ما في خطة الفريق',
                'جميع القنوات + إنستغرام',
                '15 مستخدم',
                'توزيع محادثات تلقائي',
                'تحليلات متقدمة وتقارير مخصصة',
                'API مفتوح للتكامل',
                'محادثات غير محدودة',
                'دعم أولوية (واتساب + هاتف)',
                'مدير حساب مخصص',
                'تدريب كامل للفريق',
            ],
        },
    ];

    return (
        <section style={{ padding: '0 0 80px' }}>
            <Container>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
                    {plans.map((p, i) => (
                        <div key={i} style={{ animation: `fadeUp 0.6s ease ${i * 120}ms both` }}>
                            <div style={{
                                position: 'relative', borderRadius: '20px', padding: '36px 32px',
                                display: 'flex', flexDirection: 'column', height: '100%',
                                background: p.featured
                                    ? 'linear-gradient(180deg, rgba(139,92,246,0.10) 0%, #13131A 100%)'
                                    : 'rgba(255,255,255,0.03)',
                                border: p.featured ? '1.5px solid rgba(139,92,246,0.30)' : '1px solid rgba(255,255,255,0.08)',
                            }}>
                                {p.featured && (
                                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', borderRadius: '9999px', background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', color: '#fff', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                        ⭐ الأكثر طلبًا
                                    </div>
                                )}

                                {/* Discount badge */}
                                <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '9999px', background: 'rgba(251,191,36,0.10)', color: '#fbbf24', fontSize: '12px', fontWeight: 700, border: '1px solid rgba(251,191,36,0.15)', marginBottom: '20px' }}>
                                    <Zap size={11} /> خصم 50% — أول 3 شهور
                                </div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>{p.name}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px', marginBottom: '24px' }}>{p.desc}</p>

                                {/* Price */}
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
                                    <span style={{ fontSize: '2.75rem', fontWeight: 900, ...(p.featured ? { background: 'linear-gradient(135deg, #8B5CF6, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } : { color: '#fff' }) }}>
                                        {p.discounted}
                                    </span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        <span style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px' }}>ريال/شهر</span>
                                        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', textDecoration: 'line-through' }}>{p.price}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flex: 1 }}>
                                    {p.features.map((f, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                                            <CheckCircle2 size={15} style={{ color: p.featured ? '#a78bfa' : '#34d399', flexShrink: 0 }} />
                                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to={`/register?plan=${p.plan}`}
                                    className={p.featured ? 'btn-primary' : 'btn-outline'}
                                    style={{ display: 'block', textAlign: 'center', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', position: 'relative' }}>
                                    {p.featured && <span style={{ position: 'absolute', inset: 0, borderRadius: '12px' }} />}
                                    <span style={{ position: 'relative', zIndex: 1 }}>ابدأ مجانًا لأسبوعين</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ComparisonTable() {
    const rows = [
        { label: 'قنوات مدعومة', team: '3 قنوات', biz: 'جميع القنوات' },
        { label: 'عدد المستخدمين', team: '5', biz: '15' },
        { label: 'صندوق وارد موحد', team: true, biz: true },
        { label: 'إنستغرام', team: false, biz: true },
        { label: 'ردود سريعة وقوالب', team: true, biz: true },
        { label: 'توزيع محادثات تلقائي', team: false, biz: true },
        { label: 'تحليلات متقدمة', team: false, biz: true },
        { label: 'API مفتوح', team: false, biz: true },
        { label: 'المحادثات الشهرية', team: '1,000', biz: 'غير محدود' },
        { label: 'الدعم الفني', team: 'بريد إلكتروني', biz: 'واتساب + هاتف' },
        { label: 'مدير حساب مخصص', team: false, biz: true },
        { label: 'تدريب الفريق', team: false, biz: true },
    ];

    return (
        <section style={{ padding: '0 0 80px' }}>
            <Container>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 900, textAlign: 'center', color: '#fff', marginBottom: '32px' }}>مقارنة تفصيلية</h2>
                <div style={{ maxWidth: '700px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', minWidth: '480px', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                                    <th style={{ padding: '16px 20px', textAlign: 'right', fontSize: '13px', color: 'rgba(255,255,255,0.50)', fontWeight: 500 }}>الميزة</th>
                                    <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: '13px', color: '#fff', fontWeight: 700 }}>الفريق</th>
                                    <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: '13px', color: '#a78bfa', fontWeight: 700 }}>الأعمال</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                        <td style={{ padding: '14px 20px', fontSize: '14px', color: 'rgba(255,255,255,0.60)' }}>{r.label}</td>
                                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                                            {typeof r.team === 'boolean'
                                                ? r.team ? <CheckCircle2 size={16} style={{ margin: '0 auto', display: 'block', color: '#34d399' }} /> : <X size={16} style={{ margin: '0 auto', display: 'block', color: 'rgba(255,255,255,0.15)' }} />
                                                : <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.60)' }}>{r.team}</span>}
                                        </td>
                                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                                            {typeof r.biz === 'boolean'
                                                ? r.biz ? <CheckCircle2 size={16} style={{ margin: '0 auto', display: 'block', color: '#a78bfa' }} /> : <X size={16} style={{ margin: '0 auto', display: 'block', color: 'rgba(255,255,255,0.15)' }} />
                                                : <span style={{ fontSize: '13px', color: '#c4b5fd', fontWeight: 600 }}>{r.biz}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ROISection() {
    const [msgs, setMsgs] = useState(60);
    const [order, setOrder] = useState(150);

    const loss = Math.round(msgs * 30 * 0.15 * 0.3 * order);
    const planCost = 750;
    const roi = loss > 0 ? Math.round(((loss - planCost) / planCost) * 100) : 0;

    const inputStyle = {
        width: '100%', padding: '12px 16px', borderRadius: '12px',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s',
        boxSizing: 'border-box',
    };

    return (
        <section style={{ padding: '0 0 80px' }}>
            <Container>
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                    <div className="glass noise" style={{ padding: '40px 36px', borderRadius: '20px' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(239,68,68,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f87171', flexShrink: 0 }}>
                                <Calculator size={22} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>كم تخسر من رسائل ضائعة؟</h2>
                                <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px' }}>احسب خسارتك الشهرية بدون نظام إدارة</p>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }} className="roi-grid">
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.60)', marginBottom: '8px', fontWeight: 500 }}>عدد الرسائل يوميًا</label>
                                <input type="number" value={msgs} min={0}
                                    onChange={e => setMsgs(Number(e.target.value) || 0)}
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.60)', marginBottom: '8px', fontWeight: 500 }}>متوسط قيمة الطلب (ريال)</label>
                                <input type="number" value={order} min={0}
                                    onChange={e => setOrder(Number(e.target.value) || 0)}
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                />
                            </div>
                        </div>

                        {/* Result box */}
                        <div style={{ borderRadius: '16px', background: 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(127,29,29,0.04))', border: '1px solid rgba(239,68,68,0.12)', padding: '24px', textAlign: 'center', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px', color: 'rgba(248,113,113,0.70)', fontSize: '13px' }}>
                                <TrendingDown size={15} />
                                خسارتك الشهرية المقدرة
                            </div>
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#f87171', marginBottom: '4px' }} dir="ltr">
                                {loss.toLocaleString()} <span style={{ fontSize: '1.5rem' }}>SAR</span>
                            </div>
                            {roi > 0 && (
                                <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '12px', marginTop: '8px' }}>
                                    مقابل {planCost} ريال/شهر فقط لـ Weoryx = ROI {roi}%
                                </p>
                            )}
                        </div>

                        <Link to="/register?plan=team" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', fontSize: '15px', textDecoration: 'none', position: 'relative', borderRadius: '12px' }}>
                            <Zap size={17} style={{ position: 'relative', zIndex: 1 }} />
                            <span style={{ position: 'relative', zIndex: 1 }}>ابدأ وأنقذ هذه المبالغ — مجانًا</span>
                        </Link>
                    </div>
                </div>
            </Container>

            <style>{`
                @media (max-width: 600px) {
                    .roi-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}

function PricingBottom() {
    return (
        <section style={{ padding: '0 0 96px' }}>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '14px', marginBottom: '24px' }}>لا تزال تتساءل؟</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                        <Link to="/register?plan=team" className="btn-primary" style={{ padding: '12px 32px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', position: 'relative' }}>
                            <span style={{ position: 'relative', zIndex: 1 }}>ابدأ التجربة المجانية</span>
                        </Link>
                        <Link to="/features" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.45)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                        >
                            اقرأ تفاصيل المزايا <ArrowLeft size={15} />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
