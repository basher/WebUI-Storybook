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
<article class="kb-card kb-promotion-card">
    <div class="kb-card__content">
        <div class="kb-toolbar kb-toolbar--promotions">
            <div class="kb-button-group">
                ${htmlFragmentShare}
            </div>
            <div class="kb-toolbar__item">
                <span>Offer ends:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <p class="kb-promotion-card__tags">
            Lorem ipsum dolor | sit amet consectetur
        </p>

        <h2 class="kb-card__title">
            Promotion name which might be stupidly long and wrap to multiple lines
        </h2>

        <div class="kb-card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae
        </div>
    </div>

    <figure class="kb-card__media">
        <a href="#" class="kb-responsive-media" style="--themeMediaAspectRatio: 4/3; padding-top: 75%;">
            <img
                class="kb-image"
                src="https://via.placeholder.com/400x300.png"
                alt="Promotion name"
                loading="lazy"
                height="300"
                width="400"
            />
        </a>
    </figure>

    <div class="kb-card__actions kb-button-group">
        <a
            href="#"
            class="kb-button kb-button--text kb-button--secondary"
        >
            Book appointment
        </a>
        <a
            href="#"
            class="kb-button kb-button--text kb-button--secondary is-selected"
        >
            View offer details
        </a>
    </div>
</article>
`;
PromotionCard.storyName = 'Promotion card';

export const PromotionCardGrid = () => `
<div class="kb-card-grid__wrap">
    <h2>Offers</h2>
    <ul class="kb-grid kb-promotion-card-grid">
        <li>${htmlFragmentPromotionCard}</li>
        <li>${htmlFragmentPromotionCardShort}</li>
        <li>${htmlFragmentPromotionCard}</li>
    </ul>
    <a href="#" class="kb-button kb-button--text kb-button--secondary">
        View all the latest Promotions
    </a>
</div>
`;
PromotionCardGrid.storyName = 'In a grid';

export const PromotionCardSlider = () => `
<section
    class="kb-card-slider__wrap"
    aria-labelledby="promotions-slider"
>
    <h2 id="promotions-slider">Dealer Promotions</h2>
    <div
        aria-label="dealer promotions"
        class="kb-slider kb-slider--card"
        data-slide-autoplay="false"
        data-slide-move-by-one="true"
    >
        <ul class="kb-slider__slides">
            <li class="kb-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="kb-slider__slide">${htmlFragmentPromotionCardShort}</li>
            <li class="kb-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="kb-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="kb-slider__slide">${htmlFragmentPromotionCardShort}</li>
            <li class="kb-slider__slide">${htmlFragmentPromotionCard}</li>
            <li class="kb-slider__slide">
                <a href="#" class="kb-card kb-promotion-card kb-promotion-card--block-link">
                    <span class="kb-card__title">
                        Show more offers
                    </span>
                </a>
            </li>
        </ul>
    </div>
    <a href="#" class="kb-button kb-button--text kb-button--secondary">
        View all of our latest promotions
    </a>
</section>
`;
PromotionCardSlider.storyName = 'In a slider';

export const PromotionSecondaryCard = () => `
<a class="kb-card kb-promotion-card kb-promotion-card--secondary" href="#">
    <div class="kb-card__content">
        <p class="kb-card__title">Promotion name</p>
    </div>

    <figure class="kb-card__media">
        <img
            class="kb-image"
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
<ul class="kb-grid kb-promotion-card-grid--secondary">
    <li>${htmlFragmentPromotionSecondaryCard}</li>
    <li>${htmlFragmentPromotionSecondaryCard}</li>
    <li>${htmlFragmentPromotionSecondaryCard}</li>
</ul>
`;
PromotionSecondaryCardGrid.storyName = 'Secondary promotion cards in a grid';
