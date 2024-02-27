<script setup="setup">
    import {headerNav} from "@/constants/index";
</script>

<template>
    <header id="header" role="banner">
        <div class="header__inner">
            <h1 class="header__logo">
                <a href="#"><img src = "@/assets/images/logo.svg" />
                </a>
            </h1>
            <div class="menu_wrap">
                <div class="profile_area">
                    <a href="#none" title="로그인" class="link_login b4icons">
                        <span class="text">로그인</span>
                    </a>
                </div>
                <div class="membership_area">
                    <p class="membership_desc">로그인하고 할인 멤버십 확인하기</p>
                    <a href="#none" title="멤버십구독" class="link_subscribe b4icons"><span class="text">멤버십구독</span></a>
                </div>
                <div class="search_area">
                    <p class="input_area">
                        <input type="search" role="combobox" id="search_keyword" title="검색창" placeholder="VIBE 검색" autocomplete="off" class="input_search">
                    </p>
                    <span class="icon_search"></span>
                </div>
                <div class="menu_area">
                    <nav id="gnb" class="header__nav" role="navigation" aria-label="메인 메뉴" :class="{ show: isNavVisible }">
                        <ul>
                            <li v-for="(nav, key) in headerNav" :key="key">
                                <a :href="nav.url" :title="nav.title" :class="nav.class"><span class="text">{{ nav.title }}</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="floating_wrap">
                <a href="/desktopapp" class="link_desktopapp">
                    <span class="blind">데스크톱앱 설치</span>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {isNavVisible: false};
        },
        methods: {
            toggleMobileMenu() {
                this.isNavVisible = !this.isNavVisible;
            }
        }
    };
</script>