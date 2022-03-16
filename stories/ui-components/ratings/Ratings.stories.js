import docs from './Ratings.mdx';

export default {
    title: 'UI Components/Ratings',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Ratings = () => `
<div class="kb-ratings">
    <div class="kb-ratings__stars" style="--rating: 68%;"></div>
    <p class="kb-ratings__text">
        <a href="#">
            <span>Rating</span>
            3.4 (based on 195 reviews)
        </a>
    </p>
</div>
`;

export const RatingsBanner = () => `
<div class="kb-ratings-banner">
    <p class="kb-ratings-banner__branch">
        Branch name
    </p>

    <div class="kb-ratings">
        <div class="kb-ratings__stars" style="--rating: 68%;"></div>
        <p class="kb-ratings__text">
            <span>Rating</span>
            3.4 (based on 195 reviews)
        </p>
    </div>

    <div class="kb-ratings-banner__inner">
        <img
            class="kb-image"
            src="https://via.placeholder.com/200x25.png"
            alt="ratings provider"
        />

        <a
            href="#"
            class="kb-button kb-button--text kb-button--secondary kb-button--small"
        >
            View responses
        </a>
    </div>
</div>
`;
RatingsBanner.storyName = 'Ratings banner';

export const RatingsSignpost = () => `
<div class="kb-ratings-signpost__wrap">
    <a class="kb-ratings-signpost" href="#">
        <span>
            Reviews
        </span>

        <svg
            aria-hidden="true"
            focusable="false"
            class="kb-icon"
        >
            <use href="${KBconfig.theme}.sprite.svg#SVG072" />
        </svg>
    </a>
</div>
`;
RatingsSignpost.storyName = 'Ratings signpost';
