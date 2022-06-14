import Link from "next/link";
import { GitHub, Twitter } from "react-feather";

export default function Footer() {
  const FooterSocial = [
    {
      id: 1,
      icon: <GitHub className="h-5 w-5" />,
      path: "https://github.com/radespratama/seehoob",
    },
    {
      id: 2,
      icon: <Twitter className="h-5 w-5" />,
      path: "https://twitter.com/radespratamaa",
    },
  ];
  return (
    <footer className="container mx-auto border-t border-gray-700 py-3 px-2">
      <section className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between">
        <div className="flex items-center">
          <h5 className="tracking-tight">
            &copy; Rades Pratama {new Date().getFullYear()}
          </h5>
        </div>
        <div className="flex items-center space-x-2">
          {FooterSocial.map((f) => (
            <Link
              key={f.id}
              href={f.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a className="bg-gray-800 p-2 rounded-md hover:rotate-12 transition-all duration-300">
                {f.icon}
              </a>
            </Link>
          ))}
          <h5 className="tracking-tight">
            Build using{" "}
            <Link href="https://nextjs.org/" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="hover:underline"
              >
                Next JS
              </a>
            </Link>
          </h5>
        </div>
      </section>
    </footer>
  );
}
