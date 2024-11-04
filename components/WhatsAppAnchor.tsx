import WhatsApp from "./icons/WhatsApp";

export default function WhatsAppAnchor() {
  return (
    <a
      href="https://wa.me/573204000000"
      className="group fixed size-11 bottom-5 right-5 md:bottom-10 md:right-10 bg-[#25d366] text-white rounded-full text-center text-3xl z-50 transition-all duration-100 ease-[ease] border-4 border-white hover:scale-105"
      target="_blank"
      title="Escribenos al WhatsApp"
    >
      <WhatsApp />
    </a>
  );
}
