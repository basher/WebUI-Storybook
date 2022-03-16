import { htmlFragmentVideoPlayer } from '../video-player/_htmlFragments';

/* Default card */
export const htmlFragmentDefaultCard = `
<div class="kb-card__content">
    <h3 class="kb-card__title">Card title</h3>
    <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
</div>
<figure class="kb-card__media">
    <img
        class="kb-image"
        src="https://via.placeholder.com/400x225.png"
        alt=""
        loading="lazy"
        height="225"
        width="400"
    />
</figure>
`;
export const htmlFragmentDefaultCard2 = `
<div class="kb-card__content">
    <h3 class="kb-card__title">Card title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium.</p>
</div>
<figure class="kb-card__media">
    <img
        class="kb-image"
        src="https://via.placeholder.com/400x225.png"
        alt=""
        loading="lazy"
        height="225"
        width="400"
    />
</figure>
`;

export const htmlFragmentDefaultCardButtons = `
<div class="kb-card__actions kb-button-group">
    <a href="#" class="kb-button kb-button--text kb-button--primary">
        Primary text link
    </a>
    <a href="#" class="kb-button kb-button--text kb-button--secondary">
        Secondary text link
    </a>
</div>
`;

/* Contact card */
export const htmlFragmentContactCardAddress = `
<article class="kb-card kb-contact-card">
    <div class="kb-card__content">
        <h3 class="kb-card__title">
            <a href="#">Contact name</a>
        </h3>
        <address>
            <p>
                Address line 1<br/>
                Address line 2<br/>
                Address line 3<br/>
            </p>
            <span>
                <a href="tel:0123456789">0123 456789</a>
            </span>
            <span>
                <a href="mailto:contact@Web.com">contact@Web.com</a>
            </span>
        </address>
    </div>
    <div class="kb-card__actions kb-button-group">
        <a href="#" class="kb-button kb-button--text kb-button--primary">
            Primary text link
        </a>
    </div>
    <div class="kb-ratings">
        <div class="kb-ratings__stars" style="--rating: 68%;"></div>
        <p class="kb-ratings__text">
            <a href="#">
                <span>Rating</span>
                3.4 (based on 195 reviews)
            </a>
        </p>
    </div>
</article>
`;

export const htmlFragmentContactCardPerson = `
<article class="kb-card kb-contact-card kb-contact-card--person">
    <div class="kb-card__content">
        <h3 class="kb-card__title">
            <a href="#">Contact name</a>
        </h3>
        <p>Job title</p>
        <p>
            <a href="mailto:contact@Web.com">contact@Web.com</a>
        </p>
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
</article>
`;

/* News card */
export const htmlFragmentNewsCard = `
<article class="kb-card kb-news-card">
    <div class="kb-card__content">
        <div class="kb-toolbar kb-toolbar--news">
            <div class="kb-button-group">
                <div class="kb-share">
                    <button
                        type="button"
                        class="kb-button kb-button--icon kb-share__button"
                        data-share-url="https://www.google.com"
                        data-share-title="google"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <title>Share</title>
                            <use href="${KBconfig.theme}.sprite.svg#SVG035" />
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>

                    <div class="kb-share__fallback">
                        <label class="kb-form__label">
                            <span>Share [page title]</span>
                            <input
                                class="kb-form__input"
                                type="text"
                                value=""
                            />
                        </label>
                        <button
                            type="button"
                            class="kb-button kb-button--text kb-button--secondary"
                        >
                            Copy
                        </button>
                    </div>
                </div>
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

export const htmlFragmentNewsCardShort = `
<article class="kb-card kb-news-card">
    <div class="kb-card__content">
        <div class="kb-toolbar kb-toolbar--news">
            <div class="kb-button-group">
                <div class="kb-share">
                    <button
                        type="button"
                        class="kb-button kb-button--icon kb-share__button"
                        data-share-url="https://www.google.com"
                        data-share-title="google"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <title>Share</title>
                            <use href="${KBconfig.theme}.sprite.svg#SVG035" />
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>

                    <div class="kb-share__fallback">
                        <label class="kb-form__label">
                            <span>Share [page title]</span>
                            <input
                                class="kb-form__input"
                                type="text"
                                value=""
                            />
                        </label>
                        <button
                            type="button"
                            class="kb-button kb-button--text kb-button--secondary"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
            <div class="kb-toolbar__item">
                <span>Posted:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <h3 class="kb-card__title">
            <a href="#">
                News name
            </a>
        </h3>

        <div class="kb-card__text">
            Lorem ipsum dolor sit.
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

