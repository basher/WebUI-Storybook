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
<article class="kb-card kb-news-card">
    <div class="kb-card__content">
        <div class="kb-toolbar kb-toolbar--news">
            <div class="kb-button-group">
                ${htmlFragmentShare}
            </div>
            <div class="kb-toolbar__item">
                <span>Posted:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <h3 class="kb-card__title">
            <a href="#">
                News name which might be stupidly long and wrap to multiple lines
            </a>
        </h3>

        <div class="kb-card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.
        </div>
    </div>

    <figure class="kb-card__media">
        <a href="#" class="kb-responsive-media" style="--themeMediaAspectRatio: 4/3; padding-top: 75%;">
            <img
                class="kb-image"
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
<div class="kb-card-grid__wrap">
    <h2>Dealer News</h2>
    <ul class="kb-grid kb-news-card-grid">
        <li>${htmlFragmentNewsCard}</li>
        <li>${htmlFragmentNewsCardShort}</li>
        <li>${htmlFragmentNewsCard}</li>
    </ul>
    <a href="#" class="kb-button kb-button--text kb-button--secondary">
        View all of our Latest News
    </a>
</div>
`;
NewsCardGrid.storyName = 'In a grid';

export const NewsCardSlider = () => `
<section
    class="kb-card-slider__wrap"
    aria-labelledby="news-slider"
>
    <h2 id="news-slider">Dealer News</h2>
    <div
        aria-label="dealer news"
        class="kb-slider kb-slider--card"
        data-slide-autoplay="false"
        data-slide-move-by-one="true"
    >
        <ul class="kb-slider__slides">
            <li class="kb-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="kb-slider__slide">${htmlFragmentNewsCardShort}</li>
            <li class="kb-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="kb-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="kb-slider__slide">${htmlFragmentNewsCardShort}</li>
            <li class="kb-slider__slide">${htmlFragmentNewsCard}</li>
            <li class="kb-slider__slide">
                <a href="#" class="kb-card kb-news-card kb-news-card--block-link">
                    <span class="kb-card__title">
                        Show more news
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <a href="#" class="kb-button kb-button--text kb-button--secondary">
        View all of our latest news
    </a>
</section>
`;
NewsCardSlider.storyName = 'In a slider';
