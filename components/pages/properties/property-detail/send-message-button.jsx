import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SendMessageButton = () => {
  const { pending } = useFormStatus();
  
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center gap-x-2"
      type="submit"
      disabled={pending}
    >
      <FaPaperPlane />
      <span>
        {pending ? "Sending..." : "Send Message"}
      </span>        
    </button>
  );
};

export default SendMessageButton;