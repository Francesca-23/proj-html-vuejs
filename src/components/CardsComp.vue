<script>

import { store } from '../store'

export default {
    name: "CardsComp",

    data() {
        return {
            store
        }
    },

    methods: {
        moreFeatures() {
            document.querySelector('.otherCards').classList.remove('d-none')
            document.querySelector('.otherCards').classList.add('d-flex')
        }
    }

}

</script>

<template>
    <div>

        <div class="d-flex position-relative">

            <div class="circle">
                <img src="/img/14.png" alt="" class="circle-img">
            </div>

            <div class="m-auto w-75 py-5 ps-5">

                <div class="row align-items-center my-4">
                    <div class="col-8">
                        <h2>Popular features that your business needs</h2>
                        <p class="text-grey mt-3">
                            Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser cras nice
                            one
                            boot fanny!
                        </p>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn ms-5" @click="moreFeatures()">Explore more features</button>
                    </div>
                </div>

                <div class="d-flex flex-wrap">
                    <div v-for="(element, index) in store.featuresCards" :key="index" class="single-card shadow">
                        <p class="m-3">{{ element.title }} </p>
                        <div class="px-3">
                            <img :src="element.img" alt="icon">
                        </div>
                    </div>
                </div>

                <div class="otherCards d-none">
                    <div v-for="(element, index) in store.moreFeaturesCards" :key="index" class="single-card shadow">
                        <p class="m-3">{{ element.title }} </p>
                        <div class="px-3">
                            <img :src="element.img" alt="icon">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.circle {
    position: absolute;
    left: -18rem;
}

.circle-img {
    height: 30rem;

}

.single-card {
    width: calc(100% / 4 - 3rem);
    margin: 0 1rem;
    margin-bottom: 2rem;
    height: 9rem;
}

.single-card:hover {
    background-color: #6CDAC1;
    color: white;
}

.single-card img {
    height: 7rem;
}
</style>