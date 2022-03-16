export const htmlFragmentImage = `
<img
    class="kb-image"
    src="https://via.placeholder.com/1024x655.png"
    srcset="https://via.placeholder.com/768x492.png 768w,
            https://via.placeholder.com/1024x655.png 1024w,
            https://via.placeholder.com/2000x1280.png 2000w"
    sizes="(min-width: 1024px) 2000px,
            (min-width: 768px) 1024px,
            100vw"
    alt="[banner alt]"
    loading="lazy"
    height="1280"
    width="2000"
/>
`;

export const htmlFragmentImage2 = `
<img
    class="kb-image"
    src="https://via.placeholder.com/1024x512.png"
    srcset="https://via.placeholder.com/768x384.png 768w,
            https://via.placeholder.com/1024x512.png 1024w,
            https://via.placeholder.com/2000x1000.png 2000w"
    sizes="(min-width: 1024px) 2000px,
            (min-width: 768px) 1000px,
            100vw"
    alt="[banner alt]"
    loading="lazy"
    height="1000"
    width="2000"
/>
`;

export const htmlFragmentBannerNewsPromos = `
<div class="kb-banner">
    <div class="kb-banner__inner">
        <img
            class="kb-banner__image"
            src="https://via.placeholder.com/500x250.png"
            alt="[banner alt]"
            loading="lazy"
            height="250"
            width="500"
        />
        <a href="/" class="kb-banner__overlay kb-banner__overlay--block-link">
            <div class="kb-banner__text kb-banner__text--large">Banner text large - clickable</div>
            <div class="kb-banner__text">Banner text small - lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        </a>
    </div>
</div>
`;

export const htmlFragmentSlideBanner1 = `
<div class="kb-banner kb-banner--hero">
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        ${htmlFragmentImage}

        <div class="kb-banner__overlay is-hidden-on-small">
            <div class="kb-banner__text kb-banner__text--large">Banner 1</div>
            <div class="kb-banner__text">Banner text small - lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <a href="/" class="kb-button kb-button--text kb-button--primary kb-button--small">
                Banner 1
            </a>
            <small>Banner smallprint</small>
        </div>
    </div>

    <div class="kb-banner__overlay is-hidden-on-medium">
        <div class="kb-banner__text kb-banner__text--large">Banner 1</div>
        <div class="kb-banner__text">Banner text small - lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <a href="/" class="kb-button kb-button--text kb-button--primary kb-button--small">
            Banner 1
        </a>
        <small>Banner smallprint</small>
    </div>
</div>
`;

export const htmlFragmentSlideBanner2 = `
<div class="kb-banner kb-banner--hero">
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        ${htmlFragmentImage2}

        <div class="kb-banner__overlay is-hidden-on-small">
            <div class="kb-banner__text kb-banner__text--large">Banner 2</div>
            <div class="kb-banner__text">Banner text small.</div>
            <a href="/" class="kb-button kb-button--text kb-button--primary kb-button--small">
                Banner 2
            </a>
        </div>
    </div>

    <div class="kb-banner__overlay is-hidden-on-medium">
        <div class="kb-banner__text kb-banner__text--large">Banner 2</div>
        <div class="kb-banner__text">Banner text small.</div>
        <a href="/" class="kb-button kb-button--text kb-button--primary kb-button--small">
            Banner 2
        </a>
    </div>
</div>
`;

export const htmlFragmentSlideBanner3 = `
<div class="kb-banner kb-banner--hero">
    <div
        class="kb-banner__inner kb-responsive-media"
        style="--themeMediaAspectRatio: 21/9; padding-top: 42.857%;"
    >
        ${htmlFragmentImage}

        <div class="kb-banner__overlay is-hidden-on-small">
            <a
                href="/"
                class="kb-button kb-button--text-icon kb-button--primary"
            >
                <span class="kb-button__inner kb-button__inner--reverse">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        class="kb-icon"
                    >
                        <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                    </svg>
                    <span>Banner 3</span>
                </span>
            </a>
        </div>
    </div>

    <div class="kb-banner__overlay is-hidden-on-medium">
            <a
            href="/"
            class="kb-button kb-button--text-icon kb-button--primary"
        >
            <span class="kb-button__inner kb-button__inner--reverse">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    class="kb-icon"
                >
                    <use href="${KBconfig.theme}.sprite.svg#SVG012" />
                </svg>
                <span>Banner 3</span>
            </span>
        </a>
    </div>
</div>
`;
