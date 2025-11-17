import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const WhatsAppButton = () => {
  const phoneNumber = "917486933410";
  const [openMenu, setOpenMenu] = useState(false);

  const sendWhatsAppMessage = (msg) => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Buttons menu */}
      {openMenu && (
        <div className="mb-3 flex flex-col gap-2">
          <button
            onClick={() =>
              sendWhatsAppMessage(
                "Hello RadheAir! I want to BUY a new AC/Refrigerator. Please share the best options and price list."
              )
            }
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Buy
          </button>

          <button
            onClick={() =>
              sendWhatsAppMessage(
                "Hello RadheAir! I need SERVICE for my AC/Refrigerator. Please share pricing and availability."
              )
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Service
          </button>
        </div>
      )}

      {/* Floating WhatsApp Icon */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-3xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
