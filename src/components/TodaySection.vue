<script setup="setup">
    import {magazine} from "@/constants/index";
    import {newSection} from "@/constants/index";
    import {playList} from "@/constants/index";
    import { defineComponent } from "vue";
    import { Carousel, Navigation , Slide } from "vue3-carousel";
    import "vue3-carousel/dist/carousel.css";
</script>
<template>
    <div class="today_headline">
        <div class="today_mag">
            <h2 class="blind">매거진 헤드라인</h2>
            <div class="link_wrap">
                <a href="#none" title="" class="link">
                    <div class="thumb">
                        <img src="../../src/assets/images/cover2.png"/>
                    </div>
                    <div class="text_area">
                        <p class="pick"><img src="../../src/assets/images/icon_pick.png" alt="pick"/></p>
                        <strong class="title">이주의 디깅 #177<br/> 어셔</strong>
                        <div class="info">
                            매년 많은 화제를 모으는 슈퍼볼. 이번 슈퍼볼은 카니예 웨스트의 광고, 애인의 경기를 관람하러 온 테일러 스위프트로 화제가 되었다. 물론, 하프타임쇼에서 선 어셔의 이름을 뺄 수야 없다. 하프타임쇼 때 그는 자신의 다양한 히트곡을 부르며 세상에 자신의 존재감을 되새겼다. 그렇다면 이주의 디깅에서는 어셔와 함께 추억 여행을 떠나보도록 하자. – 인스
                        </div>
                        <div class="sub">
                            <span class="item">
                                <span class="blind">작성자</span>
                                VIBE MAG
                            </span>
                            <span class="item">
                                <span class="blind">작성일</span>
                                <span>2024.02.20</span>
                            </span>
                        </div>
                    </div>
                </a>
                <a href="#" role="button" class="btn_play_now"><span class="blind">재생하기</span></a>
            </div>
        </div>
        <div class="today_section" id="magazine">
            <div class="section_title_more">
                <div class="section_title">매거진</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="list_wrap_larger">
                <div class="slide_list_wrap">
                    <Carousel  class="" v-bind="magzSlide" >
                        <Slide  class="" v-for="(mgz, key) in magazine" :key="key">
                            <div class="thumb_area">
                                <a :href="mgz.url" class="link">
                                    <div class="thumb">
                                        <img :src="mgz.mgzImg" class="v-lazy-image v-lazy-image-loaded" :alt="mgz.mgzTit">
                                    </div>
                                </a>
                                <a href="#" role="button" class="btn_play_now">
                                    <span class="blind">재생하기</span>
                                </a>
                            </div>
                            <a href="#none" class="title">
                                <span>{{ mgz.mgzTit1 }}<br/>{{ mgz.mgzTit2 }}</span>
                                <span data-v-6b94f4eb="" class="blind">페이지로 이동</span>
                            </a>
                            <div class="sub">
                                <span class="item">
                                    <span class="blind">작성일</span>
                                    {{ mgz.mgzitem }}
                                </span>
                            </div>
                        </Slide >
                        <template #addons="{ slidesCount }">
                            <Navigation v-if="slidesCount > 1" >
                                <template #next >
                                    <span class="navigation-next"></span>
                                </template>
                                <template #prev >
                                    <span class="navigation-prev"></span>
                                </template>
                            </Navigation>
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
        <div class="today_section"  id="news">
            <div class="section_title_more">
                <div class="section_title">NEWS</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="list_wrap_larger">
                <div class="slide_list_wrap">
                    <Carousel  class="" v-bind="newsSlide" >
                        <Slide v-for="(news, key) in newSection" :key="key">
                            <div class="thumb_area">
                                <a :href="news.url" class="link">
                                    <div class="thumb">
                                        <img :src="news.newsImg" class="v-lazy-image v-lazy-image-loaded" :alt="news.mgzTit">
                                    </div>
                                </a>
                                <a href="#" role="button" class="btn_play_now">
                                    <span class="blind">재생하기</span>
                                </a>
                            </div>
                            <a href="#none" class="title">
                                <span>{{ news.newsTit1 }}</span>
                                <span data-v-6b94f4eb="" class="blind">페이지로 이동</span>
                            </a>
                            <div class="sub">
                                <span class="item">
                                    <span class="blind">작성일</span>
                                    관련 뉴스 보기
                                </span>
                            </div>
                        </Slide>
                        <template #addons="{ slidesCount }">
                            <Navigation v-if="slidesCount > 1" >
                                <template #next >
                                    <span class="navigation-next"></span>
                                </template>
                                <template #prev >
                                    <span class="navigation-prev"></span>
                                </template>
                            </Navigation>
                        </template>
                    </Carousel>
                </div>
                
            </div>
        </div>
        <div class="today_section"  id="playList">
            <div class="section_title_more">
                <div class="section_title">VIBE 추천 플레이리스트</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="list_wrap_larger">
                <div class="slide_list_wrap">
                    <Carousel  class="" v-bind="playListSlide" >
                        <Slide v-for="(play, key) in playList" :key="key">
                            <div class="thumb_area">
                                <a :href="play.url" class="link">
                                    <div class="thumb">
                                        <img :src="play.Img" class="v-lazy-image v-lazy-image-loaded" :alt="play.Tit1">
                                    </div>
                                </a>
                                <a href="#" role="button" class="btn_play_now">
                                    <span class="blind">재생하기</span>
                                </a>
                            </div>
                            <a href="#none" class="title">
                                <span>{{ play.Tit1 }}</span>
                                <span class="blind">페이지로 이동</span>
                            </a>
                            <div class="sub">
                                <span class="item">
                                    <span class="blind">작성일</span>
                                    관련 뉴스 보기
                                </span>
                            </div>
                        </Slide>
                        <template #addons="{ slidesCount }">
                            <Navigation v-if="slidesCount > 1" >
                                <template #next >
                                    <span class="navigation-next"></span>
                                </template>
                                <template #prev >
                                    <span class="navigation-prev"></span>
                                </template>
                            </Navigation>
                        </template>
                    </Carousel>
                </div>
                
            </div>
        </div>
        <div class="today_banner">
            <div class="banner_box">
                <p class="top_img"><img src="../assets/images/ic_mixtape.7c6fae22.png" alt=""/></p>
                <div class="title">
                    아티스트 고르고 매일 믹스테잎 받기
                </div>
                <div class="sub">
                    지금 VIBE 앱에서 취향 길들이기를 해보세요!
                </div>
                <div class="download_box">
                    <a href="#none" title="Download on the App Store" class="link_appstore"><span class="blind">Download on the App Store</span></a>
                    <a href="#none" title="GET IT ON Google Play" class="link_googleplay"><span class="blind">GET IT ON Google Play</span></a>
                </div>
            </div>
            
        </div>
        <div class="introduce_section">
            <div class="introduce_box">
                <strong class="title">지금 바로 로그인하고 <br/>한땀 한땀 만든 플레이리스트 듣기!</strong>3
                <p class="text">K-Pop부터 클래식까지 모든 장르를 아우르는 건 기본. <br />수천 개의 플레이리스트가 트렌드에 맞게 업데이트.</p>
                <div class="img_playlists">
                </div>
            </div>
        </div>

    </div>
</template>
<style>
    .carousel__slide{
        display: flex;
        flex-direction: column;
    }
</style>
<script>
    export default defineComponent({
	name: "AutoPlay",
	components: {
        Navigation ,
		Carousel,
		Slide,
	},
	data: () => ({
		magzSlide: {
            itemsToShow: 5,
            snapAlign: 'center',
            transition: 800,
        },
        newsSlide: {
            itemsToShow: 5,
            snapAlign: 'center',
            transition: 800,
        },
        playListSlide: {
            itemsToShow: 5,
            snapAlign: 'center',
            transition: 800,
        },
	}),
});
</script>
