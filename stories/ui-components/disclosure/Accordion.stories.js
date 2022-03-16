import docs from './Accordion.mdx';
import { htmlFragmentContent } from './_htmlFragments';

export default {
    title: 'UI Components/Disclosure/Accordion',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const Accordion = () => `
<div class="ui-accordion">
    <h2 class="ui-accordion__title">Accordion title 1</h2>
    <div class="ui-accordion__content">
        <p>Accordion content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-accordion__title">Accordion title 2</h2>
    <div class="ui-accordion__content">
        <p>Accordion content 2.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;

export const AccordionOpen = () => `
<div class="ui-accordion" data-open="true">
    <h2 class="ui-accordion__title">Accordion title 1</h2>
    <div class="ui-accordion__content">
        <p>Accordion content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="ui-accordion__title">Accordion title 2</h2>
    <div class="ui-accordion__content">
        <p>Accordion content 2.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;
AccordionOpen.storyName = '1st accordion open by default';
