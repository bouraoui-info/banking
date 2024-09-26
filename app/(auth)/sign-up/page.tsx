import AuthForm from "@/components/AuthForm";

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
