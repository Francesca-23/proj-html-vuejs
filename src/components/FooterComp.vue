<script>

import { store } from '../store'

export default {
    name: "FooterComp",

    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div>
        <hr>

        <div class="container w-75 m-auto py-5">

            <div class="row">

                <div class="col-4">
                    <img src="/img/35.png" alt="logo" class="mb-2">
                    <p class="text-grey">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione quos nulla,
                        praesentium enim consequatur.
                    </p>
                    <p class="text-grey pt-3">
                        Copyright @ 2018
                        <span class="blue-text">Sofbox</span>
                    </p>
                </div>


                <div class="col-8 d-flex">
                    <ul v-for="(element, index) in store.footerLists" :key="index" class="px-5 m-auto">
                        <h6>{{ element.title }}</h6>
                        <li v-for="(element, index) in element.list" :key="index">
                            <a class="text-grey" href="#">{{ element }} </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
hr {
    color: #8E989F;
}

a {
    line-height: 2rem;
}

.blue-text {
    color: #377DFF;
}
</style>