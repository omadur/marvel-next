import { Spacer } from "@nextui-org/react"
import { CSSProperties } from "@nextui-org/react/types/theme"
import Image from "next/image"
import Link from "next/link"

const navcontainer: CSSProperties = {
    alignItems: "center",
    backgroundColor: "#2A3B47",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px",
    marginBottom:"20px", 
    padding: "8px",
}

const options = ["Characters", "Movies", "Comics", "Games"];

const Navbar = () => {
    return (
        <div className="nav-container" style={navcontainer}>
            <Image src="/Logo.png" width="142" height={42} alt="Logo de la pagina" style={{ marginLeft: "20px" }} />
            <nav style={{ marginRight: "20px" }}>
                <ul style={{ display: "flex" }}>
                    {options.map((option) => (
                        <>
                            <li><Link href={'#'} style={{ color: "white" }}>{option}</Link></li>
                            <Spacer x={2} />
                        </>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
