<template>
    <div class="spin"></div>
</template>

<style>
.spin{
    display: block;
    width: 10rem;
    height: 10rem;
    margin: 10rem auto;
    border:  3px solid transparent;
    border-radius: 50%;
    border-top-color: teal;
    animation: spin 1s infinite;
}

@keyframes spin {
    to {transform: rotateZ(360deg);}
}
</style>