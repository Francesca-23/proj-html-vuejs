<script>

import { store } from '../store'
import CardsComp from '../components/CardsComp.vue'
import Testimonials from '../components/Testimonials.vue'
import LatestPost from '../components/LatestPost.vue'
import ContactsComp from '../components/ContactsComp.vue'

export default {
    name: "MainComp",
    components: {
        CardsComp,
        Testimonials,
        LatestPost,
        ContactsComp
    },

    data() {
        return {
            store,
            activeCard: 0
        }
    },

    methods: {
        scrollDown() {
            let container = document.querySelector('.tipCards')

            if (this.activeCard == this.store.tipsCards.length - 1) {

                this.activeCard = this.store.tipsCards.length - 1
            } else {
                container.scrollTop += 150
                this.activeCard++
            }

        },

        scrollTop() {
            let container = document.querySelector('.tipCards')

            if (this.activeCard == 0) {

                this.activeCard = 0
            } else {
                container.scrollTop -= 150
                this.activeCard--
            }
        }
    }

}

</script>

<template>
    <div>

        <!-- section 1 - The biggest platform -->

        <div class="container container-color w-75 m-auto rounded-3">
            <div class="row  px-4 py-3">

                <div class="col-6">
                    <h1 class="my-4">The biggest platform for your growth.</h1>
                    <p class="text-grey my-3">There are many variations of passages of Lorem ipsum available, but the
                        majority have
                        suffered
                        alteration
                        in some form</p>
                    <button type="button" class="btn my-4">Read more</button>
                </div>

                <div class="col-5">
                    <div class="box-cartoon">
                        <img src="/img/27-1.png" alt="cartoon" class="cartoon-img">
                    </div>
                </div>

            </div>
        </div>

        <!-- section 2 - Online Marketing lists-->

        <div class="onlineMarketing d-flex w-75 m-auto p-5">
            <div v-for="num in 3" :key="num">

                <div class="d-flex py-5">

                    <div>
                        <img src="/img/24.png" alt="computer-icon" class="computer-icon">
                    </div>

                    <div v-for="(element, index) in store.marketingArray" :key="index" class="mx-3">
                        <h2>{{ element.title }} </h2>
                        <p class="text-grey">{{ element.text }}</p>
                        <ul v-for="(element, index) in element.list" :key="index">
                            <li class="p-0">
                                <i class="fa-solid fa-check fa-sm pe-2"></i>
                                {{ element }}
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>

        <!-- section 3 - Get Tips Tricks-->

        <div class="getTips container w-75 px-5">
            <div class="row">

                <div class="col-6">
                    <h2>
                        Get tips tricks on how to skyrocket your sales.
                    </h2>
                    <p class="mt-3 mb-4">
                        Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice one
                        boot fanny!
                    </p>

                    <div class="text-center arrow-button  mb-1" @click="scrollTop()">
                        <i class="fa-solid fa-chevron-up fa-lg"></i>
                    </div>

                    <div class="tipCards">
                        <div v-for="(element, index) in store.tipsCards" :key="activeCard"
                            class="tipCard d-flex align-items-center m-3 py-3 px-2"
                            :class="activeCard == index ? 'shadow' : ''">
                            <div>
                                <img :src="element.img" alt="tips">
                            </div>
                            <div class="ms-4">
                                <h3 class="blue-text">{{ element.title }}</h3>
                                <p>
                                    {{ element.text }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="text-center arrow-button mt-1" @click="scrollDown()">
                        <i class="fa-solid fa-chevron-down fa-lg"></i>
                    </div>

                </div>

                <div class="col-6 align-self-end pb-5">
                    <img src="/img/509.jpeg" alt="cartoon" class="img-cartoon">
                </div>

            </div>
        </div>

        <!-- section 4 - Popular features-->

        <CardsComp />

        <!-- section 5 - Testimonials-->

        <Testimonials />

        <!-- section 6 - Latest Posts-->

        <LatestPost />

        <!-- section 7 - Contact Team-->

        <ContactsComp />

    </div>
</template>

<style scoped>
/* section 1 - The biggest platform */
.container-color {
    background-color: #F2F7FF;
}

h1 {
    line-height: 3.5rem;
}

.box-cartoon {
    position: relative;
    top: 2rem;

}

.box-cartoon .cartoon-img {
    height: 21rem;
}

/* section 2 - Online Marketing listss */

.onlineMarketing {
    font-size: 0.9rem;
}

.onlineMarketing .computer-icon {
    height: 3.5rem;
}

.onlineMarketing h2 {
    font-size: 1.3rem;
    font-weight: 500;
}

.onlineMarketing ul {
    margin-left: 0;
    padding-left: 0;
    font-weight: 500;
}

.onlineMarketing ul li i {
    color: #377DFF;
}

/* section 3 - Get Tips Tricks */

.tipCards {
    overflow-y: hidden;
    height: 20rem;
}

.img-cartoon {
    height: 21rem;
}

.arrow-button {
    cursor: pointer;
    color: #8E989F;
}

.getTips p {
    color: #8E989F;
    font-size: 0.9rem;
}

.getTips .blue-text {
    color: #377DFF;
}

.getTips h3 {
    font-size: 1.2rem;
}
</style>

