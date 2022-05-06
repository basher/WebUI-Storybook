import { htmlFragmentVideoPlayer } from '../video-player/_htmlFragments';

/* Default card */
export const htmlFragmentDefaultCard = `
<div class="ui-card__content">
    <h3 class="ui-card__title">Card title</h3>
    <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
</div>
<figure class="ui-card__media">
    <img
        class="ui-image"
        src="https://via.placeholder.com/400x225.png"
        alt=""
        loading="lazy"
        height="225"
        width="400"
    />
</figure>
`;
export const htmlFragmentDefaultCard2 = `
<div class="ui-card__content">
    <h3 class="ui-card__title">Card title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium.</p>
</div>
<figure class="ui-card__media">
    <img
        class="ui-image"
        src="https://via.placeholder.com/400x225.png"
        alt=""
        loading="lazy"
        height="225"
        width="400"
    />
</figure>
`;

export const htmlFragmentDefaultCardButtons = `
<div class="ui-card__actions ui-button-group">
    <a href="#" class="ui-button ui-button--text ui-button--primary">
        Primary text link
    </a>
    <a href="#" class="ui-button ui-button--text ui-button--secondary">
        Secondary text link
    </a>
</div>
`;

/* Contact card */
export const htmlFragmentContactCardAddress = `
<article class="ui-card ui-contact-card">
    <div class="ui-card__content">
        <h3 class="ui-card__title">
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
    <div class="ui-card__actions ui-button-group">
        <a href="#" class="ui-button ui-button--text ui-button--primary">
            Primary text link
        </a>
    </div>
</article>
`;

export const htmlFragmentContactCardPerson = `
<article class="ui-card ui-contact-card ui-contact-card--person">
    <div class="ui-card__content">
        <h3 class="ui-card__title">
            <a href="#">Contact name</a>
        </h3>
        <p>Job title</p>
        <p>
            <a href="mailto:contact@Web.com">contact@Web.com</a>
        </p>
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
</article>
`;

/* News card */
export const htmlFragmentNewsCard = `
<article class="ui-card ui-news-card">
    <div class="ui-card__content">
        <div class="ui-toolbar ui-toolbar--news">
            <div class="ui-button-group">
                <div class="ui-share">
                    <button
                        type="button"
                        class="ui-button ui-button--icon ui-share__button"
                        data-share-url="https://www.google.com"
                        data-share-title="google"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <title>Share</title>
                            <use href="${UIconfig.theme}.sprite.svg#SVG035" />
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>

                    <div class="ui-share__fallback">
                        <label class="ui-form__label">
                            <span>Share [page title]</span>
                            <input
                                class="ui-form__input"
                                type="text"
                                value=""
                            />
                        </label>
                        <button
                            type="button"
                            class="ui-button ui-button--text ui-button--secondary"
                        >
                            Copy
                        </button>
                    </div>
                </div>
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

export const htmlFragmentNewsCardShort = `
<article class="ui-card ui-news-card">
    <div class="ui-card__content">
        <div class="ui-toolbar ui-toolbar--news">
            <div class="ui-button-group">
                <div class="ui-share">
                    <button
                        type="button"
                        class="ui-button ui-button--icon ui-share__button"
                        data-share-url="https://www.google.com"
                        data-share-title="google"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            class="ui-icon"
                        >
                            <title>Share</title>
                            <use href="${UIconfig.theme}.sprite.svg#SVG035" />
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>

                    <div class="ui-share__fallback">
                        <label class="ui-form__label">
                            <span>Share [page title]</span>
                            <input
                                class="ui-form__input"
                                type="text"
                                value=""
                            />
                        </label>
                        <button
                            type="button"
                            class="ui-button ui-button--text ui-button--secondary"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
            <div class="ui-toolbar__item">
                <span>Posted:</span>
                <span>28/02/2030</span>
            </div>
        </div>

        <h3 class="ui-card__title">
            <a href="#">
                News name
            </a>
        </h3>

        <div class="ui-card__text">
            Lorem ipsum dolor sit.
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

