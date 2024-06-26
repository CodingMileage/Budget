import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Auth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/budget");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-200">
      <div className="flex flex-col items-center justify-center p-8 m-4 bg-white rounded shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold">Sign In With Google</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <button
          className="w-32 p-2 transition duration-300 rounded bg-slate-400 hover:bg-slate-500"
          onClick={signInWithGoogle}
          aria-label="Sign in with Google"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
