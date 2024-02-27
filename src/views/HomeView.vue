<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import SkipSection from "@/components/SkipSection.vue";
// import TodaySection from "@/components/TodaySection.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

<template>
    <SkipSection />
    <div id="wrapper">
        <HeaderSection />
        <main id="main" role="main">
            <router-view/>
        </main>
        <FooterSection/>
    </div>
</template>
