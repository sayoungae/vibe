<script setup>
    import { defineComponent } from "vue";
    import { Carousel, Navigation , Slide } from "vue3-carousel";
    import "vue3-carousel/dist/carousel.css";
    import {chartTop15} from "@/constants/index";
    import {chartTop30} from "@/constants/index";

</script>
<template>
    <div>
        <h2 class="TopTitle">차트</h2>
        <div class="chart_section">
            <div class="section_title_more">
                <div class="section_title">오늘 Top 100</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="slide_list_wrap">
                <Carousel v-bind="chartSlide">
                    <Slide class="list_item">
                        <div  v-for="(chartT15, key) in chartTop15" :key="key" class="list_track_row">
                            <a :href="chartT15.url" :title="chartT15.title" class="icon_play">
                                <img :src="chartT15.src" :alt="chartT15.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT15.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT15.url" :title="chartT15.title" class="title">{{chartT15.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT15.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide class="list_item">
                        <div  v-for="(chartT30, key) in chartTop30" :key="key" class="list_track_row">
                            <a :href="chartT30.url" :title="chartT30.title" class="icon_play">
                                <img :src="chartT30.src" :alt="chartT30.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT30.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT30.url" :title="chartT30.title" class="title">{{chartT30.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT30.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
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
        <div class="chart_section">
            <div class="section_title_more">
                <div class="section_title">국내 급상승</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="slide_list_wrap">
                <Carousel v-bind="chartSlide">
                    <Slide class="list_item">
                        <div  v-for="(chartT15, key) in chartTop15" :key="key" class="list_track_row">
                            <a :href="chartT15.url" :title="chartT15.title" class="icon_play">
                                <img :src="chartT15.src" :alt="chartT15.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT15.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT15.url" :title="chartT15.title" class="title">{{chartT15.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT15.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide class="list_item">
                        <div  v-for="(chartT30, key) in chartTop30" :key="key" class="list_track_row">
                            <a :href="chartT30.url" :title="chartT30.title" class="icon_play">
                                <img :src="chartT30.src" :alt="chartT30.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT30.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT30.url" :title="chartT30.title" class="title">{{chartT30.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT30.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
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
        <div class="chart_section">
            <div class="section_title_more">
                <div class="section_title">해외 급상승</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="slide_list_wrap">
                <Carousel v-bind="chartSlide">
                    <Slide class="list_item">
                        <div  v-for="(chartT15, key) in chartTop15" :key="key" class="list_track_row">
                            <a :href="chartT15.url" :title="chartT15.title" class="icon_play">
                                <img :src="chartT15.src" :alt="chartT15.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT15.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT15.url" :title="chartT15.title" class="title">{{chartT15.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT15.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide class="list_item">
                        <div  v-for="(chartT30, key) in chartTop30" :key="key" class="list_track_row">
                            <a :href="chartT30.url" :title="chartT30.title" class="icon_play">
                                <img :src="chartT30.src" :alt="chartT30.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT30.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT30.url" :title="chartT30.title" class="title">{{chartT30.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT30.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
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
        <div class="chart_section">
            <div class="section_title_more">
                <div class="section_title">billboard HOT 100</div>
                <a href="#none" class="link_more">더보기</a>
            </div>
            <div class="slide_list_wrap">
                <Carousel v-bind="chartSlide">
                    <Slide class="list_item">
                        <div  v-for="(chartT15, key) in chartTop15" :key="key" class="list_track_row">
                            <a :href="chartT15.url" :title="chartT15.title" class="icon_play">
                                <img :src="chartT15.src" :alt="chartT15.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT15.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT15.url" :title="chartT15.title" class="title">{{chartT15.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT15.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide class="list_item">
                        <div  v-for="(chartT30, key) in chartTop30" :key="key" class="list_track_row">
                            <a :href="chartT30.url" :title="chartT30.title" class="icon_play">
                                <img :src="chartT30.src" :alt="chartT30.alt"/>
                            </a>
                            <div class="rank">
                                <div class="num">{{chartT30.rankNum }}</div>
                            </div>
                            <div class="song_area">
                                <div class="song">
                                    <a :href="chartT30.url" :title="chartT30.title" class="title">{{chartT30.title }}</a>
                                    <span class="blind">곡명</span>
                                </div>
                                <div class="artist">
                                    <a href="#none" class="link_artist">
                                        <span class="text">{{chartT30.artist }}</span>
                                        <span class="blind">아티스트명</span>
                                    </a>
                                </div>
                            </div>
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
</template>
<script>
    export default defineComponent({
	name: "ChartTopSlide",
	components: {
        Navigation ,
		Carousel,
		Slide,
	},
	data: () => ({
		chartSlide: {
            itemsToShow: 1,
            snapAlign: 'center',
            transition: 800,
        },
        
	}),
});
</script>