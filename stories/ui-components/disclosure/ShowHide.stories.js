import docs from './ShowHide.mdx';
import { htmlFragmentContent } from './_htmlFragments';

export default {
    title: 'UI Components/Disclosure/Show hide',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ShowHide = () => `
<div class="kb-show-hide">
    <div class="kb-show-hide__content">
        ${htmlFragmentContent}
    </div>
</div>
`;
ShowHide.storyName = 'Show | hide';
