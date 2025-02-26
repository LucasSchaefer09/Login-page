import Input from "./Input";

const LoginForm = () => {
    return (
        <div className="flex justify-center items-center">
            <form className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <div className="mb-4">
                    <Input type="email" placeholder="E-mail" />
                </div>
                <div className="mb-6">
                    <Input type="password" placeholder="Senha" />
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Entrar
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    <a href="#" className="text-blue-500 hover:underline">Esqueceu sua senha?</a>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
