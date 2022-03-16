import docs from './PageLayout.mdx';

export default {
    title: 'UI Components/Layouts/Page layout',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

const style = `
<style>
    .sb-show-main.sb-main-padded {
        padding: 0;
    }
    .kb-layout__sticky .kb-layout__inner,
    .kb-layout__header .kb-layout__inner {
        background-color: rgba(235, 201, 90, 0.2);
        border: 1px solid rgb(235, 201, 90);
        padding: 1rem 0.25rem;
    }
    .kb-layout__footer .kb-layout__inner {
        background-color: rgba(235, 201, 90, 0.2);
        padding: 1rem 0.25rem;
    }
    .kb-layout__main .kb-layout__inner > div p {
        border: 2px dashed rgb(235, 201, 90);
        padding: 0.25rem;
    }
</style>
`;

export const PageLayout = () => `
${style}
<div class="kb-layout">

    <header
        id="header"
        class="kb-layout__header kb-layout__sticky kb-layout__sticky--header"
    >
        <div class="kb-layout__header__overlay"></div>
        <div class="kb-layout__inner">
            Sticky <code>&lt;header&gt;</code>, whose internal content is managed by CSS Grid
        </div>
    </header>

    <main id="main" class="kb-layout__main">

        <div class="kb-layout__inner">

            <div class="kb-layout__fullbleed">
                <p>
                    "<b>kb-layout__fullbleed</b>" container (e.g. for banners) that extends 100% of browser viewport, irrespective of any <i>bleed</i> areas.
                </p>
            </div>

            <div class="kb-layout__has-max-width">
                <p>
                    "<b>kb-layout__has-max-width</b>" container whose <code>max-width</code> is capped, based on the value of the <code>--themeMaxContentWidth</code> CSS variable.
                </p>
            </div>

            <div class="kb-layout__has-no-max-width">
                <p>
                    "<b>kb-layout__has-no-max-width</b>" container whose width is 100% of the available space.
                </p>
            </div>

            <div>
                <p>
                    Simple <code>&lt;div&gt;</code> container with no additional CSS classnames whose width is also 100% of the available space.
                </p>
            </div>

            <div class="kb-layout__has-centered-content">
                <p>
                    "<b>kb-layout__has-centered-content</b>" container whose width is also 100% of the available space, but whose content is centered.
                </p>
            </div>

        </div>

    </main>

    <footer id="footer" class="kb-layout__footer">
        <div class="kb-layout__inner">
            <code>&lt;footer&gt;</code>
        </div>
    </footer>

    <div class="kb-layout__sticky kb-layout__sticky--footer">
        <div class="kb-layout__footer__overlay"></div>
        <div class="kb-layout__inner">
            Sticky footer <code>&lt;div&gt;</code>
        </div>
    </div>

</div>
`;
PageLayout.storyName = 'Page layout';

export const PageLayoutVerticalHeader = () => `
${style}
<div class="kb-layout kb-layout--has-vertical-header">

    <header
        id="header"
        class="kb-layout__header"
    >
        <div class="kb-layout__header__overlay"></div>
        <div class="kb-layout__inner">
            Vertical <code>&lt;header&gt;</code>
        </div>
    </header>

    <main id="main" class="kb-layout__main">

        <div class="kb-layout__inner">

            <div class="kb-layout__fullbleed">
                <p>
                    "<b>kb-layout__fullbleed</b>" container (e.g. for banners) that extends 100% of browser viewport, irrespective of any <i>bleed</i> areas.
                </p>
            </div>

            <div class="kb-layout__has-max-width">
                <p>
                    "<b>kb-layout__has-max-width</b>" container whose <code>max-width</code> is capped, based on the value of the <code>--themeMaxContentWidth</code> CSS variable.
                </p>
            </div>

            <div class="kb-layout__has-no-max-width">
                <p>
                    "<b>kb-layout__has-no-max-width</b>" container whose width is 100% of the available space.
                </p>
            </div>

            <div>
                <p>
                    Simple <code>&lt;div&gt;</code> container with no additional CSS classnames whose width is also 100% of the available space.
                </p>
            </div>

            <div class="kb-layout__has-centered-content">
                <p>
                    "<b>kb-layout__has-centered-content</b>" container whose width is also 100% of the available space, but whose content is centered.
                </p>
            </div>

        </div>

    </main>

    <footer id="footer" class="kb-layout__footer">
        <div class="kb-layout__inner">
            <code>&lt;footer&gt;</code>
        </div>
    </footer>

    <div class="kb-layout__sticky">
        <div class="kb-layout__footer__overlay"></div>
        <div class="kb-layout__inner">
            Sticky footer <code>&lt;div&gt;</code>
        </div>
    </div>
</div>
`;
PageLayoutVerticalHeader.storyName = 'Page layout with vertical header';
