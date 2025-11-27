import RegisterForm from "../components/auth/RegisterForm";
import register from "../assets/images/auth/bg-01.webp";

const Register = () => {
  return (
    <div
      className="bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${register})`, height: "100vh" }}
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
