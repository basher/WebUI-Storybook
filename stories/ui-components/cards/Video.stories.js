import docs from './Video.mdx';
import { htmlFragmentVideoCard } from './_htmlFragments';
import { htmlFragmentVideoPlayer } from '../video-player/_htmlFragments';

export default {
    title: 'UI Components/Cards/Video',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        cardOrientation: {
            control: {
                type: 'select',
                options: ['media-inline', 'media-inline-alt'],
            },
        },
    },
};

export const VideoCard = (args) => `
<div class="ui-layout">
    <article class="ui-card ui-video-card ui-card--${args.cardOrientation}">
        <figure class="ui-card__media">
            ${htmlFragmentVideoPlayer}
        </figure>
        <div class="ui-card__content">
            <h3 class="ui-card__title">Card title</h3>
            <p>Paragraph of text with a <a href="#">simple text link</a> inside it.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        </div>
    </article>
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
VideoCard.storyName = 'Video card';

export const VideoCardGrid = () => `
<div class="ui-layout">
    <ul class="ui-grid ui-video-card-grid">
        <li>${htmlFragmentVideoCard}</li>
        <li>${htmlFragmentVideoCard}</li>
        <li>${htmlFragmentVideoCard}</li>
    </ul>
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
VideoCardGrid.storyName = 'In a grid';
