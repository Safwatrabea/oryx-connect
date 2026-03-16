import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, MessageCircle, Facebook, Send, Instagram, Lock } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            window.location.href = 'https://app.weoryx.com/dashboard';
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md">
                <AnimateOnScroll>
                    <div className="glass-card p-8 sm:p-10">
                        {/* Logo */}
                        <div className="text-center mb-8">
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-navy-950 text-2xl font-bold">
                                W
                            </div>
                            <h1 className="text-2xl font-extrabold">تسجيل الدخول</h1>
                            <p className="text-slate-400 text-sm mt-2">ادخل إلى لوحة التحكم الخاصة بك</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    required
                                    dir="ltr"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-slate-300">كلمة المرور</label>
                                    <a href="#" className="text-xs text-teal-400 hover:underline">نسيت كلمة المرور؟</a>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
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

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-teal-400 hover:bg-teal-500 text-navy-950 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-400/25 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                                        جارٍ الدخول...
                                    </>
                                ) : (
                                    <>
                                        <Lock size={18} />
                                        تسجيل الدخول
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-slate-400 text-sm">
                                ليس لديك حساب؟{' '}
                                <Link to="/register?plan=team" className="text-teal-400 hover:underline font-medium">
                                    أنشئ حسابًا مجانيًا
                                </Link>
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Channel badges */}
                <AnimateOnScroll delay={200}>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <span className="text-slate-500 text-xs">ندعم</span>
                        <div className="flex gap-2">
                            <div className="w-7 h-7 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp">
                                <MessageCircle size={14} />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-facebook/20 flex items-center justify-center text-facebook">
                                <Facebook size={14} />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-telegram/20 flex items-center justify-center text-telegram">
                                <Send size={14} />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F58529]/20 via-[#DD2A7B]/20 to-[#8134AF]/20 flex items-center justify-center text-pink-500">
                                <Instagram size={14} />
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
}
