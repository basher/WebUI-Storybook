import docs from './StockToolbar.mdx';
import { htmlFragmentShare } from '../share/_htmlFragments';

export default {
    title: 'UI Components/Toolbar/Stock Toolbar',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const ToolbarStock = () => `
<div class="kb-toolbar kb-toolbar--stock">
    <div class="kb-button-group">
        <a
            href="https://www.google.com"
            class="kb-button kb-button--text-icon"
        >
            <span class="kb-button__inner ">
                <svg aria-hidden="true" focusable="false" class="kb-icon">
                    <use href="${KBconfig.theme}.sprite.svg#SVG007"></use>
                </svg>
                <span>Location</span>
            </span>
        </a>
        <a
            href="https://www.google.com"
            class="kb-button kb-button--icon"
        >
                <svg aria-hidden="true" focusable="false" class="kb-icon">
                    <title>Print</title>
                    <use href="${KBconfig.theme}.sprite.svg#SVG036"></use>
                </svg>
                <span class="sr-only">Print</span>
        </a>
        <a
            href="https://www.google.com"
            class="kb-button kb-button--icon kb-toolbar--stock__compare"
        >
                <svg aria-hidden="true" focusable="false" class="kb-icon">
                    <title>Compare</title>
                    <use href="${KBconfig.theme}.sprite.svg#SVG056"></use>
                </svg>
                <span class="sr-only">Compare</span>
        </a>
        ${htmlFragmentShare}
    </div>
</div>
`;
ToolbarStock.storyName = 'Stock toolbar';

export const ToolbarStockNoLink = () => `
<div class="kb-toolbar kb-toolbar--stock">
    <div class="kb-button-group">
        <span class="kb-toolbar--stock__location">
            <svg aria-hidden="true" focusable="false" class="kb-icon">
                <use href="${KBconfig.theme}.sprite.svg#SVG007"></use>
            </svg>
            <span>Location</span>
        </span>
        <a
            href="https://www.google.com"
            class="kb-button kb-button--icon"
        >
                <svg aria-hidden="true" focusable="false" class="kb-icon">
                    <title>Print</title>
                    <use href="${KBconfig.theme}.sprite.svg#SVG036"></use>
                </svg>
                <span class="sr-only">Print</span>
        </a>
        <a
            href="https://www.google.com"
            class="kb-button kb-button--icon kb-toolbar--stock__compare"
        >
                <svg aria-hidden="true" focusable="false" class="kb-icon">
                    <title>Compare</title>
                    <use href="${KBconfig.theme}.sprite.svg#SVG056"></use>
                </svg>
                <span class="sr-only">Compare</span>
        </a>
        ${htmlFragmentShare}
    </div>
</div>
`;
ToolbarStockNoLink.storyName = 'No location link';
