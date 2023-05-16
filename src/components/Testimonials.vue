<script>

export default {
    name: "Testimonials",

    created() {
        this.changeCards()
    },

    methods: {
        changeCards() {
            setInterval(() => {

                let row1 = document.querySelector('#row1')
                let row2 = document.querySelector('#row2')

                row1.style.opacity = 0
                row2.style.opacity = 1

                setTimeout(() => {

                    row2.style.opacity = 0
                    row1.style.opacity = 1

                }, 5000)

            }, 10000)
        }
    }
}

</script>

<template>
    <div>

        <div id="waves" class="text-center">
            <div class="waves-text">
                <h2>Our Testimonials</h2>
                <p class="text-grey w-25 m-auto py-2">
                    If you are planning on developing a product landing app or website, take a look at this beautiful
                    crafted
                </p>
            </div>
        </div>

        <!-- Cards Testimonials -->
        <div class="bg-container">
            <div class="container w-75 m-auto container-height pt-4">

                <div id="row1" class="row py-4">

                    <!-- card left -->
                    <div class="position-relative col-6">
                        <div class="card1 shadow p-3">
                            <div class="m-auto avatar-container pt-2 pb-4">
                                <img src="/img/26.jpeg" alt="avatar" height="50px" class="rounded-5 shadow">
                            </div>
                            <div class="text-center">
                                <span><strong>Julia Aann </strong></span>
                                <span class="text-grey">- COO Sofbox</span>
                            </div>
                            <p class="text-grey pt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora sed praesentium
                                reprehenderit suscipit quae explicabo accusamus provident corrupti.
                            </p>
                        </div>

                        <div class="card2 shadow"></div>
                        <div class="card3 shadow"></div>
                    </div>

                    <!-- card right -->
                    <div class="position-relative col-6">
                        <div class="card1 shadow  p-3">
                            <div class="m-auto avatar-container pt-2 pb-4">
                                <img src="/img/27.jpeg" alt="avatar" height="50px" class="rounded-5 shadow">
                            </div>
                            <div class="text-center">
                                <span><strong>Mac Znder </strong></span>
                                <span class="text-grey">- Manager Sofbox</span>
                            </div>
                            <p class="text-grey pt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit exercitationem repudiandae
                                aliquid possimus aliquam at architecto dolores ducimus optio minima.
                            </p>
                        </div>

                        <div class="card2 shadow"></div>
                        <div class="card3 shadow"></div>
                    </div>

                </div>

                <!-- Cards nascoste -->

                <div id="row2" class="row">

                    <!-- card left -->
                    <div class="position-relative col-6">
                        <div class="card1 shadow p-3">
                            <div class="m-auto avatar-container pt-2 pb-4">
                                <img src="/img/25.jpeg" alt="avatar" height="50px" class="rounded-5 shadow">
                            </div>
                            <div class="text-center">
                                <span><strong>Mark Walker </strong></span>
                                <span class="text-grey">- Engineer Sofbox</span>
                            </div>
                            <p class="text-grey pt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit dolor, consectetur
                                facilis, natus sunt placeat enim eveniet hic.
                            </p>
                        </div>

                        <div class="card2 shadow"></div>
                        <div class="card3 shadow"></div>
                    </div>

                    <!-- card right -->
                    <div class="position-relative col-6">
                        <div class="card1 shadow p-3">
                            <div class="m-auto avatar-container pt-2 pb-4">
                                <img src="/img/26.jpeg" alt="avatar" height="50px" class="rounded-5 shadow">
                            </div>
                            <div class="text-center">
                                <span><strong>Mia Torres </strong></span>
                                <span class="text-grey">- Developer Sofbox</span>
                            </div>
                            <p class="text-grey pt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum nisi tempore beatae
                                rem asperiores laboriosam temporibus aliquid facere non!
                            </p>
                        </div>

                        <div class="card2 shadow"></div>
                        <div class="card3 shadow"></div>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<style scoped>
#waves {
    background-image: url('/img/15.png');
    background-color: #F2F7FF;
    background-position: center;
    padding-bottom: 6rem;
}

.waves-text {
    position: relative;
    top: 6rem;
}

.bg-container {
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 45%, rgba(242, 247, 255, 1) 86%);
}

.container-height {
    height: 25rem;
}

.card1 {
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    width: 80%;
    margin: auto;
}

.card2 {
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 16.2rem;
    z-index: 2;
    width: 70%;
    margin: auto;
}

.card3 {
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 16.8rem;
    z-index: 1;
    width: 60%;
    margin: auto;
}

#row1 {
    opacity: 1;
    transition: opacity 2s;
}

#row2 {
    opacity: 0;
    transition: opacity 2s;
}

.avatar-container {
    width: fit-content;
}
</style>