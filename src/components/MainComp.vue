<script>

export default {
    name: "MainComp"
}

</script>

<template>
    <div>

        <!-- section 1 - The biggest platform -->

        <div class="container w-75 m-auto rounded-3">
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

    </div>
</template>

<style scoped>
/* section 1 - The biggest platform */
.container {
    background-color: #F2F7FF;
}

h1 {
    line-height: 3.5rem;
}

.text-grey {
    color: #8E989F;
}

.btn {
    background-color: #377DFF;
    color: white;
    font-size: 0.9rem;
}

.box-cartoon {
    position: relative;
    top: 2rem;

}

.box-cartoon .cartoon-img {
    height: 21rem;
}
</style>

