import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error;

  async function handleLogin(formData: FormData) {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email === 'admin@koreaedu.vn' && password === 'admin123') {
      const cookieStore = await cookies();
      cookieStore.set('admin_token', 'koreaedu-admin-token', {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 8, // 8 hours
      });
      redirect('/admin');
    } else {
      redirect('/admin/login?error=Invalid credentials');
    }
  }

  return (
    <div className="min-h-screen bg-[#fbfbf9] flex items-center justify-center p-4 font-sans selection:bg-[#e60023]/10">
      <div className="w-full max-w-[440px] bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e5e0]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <svg
              className="w-8 h-8 text-[#e60023]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.17-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.993-.283 1.194.599 2.169 1.775 2.169 2.13 0 3.768-2.247 3.768-5.491 0-2.871-2.063-4.88-5.011-4.88-3.414 0-5.418 2.561-5.418 5.204 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.27 1.043-1.002 2.35-1.492 3.146C9.97 23.834 10.966 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-[#000000] font-sans">
              KoreaEdu Admin
            </span>
          </div>
          <p className="text-sm text-[#62625b]">
            Đăng nhập hệ thống quản trị dữ liệu học phí & leads
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-[16px] bg-[#cc001f]/5 border border-[#cc001f]/10 text-sm text-[#cc001f] text-center font-medium">
            Tài khoản hoặc mật khẩu không chính xác!
          </div>
        )}

        <form action={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="admin@koreaedu.vn"
              className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm font-medium transition-all outline-none focus:border-[#000000] focus:ring-2 focus:ring-[#e60023]/10 placeholder-[#91918c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-[#000000] text-sm font-medium transition-all outline-none focus:border-[#000000] focus:ring-2 focus:ring-[#e60023]/10 placeholder-[#91918c]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-11 bg-[#e60023] hover:bg-[#cc001f] active:scale-[0.98] text-white font-bold text-sm rounded-[16px] transition-all shadow-md shadow-[#e60023]/10 flex items-center justify-center cursor-pointer"
            >
              Đăng nhập
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-[#e5e5e0] text-center">
          <p className="text-[11px] text-[#91918c]">
            Hệ thống quản lý nội bộ bảo mật. Báo cáo sự cố hỗ trợ kỹ thuật tại tech@koreaedu.vn.
          </p>
        </div>
      </div>
    </div>
  );
}
