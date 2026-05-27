import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("login");

    if (isLogin) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, []);

  return null;
}
