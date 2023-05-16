<script>

export default {
    name: "HeaderComp"
}

</script>

<template>
    <div>

        <nav class="d-flex justify-content-between align-items-center w-75 m-auto">
            <img src="/img/logo-2.png" alt="logo" height="35px">

            <div class="d-flex">
                <ul class="d-flex align-items-center pt-2">
                    <li>
                        <a class="special" href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Feature</a>
                    </li>
                    <li>
                        <a href="#">Testimonials</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                </ul>

                <div class="d-flex align-items-center">
                    <div class="d-flex">
                        <div>
                            <i class="fa-solid fa-magnifying-glass fa-sm mx-3"></i>
                        </div>
                        <div class="position-relative">
                            <i class="fa-solid fa-cart-shopping fa-sm"></i>
                            <div class="cart-number position-absolute">
                                <span class="align-self-center">0</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn ms-5">Get started</button>
                </div>
            </div>
        </nav>

    </div>
</template>

<style scoped>
nav {
    height: 4rem;
    padding: 0 5rem;
}


ul li a {
    color: black;
    margin: 0 1rem;
    padding: 0.5rem 0;
    font: 0.9rem;

}

.special {
    color: #377DFF;
    border-bottom: 2px solid #377DFF;
}

.cart-number {
    height: 1rem;
    width: 1rem;
    display: flex;
    justify-content: center;
    background-color: #377DFF;
    border-radius: 50%;
    top: -5px;
    right: -8px;
    font-size: 0.7rem;
    color: white;
}

.btn {
    background-color: #377DFF;
    color: white;
    font-size: 0.9rem;
}
</style>
