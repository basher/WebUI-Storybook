import docs from './Gallery2.mdx';
import {
    htmlFragmentGallery2OpenModalOdd,
    htmlFragmentGallery2OpenModalEven,
    htmlFragmentGallery2SliderSlideOdd,
    htmlFragmentGallery2SliderSlideEven,
    htmlFragmentGallery2OpenModalOddThumb,
    htmlFragmentGallery2OpenModalEvenThumb,
} from './_htmlFragment';

export default {
    title: 'UI Components/Gallery/Gallery2',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Gallery2 = () => `
<div class="kb-layout">
    <div class="kb-gallery__wrap">
        <!-- Large image gallery slider -->
        <section
            class="kb-gallery kb-gallery--gallery2 kb-slider"
            aria-label="Gallery slider"
            data-slide-autoplay="false"
            data-slide-no-animations="true"
        >
            <ul class="kb-slider__slides">
                <li class="kb-slider__slide">
                    <a
                        class="kb-gallery__link"
                        href="https://via.placeholder.com/1024x768.png"
                        target="_blank"
                        data-modal-open="modal"
                        data-modal-title="Gallery"
                        data-modal-fetch-content="true"
                        data-modal-css-class="kb-gallery__modal"
                        data-slider="modal-slider1"
                        data-slide-to-show="1"
                    >
                        <img
                            class="kb-image"
                            src="https://via.placeholder.com/1024x768.png"
                            srcset="https://via.placeholder.com/400x300.png 400w,
                                    https://via.placeholder.com/768x576.png 768w,
                                    https://via.placeholder.com/1024x768.png 1024w"
                            sizes="(min-width: 768px) 1024px,
                                    (min-width: 400px) 768px,
                                    100vw"
                            alt="gallery image 1"
                            loading="lazy"
                            height="768"
                            width="1024"
                        />
                    </a>
                </li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOdd}</li>
            </ul>
        </section>

        <!-- Thumbnail gallery slider -->
        <section
            class="kb-gallery kb-gallery--gallery2-thumbs kb-slider"
            aria-label="Gallery thumbnail slider"
            data-slide-autoplay="false"
            data-slide-no-animations="true"
        >
            <ul class="kb-slider__slides">
                <li class="kb-slider__slide">
                    <a
                        class="kb-gallery__link"
                        href="https://via.placeholder.com/1024x768.png"
                        target="_blank"
                        data-modal-open="modal"
                        data-modal-title="Gallery"
                        data-modal-fetch-content="true"
                        data-slider="modal-slider1"
                        data-slide-to-show="1"
                    >
                        <img
                            class="kb-image"
                            src="https://via.placeholder.com/400x300.png"
                            alt="gallery image 1"
                            loading="lazy"
                            height="300"
                            width="400"
                        />
                    </a>
                </li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEvenThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOddThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEvenThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOddThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEvenThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOddThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalEvenThumb}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2OpenModalOddThumb}</li>
            </ul>
        </section>

        <!-- Modal gallery slider -->
        <section
            class="kb-gallery kb-slider"
            data-id="modal-slider1"
            data-slide-autoplay="false"
            data-slide-no-animations="true"
            data-slide-tabbed="true"
            data-slide-trigger="true"
            data-modal-ajax-content="modal"
        >
            <h2
                id="modal-title"
                data-modal-title
            >
                Gallery slider
            </h2>

            <ul class="kb-slider__slides">
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideOdd}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideEven}</li>
                <li class="kb-slider__slide">${htmlFragmentGallery2SliderSlideOdd}</li>
            </ul>
        </section>
    </div>
</div>

<div class="kb-modal__overlay is-hidden" id="modal">
    <div class="kb-modal">
        <div
            class="kb-modal__inner"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="kb-button kb-button--icon"
                data-modal-close
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="kb-icon kb-icon--medium"
                >
                    <title>Close</title>
                    <use href="${KBconfig.theme}.sprite.svg#SVG016" />
                </svg>
                <span class="sr-only">Close</span>
            </button>

            <div class="kb-modal__ajax"></div>

        </div>
    </div>
</div>
`;
Gallery2.storyName = 'Gallery 2 (multiple gallery sliders)';
