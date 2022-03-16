import docs from './Tabs.mdx';
import { htmlFragmentContent } from './_htmlFragments';

export default {
    title: 'UI Components/Disclosure/Tabs',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        tabsNoAccordion: {
            control: 'boolean',
        },
    },
};

export const Tabs = (args) => `
<div
    class="ui-tabs"
    ${args.tabsNoAccordion === true ? 'data-tabs-no-accordion="true"' : ''}
>
    <h2 class="ui-tabs__title">Tabs title 1</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-tabs__title">Tabs title 2</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 2.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-tabs__title">Tabs title 3</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 3.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;

export const TabsNotOpen = (args) => `
<div
    class="ui-tabs"
    data-open="false"
>
    <h2 class="ui-tabs__title">Tabs title 1</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-tabs__title">Tabs title 2</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 2.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-tabs__title">Tabs title 3</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 3.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;
TabsNotOpen.storyName = 'Tabs (1st one closed)';

export const TabsVertical = () => `
<div class="ui-tabs ui-tabs--vertical">
    <h2 class="ui-tabs__title">Tabs title 1</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-tabs__title">Tabs title 2</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 2.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-tabs__title">Tabs title 3</h2>
    <div class="ui-tabs__content">
        <p>Tabs content 3.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;
TabsVertical.storyName = 'Tabs vertical';
