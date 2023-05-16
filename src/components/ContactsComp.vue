<script>

export default {
    name: "ContactsComp"
}

</script>

<template>
    <div>
        <div class="container w-75 pb-5">

            <div class="text-center mb-5">
                <h2 class="py-2">Contact with our team</h2>
                <p class="text-grey">If you are planning on developing a product landing.</p>
            </div>

            <div class="row">

                <div id="map-container" class="col-6 position-relative">

                    <img src="/img/StaticMapService.GetMapIma.png" alt="maps-image" class="map">

                    <div class="d-flex destination">
                        <div>
                            <p><strong>Storey Ave</strong></p>
                            <p>San Francisco, California 94129</p>
                            <div class="pt-2">
                                <a href="#">Visualizza mappa più grande</a>
                            </div>
                        </div>
                        <div class="ms-3">
                            <div class="arrow-container">
                                <img src="/img/indicazione-stradale.png" alt="" height="30px">
                            </div>
                            <a href="#">Indicazioni...</a>
                        </div>
                    </div>

                    <div class="zoom">
                        <div class="pb-2"><i class="fa-solid fa-plus fa-lg"></i></div>
                        <hr class="m-0">
                        <div class="pt-2"><i class="fa-solid fa-minus fa-lg"></i></div>
                    </div>

                    <div class="pointer">
                        <img src="/img/pointer-map.png" alt="pointer" height="40px">
                    </div>

                    <div class="dati-mappa d-flex">
                        <p>Dati mappa @2020</p>
                        <p>Termini e condizioni d'uso</p>
                        <p>Segnala un errore nella mappa</p>
                    </div>

                </div>

                <div class="col-6">
                    <div>
                        <img src="/img/35.png" alt="logo">
                    </div>

                    <p class="mb-3 mt-5">9840 Shore St. Fond Du Lac, WI 54935</p>
                    <p class="text-grey">0 1223 456 789</p>
                    <p class="text-grey">mail@sofbox.com</p>

                    <div class="d-flex">
                        <div class="icon-box">
                            <i class="fa-brands fa-facebook-f fa-sm"></i>
                        </div>
                        <div class="icon-box">
                            <i class="fa-brands fa-twitter fa-sm"></i>
                        </div>
                        <div class="icon-box">
                            <i class="fa-brands fa-github fa-sm"></i>
                        </div>
                        <div class="icon-box">
                            <i class="fa-brands fa-instagram fa-sm"></i>
                        </div>
                    </div>

                    <div>
                        <h5 class="mb-4">Get in touch</h5>

                        <div class="mb-3 d-flex">
                            <input type="text" class="form-control me-2" placeholder="Your Name">
                            <input type="email" class="form-control" placeholder="Your Email">
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control me-2" placeholder="Your Subject">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="7" placeholder="Your Message"></textarea>
                        </div>
                        <button type="button" class="btn">Send Message</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 0;
}

.arrow-container {
    width: fit-content;
    margin: auto;
}

#map-container .destination {
    background-color: white;
    padding: 0.5rem;
    font-size: 0.7rem;
    margin: 0.5rem;
    position: absolute;
    top: 0;
    left: 1rem;
}

#map-container .pointer {
    position: absolute;
    top: 10rem;
    right: 15rem;
}

#map-container .zoom {
    background-color: white;
    color: #495057;
    padding: 0.3rem 0.6rem;
    position: absolute;
    top: 18rem;
    right: 1rem;

}

#map-container .dati-mappa {
    position: absolute;
    top: 23.5rem;
    right: 0;
}

#map-container .dati-mappa p {
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 0.6rem;
    margin-right: 0.5rem;
    padding: 0 0.2rem;
}

.map {
    width: 100%;
}

.icon-box {
    margin: 2.5rem 0.3rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0000000D;
    color: #377DFF;
}
</style>