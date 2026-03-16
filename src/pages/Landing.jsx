import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MessageCircle, Facebook, Send, Instagram,
    Inbox, Users, BarChart3, Zap, MessageSquare, Clock,
    AlertTriangle, UserX, TrendingDown,
    ChevronDown, ChevronUp, Star, Quote,
    ArrowLeft, CheckCircle2
} from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Landing() {
    return (
        <div>
            <HeroSection />
            <SocialProofBar />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <FinalCTA />
        </div>
    );
}

/* ───────────────────── HERO ───────────────────── */
function HeroSection() {
    const fullText = 'توقّف عن فتح 5 تطبيقات لخدمة عملائك';
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullText.length) {
                setDisplayText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => setShowCursor(false), 1500);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,170,0.08)_0%,_transparent_60%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-sm mb-6">
                            <Zap size={14} />
                            <span>أول 3 أشهر بخصم 50% للعملاء الأوائل</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                            {displayText}
                            {showCursor && <span className="animate-blink text-teal-400">|</span>}
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">
                            أدِر واتساب وفيسبوك وتيليغرام من صندوق وارد واحد — وفريق واحد — ولوحة تحكم واحدة
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/register?plan=team"
                                className="px-8 py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25 text-center animate-pulse-glow"
                            >
                                ابدأ مجانًا لأسبوعين
                            </Link>
                            <Link
                                to="/features"
                                className="px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-xl text-lg font-medium transition-all hover:bg-white/5 text-center flex items-center justify-center gap-2"
                            >
                                شاهد كيف يعمل
                                <ArrowLeft size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Mockup Illustration */}
                    <div className="hidden lg:block">
                        <InboxMockup />
                    </div>
                </div>
            </div>
        </section>
    );
}

