import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

function Container({ children }) {
    return (
        <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 32px' }}>
            {children}
        </div>
    );
}

const inputStyle = {
    width: '100%', padding: '13px 16px', borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    color: '#fff', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box', fontFamily: 'inherit',
};

function Field({ label, name, value, onChange, placeholder, type = 'text', dir }) {
    return (
        <div>
            <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.60)', marginBottom: '8px', fontWeight: 500 }}>{label}</label>
            <input
                type={type} name={name} value={value} onChange={onChange}
                placeholder={placeholder} dir={dir} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
        </div>
    );
}

export default function Register() {
    const [params] = useSearchParams();
    const [plan, setPlan] = useState(params.get('plan') || 'team');
    const [showPw, setShowPw] = useState(false);
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({ company: '', name: '', phone: '', email: '', password: '', type: '' });

    const change = e => setForm({ ...form, [e.target.name]: e.target.value });

    if (done) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div className="glass noise" style={{ padding: '64px 48px', textAlign: 'center', maxWidth: '440px', width: '100%', borderRadius: '24px' }}>
                    <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', borderRadius: '50%', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={36} style={{ color: '#a78bfa' }} />
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>تم إنشاء حسابك! 🎉</h1>
                    <p style={{ color: 'rgba(255,255,255,0.50)', lineHeight: 1.75, marginBottom: '32px', fontSize: '15px' }}>
                        مرحبًا بك في Weoryx — تجربتك المجانية لأسبوعين بدأت الآن
                    </p>
                    <a href="https://app.weoryx.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', fontSize: '15px', borderRadius: '12px', textDecoration: 'none', position: 'relative' }}>
                        <Zap size={17} style={{ position: 'relative', zIndex: 1 }} />
                        <span style={{ position: 'relative', zIndex: 1 }}>انتقل إلى لوحة التحكم</span>
                    </a>
                    <p style={{ color: 'rgba(255,255,255,0.20)', fontSize: '12px', marginTop: '16px' }}>app.weoryx.com</p>
                </div>
            </div>
        );
    }

    const types = [
        { v: '', l: 'اختر نوع عملك' },
        { v: 'restaurant', l: '🍔 مطعم / مقهى' },
        { v: 'salon', l: '💇 صالون / تجميل' },
        { v: 'ecommerce', l: '🛍️ تجارة إلكترونية' },
        { v: 'realestate', l: '🏢 عقارات' },
        { v: 'services', l: '⚙️ خدمات' },
        { v: 'retail', l: '🏪 تجزئة' },
        { v: 'other', l: 'أخرى' },
    ];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '96px', paddingBottom: '64px' }}>
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 1023px) {
                    .register-sidebar { display: none !important; }
                    .register-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
            <Container>
                <div className="register-grid" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '40px', alignItems: 'start', animation: 'fadeUp 0.6s ease both' }}>

                    {/* ─── Form ─── */}
                    <div className="glass noise" style={{ padding: '40px 36px', borderRadius: '24px' }}>
                        <div style={{ marginBottom: '32px' }}>
                            <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>ابدأ تجربتك المجانية الآن</h1>
                            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>أسبوعان مجانًا — لا بطاقة ائتمانية — إلغاء في أي وقت</p>
                        </div>

                        <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Plan toggle */}
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.60)', marginBottom: '10px', fontWeight: 500 }}>اختر خطتك</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    {[
                                        { v: 'team', l: 'الفريق', price: '750 ريال/شهر' },
                                        { v: 'business', l: 'الأعمال', price: '1,250 ريال/شهر' },
                                    ].map(p => (
                                        <button key={p.v} type="button" onClick={() => setPlan(p.v)} style={{
                                            padding: '14px 16px', borderRadius: '12px', textAlign: 'center',
                                            border: plan === p.v ? '1.5px solid rgba(139,92,246,0.50)' : '1px solid rgba(255,255,255,0.08)',
                                            background: plan === p.v ? 'rgba(139,92,246,0.10)' : 'transparent',
                                            color: plan === p.v ? '#c4b5fd' : 'rgba(255,255,255,0.40)',
                                            cursor: 'pointer', transition: 'all 0.2s',
                                        }}>
                                            <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>خطة {p.l}</div>
                                            <div style={{ fontSize: '12px', opacity: 0.60 }}>{p.price}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Name fields */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                                <Field label="اسم الشركة" name="company" value={form.company} onChange={change} placeholder="مثال: مطعم السدير" />
                                <Field label="اسمك الكامل" name="name" value={form.name} onChange={change} placeholder="محمد العتيبي" />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                                <Field label="رقم الجوال" name="phone" type="tel" dir="ltr" value={form.phone} onChange={change} placeholder="05XXXXXXXX" />
                                <Field label="البريد الإلكتروني" name="email" type="email" dir="ltr" value={form.email} onChange={change} placeholder="you@example.com" />
                            </div>

                            {/* Password */}
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.60)', marginBottom: '8px', fontWeight: 500 }}>كلمة المرور</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showPw ? 'text' : 'password'} name="password" value={form.password} onChange={change}
                                        placeholder="8 أحرف أو أكثر" required minLength={8}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                    <button type="button" onClick={() => setShowPw(!showPw)} style={{
                                        position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                                        background: 'none', border: 'none', cursor: 'pointer',
                                        color: 'rgba(255,255,255,0.30)', transition: 'color 0.2s', padding: '4px',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.70)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.30)'}
                                    >
                                        {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                                    </button>
                                </div>
                            </div>

                            {/* Business type */}
                            <div>
                                <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.60)', marginBottom: '8px', fontWeight: 500 }}>نوع عملك</label>
                                <select name="type" value={form.type} onChange={change} required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                                    {types.map(t => (
                                        <option key={t.v} value={t.v} style={{ background: '#13131A', color: '#fff' }}>{t.l}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', fontSize: '15px', borderRadius: '12px', cursor: 'pointer', border: 'none', position: 'relative', width: '100%' }}>
                                <Zap size={17} style={{ position: 'relative', zIndex: 1 }} />
                                <span style={{ position: 'relative', zIndex: 1 }}>إنشاء حساب مجاني</span>
                            </button>

                            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>
                                بالتسجيل توافق على{' '}
                                <a href="#" style={{ color: '#a78bfa', textDecoration: 'none' }}>شروط الاستخدام</a>{' '}
                                و<a href="#" style={{ color: '#a78bfa', textDecoration: 'none' }}>سياسة الخصوصية</a>
                            </p>
                        </form>
                    </div>

                    {/* ─── Sidebar ─── */}
                    <div className="register-sidebar" style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Benefits */}
                        <div className="glass" style={{ padding: '24px', borderRadius: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', flexShrink: 0 }}>
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '3px' }}>بدون مخاطر</p>
                                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>أسبوعان مجانًا — لا بطاقة</p>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {['صندوق وارد موحد', '4 قنوات تواصل', 'لوحة تحليلات', 'دعم فني كامل', 'إعداد مجاني'].map((f, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                                        <CheckCircle2 size={14} style={{ color: '#a78bfa', flexShrink: 0 }} />
                                        <span style={{ color: 'rgba(255,255,255,0.55)' }}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Testimonial */}
                        <div className="glass" style={{ padding: '24px', borderRadius: '20px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '9999px', background: 'rgba(52,211,153,0.10)', color: '#34d399', fontSize: '11px', marginBottom: '16px', border: '1px solid rgba(52,211,153,0.15)' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} className="animate-ping" />
                                مباشر
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '16px' }}>
                                "خلال ساعة واحدة فريقنا بدأ يرد من مكان واحد — بدون تعقيدات."
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(139,92,246,0.30), rgba(251,191,36,0.30))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>م</div>
                                <div>
                                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>منى — صاحبة صالون</p>
                                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.30)', marginTop: '2px' }}>جدة</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="glass" style={{ padding: '20px 24px', borderRadius: '20px', textAlign: 'center' }}>
                            <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '12px', marginBottom: '6px' }}>انضم إلى</p>
                            <p style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg, #8B5CF6, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>50+</p>
                            <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: '12px', marginTop: '4px' }}>شركة سعودية تثق بنا</p>
                        </div>
                    </div>
                </div>
            </Container>

            <style>{`
                @media (max-width: 640px) {
                    .form-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}
