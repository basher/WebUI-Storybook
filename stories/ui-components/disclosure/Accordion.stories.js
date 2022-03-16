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
<div class="kb-accordion">
    <h2 class="kb-accordion__title">Accordion title 1</h2>
    <div class="kb-accordion__content">
        <p>Accordion content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="kb-accordion__title">Accordion title 2</h2>
    <div class="kb-accordion__content">
        <p>Accordion content 2.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;

export const AccordionOpen = () => `
<div class="kb-accordion" data-open="true">
    <h2 class="kb-accordion__title">Accordion title 1</h2>
    <div class="kb-accordion__content">
        <p>Accordion content 1.</p>
        ${htmlFragmentContent}
    </div>

    <h2 class="kb-accordion__title">Accordion title 2</h2>
    <div class="kb-accordion__content">
        <p>Accordion content 2.</p>
        ${htmlFragmentContent}
    </div>
</div>
`;
AccordionOpen.storyName = '1st accordion open by default';
