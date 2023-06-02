import Link from "next/link"
export function NavBar() {

    return < div className="navbar bg-base-100" >
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={'/chart/'}>Toutes les consoles</Link></li>
                    <li><Link href={'/chart/7'}>Génération 7</Link></li>
                    <li><Link href={'/chart/8'}>Génération 8</Link></li>
                    <li><Link href={'/chart/9'}>Génération 9</Link></li>
                </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link href={'/'} className="btn btn-ghost normal-case text-xl">Consoles Exlus</Link>
        </div>
    </div >


}