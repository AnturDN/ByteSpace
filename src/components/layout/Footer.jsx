
import Container from "../common/Container";
import Logo from "./Logo";

const columns = [
  { title: "", links: ["Featured Courses","Featured Categories", "Business", "IT", "Design"] },
  { title: "", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "", links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Logo variant="dark" />
            <p className="text-b-s text-neutral-500 mt-6 max-w-md">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-neutral-200 px-5 py-3 text-b-s outline-none focus:border-neutral-400"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-secondary-400 px-5 py-3 text-b-s font-medium text-neutral-950 hover:bg-secondary-300 transition-colors"
              >
                Search
                
              </button>
            </form>

            <p className="text-b-xs text-neutral-400 mt-4 max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {columns.map((col, i) => (
              <div key={i}>
                {col.title && (
                  <h4 className="text-b-s text-neutral-500 mb-4">{col.title}</h4>
                )}
                <ul className={col.title ? "space-y-3" : "space-y-3 mt-7"}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-b-s text-neutral-500 hover:text-neutral-900 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-neutral-100 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-b-xs text-neutral-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;