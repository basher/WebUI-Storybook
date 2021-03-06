import docs from './Modal.mdx';

export default {
    title: 'UI Components/Modal',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Modal = () => `
<div class="ui-layout">
    <p>
        <button
            type="button"
            class="ui-button ui-button--text"
            data-modal-open="modal"
            data-modal-title=""
        >
            Open modal - hardcoded content
        </button>
    </p>
</div>

<div class="ui-modal__overlay is-hidden" id="modal">
    <div class="ui-modal">
        <div
            class="ui-modal__inner"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
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

            <article>
                <h2
                    id="modal-title"
                    data-modal-title
                >
                    Modal
                </h2>

                <p>modal - paragraph of text with a <a href="#">simple text link</a> inside it.</p>
                <p>Another <a href="#">simple text link</a> to test we're trapping focus inside modal.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                <p>And here are more buttons (e.g. for submitting/cancelling a form) that close the modal too:</p>

                <div class="ui-button-group">
                    <button
                        type="button"
                        class="ui-button ui-button--text ui-button--positive"
                        data-modal-close
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        class="ui-button ui-button--text ui-button--negative"
                        data-modal-close
                    >
                        Cancel
                    </button>
                </div>
            </article>

        </div>
    </div>
</div>
`;
Modal.storyName = 'Modal HTML content rendered by server';

export const ModalAjax = () => `
<div class="ui-layout">
    <p>
        <button
            type="button"
            class="ui-button ui-button--text"
            data-modal-open="modal"
            data-modal-title="Meaningful modal title"
            data-modal-fetch-content="true"
        >
            Open modal - Ajax-fetched content
        </button>
    </p>

    <article data-modal-ajax-content="modal">
        <h2
            id="modal-title"
            data-modal-title
        >
            Modal
        </h2>

        <p>modal - this content is hidden on the page until <code>openModal()</code> is triggered.</p>
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
ModalAjax.storyName = 'Modal HTML content is Ajax-fetched';

export const ModalPageload = () => `
<div class="ui-layout">
    <p>Some dummy page content...</p>
</div>
<div class="ui-modal__overlay is-hidden" id="modal" data-auto-open-modal>
    <div class="ui-modal">
        <div
            class="ui-modal__inner"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
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

            <article>
                <h2
                    id="modal-title"
                    data-modal-title
                >
                    Modal
                </h2>

                <p>modal - paragraph of text with a <a href="#">simple text link</a> inside it.</p>
                <p>Another <a href="#">simple text link</a> to test we're trapping focus inside modal.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
                <p>And here are more buttons (e.g. for submitting/cancelling a form) that close the modal too:</p>

                <div class="ui-button-group">
                    <button
                        type="button"
                        class="ui-button ui-button--text ui-button--positive"
                        data-modal-close
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        class="ui-button ui-button--text ui-button--negative"
                        data-modal-close
                    >
                        Cancel
                    </button>
                </div>
            </article>

        </div>
    </div>
</div>
`;
ModalPageload.storyName = 'Modal shows on page load';
