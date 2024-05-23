function Home() {
    return (
        <>
            <div className="
                w-screen
                flex
                justify-center
                bg-indigo-900
            ">
                <div className="
                    container
                    grid
                    grid-cols-2
                    text-white
                ">
                    <div className="
                        flex-col
                        flex
                        items-center
                        gap-4
                        justify-center
                        py-4
                    ">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>

                        <div className="
                            flex
                            justify-around
                            gap-4
                        ">
                            <div className="
                                rounded
                                text-white
                                border-white
                                border-solid
                                border-2
                                py-2
                                px-4
                            ">
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="
                        flex-col
                        justify-center
                    ">
                        <img className="w-2/3"
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da página Home. Há um garoto sentado no chão com um notebook no colo."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;