import docs from './News.mdx';
import {
    htmlFragmentNewsCard,
    htmlFragmentNewsCardShort,
} from './_htmlFragments';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Cards/News',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const NewsCard = () => `
<article class="ui-card ui-news-card">
    <div class="ui-card__content">
        <div class="ui-toolbar ui-toolbar--news">
            <div class="ui-button-group">
                ${htmlFragmentShare}
            </div>
            <div class="ui-toolbar__item">
                <span>Posted:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <h3 class="ui-card__title">
            <a href="#">
                News name which might be stupidly long and wrap to multiple lines
            </a>
        </h3>

        <div class="ui-card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.
        </div>
    </div>

    <figure class="ui-card__media">
        <a href="#" class="ui-responsive-media" style="--themeMediaAspectRatio: 4/3; padding-top: 75%;">
            <img
                class="ui-image"
                src="https://via.placeholder.com/400x300.png"
                alt="News name"
                loading="lazy"
                height="300"
                width="400"
            />
        </a>
    </figure>
</article>
`;
NewsCard.storyName = 'News card';

export const NewsCardGrid = () => `
<div class="ui-card-grid__wrap">
    <h2>Dealer News</h2>
    <ul class="ui-grid ui-news-card-grid">
        <li>${htmlFragmentNewsCard}</li>
        <li>${htmlFragmentNewsCardShort}</li>
        <li>${htmlFragmentNewsCard}</li>
    </ul>
    <a href="#" class="ui-button ui-button--text ui-button--secondary">
        View all of our Latest News
    </a>
</div>
`;
NewsCardGrid.storyName = 'In a grid';

export const NewsCardSlider = () => `
<section
    class="ui-card-slider__wrap"
    aria-labelledby="news-slider"
>
    <h2 id="news-slider">Dealer News</h2>
    <div
        aria-label="dealer news"
        class="ui-slider ui-slider--card"
        data-slide-autoplay="false"
        data-slide-move-by-one="true"
    >
        <ul class="ui-slider__slides">
            <li class="ui-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="ui-slider__slide">${htmlFragmentNewsCardShort}</li>
            <li class="ui-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="ui-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="ui-slider__slide">${htmlFragmentNewsCardShort}</li>
            <li class="ui-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="ui-slider__slide">
                <a href="#" class="ui-card ui-news-card ui-news-card--block-link">
                    <span class="ui-card__title">
                        Show more news
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <a href="#" class="ui-button ui-button--text ui-button--secondary">
        View all of our latest news
    </a>
</section>
`;
NewsCardSlider.storyName = 'In a slider';
