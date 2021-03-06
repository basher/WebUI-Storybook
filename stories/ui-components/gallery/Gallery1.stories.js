import docs from './Gallery1.mdx';
import {
    htmlFragmentFigureGallery,
    htmlFragmentFigureGalleryAlt,
    htmlFragmentFigureGalleryOpenModal2,
    htmlFragmentFigureGalleryOpenModal3,
    htmlFragmentFigureGalleryOpenModal4,
    htmlFragmentFigureGalleryOpenModal5,
    htmlFragmentFigureSlider2,
    htmlFragmentFigureSlider3,
    htmlFragmentFigureSlider4,
    htmlFragmentFigureSlider5,
} from './_htmlFragment';

export default {
    title: 'UI Components/Gallery/Gallery1',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Gallery1 = () => `
<ul class="ui-gallery ui-grid">
    <li>
        <a
            class="ui-gallery__link"
            href="https://via.placeholder.com/1024x655.png"
            target="_blank"
        >
            <figure class="ui-gallery__figure">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/400x300.png"
                    alt=""
                    loading="lazy"
                    height="300"
                    width="400"
                />
                <figcaption class="ui-gallery__caption">
                    [image caption]
                </figcaption>
            </figure>
        </a>
    </li>
    <li>${htmlFragmentFigureGallery}</li>
    <li>${htmlFragmentFigureGallery}</li>
    <li>${htmlFragmentFigureGallery}</li>
    <li>${htmlFragmentFigureGallery}</li>
</ul>
`;
Gallery1.storyName = 'Gallery 1 (default thumbnail grid layout)';

export const Gallery1Alternate = () => `
<div class="ui-gallery ui-gallery--layout-thumbs-2 ui-grid">
    ${htmlFragmentFigureGalleryAlt}
    ${htmlFragmentFigureGalleryAlt}
</div>
<div class="ui-gallery ui-gallery--layout-thumbs-3 ui-grid">
    ${htmlFragmentFigureGalleryAlt}
    ${htmlFragmentFigureGalleryAlt}
    ${htmlFragmentFigureGalleryAlt}
</div>
<div class="ui-gallery ui-gallery--layout-thumbs-3-alt ui-grid">
    ${htmlFragmentFigureGalleryAlt}
    ${htmlFragmentFigureGalleryAlt}
    ${htmlFragmentFigureGalleryAlt}
</div>
`;
Gallery1Alternate.storyName = 'Gallery 1 (alternate thumbnail grid layouts)';

export const Gallery1Tabs = () => `
<div
    class="ui-tabs ui-gallery__tabs"
    data-tabs-no-accordion="true"
>
    <h2 class="ui-tabs__title">1st Gallery</h2>
    <div class="ui-tabs__content">
        <ul class="ui-gallery ui-grid">
            <li>${htmlFragmentFigureGallery}</li>
            <li>${htmlFragmentFigureGallery}</li>
            <li>${htmlFragmentFigureGallery}</li>
            <li>${htmlFragmentFigureGallery}</li>
            <li>${htmlFragmentFigureGallery}</li>
        </ul>
    </div>
    <h2 class="ui-tabs__title">2nd Gallery</h2>
    <div class="ui-tabs__content">
        <ul class="ui-gallery ui-grid">
            <li>${htmlFragmentFigureGallery}</li>
            <li>${htmlFragmentFigureGallery}</li>
            <li>${htmlFragmentFigureGallery}</li>
        </ul>
    </div>
</div>
`;
Gallery1Tabs.storyName = 'Gallery 1 (thumbnails in tabs)';

export const Gallery1Slider = () => `
<section
    class="ui-gallery ui-slider"
    aria-label="Gallery slider"
    data-slide-autoplay="false"
    data-slide-no-animations="true"
    data-slide-tabbed="true"
>
    <ul class="ui-slider__slides">
        <li class="ui-slider__slide">
            <figure class="ui-gallery__figure">
                <img
                    class="ui-image"
                    src="https://via.placeholder.com/1024x655.png"
                    srcset="https://via.placeholder.com/400x300.png 400w,
                            https://via.placeholder.com/768x492.png 768w,
                            https://via.placeholder.com/1024x655.png 1024w"
                    sizes="(min-width: 768px) 1024px,
                            (min-width: 400px) 768px,
                            100vw"
                    alt=""
                    loading="lazy"
                    height="655"
                    width="1024"
                />
                <figcaption class="ui-gallery__caption">
                    [image caption]
                </figcaption>
            </figure>
        </li>
        <li class="ui-slider__slide">${htmlFragmentFigureSlider2}</li>
        <li class="ui-slider__slide">${htmlFragmentFigureSlider3}</li>
        <li class="ui-slider__slide">${htmlFragmentFigureSlider4}</li>
        <li class="ui-slider__slide">${htmlFragmentFigureSlider5}</li>
    </ul>
</section>
`;
Gallery1Slider.storyName = 'Gallery 1 (full-size images in slider)';

export const Gallery1Modal = () => `
<div class="ui-layout">
    <ul class="ui-gallery ui-grid">
        <li>
            <a
                class="ui-gallery__link"
                href="https://via.placeholder.com/1024x655.png"
                target="_blank"
                data-modal-open="modal"
                data-modal-title="Gallery"
                data-modal-fetch-content="true"
                data-modal-css-class="ui-gallery__modal"
                data-slider="modal-slider1"
                data-slide-to-show="1"
            >
                <figure class="ui-gallery__figure">
                    <img
                        class="ui-image"
                        src="https://via.placeholder.com/400x300.png"
                        alt=""
                        loading="lazy"
                        height="300"
                        width="400"
                    />
                    <figcaption class="ui-gallery__caption">
                        [image caption]
                    </figcaption>
                </figure>
            </a>
        </li>
        <li>${htmlFragmentFigureGalleryOpenModal2}</li>
        <li>${htmlFragmentFigureGalleryOpenModal3}</li>
        <li>${htmlFragmentFigureGalleryOpenModal4}</li>
        <li>${htmlFragmentFigureGalleryOpenModal5}</li>
    </ul>

    <section
        class="ui-gallery ui-slider"
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

        <ul class="ui-slider__slides">
            <li class="ui-slider__slide">
                <figure class="ui-gallery__figure">
                    <img
                        class="ui-image"
                        src="https://via.placeholder.com/1024x655.png"
                        srcset="https://via.placeholder.com/400x300.png 400w,
                                https://via.placeholder.com/768x492.png 768w,
                                https://via.placeholder.com/1024x655.png 1024w"
                        sizes="(min-width: 768px) 1024px,
                                (min-width: 400px) 768px,
                                100vw"
                        alt=""
                        loading="lazy"
                        height="655"
                        width="1024"
                    />
                    <figcaption class="ui-gallery__caption">
                        [image caption]
                    </figcaption>
                </figure>
            </li>
            <li class="ui-slider__slide">${htmlFragmentFigureSlider2}</li>
            <li class="ui-slider__slide">${htmlFragmentFigureSlider3}</li>
            <li class="ui-slider__slide">${htmlFragmentFigureSlider4}</li>
            <li class="ui-slider__slide">${htmlFragmentFigureSlider5}</li>
        </ul>
    </section>
</div>

<div class="ui-modal__overlay is-hidden" id="modal">
    <div class="ui-modal">
        <div
            class="ui-modal__inner"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="ui-button ui-button--icon"
                data-modal-close
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="ui-icon ui-icon--medium"
                >
                    <title>Close</title>
                    <use href="${UIconfig.theme}.sprite.svg#SVG016" />
                </svg>
                <span class="sr-only">Close</span>
            </button>

            <div class="ui-modal__ajax"></div>

        </div>
    </div>
</div>
`;
Gallery1Modal.storyName = 'Gallery 1 (slider in modal lightbox)';
