import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactPage() {

  return (
    <div className="relative bg-white dark:bg-black">
      {/*<div className="absolute inset-0">*/}
      {/*  <div className="absolute inset-y-0 left-0 w-1/2 " />*/}
      {/*</div>*/}
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  )
}