/* Promotion card */
export const htmlFragmentPromotionCard = `
<article class="kb-card kb-promotion-card">
    <div class="kb-card__content">
        <div class="kb-toolbar kb-toolbar--promotions">
            <div class="kb-button-group">
                <div class="kb-share">
                    <button
                        type="button"
                        class="kb-button kb-button--icon kb-share__button"
                        data-share-url="https://www.google.com"
                        data-share-title="google"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <title>Share</title>
                            <use href="${KBconfig.theme}.sprite.svg#SVG035" />
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>

                    <div class="kb-share__fallback">
                        <label class="kb-form__label">
                            <span>Share [page title]</span>
                            <input
                                class="kb-form__input"
                                type="text"
                                value=""
                            />
                        </label>
                        <button
                            type="button"
                            class="kb-button kb-button--text kb-button--secondary"
                        >
                            Copy
                        </button>
                    </div>
                </div>
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
                src="https://via.placeholder.com/400x400.png"
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

export const htmlFragmentPromotionCardShort = `
<article class="kb-card kb-promotion-card">
    <div class="kb-card__content">
        <div class="kb-toolbar kb-toolbar--promotions">
            <div class="kb-button-group">
                <div class="kb-share">
                    <button
                        type="button"
                        class="kb-button kb-button--icon kb-share__button"
                        data-share-url="https://www.google.com"
                        data-share-title="google"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="kb-icon"
                        >
                            <title>Share</title>
                            <use href="${KBconfig.theme}.sprite.svg#SVG035" />
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>

                    <div class="kb-share__fallback">
                        <label class="kb-form__label">
                            <span>Share [page title]</span>
                            <input
                                class="kb-form__input"
                                type="text"
                                value=""
                            />
                        </label>
                        <button
                            type="button"
                            class="kb-button kb-button--text kb-button--secondary"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
            <div class="kb-toolbar__item">
                <span>Offer ends:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <p class="kb-promotion-card__tags">
            Lorem | ipsum
        </p>

        <h2 class="kb-card__title">
            Promotion name
        </h2>
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
            class="kb-button kb-button--text kb-button--secondary is-selected"
        >
            View offer details
        </a>
    </div>
</article>
`;

export const htmlFragmentPromotionSecondaryCard = `
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

/* Product card */
export const htmlFragmentProductCard = `
<article class="kb-card kb-product-card">
    <figure
        class="kb-card__media kb-responsive-media"
        style="--themeMediaAspectRatio: 4/3; padding-top: 75%;"
    >
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>

    <div class="kb-toolbar kb-toolbar--stock">
        <div class="kb-button-group">
            <a
                href="https://www.google.com"
                class="kb-button kb-button--text-icon"
            >
                <span class="kb-button__inner ">
                    <svg aria-hidden="true" focusable="false" class="kb-icon">
                        <use href="${KBconfig.theme}.sprite.svg#SVG007"></use>
                    </svg>
                    <span>Location</span>
                </span>
            </a>
            <a
                href="https://www.google.com"
                class="kb-button kb-button--icon kb-toolbar--stock__compare"
            >
                    <svg aria-hidden="true" focusable="false" class="kb-icon">
                        <title>Compare</title>
                        <use href="${KBconfig.theme}.sprite.svg#SVG056"></use>
                    </svg>
                    <span class="sr-only">Compare</span>
            </a>

            <div class="kb-share">
                <button
                    type="button"
                    class="kb-button kb-button--icon kb-share__button"
                    data-share-url="https://www.google.com"
                    data-share-title="google"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="kb-icon"
                    >
                        <title>Share</title>
                        <use href="${KBconfig.theme}.sprite.svg#SVG035" />
                    </svg>
                    <span class="sr-only">Share</span>
                </button>

                <div class="kb-share__fallback">
                    <label class="kb-form__label">
                        <span>Share [page title]</span>
                        <input
                            class="kb-form__input"
                            type="text"
                            value=""
                        />
                    </label>
                    <button
                        type="button"
                        class="kb-button kb-button--text kb-button--secondary"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="kb-card__content">
        <h2 class="kb-card__title">
            <a href="/">
                Product name
                <span>which might be stupidly long and wrap to multiple lines</span>
            </a>
        </h2>

        <div class="kb-product-card__specs">
            <span>
                Manual
            </span>
            <span>
                15000 KM
            </span>
            <span>
                Petrol
            </span>
        </div>

        <p class="kb-product-card__price">&pound;19,999</p>
        <p class="kb-product-card__price--discount">
            &pound;19,999
        </p>
        <p class="kb-product-card__price--was">
            <del>Was &pound;21,999</del>
        </p>
        <p class="kb-product-card__price--text">From &pound;199 per month</p>
        <small class="kb-product-card__legal kb-product-card__legal--extra">
            <span>Excluding road tax</span>
            <span>Excluding VAT</span>
        </small>
        <small class="kb-product-card__legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</small>
    </div>

    <div class="kb-button-group">
        <button
            type="button"
            class="kb-button kb-button--text-icon kb-button--toggle is-hidden"
            aria-expanded="false"
            data-quick-view
            data-quick-view-label-open="Quick view"
            data-quick-view-label-close="Close quick view"
            data-quick-view-url="/ajax/fragment-quick-view-1.html"
        >
            <span class="kb-button__inner kb-button__inner--reverse">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="kb-icon"
                >
                    <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                </svg>
                <span>Quick view</span>
            </span>
        </button>
    </div>
</article>
`;

