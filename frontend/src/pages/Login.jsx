const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

function Login() {
  function handleGoogleLogin() {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/google`
  }

  return (
    <div>
      <h2>로그인</h2>
      <button onClick={handleGoogleLogin}>Google로 로그인</button>
    </div>
  )
}

export default Login