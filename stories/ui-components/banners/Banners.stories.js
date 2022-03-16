import docs from './Banners.mdx';
import {
    htmlFragmentImage,
    htmlFragmentSlideBanner1,
    htmlFragmentSlideBanner2,
    htmlFragmentSlideBanner3,
} from './_htmlFragments';

export default {
    title: 'UI Components/Banners',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        overlayPosition: {
            control: {
                type: 'select',
                options: [
                    'top-left',
                    'top-middle',
                    'top-right',
                    'middle-left',
                    'middle-middle',
                    'middle-right',
                    'bottom-left',
                    'bottom-middle',
                    'bottom-right',
                ],
            },
        },
    },
};

export const HeroBanner = (args) => `
<div class="kb-banner kb-banner--hero">
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        ${htmlFragmentImage}

        <div class="kb-banner__overlay kb-banner__overlay--${args.overlayPosition} is-hidden-on-small">
            <div class="kb-banner__text kb-banner__text--large">
                Banner text large
            </div>
            <div class="kb-banner__text">
                Banner text small
            </div>
            <a href="/" class="kb-button kb-button--text kb-button--primary">
                Primary CTA
            </a>
            <small>
                Banner smallprint
            </small>
        </div>
    </div>

    <div class="kb-banner__overlay is-hidden-on-medium">
            <div class="kb-banner__text kb-banner__text--large">
                Banner text large
            </div>
            <div class="kb-banner__text">
                Banner text small - lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <a href="/" class="kb-button kb-button--text kb-button--primary">
                Primary CTA
            </a>
            <small>
                Banner smallprint
            </small>
        </div>
</div>
`;
HeroBanner.storyName = 'Hero (or billboard) banner';

export const BannerSlider = () => `
<section
    class="kb-slider kb-slider--banner"
    aria-label="[meaningful label for slider 1]"
    data-slide-tabbed="true"
    data-slide-variable-height="true"
>
    <ul class="kb-slider__slides">
        <li class="kb-slider__slide">
            ${htmlFragmentSlideBanner1}
        </li>
        <li class="kb-slider__slide">
            ${htmlFragmentSlideBanner2}
        </li>
        <li class="kb-slider__slide">
            ${htmlFragmentSlideBanner3}
        </li>
    </ul>
</section>
<p>TEST CONTENT BELOW SLIDER</p>
`;
BannerSlider.storyName = 'Hero (or billboard) banners in slider';

export const BannerOverlayClickable = () => `
<div class="kb-banner">
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        ${htmlFragmentImage}

        <a href="/" class="kb-banner__overlay kb-banner__overlay--block-link">
            <div class="kb-banner__text kb-banner__text--large">
                Banner text large - this WHOLE overlay is CLICKABLE
            </div>
            <div class="kb-banner__text">
                Banner text small - lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
        </a>
    </div>
</div>
`;
BannerOverlayClickable.storyName = 'Banner with clickable overlay';

export const BannerVideo = (args) => `
<div class="kb-banner kb-banner--video">
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        <div>
            <video
                muted autoplay loop controls
                poster="https://via.placeholder.com/1024x439.png?text=Video-poster-image"
            >
                <source src="/banner/2022_Ford_Bronco_Raptor.webm" type="video/webm">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
        <div class="kb-banner__overlay kb-banner__overlay--${args.overlayPosition}">
            <div class="kb-banner__text kb-banner__text--large">
                Banner text large
            </div>
            <div class="kb-banner__text">
                Banner text small
            </div>
            <a href="/" class="kb-button kb-button--text kb-button--primary">
                Primary CTA
            </a>
        </div>
    </div>
</div>
`;
BannerVideo.storyName = 'Banner with video';

export const BannerPageTitle = (args) => `
<div class="kb-banner kb-banner--page-title">
    <div class="kb-banner__title">
        <h1 class="kb-banner__text kb-banner__text--large">
            Page title
        </h1>
    </div>
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        ${htmlFragmentImage}
    </div>
</div>
`;
BannerPageTitle.storyName = 'Page title banner';
