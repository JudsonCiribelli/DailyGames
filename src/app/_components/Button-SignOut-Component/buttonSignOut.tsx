"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ButtonSignOut = () => {
  const router = useRouter();
  const handleSignOutUser = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: (ctx) => {
          console.log(ctx);
          router.replace("/profile");
        },
        onError: (ctx) => {
          console.log(ctx.error.message);
        },
      },
    });
  };
  return <Button onClick={handleSignOutUser}>Sair da conta</Button>;
};

export default ButtonSignOut;
