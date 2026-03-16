import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Shield, Users, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Register() {
    const [searchParams] = useSearchParams();
    const selectedPlan = searchParams.get('plan') || 'team';
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        company: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        businessType: '',
        plan: selectedPlan,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return <SuccessState />;
    }

    const planNames = {
        team: 'خطة الفريق — 1,500 ريال/شهر',
        business: 'خطة الأعمال — 2,500 ريال/شهر',
    };

    const businessTypes = [
        { value: '', label: 'اختر نوع العمل' },
        { value: 'restaurant', label: 'مطعم / مقهى' },
        { value: 'salon', label: 'صالون / مركز تجميل' },
        { value: 'ecommerce', label: 'تجارة إلكترونية' },
        { value: 'realestate', label: 'عقارات' },
        { value: 'services', label: 'خدمات' },
        { value: 'retail', label: 'تجزئة' },
        { value: 'other', label: 'أخرى' },
    ];

    return (
        <div className="min-h-screen pt-20 sm:pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Form Side */}
                    <div className="lg:col-span-3">
                        <AnimateOnScroll>
                            <div className="glass-card p-8 sm:p-10">
                                <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">
                                    ابدأ تجربتك المجانية الآن
                                </h1>
                                <p className="text-slate-400 mb-8">
                                    أسبوعان مجانًا — لا بطاقة ائتمانية — إلغاء في أي وقت
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Plan Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">الخطة</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['team', 'business'].map((p) => (
                                                <button
                                                    key={p}
                                                    type="button"
                                                    onClick={() => setForm({ ...form, plan: p })}
                                                    className={`p-4 rounded-xl text-sm font-medium transition-all text-center ${form.plan === p
                                                            ? 'bg-teal-400/10 border-2 border-teal-400 text-teal-400'
                                                            : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                                                        }`}
                                                >
                                                    <div className="font-bold mb-1">
                                                        {p === 'team' ? 'خطة الفريق' : 'خطة الأعمال'}
                                                    </div>
                                                    <div className="text-xs opacity-75">
                                                        {p === 'team' ? '1,500 ريال/شهر' : '2,500 ريال/شهر'}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <InputField
                                            label="اسم الشركة"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="مثال: مطعم الريف"
                                            required
                                        />
                                        <InputField
                                            label="اسمك"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="الاسم الكامل"
                                            required
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <InputField
                                            label="رقم الجوال"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="05XXXXXXXX"
                                            dir="ltr"
                                            required
                                        />
                                        <InputField
                                            label="البريد الإلكتروني"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            dir="ltr"
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">كلمة المرور</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange}
                                                placeholder="8 أحرف على الأقل"
                                                required
                                                minLength={8}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Business Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">نوع الأعمال</label>
                                        <select
                                            name="businessType"
                                            value={form.businessType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-teal-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                                        >
                                            {businessTypes.map((bt) => (
                                                <option key={bt.value} value={bt.value} className="bg-navy-900 text-white">
                                                    {bt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                                    >
                                        إنشاء حساب مجاني
                                    </button>

                                    <p className="text-center text-slate-500 text-xs">
                                        بتسجيلك فإنك توافق على{' '}
                                        <a href="#" className="text-teal-400 hover:underline">شروط الاستخدام</a>{' '}
                                        و{' '}
                                        <a href="#" className="text-teal-400 hover:underline">سياسة الخصوصية</a>
                                    </p>
                                </form>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Side Panel */}
                    <div className="lg:col-span-2 hidden lg:block">
                        <AnimateOnScroll delay={200}>
                            <div className="sticky top-28 space-y-6">
                                <div className="glass-card p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                                            <Shield size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">تجربة بدون مخاطر</p>
                                            <p className="text-slate-400 text-xs">أسبوعان مجانًا — لا بطاقة ائتمانية</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">انضم إلى 50+ شركة</p>
                                            <p className="text-slate-400 text-xs">شركات سعودية تثق بنا</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-card p-6">
                                    <h3 className="font-bold text-sm mb-4">ماذا يتضمن حسابك؟</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'صندوق وارد موحد',
                                            'ربط واتساب + فيسبوك + تيليغرام',
                                            'لوحة تحكم وتحليلات',
                                            'دعم فني كامل',
                                            'إعداد مجاني',
                                        ].map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                                                <span className="text-slate-300">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Testimonial */}
                                <div className="glass-card p-6">
                                    <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                                        "سجلت في أقل من دقيقة وفريقي بدأ يرد على العملاء فورًا"
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 text-xs font-bold">
                                            ع
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold">عبدالله – صاحب مطعم</p>
                                            <p className="text-xs text-slate-500">الرياض</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ label, name, value, onChange, placeholder, type = 'text', dir, required }) {
    return (
        <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                dir={dir}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors"
            />
        </div>
    );
}

function SuccessState() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <AnimateOnScroll>
                <div className="glass-card p-10 sm:p-14 text-center max-w-lg">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-400/20 flex items-center justify-center">
                        <CheckCircle2 size={40} className="text-teal-400" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">
                        تم إنشاء حسابك بنجاح! 🎉
                    </h1>
                    <p className="text-slate-300 text-lg mb-8">
                        مرحبًا بك في Weoryx — تجربتك المجانية بدأت الآن
                    </p>
                    <a
                        href="https://app.weoryx.com"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                    >
                        انتقل إلى لوحة التحكم
                        <ArrowLeft size={20} />
                    </a>
                    <p className="text-slate-500 text-sm mt-6">
                        سيتم تحويلك إلى app.weoryx.com
                    </p>
                </div>
            </AnimateOnScroll>
        </div>
    );
}
