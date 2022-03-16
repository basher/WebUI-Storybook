import docs from './Promotion.mdx';
import {
    htmlFragmentPromotionCard,
    htmlFragmentPromotionCardShort,
    htmlFragmentPromotionSecondaryCard,
} from './_htmlFragments';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Cards/Promotion',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const PromotionCard = () => `
<article class="ui-card ui-promotion-card">
    <div class="ui-card__content">
        <div class="ui-toolbar ui-toolbar--promotions">
            <div class="ui-button-group">
                ${htmlFragmentShare}
            </div>
            <div class="ui-toolbar__item">
                <span>Offer ends:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <p class="ui-promotion-card__tags">
            Lorem ipsum dolor | sit amet consectetur
        </p>

        <h2 class="ui-card__title">
            Promotion name which might be stupidly long and wrap to multiple lines
        </h2>

        <div class="ui-card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae
        </div>
    </div>

    <figure class="ui-card__media">
        <a href="#" class="ui-responsive-media" style="--themeMediaAspectRatio: 4/3; padding-top: 75%;">
            <img
                class="ui-image"
                src="https://via.placeholder.com/400x300.png"
                alt="Promotion name"
                loading="lazy"
                height="300"
                width="400"
            />
        </a>
    </figure>

    <div class="ui-card__actions ui-button-group">
        <a
            href="#"
            class="ui-button ui-button--text ui-button--secondary"
        >
            Book appointment
        </a>
        <a
            href="#"
            class="ui-button ui-button--text ui-button--secondary is-selected"
        >
            View offer details
        </a>
    </div>
</article>
`;
PromotionCard.storyName = 'Promotion card';

export const PromotionCardGrid = () => `
<div class="ui-card-grid__wrap">
    <h2>Offers</h2>
    <ul class="ui-grid ui-promotion-card-grid">
        <li>${htmlFragmentPromotionCard}</li>
        <li>${htmlFragmentPromotionCardShort}</li>
        <li>${htmlFragmentPromotionCard}</li>
    </ul>
    <a href="#" class="ui-button ui-button--text ui-button--secondary">
        View all the latest Promotions
    </a>
</div>
`;
PromotionCardGrid.storyName = 'In a grid';

export const PromotionCardSlider = () => `
<section
    class="ui-card-slider__wrap"
    aria-labelledby="promotions-slider"
>
    <h2 id="promotions-slider">Dealer Promotions</h2>
    <div
        aria-label="dealer promotions"
        class="ui-slider ui-slider--card"
        data-slide-autoplay="false"
        data-slide-move-by-one="true"
    >
        <ul class="ui-slider__slides">
            <li class="ui-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="ui-slider__slide">${htmlFragmentPromotionCardShort}</li>
            <li class="ui-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="ui-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="ui-slider__slide">${htmlFragmentPromotionCardShort}</li>
            <li class="ui-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="ui-slider__slide">
                <a href="#" class="ui-card ui-promotion-card ui-promotion-card--block-link">
                    <span class="ui-card__title">
                        Show more offers
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <a href="#" class="ui-button ui-button--text ui-button--secondary">
        View all of our latest promotions
    </a>
</section>
`;
PromotionCardSlider.storyName = 'In a slider';

export const PromotionSecondaryCard = () => `
<a class="ui-card ui-promotion-card ui-promotion-card--secondary" href="#">
    <div class="ui-card__content">
        <p class="ui-card__title">Promotion name</p>
    </div>

    <figure class="ui-card__media">
        <img
            class="ui-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>
</a>
`;
PromotionSecondaryCard.storyName = 'Secondary promotion (tag) card';

export const PromotionSecondaryCardGrid = () => `
<ul class="ui-grid ui-promotion-card-grid--secondary">
    <li>${htmlFragmentPromotionSecondaryCard}</li>
    <li>${htmlFragmentPromotionSecondaryCard}</li>
    <li>${htmlFragmentPromotionSecondaryCard}</li>
</ul>
`;
PromotionSecondaryCardGrid.storyName = 'Secondary promotion cards in a grid';
