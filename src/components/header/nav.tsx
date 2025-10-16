import Link from "next/link";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Sobre", path: "" },
  { name: "Portifolio", path: "" },
  { name: "Serviços", path: "" },
  { name: "Contatos", path: "" },
];

export default function Navbar(){
    return(
        <nav className="flex items-center justify-around h-full w-[99%]  ">
            <div className="logo">
                <h1>Payarte</h1>
            </div>

            <div className="navmobile p-2 flex md:hidden absolute flex-col top-19 w-[98%]  rounded-xl bg-gray-700/30">
                {links.map((link,index) => (
                    <Link
                    key={index}
                    href={link.path}
                    className=""
                    >{link.name}</Link>
                ))}
            </div>

            <div className="navdesktop hidden md:flex z-30  justify-center gap-2 lg:gap-4 items-center">
                {links.map((link,index) => (
                    <Link
                    key={index}
                    href={link.path}>{link.name}</Link>
                ))}
            </div>
            <div className="btncollapse flex md:hidden"></div>
        </nav>
    );
}