function InboxMockup() {
    const messages = [
        { channel: 'whatsapp', color: 'bg-whatsapp', name: 'أحمد محمد', text: 'مرحبًا، هل التوصيل متاح اليوم؟', time: 'الآن' },
        { channel: 'facebook', color: 'bg-facebook', name: 'سارة العلي', text: 'أريد حجز موعد يوم الخميس', time: '2 د' },
        { channel: 'telegram', color: 'bg-telegram', name: 'خالد السعود', text: 'ما هي أسعار الباقة العائلية؟', time: '5 د' },
        { channel: 'instagram', gradient: true, name: 'نورة الحربي', text: 'هل يوجد لون آخر من هذا المنتج؟', time: '8 د' },
    ];

    const channelIcons = {
        whatsapp: <MessageCircle size={14} />,
        facebook: <Facebook size={14} />,
        telegram: <Send size={14} />,
        instagram: <Instagram size={14} />,
    };

    return (
        <div className="animate-float">
            <div className="glass-card p-6 max-w-md mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <Inbox size={18} className="text-teal-400" />
                        <span className="font-bold text-sm">صندوق الوارد الموحد</span>
                    </div>
                    <span className="text-xs text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                        4 رسائل جديدة
                    </span>
                </div>

                {/* Messages */}
                <div className="space-y-3">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-all cursor-pointer group"
                            style={{ animationDelay: `${i * 150}ms` }}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${msg.gradient
                                    ? 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]'
                                    : msg.color
                                }`}>
                                {channelIcons[msg.channel]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-semibold truncate">{msg.name}</span>
                                    <span className="text-xs text-slate-500 shrink-0">{msg.time}</span>
                                </div>
                                <p className="text-xs text-slate-400 truncate mt-0.5">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ───────────────────── SOCIAL PROOF ───────────────────── */
function SocialProofBar() {
    const channels = [
        { icon: <MessageCircle size={20} />, label: 'WhatsApp', color: 'text-whatsapp' },
        { icon: <Facebook size={20} />, label: 'Facebook', color: 'text-facebook' },
        { icon: <Send size={20} />, label: 'Telegram', color: 'text-telegram' },
        { icon: <Instagram size={20} />, label: 'Instagram', color: 'text-pink-500' },
    ];

    return (
        <section className="border-y border-white/5 bg-navy-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center">
                        {channels.map((ch, i) => (
                            <div key={i} className={`flex items-center gap-2 ${ch.color}`}>
                                {ch.icon}
                                <span className="text-sm font-medium text-slate-300" dir="ltr">{ch.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-teal-400">
                        <Clock size={18} />
                        <span className="text-sm font-bold">وفّر 3 ساعات يوميًا</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ───────────────────── PROBLEM ───────────────────── */
function ProblemSection() {
    const problems = [
        {
            icon: <AlertTriangle size={28} />,
            title: 'رسائل ضائعة',
            desc: 'عملاء يراسلونك ولا أحد يرد — لأن الرسالة ضاعت بين التطبيقات',
            color: 'text-red-400',
            bg: 'bg-red-400/10',
        },
        {
            icon: <UserX size={28} />,
            title: 'فريق مشتت',
            desc: 'كل موظف يرد من جواله — ولا أحد يعرف من رد على من',
            color: 'text-amber-400',
            bg: 'bg-amber-400/10',
        },
        {
            icon: <TrendingDown size={28} />,
            title: 'لا تحكم على الأداء',
            desc: 'بدون بيانات — كيف تعرف أن فريقك يرد بسرعة ويبيع؟',
            color: 'text-orange-400',
            bg: 'bg-orange-400/10',
        },
    ];

    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                            هل تواجه هذه المشاكل؟
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            كل يوم تخسر عملاء لأنك تدير رسائلك من 5 تطبيقات مختلفة
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-6">
                    {problems.map((p, i) => (
                        <AnimateOnScroll key={i} delay={i * 150}>
                            <div className="glass-card glass-card-hover p-8 text-center h-full">
                                <div className={`w-16 h-16 rounded-2xl ${p.bg} flex items-center justify-center ${p.color} mx-auto mb-5`}>
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ───────────────────── SOLUTION ───────────────────── */
function SolutionSection() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            label: 'صندوق وارد موحد',
            icon: <Inbox size={20} />,
            title: 'كل الرسائل في مكان واحد',
            desc: 'اجمع رسائل واتساب وفيسبوك وتيليغرام وإنستغرام في صندوق وارد واحد. لن تفوتك رسالة عميل أبدًا.',
            features: ['عرض جميع المحادثات', 'تصنيف حسب القناة', 'أولوية تلقائية', 'بحث شامل'],
        },
        {
            label: 'توزيع المهام',
            icon: <Users size={20} />,
            title: 'وزّع المحادثات على فريقك',
            desc: 'عيّن محادثات لموظفين محددين — تلقائيًا أو يدويًا. كل عميل يحصل على اهتمام كامل.',
            features: ['توزيع تلقائي', 'تعيين يدوي', 'حالات المحادثة', 'إشعارات فورية'],
        },
        {
            label: 'تحليلات',
            icon: <BarChart3 size={20} />,
            title: 'اعرف كل شيء عن أداء فريقك',
            desc: 'لوحة تحكم تعرض سرعة الرد وعدد المحادثات ومستوى رضا العملاء — بيانات حقيقية لقرارات ذكية.',
            features: ['سرعة الرد', 'معدل الإغلاق', 'تقارير يومية', 'تصدير البيانات'],
        },
    ];

    return (
        <section className="py-20 sm:py-28 bg-navy-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-14">
                        <span className="text-teal-400 text-sm font-bold">الحل</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
                            كيف يحل Weoryx هذه المشاكل؟
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            منصة واحدة تجمع كل قنوات التواصل مع أدوات إدارة فريق وتحليلات متقدمة
                        </p>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll>
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === i
                                        ? 'bg-teal-400 text-navy-950'
                                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="glass-card p-8 sm:p-12">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                    {tabs[activeTab].title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {tabs[activeTab].desc}
                                </p>
                                <ul className="space-y-3">
                                    {tabs[activeTab].features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                                            <span className="text-slate-200">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Illustration */}
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-400/10 to-navy-800 border border-white/10 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-teal-400/20 flex items-center justify-center text-teal-400">
                                            {tabs[activeTab].icon}
                                        </div>
                                        <p className="text-slate-400 text-sm">{tabs[activeTab].label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

/* ───────────────────── FEATURES ───────────────────── */
function FeaturesSection() {
    const features = [
        {
            icon: <Inbox size={24} />,
            title: 'صندوق وارد موحد',
            desc: 'اجمع كل رسائل عملائك من واتساب وفيسبوك وتيليغرام في شاشة واحدة',
        },
        {
            icon: <MessageSquare size={24} />,
            title: 'ردود سريعة',
            desc: 'قوالب ردود جاهزة للأسئلة المتكررة — وفّر وقت فريقك',
        },
        {
            icon: <Users size={24} />,
            title: 'توزيع تلقائي',
            desc: 'وزع المحادثات على فريقك تلقائيًا حسب القناة أو نوع الاستفسار',
        },
        {
            icon: <BarChart3 size={24} />,
            title: 'تحليلات متقدمة',
            desc: 'تقارير يومية عن سرعة الرد وعدد المحادثات ورضا العملاء',
        },
        {
            icon: <MessageCircle size={24} />,
            title: 'تكامل واتساب API',
            desc: 'ربط رسمي مع واتساب للأعمال — رسائل غير محدودة بدون حظر',
        },
        {
            icon: <Zap size={24} />,
            title: 'إشعارات فورية',
            desc: 'تنبيهات لحظية لكل رسالة جديدة — لن يفوتك عميل',
        },
    ];

    return (
        <section id="features" className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-14">
                        <span className="text-teal-400 text-sm font-bold">المزايا</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
                            كل ما تحتاجه لإدارة رسائلك
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            أدوات متكاملة صممت خصيصًا للشركات السعودية الصغيرة والمتوسطة
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <AnimateOnScroll key={i} delay={i * 100}>
                            <div className="glass-card glass-card-hover p-7 h-full">
                                <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400 mb-4">
                                    {f.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ───────────────────── PRICING ───────────────────── */
function PricingSection() {
    const plans = [
        {
            name: 'خطة الفريق',
            price: '1,500',
            desc: 'مثالية للمشاريع الصغيرة والفرق المكونة من 2-5 أشخاص',
            features: [
                'صندوق وارد موحد',
                '3 قنوات تواصل',
                'حتى 5 مستخدمين',
                'ردود سريعة',
                'تقارير أساسية',
                'دعم فني عبر البريد',
            ],
            highlighted: false,
            plan: 'team',
        },
        {
            name: 'خطة الأعمال',
            price: '2,500',
            desc: 'للشركات التي تحتاج تحكمًا أكبر وتحليلات متقدمة',
            features: [
                'كل مزايا خطة الفريق',
                'جميع القنوات (4+)',
                'حتى 15 مستخدم',
                'توزيع تلقائي ذكي',
                'تحليلات متقدمة',
                'API مفتوح',
                'دعم فني أولوية',
                'مدير حساب مخصص',
            ],
            highlighted: true,
            plan: 'business',
        },
    ];

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-navy-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-14">
                        <span className="text-teal-400 text-sm font-bold">الأسعار</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
                            أقل من راتب موظف واحد — وأكثر فاعلية بمراحل
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            اختر الخطة المناسبة لحجم عملك — وابدأ بأسبوعين مجانًا
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, i) => (
                        <AnimateOnScroll key={i} delay={i * 200}>
                            <div className={`relative rounded-2xl p-8 h-full flex flex-col ${plan.highlighted
                                    ? 'bg-gradient-to-b from-teal-400/10 to-navy-800 border-2 border-teal-400/30'
                                    : 'glass-card'
                                }`}>
                                {plan.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-400 text-navy-950 rounded-full text-xs font-bold">
                                        الأكثر طلبًا
                                    </div>
                                )}

                                {/* Discount Badge */}
                                <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold mb-4">
                                    <Zap size={12} />
                                    خصم 50% لأول 3 أشهر
                                </div>

                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-extrabold text-teal-400">{plan.price}</span>
                                    <span className="text-slate-400">ريال/شهر</span>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                                            <span className="text-slate-200">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={`/register?plan=${plan.plan}`}
                                    className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all ${plan.highlighted
                                            ? 'bg-teal-400 hover:bg-teal-500 text-navy-950 hover:shadow-lg hover:shadow-teal-400/25'
                                            : 'bg-white/10 hover:bg-white/15 text-white'
                                        }`}
                                >
                                    ابدأ مجانًا لأسبوعين
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ───────────────────── TESTIMONIALS ───────────────────── */
function TestimonialsSection() {
    const testimonials = [
        {
            quote: 'كنا نضيع ساعات يوميًا بين الواتساب والإنستغرام. الآن كل شيء في مكان واحد وفريقنا أسرع بمرتين.',
            name: 'عبدالله الراشد',
            role: 'صاحب مطعم — الرياض',
            stars: 5,
        },
        {
            quote: 'أخيرًا أقدر أعرف كم رسالة يرد عليها كل موظف وكم عميل نخسره. البيانات غيّرت طريقة إدارتي.',
            name: 'نوف المطيري',
            role: 'مديرة صالون — جدة',
            stars: 5,
        },
        {
            quote: 'الحجوزات زادت 40% بعد ما صرنا نرد على كل رسالة بسرعة. قبل كذا كنا نفقد زبائن كثير.',
            name: 'محمد الغامدي',
            role: 'مدير تجزئة — الدمام',
            stars: 5,
        },
    ];

    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-14">
                        <span className="text-teal-400 text-sm font-bold">انطباعات العملاء</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
                            ماذا يقول عملاؤنا؟
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <AnimateOnScroll key={i} delay={i * 150}>
                            <div className="glass-card p-7 h-full flex flex-col">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.stars)].map((_, j) => (
                                        <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <Quote size={24} className="text-teal-400/30 mb-3" />
                                <p className="text-slate-200 leading-relaxed flex-1 mb-5">
                                    {t.quote}
                                </p>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="font-bold text-sm">{t.name}</p>
                                    <p className="text-slate-400 text-xs mt-1">{t.role}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ───────────────────── FAQ ───────────────────── */
function FAQSection() {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            q: 'هل يدعم الذكاء الاصطناعي؟',
            a: 'نعم! نعمل على إضافة ردود تلقائية ذكية باستخدام الذكاء الاصطناعي ستكون متاحة قريبًا ضمن خطة الأعمال.',
        },
        {
            q: 'هل يمكنني الإلغاء في أي وقت؟',
            a: 'بالتأكيد. لا يوجد عقد طويل الأمد — يمكنك الإلغاء في أي وقت من لوحة التحكم.',
        },
        {
            q: 'هل أحتاج WhatsApp Business API؟',
            a: 'نساعدك في الحصول على حساب واتساب للأعمال API وربطه بالمنصة — الفريق الفني يقوم بالإعداد الكامل.',
        },
        {
            q: 'كم يستغرق تفعيل الحساب؟',
            a: 'يمكنك البدء فورًا مع فيسبوك وتيليغرام. واتساب يحتاج 24-48 ساعة للتفعيل.',
        },
        {
            q: 'هل البيانات آمنة؟',
            a: 'نستخدم تشفير SSL وخوادم سحابية معتمدة. بياناتك محمية وفقًا لأعلى معايير الأمان.',
        },
        {
            q: 'هل يوجد تطبيق جوال؟',
            a: 'المنصة تعمل على المتصفح بشكل كامل ومتجاوب مع الجوال. تطبيق مخصص قادم قريبًا.',
        },
    ];

    return (
        <section id="faq" className="py-20 sm:py-28 bg-navy-900/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-14">
                        <span className="text-teal-400 text-sm font-bold">أسئلة شائعة</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
                            هل عندك سؤال؟
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <AnimateOnScroll key={i} delay={i * 80}>
                            <div className="glass-card overflow-hidden">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-right hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                                    {open === i ? (
                                        <ChevronUp size={18} className="text-teal-400 shrink-0 mr-3" />
                                    ) : (
                                        <ChevronDown size={18} className="text-slate-400 shrink-0 mr-3" />
                                    )}
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ───────────────────── FINAL CTA ───────────────────── */
function FinalCTA() {
    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-400/20 to-navy-800 border border-teal-400/20 p-10 sm:p-16 text-center">
                        {/* BG glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-400/5 rounded-full blur-3xl" />

                        <div className="relative">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                انضم إلى الشركات السعودية<br />التي تدير رسائلها بذكاء
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                                ابدأ تجربتك المجانية اليوم — أسبوعان كاملان بدون أي التزام
                            </p>
                            <Link
                                to="/register?plan=team"
                                className="inline-block px-10 py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                            >
                                ابدأ مجانًا الآن
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
