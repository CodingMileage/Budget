import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/budget");
  };

  return (
    <div className="flex flex-col m-4">
      <p>Sign In With Google</p>
      <button
        className="p-2 w-20 bg-slate-400 rounded"
        onClick={signInWithGoogle}
      >
        Sign In
      </button>
    </div>
  );
};
