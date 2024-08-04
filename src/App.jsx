function App() {

  return (
    <>
    <header class="py-5 header">
        <div class="container-xl">
            <div class="row justify-content-center justify-content-md-between">
                <div class="col-8 col-md-3">
                    <a href="index.html">
                        <img class="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div class="cesta">
                        <img class="img-fluid" src="./public/img/cesta.png" alt="imagen cesta" />

                        <div id="cesta" class="bg-white p-3">
                            <p class="text-center">La cesta está vacía</p>
                            <table class="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Doble D-Lujo</td>
                                        <td class="fw-bold">
                                                $5
                                        </td>
                                        <td class="flex align-items-start gap-4">
                                            <button type="button" class="btn btn-dark">
                                                -
                                            </button>
                                                1
                                            <button type="button" class="btn btn-dark">
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-danger">
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="text-end">Total pagar: <span class="fw-bold">$10</span></p>
                            <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Cesta</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <main class="container-xl mt-5">
        <h2 class="text-center">Nuestros Menús</h2>

        <div class="row mt-5">
            <div class="col-md-6 col-lg-4 my-4 align-items-center">
                <img class="img-fluid w-100" src="./public/img/Menu-Buster.webp" alt="imagen menu"/>
                <h3 class="text-black fs-4 fw-bold text-uppercase">Reventadora</h3>
                <p class="fw-black text-primary fs-3">$2</p>
                <button type="button" class="btn btn-dark w-100">Pedir</button>
            </div>

            <div class="col-md-6 col-lg-4 my-4 align-items-center">
                <img class="img-fluid w-100" src="./public/img/Menu-DoubleD-Luxe.webp" alt="imagen menu"/>
                <h3 class="text-black fs-4 fw-bold text-uppercase">Doble D-Lujo</h3>
                <p class="fw-black text-primary fs-3">$5</p>
                <button type="button" class="btn btn-dark w-100">Pedir</button>
            </div>

            <div class="col-md-6 col-lg-4 my-4 align-items-center">
                <img class="img-fluid w-100" src="./public/img/Menu-FullRack.webp" alt="imagen menu"/>
                <h3 class="text-black fs-4 fw-bold text-uppercase">Grandiosa</h3>
                <p class="fw-black text-primary fs-3">$10</p>
                <button type="button" class="btn btn-dark w-100">Pedir</button>
            </div>

            <div class="col-md-6 col-lg-4 my-4 align-items-center">
                <img class="img-fluid w-100" src="./public/img/Menu-SaladMeal.webp" alt="imagen menu"/>
                <h3 class="text-black fs-4 fw-bold text-uppercase">Menú de ensalada</h3>
                <p class="fw-black text-primary fs-3">$10</p>
                <button type="button" class="btn btn-dark w-100">Pedir</button>
            </div>
        </div>
    </main>

    <footer class="bg-dark mt-5 py-5">
        <div class="container-xl">
            <p class="text-white text-center fs-4 mt-4 m-md-0">The Well Stacked Pizza Co. - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
