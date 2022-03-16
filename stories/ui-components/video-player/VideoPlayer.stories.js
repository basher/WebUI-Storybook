import docs from './VideoPlayer.mdx';

export default {
    title: 'UI Components/Video Player',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const VideoPlayer = () => `
<div class="kb-layout">
    <div class="kb-video-player">
        <a
            href="https://www.youtube.com/embed/PEkrL0tY1Rk"
            target="_blank"
            data-video-height=""
            data-video-width=""
        >
            <img
                class="kb-image"
                src="https://via.placeholder.com/400x225.png"
                alt="Meaningful video title"
                loading="lazy"
                height="225"
                width="400"
            />
        </a>
        <div data-modal-ajax-content="modal">
            <div class="kb-responsive-media"></div>
        </div>
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
