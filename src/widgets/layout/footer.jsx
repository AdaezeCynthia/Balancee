import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-sans font-normal text-inherit">
          &copy; {year}
         {" "} By{" "}
          <a
            href={" "}
            target=" "
            className="transition-colors hover:text-blue-500 font-bold font-sans"
          >
            {brandName}
          </a>{" "}
          for your convience.
        </Typography>
        <ul className="flex items-center gap-4 font-sans">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal  font-sans text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: " Balanceè",
  brandLink: "",
  routes: [
    { name: "Balanceè", path: " " },
    { name: "About Us", path: " " },
    { name: "Blog", path: " " },
    { name: "License", path: " " },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
