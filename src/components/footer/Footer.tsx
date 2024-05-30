import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {

    let data = new Date().getFullYear();

    return (
        <>
            <div className="bg-violet-900 flex justify-center">
                <div className="flex flex-col text-center text-white">
                    <p className="font-bold">Blog Pessoal Milena | Copyright: {data}</p>
                    <p>Acesse minhas redes sociais</p>
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/msemanaka/" target="_blank">
                            <LinkedinLogo size={48} weight="bold" />
                        </a>
                        <a href="https://github.com/msemanaka">
                            <GithubLogo size={48} weight="bold" />
                        </a>
                    </div>
                    



                </div>
            </div>
        </>
    )
}

export default Footer;