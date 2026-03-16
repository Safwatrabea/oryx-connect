import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Zap, ArrowLeft, MessageCircle, Facebook, Send, Instagram } from 'lucide-react';
import { Reveal } from '../components/Utils';

export default function Login() {
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

    const submit = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { window.location.href = 'https://app.weoryx.com/dashboard'; }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-5 py-20">
            <div className="w-full max-w-sm">
                <Reveal>
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <div className="relative w-14 h-14 mx-auto mb-4">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400 to-amber-400" />
                            <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xl">W</div>
                        </div>
                        <h1 className="text-2xl font-black">تسجيل الدخول</h1>
                        <p className="text-white/40 text-sm mt-1.5">ادخل إلى لوحة التحكم الخاصة بك</p>
                    </div>

                    <div className="glass noise p-8">
                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="block text-sm text-white/60 mb-2 font-medium">البريد الإلكتروني</label>
                                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                    placeholder="you@example.com" required dir="ltr"
                                    className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-white/8 text-white placeholder-white/20 focus:border-violet-400 outline-none transition-colors" />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <a href="#" className="text-xs text-violet-400 hover:underline">نسيت كلمة المرور؟</a>
                                    <label className="text-sm text-white/60 font-medium">كلمة المرور</label>
                                </div>
                                <div className="relative">
                                    <input type={showPw ? 'text' : 'password'} value={form.password}
                                        onChange={e => setForm({ ...form, password: e.target.value })}
                                        placeholder="••••••••" required
                                        className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-white/8 text-white placeholder-white/30 focus:border-violet-400 outline-none transition-colors" />
                                    <button type="button" onClick={() => setShowPw(!showPw)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors">
                                        {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" disabled={loading}
                                className="btn-primary relative w-full flex items-center justify-center gap-2 py-4 text-base disabled:opacity-60">
                                {loading
                                    ? <><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin relative z-10" /><span className="relative z-10">جارٍ الدخول...</span></>
                                    : <><Zap size={18} className="relative z-10" /><span className="relative z-10">تسجيل الدخول</span></>
                                }
                            </button>
                        </form>

                        <p className="text-center text-white/35 text-sm mt-5">
                            ليس لديك حساب؟{' '}
                            <Link to="/register?plan=team" className="text-violet-400 hover:underline font-medium">
                                سجّل مجانًا
                            </Link>
                        </p>
                    </div>
                </Reveal>

                {/* Channel badges */}
                <Reveal delay={200}>
                    <div className="flex items-center justify-center gap-3 mt-7">
                        <span className="text-white/20 text-xs">يدعم</span>
                        {[
                            { icon: <MessageCircle size={15} />, color: 'text-[#25D366] bg-[#25D366]/10' },
                            { icon: <Facebook size={15} />, color: 'text-[#1877F2] bg-[#1877F2]/10' },
                            { icon: <Send size={15} />, color: 'text-[#0088CC] bg-[#0088CC]/10' },
                            { icon: <Instagram size={15} />, color: 'text-pink-400 bg-pink-400/10' },
                        ].map((c, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${c.color}`}>{c.icon}</div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
