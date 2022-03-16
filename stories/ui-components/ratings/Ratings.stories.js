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
<div class="ui-ratings">
    <div class="ui-ratings__stars" style="--rating: 68%;"></div>
    <p class="ui-ratings__text">
        <a href="#">
            <span>Rating</span>
            3.4 (based on 195 reviews)
        </a>
    </p>
</div>
`;

export const RatingsBanner = () => `
<div class="ui-ratings-banner">
    <p class="ui-ratings-banner__branch">
        Branch name
    </p>

    <div class="ui-ratings">
        <div class="ui-ratings__stars" style="--rating: 68%;"></div>
        <p class="ui-ratings__text">
            <span>Rating</span>
            3.4 (based on 195 reviews)
        </p>
    </div>

    <div class="ui-ratings-banner__inner">
        <img
            class="ui-image"
            src="https://via.placeholder.com/200x25.png"
            alt="ratings provider"
        />

        <a
            href="#"
            class="ui-button ui-button--text ui-button--secondary ui-button--small"
        >
            View responses
        </a>
    </div>
</div>
`;
RatingsBanner.storyName = 'Ratings banner';

export const RatingsSignpost = () => `
<div class="ui-ratings-signpost__wrap">
    <a class="ui-ratings-signpost" href="#">
        <span>
            Reviews
        </span>

        <svg
            aria-hidden="true"
            focusable="false"
            class="ui-icon"
        >
            <use href="${UIconfig.theme}.sprite.svg#SVG072" />
        </svg>
    </a>
</div>
`;
RatingsSignpost.storyName = 'Ratings signpost';
