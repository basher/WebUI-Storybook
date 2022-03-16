import docs from './Flex.mdx';

export default {
    title: 'UI Components/Layouts/Flex',
    parameters: {
        docs: {
            page: docs,
        },
    },
    argTypes: {
        direction: {
            control: {
                type: 'select',
                options: ['column', 'row-reverse', 'column-reverse'],
            },
        },
        justification: {
            control: {
                type: 'select',
                options: [
                    'justify-end',
                    'justify-space-between',
                    'justify-center',
                ],
            },
        },
        alignment: {
            control: {
                type: 'select',
                options: ['align-flex-start', 'align-flex-end', 'align-center'],
            },
        },
    },
};

const style = `
<style>
    .ui-flex > * {
        background: rgba(235, 201, 90, 0.2);
    }
</style>
`;

export const Flex = (args) => `
${style}
<div class="ui-flex ui-flex--${args.direction} ui-flex--${args.justification} ui-flex--${args.alignment}">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
    <div>Flex item 4</div>
    <div>Flex item 5</div>
</div>
`;

export const FlexList = (args) => `
${style}
<ul class="ui-flex ui-flex--${args.direction} ui-flex--${args.justification} ui-flex--${args.alignment}">
    <li>Flex item 1</li>
    <li>Flex item 2</li>
    <li>Flex item 3</li>
    <li>Flex item 4</li>
    <li>Flex item 5</li>
</ul>
`;
FlexList.storyName = 'Flex as a list';
