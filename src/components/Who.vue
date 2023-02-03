<script setup></script>

<template>
    <div class="w-full mx-auto py-14 space-y-2 flex flex-col items-center">
        <h1 class="text-2xl sm:text-3xl">
            {{ $t("who.p1") }} <span class="font-semibold">Aziz Chanou</span>
        </h1>
        <h2 class="font-bold text-4xl sm:text-5xl text-center text-blue-600">
            {{ $t("who.p2") }}
        </h2>
        <p class="px-3 max-w-lg font-semibold text-center text-lg">
            {{ $t("who.p3") }}
        </p>
    </div>
</template>

<style>
* {
    border: 1px solid white;
}
</style>