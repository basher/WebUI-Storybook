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
    .ui-layout__sticky .ui-layout__inner,
    .ui-layout__header .ui-layout__inner {
        background-color: rgba(235, 201, 90, 0.2);
        border: 1px solid rgb(235, 201, 90);
        padding: 1rem 0.25rem;
    }
    .ui-layout__footer .ui-layout__inner {
        background-color: rgba(235, 201, 90, 0.2);
        padding: 1rem 0.25rem;
    }
    .ui-layout__main .ui-layout__inner > div p {
        border: 2px dashed rgb(235, 201, 90);
        padding: 0.25rem;
    }
</style>
`;

export const PageLayout = () => `
${style}
<div class="ui-layout">

    <header
        id="header"
        class="ui-layout__header ui-layout__sticky ui-layout__sticky--header"
    >
        <div class="ui-layout__header__overlay"></div>
        <div class="ui-layout__inner">
            Sticky <code>&lt;header&gt;</code>, whose internal content is managed by CSS Grid
        </div>
    </header>

    <main id="main" class="ui-layout__main">

        <div class="ui-layout__inner">

            <div class="ui-layout__fullbleed">
                <p>
                    "<b>ui-layout__fullbleed</b>" container (e.g. for banners) that extends 100% of browser viewport, irrespective of any <i>bleed</i> areas.
                </p>
            </div>

            <div class="ui-layout__has-max-width">
                <p>
                    "<b>ui-layout__has-max-width</b>" container whose <code>max-width</code> is capped, based on the value of the <code>--themeMaxContentWidth</code> CSS variable.
                </p>
            </div>

            <div class="ui-layout__has-no-max-width">
                <p>
                    "<b>ui-layout__has-no-max-width</b>" container whose width is 100% of the available space.
                </p>
            </div>

            <div>
                <p>
                    Simple <code>&lt;div&gt;</code> container with no additional CSS classnames whose width is also 100% of the available space.
                </p>
            </div>

            <div class="ui-layout__has-centered-content">
                <p>
                    "<b>ui-layout__has-centered-content</b>" container whose width is also 100% of the available space, but whose content is centered.
                </p>
            </div>

        </div>

    </main>

    <footer id="footer" class="ui-layout__footer">
        <div class="ui-layout__inner">
            <code>&lt;footer&gt;</code>
        </div>
    </footer>

    <div class="ui-layout__sticky ui-layout__sticky--footer">
        <div class="ui-layout__footer__overlay"></div>
        <div class="ui-layout__inner">
            Sticky footer <code>&lt;div&gt;</code>
        </div>
    </div>

</div>
`;
PageLayout.storyName = 'Page layout';

export const PageLayoutVerticalHeader = () => `
${style}
<div class="ui-layout ui-layout--has-vertical-header">

    <header
        id="header"
        class="ui-layout__header"
    >
        <div class="ui-layout__header__overlay"></div>
        <div class="ui-layout__inner">
            Vertical <code>&lt;header&gt;</code>
        </div>
    </header>

    <main id="main" class="ui-layout__main">

        <div class="ui-layout__inner">

            <div class="ui-layout__fullbleed">
                <p>
                    "<b>ui-layout__fullbleed</b>" container (e.g. for banners) that extends 100% of browser viewport, irrespective of any <i>bleed</i> areas.
                </p>
            </div>

            <div class="ui-layout__has-max-width">
                <p>
                    "<b>ui-layout__has-max-width</b>" container whose <code>max-width</code> is capped, based on the value of the <code>--themeMaxContentWidth</code> CSS variable.
                </p>
            </div>

            <div class="ui-layout__has-no-max-width">
                <p>
                    "<b>ui-layout__has-no-max-width</b>" container whose width is 100% of the available space.
                </p>
            </div>

            <div>
                <p>
                    Simple <code>&lt;div&gt;</code> container with no additional CSS classnames whose width is also 100% of the available space.
                </p>
            </div>

            <div class="ui-layout__has-centered-content">
                <p>
                    "<b>ui-layout__has-centered-content</b>" container whose width is also 100% of the available space, but whose content is centered.
                </p>
            </div>

        </div>

    </main>

    <footer id="footer" class="ui-layout__footer">
        <div class="ui-layout__inner">
            <code>&lt;footer&gt;</code>
        </div>
    </footer>

    <div class="ui-layout__sticky">
        <div class="ui-layout__footer__overlay"></div>
        <div class="ui-layout__inner">
            Sticky footer <code>&lt;div&gt;</code>
        </div>
    </div>
</div>
`;
PageLayoutVerticalHeader.storyName = 'Page layout with vertical header';
