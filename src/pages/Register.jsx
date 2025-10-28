import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: nickname });

      await setDoc(doc(db, "users", user.uid), {
        email,
        nickname,
        createdAt: new Date(),
      });

      navigate("/");
    } catch (err) {
      console.error("Помилка при реєстрації:", err);
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Реєстрація</h2>

        <input
          type="text"
          placeholder="Ім'я"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-2 border rounded-lg"
        />

        {error && (
          <p className="text-red-500 text-center text-sm mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Зареєструватися
        </button>

        <p className="text-center text-sm mt-3">
          Вже маєш акаунт?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Увійти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
