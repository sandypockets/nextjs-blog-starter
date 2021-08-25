import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactPage() {

  return (
    <div className="relative bg-white dark:bg-black">
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  )
}
