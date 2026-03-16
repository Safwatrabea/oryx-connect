import {
    Inbox, Users, BarChart3, Zap, MessageSquare, MessageCircle,
    Clock, Globe, Bot, Shield, Smartphone, ArrowLeft, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Features() {
    const features = [
        {
            icon: <Inbox size={32} />,
            title: 'صندوق وارد موحد',
            desc: 'اجمع رسائل واتساب وفيسبوك وتيليغرام وإنستغرام في شاشة واحدة. تابع كل محادثة بترتيب زمني مع بيانات العميل الكاملة.',
            details: [
                'عرض جميع المحادثات من كل القنوات',
                'تصنيف وفلترة حسب القناة أو الحالة',
                'بحث شامل في كل الرسائل',
                'ملف عميل موحد مع تاريخ المحادثات',
            ],
            useCase: 'صاحب مطعم يستقبل طلبات من واتساب وحجوزات من إنستغرام — يرد عليها كلها من شاشة واحدة.',
        },
        {
            icon: <Users size={32} />,
            title: 'توزيع المحادثات على الفريق',
            desc: 'عيّن محادثات لموظفين محددين تلقائيًا أو يدويًا. كل عميل يحصل على الشخص المناسب.',
            details: [
                'توزيع تلقائي حسب القناة أو القسم',
                'تعيين يدوي بنقرة واحدة',
                'حالات المحادثة (جديد، قيد الرد، مُغلق)',
                'إشعارات فورية للموظف المعيّن',
            ],
            useCase: 'صالون تجميل يوجّه استفسارات الأسعار لموظفة المبيعات، والشكاوى لمديرة الفرع — تلقائيًا.',
        },
        {
            icon: <BarChart3 size={32} />,
            title: 'تحليلات ولوحة تحكم',
            desc: 'لوحة تحكم بيانات حقيقية تعرض كل ما تحتاجه لاتخاذ قرارات ذكية في إدارة فريقك.',
            details: [
                'متوسط سرعة الرد لكل موظف',
                'عدد المحادثات المفتوحة والمغلقة',
                'تقارير يومية وأسبوعية',
                'تصدير البيانات إلى Excel',
            ],
            useCase: 'مدير متجر تجزئة يراجع أداء فريقه نهاية كل أسبوع — ويعرف من يحتاج تدريب.',
        },
        {
            icon: <MessageSquare size={32} />,
            title: 'ردود سريعة وقوالب',
            desc: 'أنشئ قوالب ردود جاهزة للأسئلة المتكررة. وفّر ساعات يوميًا من كتابة نفس الردود.',
            details: [
                'إنشاء قوالب بلا حدود',
                'اختصارات لوحة المفاتيح للردود',
                'قوالب مع متغيرات (اسم العميل، رقم الطلب)',
                'مشاركة القوالب بين الفريق',
            ],
            useCase: 'متجر إلكتروني يرد على "وين وصل طلبي؟" بنقرة واحدة مع رقم التتبع التلقائي.',
        },
        {
            icon: <MessageCircle size={32} />,
            title: 'تكامل واتساب للأعمال API',
            desc: 'ربط رسمي ومعتمد مع واتساب — رسائل غير محدودة بدون خوف من الحظر.',
            details: [
                'ربط رسمي عبر Meta Business API',
                'رسائل غير محدودة',
                'دعم الوسائط (صور، فيديو، ملفات)',
                'شارة التوثيق الخضراء',
            ],
            useCase: 'شركة عقارات ترسل صور العقارات وتستقبل استفسارات عبر واتساب — بدون حظر أو توقف.',
        },
        {
            icon: <Bot size={32} />,
            title: 'ذكاء اصطناعي (قريبًا)',
            desc: 'ردود تلقائية ذكية تفهم أسئلة العملاء وترد عليها — حتى خارج أوقات العمل.',
            details: [
                'رد تلقائي على الأسئلة الشائعة',
                'فهم اللهجة السعودية والخليجية',
                'تصعيد تلقائي للموظف عند الحاجة',
                'تعلّم من ردود فريقك',
            ],
            useCase: 'مطعم يرد على "وش عندكم اليوم؟" تلقائيًا بقائمة الطعام — الساعة 3 صباحًا.',
            comingSoon: true,
        },
    ];

    return (
        <div className="pt-24 sm:pt-32">
            {/* Header */}
            <section className="pb-16 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll>
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="text-teal-400 text-sm font-bold">تفاصيل المنصة</span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-6 leading-tight">
                                كل أداة تحتاجها لإدارة رسائل عملائك
                            </h1>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                صممنا Weoryx خصيصًا للشركات السعودية — بأدوات بسيطة وقوية تساعدك على تقديم خدمة عملاء ممتازة
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Feature Sections */}
            {features.map((f, i) => (
                <section key={i} className={`py-16 sm:py-24 ${i % 2 === 0 ? 'bg-navy-900/30' : ''}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimateOnScroll>
                            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[direction:ltr]' : ''
                                }`}>
                                {/* Text */}
                                <div className={i % 2 === 1 ? 'md:[direction:rtl]' : ''}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                                            {f.icon}
                                        </div>
                                        {f.comingSoon && (
                                            <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold">
                                                قريبًا
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{f.title}</h2>
                                    <p className="text-slate-300 leading-relaxed mb-6">{f.desc}</p>

                                    <ul className="space-y-3 mb-6">
                                        {f.details.map((d, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                                                <span className="text-slate-200">{d}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Use Case */}
                                    <div className="p-4 rounded-xl bg-teal-400/5 border border-teal-400/10">
                                        <p className="text-sm text-slate-300">
                                            <span className="text-teal-400 font-bold">مثال: </span>
                                            {f.useCase}
                                        </p>
                                    </div>
                                </div>

                                {/* Illustration */}
                                <div>
                                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-400/10 to-navy-800 border border-white/10 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-teal-400/20 flex items-center justify-center text-teal-400">
                                                {f.icon}
                                            </div>
                                            <p className="text-slate-400">{f.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </section>
            ))}

            {/* Bottom CTA */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimateOnScroll>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                            جاهز تجرب بنفسك؟
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            ابدأ أسبوعين مجانًا — بدون بطاقة ائتمانية
                        </p>
                        <Link
                            to="/register?plan=team"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25"
                        >
                            ابدأ مجانًا لأسبوعين
                            <ArrowLeft size={20} />
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
