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

<div class="kb-layout__sticky kb-layout__sticky--footer">
    <div class="kb-layout__inner">
        <nav
            aria-label="sticky footer"
            class="kb-sticky-footer"
        >
            <ul class="kb-sticky-footer__list">
                <li class="kb-sticky-footer__item">
                    <a
                        href="#"
                        class="kb-sticky-footer__button kb-button kb-button--text-icon"
                    >
                        <span class="kb-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG034" />
                            </svg>
                            <span>Sticky link</span>
                        </span>
                    </a>
                </li>

                <li class="kb-sticky-footer__item">
                    <a
                        href="#"
                        class="kb-sticky-footer__button kb-button kb-button--text-icon"
                    >
                        <span class="kb-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG034" />
                            </svg>
                            <span>Sticky link</span>
                        </span>
                    </a>
                </li>

                <li class="kb-sticky-footer__item">
                    <a
                        href="#top"
                        class="kb-sticky-footer__button kb-button kb-button--text-icon"
                        id="back-to-top"
                    >
                        <span class="kb-button__inner">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                class="kb-icon"
                            >
                                <use href="${KBconfig.theme}.sprite.svg#SVG019" />
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
