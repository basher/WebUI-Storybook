import docs from './Toolbar.mdx';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Toolbar',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ToolbarNews = () => `
<div class="ui-toolbar ui-toolbar--news">
    <div class="ui-button-group">
        ${htmlFragmentShare}
    </div>
    <div class="ui-toolbar__item">
        <span>Posted:</span>
        <span>28/02/2030</span>
    </div>
</div>
`;
ToolbarNews.storyName = 'News toolbar';

export const ToolbarPromotions = () => `
<div class="ui-toolbar ui-toolbar--promotions">
    <div class="ui-button-group">
        ${htmlFragmentShare}
    </div>
    <div class="ui-toolbar__item">
        <span>Offer ends:</span>
        <span>28/02/2030</span>
    </div>
</div>
`;
ToolbarPromotions.storyName = 'Promotions toolbar';
