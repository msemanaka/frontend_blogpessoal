import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex w-full justify-center py-4 bg-violet-900 text-white">

                <div className="container flex justify-between text-lg">
                   <Link to="/" className="text-2xl font- bold"> Blog Pessoal</Link>

                    <div className="flex gap-7">
                        <div className="hover:text-violet-200">Postagens</div>
                        <div className="hover:text-violet-200">Temas</div>
                        <div className="hover:text-violet-200">Cadastrar tema</div>
                        <div className="hover:text-violet-200">Perfil</div>
                        <Link to="/login" className="rounded text-white bg-red-500 border-none py px-4 hover:bg-red-700">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;