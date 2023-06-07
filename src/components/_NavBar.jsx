import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar() {


    return (
        <>

            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <Link to={`/`} className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase">Hotel Bossanova</h1>
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2"></i>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2"></i>
                                    <p className="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <span className="me-3" ><i className="fab fa-facebook-f"></i></span>
                                    <span className="me-3" ><i className="fab fa-twitter"></i></span>
                                    <span className="me-3" ><i className="fab fa-linkedin-in"></i></span>
                                    <span className="me-3" ><i className="fab fa-instagram"></i></span>
                                    <span className=""><i className="fab fa-youtube"></i></span>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to={"/"} className="nav-item nav-link active">Inicio</Link>
                                    <Link to={"/sobre-nosotros"} className="nav-item nav-link">Sobre Nosotros</Link>
                                    <Link to={"/servicios"} className="nav-item nav-link">Servicios</Link>
                                    <Link to={"/habitaciones" }className="nav-item nav-link">Habitaciones</Link>                                    
                                    <Link to={"/contacto"} className="nav-item nav-link">Contacto</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}