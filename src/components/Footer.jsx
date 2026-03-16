import { Link } from 'react-router-dom';
import { MessageCircle, Facebook, Send, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-navy-950 font-bold text-lg">
                                W
                            </div>
                            <span className="text-xl font-bold text-white">Weoryx</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            منصة إدارة رسائل العملاء الموحدة للشركات السعودية. أدر جميع قنوات التواصل من مكان واحد.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <ChannelBadge icon={<MessageCircle size={16} />} color="bg-whatsapp" />
                            <ChannelBadge icon={<Facebook size={16} />} color="bg-facebook" />
                            <ChannelBadge icon={<Send size={16} />} color="bg-telegram" />
                            <ChannelBadge icon={<Instagram size={16} />} gradient />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">المنصة</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="/features" label="المزايا" />
                            <FooterLink to="/pricing" label="الأسعار" />
                            <FooterLink to="/register?plan=team" label="ابدأ مجانًا" />
                            <FooterLink to="/login" label="تسجيل الدخول" />
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">الدعم</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="/#faq" label="الأسئلة الشائعة" />
                            <FooterLink href="mailto:support@weoryx.com" label="الدعم الفني" />
                            <FooterLink href="mailto:sales@weoryx.com" label="المبيعات" />
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">قانوني</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="#" label="سياسة الخصوصية" />
                            <FooterLink to="#" label="شروط الاستخدام" />
                            <FooterLink to="#" label="اتفاقية مستوى الخدمة" />
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Weoryx. جميع الحقوق محفوظة.
                    </p>
                    <p className="text-slate-500 text-sm" dir="ltr">
                        connect.weoryx.com
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ to, href, label }) {
    if (href) {
        return (
            <li>
                <a href={href} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {label}
                </a>
            </li>
        );
    }
    return (
        <li>
            <Link to={to} className="text-slate-400 hover:text-teal-400 transition-colors">
                {label}
            </Link>
        </li>
    );
}

function ChannelBadge({ icon, color, gradient }) {
    return (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${gradient
                ? 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]'
                : color
            }`}>
            {icon}
        </div>
    );
}
