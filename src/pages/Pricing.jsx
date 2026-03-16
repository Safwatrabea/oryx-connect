import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, X, Zap, Calculator, TrendingDown, ArrowLeft } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Pricing() {
    return (
        <div className="pt-24 sm:pt-32">
            <PricingHeader />
            <PricingCards />
            <ComparisonTable />
            <ROICalculator />
            <PricingCTA />
        </div>
    );
}

function PricingHeader() {
    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-400 text-sm font-bold">الأسعار</span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                            أقل من راتب موظف واحد — وأكثر فاعلية بمراحل
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            اختر الخطة المناسبة لعملك. جميع الخطط تشمل أسبوعين مجانًا — بدون بطاقة ائتمانية.
                        </p>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

function PricingCards() {
    const plans = [
        {
            name: 'خطة الفريق',
            price: '1,500',
            discounted: '750',
            desc: 'مثالية للمشاريع الصغيرة والفرق المكونة من 2-5 أشخاص',
            features: [
                'صندوق وارد موحد',
                '3 قنوات تواصل (واتساب + فيسبوك + تيليغرام)',
                'حتى 5 مستخدمين',
                'ردود سريعة وقوالب',
                'تقارير أساسية',
                'دعم فني عبر البريد الإلكتروني',
                '1,000 محادثة شهريًا',
            ],
            highlighted: false,
            plan: 'team',
        },
        {
            name: 'خطة الأعمال',
            price: '2,500',
            discounted: '1,250',
            desc: 'للشركات التي تحتاج تحكمًا أكبر وتحليلات متقدمة',
            features: [
                'كل مزايا خطة الفريق',
                'جميع القنوات (4+ قنوات)',
                'حتى 15 مستخدم',
                'توزيع تلقائي ذكي',
                'تحليلات متقدمة ولوحة بيانات',
                'API مفتوح للتكامل',
                'دعم فني أولوية (واتساب + هاتف)',
                'مدير حساب مخصص',
                'محادثات غير محدودة',
                'تدريب الفريق',
            ],
            highlighted: true,
            plan: 'business',
        },
    ];

    return (
        <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                                <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold mb-4">
                                    <Zap size={12} />
                                    خصم 50% لأول 3 أشهر
                                </div>

                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-extrabold text-teal-400">{plan.discounted}</span>
                                        <span className="text-slate-400">ريال/شهر</span>
                                    </div>
                                    <div className="text-sm text-slate-500 line-through mt-1">{plan.price} ريال/شهر</div>
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

function ComparisonTable() {
    const features = [
        { name: 'صندوق وارد موحد', team: true, business: true },
        { name: 'واتساب', team: true, business: true },
        { name: 'فيسبوك ماسنجر', team: true, business: true },
        { name: 'تيليغرام', team: true, business: true },
        { name: 'إنستغرام', team: false, business: true },
        { name: 'عدد المستخدمين', team: '5', business: '15' },
        { name: 'ردود سريعة', team: true, business: true },
        { name: 'توزيع تلقائي', team: false, business: true },
        { name: 'تقارير أساسية', team: true, business: true },
        { name: 'تحليلات متقدمة', team: false, business: true },
        { name: 'API مفتوح', team: false, business: true },
        { name: 'مدير حساب مخصص', team: false, business: true },
        { name: 'المحادثات الشهرية', team: '1,000', business: 'غير محدود' },
        { name: 'الدعم الفني', team: 'بريد إلكتروني', business: 'أولوية (واتساب + هاتف)' },
        { name: 'تدريب الفريق', team: false, business: true },
    ];

    return (
        <section className="pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
                        مقارنة تفصيلية
                    </h2>

                    <div className="glass-card overflow-hidden overflow-x-auto">
                        <table className="w-full min-w-[500px]">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-right p-4 font-bold text-sm">الميزة</th>
                                    <th className="p-4 font-bold text-sm text-center">خطة الفريق</th>
                                    <th className="p-4 font-bold text-sm text-center text-teal-400">خطة الأعمال</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((f, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-sm text-slate-200">{f.name}</td>
                                        <td className="p-4 text-center">
                                            <CellValue value={f.team} />
                                        </td>
                                        <td className="p-4 text-center">
                                            <CellValue value={f.business} highlight />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

function CellValue({ value, highlight }) {
    if (value === true) {
        return <CheckCircle2 size={18} className={`mx-auto ${highlight ? 'text-teal-400' : 'text-green-400'}`} />;
    }
    if (value === false) {
        return <X size={18} className="mx-auto text-slate-600" />;
    }
    return <span className={`text-sm ${highlight ? 'text-teal-400 font-medium' : 'text-slate-300'}`}>{value}</span>;
}

function ROICalculator() {
    const [messagesPerDay, setMessagesPerDay] = useState(50);
    const [avgOrderValue, setAvgOrderValue] = useState(100);

    const lostRate = 0.15; // 15% of messages lost
    const conversionRate = 0.30; // 30% would have converted
    const monthlyLoss = Math.round(messagesPerDay * 30 * lostRate * conversionRate * avgOrderValue);

    return (
        <section className="pb-20" id="roi-calculator">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="glass-card p-8 sm:p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-red-400/10 flex items-center justify-center text-red-400">
                                <Calculator size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold">كم تخسر من رسائل ضائعة؟</h2>
                                <p className="text-slate-400 text-sm">احسب خسارتك الشهرية بدون نظام إدارة رسائل</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    عدد الرسائل يوميًا
                                </label>
                                <input
                                    type="number"
                                    value={messagesPerDay}
                                    onChange={(e) => setMessagesPerDay(Number(e.target.value) || 0)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-teal-400 focus:outline-none transition-colors text-lg"
                                    min={0}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    متوسط قيمة الطلب (ريال)
                                </label>
                                <input
                                    type="number"
                                    value={avgOrderValue}
                                    onChange={(e) => setAvgOrderValue(Number(e.target.value) || 0)}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-teal-400 focus:outline-none transition-colors text-lg"
                                    min={0}
                                />
                            </div>
                        </div>

                        {/* Result */}
                        <div className="p-6 rounded-2xl bg-red-400/5 border border-red-400/20 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <TrendingDown size={20} className="text-red-400" />
                                <span className="text-slate-400 text-sm">خسارتك الشهرية المقدرة</span>
                            </div>
                            <div className="text-4xl sm:text-5xl font-extrabold text-red-400 mb-2" dir="ltr">
                                {monthlyLoss.toLocaleString()} SAR
                            </div>
                            <p className="text-slate-400 text-sm">
                                بناءً على نسبة 15% رسائل ضائعة و 30% معدل تحويل
                            </p>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-slate-300 text-sm mb-4">
                                مع Weoryx، لن تفقد أي رسالة — ابدأ بـ <span className="text-teal-400 font-bold">750 ريال/شهر</span> فقط
                            </p>
                            <Link
                                to="/register?plan=team"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                            >
                                ابدأ مجانًا لأسبوعين
                                <ArrowLeft size={18} />
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

function PricingCTA() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimateOnScroll>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        لا تزال متردد؟
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                        جرّب أسبوعين مجانًا — بدون بطاقة ائتمانية — وقرر بنفسك
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register?plan=team"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                        >
                            ابدأ الآن
                            <ArrowLeft size={20} />
                        </Link>
                        <Link
                            to="/features"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-xl text-lg font-medium transition-all hover:bg-white/5"
                        >
                            تعرف على المزايا
                        </Link>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
