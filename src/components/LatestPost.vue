<script>

import { store } from '../store'

export default {
    name: "LatestPost",

    data() {
        return {
            store
        }
    },

    methods: {
        scrollPosts(event) {
            let container = document.querySelector('.container-cards')

            if (event.deltaY > 0) {
                container.scrollLeft += 100
            } else {
                container.scrollLeft -= 100
            }
        }
    }
}

</script>

<template>
    <div>
        <div class="container w-75 m-auto py-4">

            <div class="text-center mb-5">
                <h2 class="py-2">Latest Posts</h2>
                <p class="text-grey">If you are planning on developing a product landing.</p>
            </div>

            <div class="d-flex w-100 container-cards pb-5" @wheel.prevent="scrollPosts($event)">
                <div v-for="(element, index) in store.postsArray" :key="index" class="single-card p-2 mx-2">
                    <div class="position-relative">
                        <img :src="element.img" class="img-card" alt="post">
                        <p class="data-post text-grey">{{ element.date }}</p>
                    </div>
                    <div>
                        <h6 class="pt-4"> {{ element.title }}</h6>
                        <p class="text-grey">{{ element.text }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.single-card {
    border: 1px solid #0000000D;
    border-radius: 5px;
}

.img-card {
    height: 11rem;
}

.container-cards {
    overflow-x: hidden;
}

.data-post {
    background-color: white;
    padding: 0.2rem 0.3rem;
    margin: 0.5rem;
    border-radius: 3px;
    position: absolute;
    top: 0;
}
</style>