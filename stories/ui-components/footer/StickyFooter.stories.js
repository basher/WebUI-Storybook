import docs from './StickyFooter.mdx';

export default {
    title: 'UI Components/Footer/Sticky',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

const style = `
<style>
    html,
    .sb-show-main {
        height: 100%;
    }
    .sb-show-main #root {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        position: relative;
    }
</style>
`;

export const StickyFooter = () => `
${style}
<div id="top" style="flex-grow: 1;">Top of page</div>

<div class="ui-layout__sticky ui-layout__sticky--footer">
    <div class="ui-layout__inner">
        <nav
            aria-label="sticky footer"
            class="ui-sticky-footer"
        >
            <ul class="ui-sticky-footer__list">
                <li class="ui-sticky-footer__item">
                    <a
                        href="#"
                        class="ui-sticky-footer__button ui-button ui-button--text-icon"
                    >
                        <span class="ui-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG034" />
                            </svg>
                            <span>Sticky link</span>
                        </span>
                    </a>
                </li>

                <li class="ui-sticky-footer__item">
                    <a
                        href="#"
                        class="ui-sticky-footer__button ui-button ui-button--text-icon"
                    >
                        <span class="ui-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG034" />
                            </svg>
                            <span>Sticky link</span>
                        </span>
                    </a>
                </li>

                <li class="ui-sticky-footer__item">
                    <a
                        href="#top"
                        class="ui-sticky-footer__button ui-button ui-button--text-icon"
                        id="back-to-top"
                    >
                        <span class="ui-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="ui-icon"
                            >
                                <use href="${UIconfig.theme}.sprite.svg#SVG019" />
                            </svg>
                            <span>Back to top</span>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;
StickyFooter.storyName = 'Sticky footer';
