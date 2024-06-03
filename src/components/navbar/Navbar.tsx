import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ReactNode, useContext } from "react"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Navbar() {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O usuário foi desconectado com sucesso!', "info")
        navigate('/')
    }

    let component: ReactNode;

    if (usuario.token !== "") {

        component = (
            <div className='w-full flex justify-center py-4
                            bg-violet-900 text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className="hover:text-violet-200">Postagens</Link>
                        <Link to='/temas' className="hover:text-violet-200">Temas</Link>
                        <Link to='/cadastrartema' className="hover:text-violet-200">Cadastrar tema</Link>
                        <Link to='/perfil' className="hover:text-violet-200">Perfil</Link>
                        <Link to="" onClick={logout} className="rounded text-white bg-red-500 border-none py px-4 hover:bg-red-700">Sair</Link>
                        
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar