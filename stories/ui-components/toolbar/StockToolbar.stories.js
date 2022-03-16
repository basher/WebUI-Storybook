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
<div class="ui-toolbar ui-toolbar--stock">
    <div class="ui-button-group">
        <a
            href="https://www.google.com"
            class="ui-button ui-button--text-icon"
        >
            <span class="ui-button__inner ">
                <svg aria-hidden="true" focusable="false" class="ui-icon">
                    <use href="${UIconfig.theme}.sprite.svg#SVG007"></use>
                </svg>
                <span>Location</span>
            </span>
        </a>
        <a
            href="https://www.google.com"
            class="ui-button ui-button--icon"
        >
                <svg aria-hidden="true" focusable="false" class="ui-icon">
                    <title>Print</title>
                    <use href="${UIconfig.theme}.sprite.svg#SVG036"></use>
                </svg>
                <span class="sr-only">Print</span>
        </a>
        <a
            href="https://www.google.com"
            class="ui-button ui-button--icon ui-toolbar--stock__compare"
        >
                <svg aria-hidden="true" focusable="false" class="ui-icon">
                    <title>Compare</title>
                    <use href="${UIconfig.theme}.sprite.svg#SVG056"></use>
                </svg>
                <span class="sr-only">Compare</span>
        </a>
        ${htmlFragmentShare}
    </div>
</div>
`;
ToolbarStock.storyName = 'Stock toolbar';

export const ToolbarStockNoLink = () => `
<div class="ui-toolbar ui-toolbar--stock">
    <div class="ui-button-group">
        <span class="ui-toolbar--stock__location">
            <svg aria-hidden="true" focusable="false" class="ui-icon">
                <use href="${UIconfig.theme}.sprite.svg#SVG007"></use>
            </svg>
            <span>Location</span>
        </span>
        <a
            href="https://www.google.com"
            class="ui-button ui-button--icon"
        >
                <svg aria-hidden="true" focusable="false" class="ui-icon">
                    <title>Print</title>
                    <use href="${UIconfig.theme}.sprite.svg#SVG036"></use>
                </svg>
                <span class="sr-only">Print</span>
        </a>
        <a
            href="https://www.google.com"
            class="ui-button ui-button--icon ui-toolbar--stock__compare"
        >
                <svg aria-hidden="true" focusable="false" class="ui-icon">
                    <title>Compare</title>
                    <use href="${UIconfig.theme}.sprite.svg#SVG056"></use>
                </svg>
                <span class="sr-only">Compare</span>
        </a>
        ${htmlFragmentShare}
    </div>
</div>
`;
ToolbarStockNoLink.storyName = 'No location link';
