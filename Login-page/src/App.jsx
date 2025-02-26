import React, { useState } from "react";
import "./index.css"; // Para garantir que o Tailwind CSS esteja funcionando

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      console.log("Email:", email);
      console.log("Senha:", password);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bem-vindo de volta!
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Campo de E-mail */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Exibição de erro */}
          {error && (
            <div className="mb-4 text-center text-red-500">
              <p>{error}</p>
            </div>
          )}

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Entrar
          </button>

          {/* Link para recuperação de senha */}
          <p className="text-center text-sm text-gray-600 mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Esqueceu sua senha?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