export const htmlFragmentProductCardShort = `
<article class="kb-card kb-product-card">
    <figure
        class="kb-card__media kb-responsive-media"
        style="--themeMediaAspectRatio: 4/3; padding-top: 75%;"
    >
        <img
            class="kb-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>

    <div class="kb-toolbar kb-toolbar--stock">
        <div class="kb-button-group">
            <span class="kb-toolbar--stock__location">
                <svg aria-hidden="true" focusable="false" class="kb-icon">
                    <use href="${KBconfig.theme}.sprite.svg#SVG007"></use>
                </svg>
                <span>Location</span>
            </span>
            <a
                href="https://www.google.com"
                class="kb-button kb-button--icon kb-toolbar--stock__compare is-selected"
            >
                    <svg aria-hidden="true" focusable="false" class="kb-icon">
                        <title>Compare</title>
                        <use href="${KBconfig.theme}.sprite.svg#SVG056"></use>
                    </svg>
                    <span class="sr-only">Compare</span>
            </a>
            <div class="kb-share">
                <button
                    type="button"
                    class="kb-button kb-button--icon kb-share__button"
                    data-share-url="https://www.google.com"
                    data-share-title="google"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="kb-icon"
                    >
                        <title>Share</title>
                        <use href="${KBconfig.theme}.sprite.svg#SVG035" />
                    </svg>
                    <span class="sr-only">Share</span>
                </button>

                <div class="kb-share__fallback">
                    <label class="kb-form__label">
                        <span>Share [page title]</span>
                        <input
                            class="kb-form__input"
                            type="text"
                            value=""
                        />
                    </label>
                    <button
                        type="button"
                        class="kb-button kb-button--text kb-button--secondary"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="kb-card__content">
        <h2 class="kb-card__title">
            <a href="/">Product name</a>
        </h2>

        <div class="kb-product-card__specs">
            <span>
                Manual
            </span>
            <span>
                Petrol
            </span>
        </div>

        <p class="kb-product-card__price">&pound;19,999</p>
    </div>

    <div class="kb-button-group">
        <button
            type="button"
            class="kb-button kb-button--text-icon kb-button--toggle is-hidden"
            aria-expanded="false"
            data-quick-view
            data-quick-view-label-open="Quick view"
            data-quick-view-label-close="Close quick view"
            data-quick-view-url="/ajax/fragment-quick-view-2.html"
        >
            <span class="kb-button__inner kb-button__inner--reverse">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="kb-icon"
                >
                    <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                </svg>
                <span>Quick view</span>
            </span>
        </button>
    </div>
</article>
`;

export const htmlFragmentProductOverviewCard = `
<article class="kb-card kb-product-card kb-product-card--overview">
    <div class="kb-card__content">
        <a class="kb-product-card__block-link" href="/">
            <h2 class="kb-card__title">Product name</h2>
            <p>Explore the product name</p>
            <p>From &pound;14,999</p>
        </a>

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
    <div class="kb-card__actions kb-button-group">
        <a
            href="https://www.google.com"
            class="kb-button kb-button--text kb-button--primary"
        >
            Test drive
        </a>
        <a
            href="https://www.google.com"
            class="kb-button kb-button--text kb-button--primary"
        >
            Enquire
        </a>
    </div>
</article>
`;

export const htmlFragmentVideoCard = `
<article class="kb-card kb-video-card">
    <figure class="kb-card__media">
        ${htmlFragmentVideoPlayer}
    </figure>
    <div class="kb-card__content">
        <h3 class="kb-card__title">Card title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</article>
`;
