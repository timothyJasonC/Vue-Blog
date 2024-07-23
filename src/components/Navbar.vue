<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <RouterLink :to="{name: 'Home'}" class="navbar-brand">Start Bootstrap</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item"><RouterLink :to="{name: 'Home'}" class="nav-link px-lg-3 py-3 py-lg-4" >Home</RouterLink></li>
                    <li class="nav-item"><RouterLink :to="{name: 'CreatePost'}" class="nav-link px-lg-3 py-3 py-lg-4">Create</RouterLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>