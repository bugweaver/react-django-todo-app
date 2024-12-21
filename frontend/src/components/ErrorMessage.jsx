const ErrorMessage = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className="bg-rose-100 border border-rose-400 text-rose-700 px-4 py-3 rounded-xl relative mb-4" role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default ErrorMessage;