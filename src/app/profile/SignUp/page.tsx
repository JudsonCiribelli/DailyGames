import Link from "next/link";
import SignUpForm from "./_components/SignUp-Form/signUpForm";

const SignUpComponent = () => {
  return (
    <main className="w-full">
      <div className="flex mt-40 mb-10 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Crie sua conta</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>

          <SignUpForm />

          <div className="text-center text-sm">
            <p>
              Já possui conta?{" "}
              <Link
                href="/profile/"
                className="font-medium text-primary hover:underline"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpComponent;
