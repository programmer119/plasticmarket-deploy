import { b as escape_html, c as attr, d as attr_class } from './index.js-BXRNCAzq.js';

//#endregion
//#region src/routes/account/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const lang = () => data?.locale || "ko";
		const copy = {
			ko: {
				account: "계정",
				login: "로그인",
				create: "회원가입",
				display: "표시 이름",
				email: "이메일",
				password: "비밀번호",
				processing: "처리 중…",
				loading: "로그인 수단을 불러오는 중…",
				noMethods: "사용 가능한 로그인 수단이 없습니다.",
				or: "또는 이메일로",
				pwHint: "10자 이상 입력하세요.",
				continue: "{provider}로 계속하기",
				kakao: "카카오 로그인",
				accountExists: "이미 AuthHub에 등록된 이메일입니다. 로그인하거나 소셜 로그인을 이용하세요.",
				authUnavailable: "로그인 서비스를 연결할 수 없습니다. 잠시 후 다시 시도하세요.",
				requestFailed: "요청을 처리하지 못했습니다.",
				signInstead: "로그인으로 전환"
			},
			en: {
				account: "Account",
				login: "Sign in",
				create: "Create account",
				display: "Display name",
				email: "Email",
				password: "Password",
				processing: "Processing…",
				loading: "Loading sign-in options…",
				noMethods: "No sign-in methods are enabled for this project.",
				or: "or continue with email",
				pwHint: "Use at least 10 characters.",
				continue: "Continue with {provider}",
				kakao: "Login with Kakao",
				accountExists: "This email already exists in AuthHub. Sign in or use a social login method.",
				authUnavailable: "The sign-in service is unavailable. Try again in a moment.",
				requestFailed: "We could not complete that request.",
				signInstead: "Switch to sign in"
			},
			ja: {
				account: "アカウント",
				login: "ログイン",
				create: "アカウント作成",
				display: "表示名",
				email: "メール",
				password: "パスワード",
				processing: "処理中…",
				loading: "ログイン方法を読み込み中…",
				noMethods: "利用できるログイン方法がありません。",
				or: "またはメールで続ける",
				pwHint: "10文字以上で入力してください。",
				continue: "{provider}で続ける",
				kakao: "Kakaoでログイン",
				accountExists: "このメールアドレスはAuthHubに登録済みです。ログインまたはソーシャルログインを利用してください。",
				authUnavailable: "ログインサービスに接続できません。しばらくしてから再試行してください。",
				requestFailed: "リクエストを完了できませんでした。",
				signInstead: "ログインへ切り替え"
			},
			"zh-TW": {
				account: "帳戶",
				login: "登入",
				create: "建立帳戶",
				display: "顯示名稱",
				email: "電子郵件",
				password: "密碼",
				processing: "處理中…",
				loading: "正在載入登入方式…",
				noMethods: "目前沒有可用的登入方式。",
				or: "或使用電子郵件",
				pwHint: "請輸入至少 10 個字元。",
				continue: "使用 {provider} 繼續",
				kakao: "使用 Kakao 登入",
				accountExists: "此電子郵件已存在於 AuthHub。請直接登入或使用社群登入。",
				authUnavailable: "目前無法連線登入服務，請稍後再試。",
				requestFailed: "無法完成此要求。",
				signInstead: "切換到登入"
			},
			"zh-CN": {
				account: "账户",
				login: "登录",
				create: "创建账户",
				display: "显示名称",
				email: "电子邮箱",
				password: "密码",
				processing: "处理中…",
				loading: "正在加载登录方式…",
				noMethods: "当前没有可用的登录方式。",
				or: "或使用电子邮箱",
				pwHint: "请输入至少 10 个字符。",
				continue: "使用 {provider} 继续",
				kakao: "使用 Kakao 登录",
				accountExists: "此邮箱已存在于 AuthHub。请直接登录或使用社交登录。",
				authUnavailable: "当前无法连接登录服务，请稍后再试。",
				requestFailed: "无法完成此请求。",
				signInstead: "切换到登录"
			},
			vi: {
				account: "Tài khoản",
				login: "Đăng nhập",
				create: "Tạo tài khoản",
				display: "Tên hiển thị",
				email: "Email",
				password: "Mật khẩu",
				processing: "Đang xử lý…",
				loading: "Đang tải phương thức đăng nhập…",
				noMethods: "Không có phương thức đăng nhập khả dụng.",
				or: "hoặc tiếp tục bằng email",
				pwHint: "Nhập ít nhất 10 ký tự.",
				continue: "Tiếp tục với {provider}",
				kakao: "Đăng nhập bằng Kakao",
				accountExists: "Email này đã tồn tại trong AuthHub. Hãy đăng nhập hoặc dùng đăng nhập mạng xã hội.",
				authUnavailable: "Không thể kết nối dịch vụ đăng nhập. Hãy thử lại sau.",
				requestFailed: "Không thể hoàn tất yêu cầu.",
				signInstead: "Chuyển sang đăng nhập"
			},
			id: {
				account: "Akun",
				login: "Masuk",
				create: "Buat akun",
				display: "Nama tampilan",
				email: "Email",
				password: "Kata sandi",
				processing: "Memproses…",
				loading: "Memuat opsi masuk…",
				noMethods: "Tidak ada metode masuk yang tersedia.",
				or: "atau lanjutkan dengan email",
				pwHint: "Gunakan minimal 10 karakter.",
				continue: "Lanjutkan dengan {provider}",
				kakao: "Masuk dengan Kakao",
				accountExists: "Email ini sudah ada di AuthHub. Masuk atau gunakan login sosial.",
				authUnavailable: "Layanan masuk tidak tersedia. Coba lagi sebentar lagi.",
				requestFailed: "Permintaan tidak dapat diselesaikan.",
				signInstead: "Beralih ke masuk"
			},
			es: {
				account: "Cuenta",
				login: "Iniciar sesión",
				create: "Crear cuenta",
				display: "Nombre visible",
				email: "Correo electrónico",
				password: "Contraseña",
				processing: "Procesando…",
				loading: "Cargando opciones de acceso…",
				noMethods: "No hay métodos de acceso disponibles.",
				or: "o continúa con correo",
				pwHint: "Usa al menos 10 caracteres.",
				continue: "Continuar con {provider}",
				kakao: "Iniciar sesión con Kakao",
				accountExists: "Este correo ya existe en AuthHub. Inicia sesión o usa un acceso social.",
				authUnavailable: "El servicio de acceso no está disponible. Inténtalo de nuevo en un momento.",
				requestFailed: "No se pudo completar la solicitud.",
				signInstead: "Cambiar a iniciar sesión"
			}
		};
		const c = () => copy[lang()] || copy.en;
		$$renderer.push(`<main class="account-shell"><section class="account-panel"><div class="page-head account-head"><div class="eyebrow">${escape_html(c().account)}</div><h1>${escape_html(c().login)}</h1></div> <div class="tabs account-tabs" role="tablist"${attr("aria-label", c().account)}><button type="button" role="tab"${attr("aria-selected", true)}${attr_class("tab", void 0, { "active": true })}>${escape_html(c().login)}</button> <button type="button" role="tab"${attr("aria-selected", false)}${attr_class("tab", void 0, { "active": false })}>${escape_html(c().create)}</button></div> `);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="auth-loading" aria-live="polite"><span class="sr-only">${escape_html(c().loading)}</span><div class="auth-skeleton"></div><div class="auth-skeleton"></div></div>`);
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section></main>`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DPi7LrSH.js.map
