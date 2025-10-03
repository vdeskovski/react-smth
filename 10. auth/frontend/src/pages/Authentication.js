import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  if (mode !== "login" && mode !== "signup") {
    console.log(1);
    throw new Response(JSON.stringify({ message: "Unsupported mode" }), {
      status: 422,
    });
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    console.log(2);
    return response;
  }

  if (!response.ok) {
    console.log(3);
    throw new Response(JSON.stringify({ message: "Could not auth" }), {
      status: 500,
    });
  }

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  const exp = new Date();
  exp.setHours(exp.getHours() + 1);
  localStorage.setItem("expiration", exp.toISOString());
  return redirect("/");
}
