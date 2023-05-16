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

                <div class="col-6">
                    <img src="/img/StaticMapService.GetMapIma.png" alt="maps-image" class="map">
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