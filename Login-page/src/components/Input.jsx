const Input = ({ type, placeholder }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  };
  
  export default Input;
  