/* Product card */
export const htmlFragmentProductCard = `
<article class="ui-card ui-product-card">
    <figure
        class="ui-card__media ui-responsive-media"
        style="--themeMediaAspectRatio: 4/3; padding-top: 75%;"
    >
        <img
            class="ui-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>

    <div class="ui-toolbar ui-toolbar--product">
        <div class="ui-button-group">
            <a
                href="https://www.google.com"
                class="ui-button ui-button--text-icon"
            >
                <span class="ui-button__inner ">
                    <svg aria-hidden="true" focusable="false" class="ui-icon">
                        <use href="${UIconfig.theme}.sprite.svg#SVG007"></use>
                    </svg>
                    <span>Location</span>
                </span>
            </a>
            <a
                href="https://www.google.com"
                class="ui-button ui-button--icon ui-toolbar--product__compare"
            >
                    <svg aria-hidden="true" focusable="false" class="ui-icon">
                        <title>Compare</title>
                        <use href="${UIconfig.theme}.sprite.svg#SVG056"></use>
                    </svg>
                    <span class="sr-only">Compare</span>
            </a>

            <div class="ui-share">
                <button
                    type="button"
                    class="ui-button ui-button--icon ui-share__button"
                    data-share-url="https://www.google.com"
                    data-share-title="google"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="ui-icon"
                    >
                        <title>Share</title>
                        <use href="${UIconfig.theme}.sprite.svg#SVG035" />
                    </svg>
                    <span class="sr-only">Share</span>
                </button>

                <div class="ui-share__fallback">
                    <label class="ui-form__label">
                        <span>Share [page title]</span>
                        <input
                            class="ui-form__input"
                            type="text"
                            value=""
                        />
                    </label>
                    <button
                        type="button"
                        class="ui-button ui-button--text ui-button--secondary"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="ui-card__content">
        <h2 class="ui-card__title">
            <a href="/">
                Product name
                <span>which might be stupidly long and wrap to multiple lines</span>
            </a>
        </h2>

        <div class="ui-product-card__specs">
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

        <p class="ui-product-card__price">&pound;19,999</p>
        <p class="ui-product-card__price--discount">
            &pound;19,999
        </p>
        <p class="ui-product-card__price--was">
            <del>Was &pound;21,999</del>
        </p>
        <p class="ui-product-card__price--text">From &pound;199 per month</p>
        <small class="ui-product-card__legal ui-product-card__legal--extra">
            <span>Excluding road tax</span>
            <span>Excluding VAT</span>
        </small>
        <small class="ui-product-card__legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae.</small>
    </div>

    <div class="ui-button-group">
        <button
            type="button"
            class="ui-button ui-button--text-icon ui-button--toggle is-hidden"
            aria-expanded="false"
            data-quick-view
            data-quick-view-label-open="Quick view"
            data-quick-view-label-close="Close quick view"
            data-quick-view-url="/ajax/fragment-quick-view-1.html"
        >
            <span class="ui-button__inner ui-button__inner--reverse">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="ui-icon"
                >
                    <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                </svg>
                <span>Quick view</span>
            </span>
        </button>
    </div>
</article>
`;

export const htmlFragmentProductCardShort = `
<article class="ui-card ui-product-card">
    <figure
        class="ui-card__media ui-responsive-media"
        style="--themeMediaAspectRatio: 4/3; padding-top: 75%;"
    >
        <img
            class="ui-image"
            src="https://via.placeholder.com/400x300.png"
            alt=""
            loading="lazy"
            height="300"
            width="400"
        />
    </figure>

    <div class="ui-toolbar ui-toolbar--product">
        <div class="ui-button-group">
            <span class="ui-toolbar--product__location">
                <svg aria-hidden="true" focusable="false" class="ui-icon">
                    <use href="${UIconfig.theme}.sprite.svg#SVG007"></use>
                </svg>
                <span>Location</span>
            </span>
            <a
                href="https://www.google.com"
                class="ui-button ui-button--icon ui-toolbar--product__compare is-selected"
            >
                    <svg aria-hidden="true" focusable="false" class="ui-icon">
                        <title>Compare</title>
                        <use href="${UIconfig.theme}.sprite.svg#SVG056"></use>
                    </svg>
                    <span class="sr-only">Compare</span>
            </a>
            <div class="ui-share">
                <button
                    type="button"
                    class="ui-button ui-button--icon ui-share__button"
                    data-share-url="https://www.google.com"
                    data-share-title="google"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="ui-icon"
                    >
                        <title>Share</title>
                        <use href="${UIconfig.theme}.sprite.svg#SVG035" />
                    </svg>
                    <span class="sr-only">Share</span>
                </button>

                <div class="ui-share__fallback">
                    <label class="ui-form__label">
                        <span>Share [page title]</span>
                        <input
                            class="ui-form__input"
                            type="text"
                            value=""
                        />
                    </label>
                    <button
                        type="button"
                        class="ui-button ui-button--text ui-button--secondary"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="ui-card__content">
        <h2 class="ui-card__title">
            <a href="/">Product name</a>
        </h2>

        <div class="ui-product-card__specs">
            <span>
                Manual
            </span>
            <span>
                Petrol
            </span>
        </div>

        <p class="ui-product-card__price">&pound;19,999</p>
    </div>

    <div class="ui-button-group">
        <button
            type="button"
            class="ui-button ui-button--text-icon ui-button--toggle is-hidden"
            aria-expanded="false"
            data-quick-view
            data-quick-view-label-open="Quick view"
            data-quick-view-label-close="Close quick view"
            data-quick-view-url="/ajax/fragment-quick-view-2.html"
        >
            <span class="ui-button__inner ui-button__inner--reverse">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="ui-icon"
                >
                    <use href="${UIconfig.theme}.sprite.svg#SVG012" />
                </svg>
                <span>Quick view</span>
            </span>
        </button>
    </div>
</article>
`;

export const htmlFragmentProductOverviewCard = `
<article class="ui-card ui-product-card ui-product-card--overview">
    <div class="ui-card__content">
        <a class="ui-product-card__block-link" href="/">
            <h2 class="ui-card__title">Product name</h2>
            <p>Explore the product name</p>
            <p>From &pound;14,999</p>
        </a>

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
    <div class="ui-card__actions ui-button-group">
        <a
            href="https://www.google.com"
            class="ui-button ui-button--text ui-button--primary"
        >
            Enquire
        </a>
    </div>
</article>
`;

export const htmlFragmentVideoCard = `
<article class="ui-card ui-video-card">
    <figure class="ui-card__media">
        ${htmlFragmentVideoPlayer}
    </figure>
    <div class="ui-card__content">
        <h3 class="ui-card__title">Card title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</article>
`;
