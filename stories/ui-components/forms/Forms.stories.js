import docs from './Forms.mdx';
import {
    htmlFragmentButtons,
    htmlFragmentTextInputRequired,
    htmlFragmentSelectRequired,
    htmlFragmentTextareaRequired,
    htmlFragmentEmailInputRequired,
    htmlFragmentTelInputRequired,
} from './_htmlFragments';

export default {
    title: 'UI Components/Forms',
    parameters: {
        docs: {
            page: docs,
        },
    },
};

export const BasicFormStructure = () => `
<form
    class="kb-form"
    action="#"
>
    <h2 class="kb-form__title">Optional form title</h2>
    <p class="kb-form__description">Optional form description</p>

    <fieldset class="kb-form__fieldset">
        <legend class="kb-form__legend">
            This is a <code>&lt;legend&gt;</code>, describing the purpose of related form elements grouped inside an optional <code>&lt;fieldset&gt;</code>.
            <br/>
            It could contain information such as <b>"all fields are required"</b>.
        </legend>

        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Text input (optional)</span>
                <input
                    class="kb-form__input"
                    type="text"
                    placeholder="placeholder..."
                />
            </label>
        </div>

        <div class="kb-form__field kb-form__field--small">
            <label class="kb-form__label">
                <span>Text input small (optional)</span>
                <input
                    class="kb-form__input"
                    type="text"
                    placeholder="placeholder..."
                />
            </label>
        </div>
    </fieldset>

    <div class="kb-form__buttons kb-button-group">
        <button
            type="submit"
            class="kb-button kb-button--text kb-button--positive"
        >
            Submit
        </button>
        <button
            type="reset"
            class="kb-button kb-button--text"
        >
            Reset
        </button>
    </div>
</form>
`;
BasicFormStructure.storyName = 'Basic form structure';

export const CheckboxRadio = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field kb-form__field--checkbox">
        <label class="kb-form__label">
            <span>Single checkbox</span>
            <input
                class="kb-form__input"
                type="checkbox"
            />
        </label>
    </div>

    <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox">
        <legend class="kb-form__legend">
            This is a <code>&lt;legend&gt;</code> for checkbox group.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Checkbox 1</span>
                <input
                    class="kb-form__input"
                    type="checkbox"
                    name="checkbox-group1"
                />
            </label>
        </div>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Checkbox 2</span>
                <input
                    class="kb-form__input"
                    type="checkbox"
                    name="checkbox-group1"
                />
            </label>
        </div>
    </fieldset>

    <fieldset class="kb-form__fieldset kb-form__fieldset--radio">
        <legend class="kb-form__legend">
            This is a <code>&lt;legend&gt;</code> for radio group.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Radio 1</span>
                <input
                    class="kb-form__input"
                    type="radio"
                    name="radio-group1"
                    checked
                />
            </label>
        </div>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Radio 2</span>
                <input
                    class="kb-form__input"
                    type="radio"
                    name="radio-group1"
                />
            </label>
        </div>
    </fieldset>

    ${htmlFragmentButtons}
</form>
`;
CheckboxRadio.storyName = 'Checkboxes & radio inputs';

export const CustomCheckbox = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field kb-form__field--checkbox kb-form__field--checkbox-custom">
        <label class="kb-form__label">
            <span>Single custom checkbox</span>
            <input
                class="kb-form__input"
                type="checkbox"
            />
        </label>
    </div>

    <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox kb-form__fieldset--checkbox-custom">
        <legend class="kb-form__legend">
            This is a <code>&lt;legend&gt;</code> for custom checkbox group.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Custom checkbox 1</span>
                <input
                    class="kb-form__input"
                    type="checkbox"
                    name="checkbox-group1"
                />
            </label>
        </div>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Custom checkbox 2</span>
                <input
                    class="kb-form__input"
                    type="checkbox"
                    name="checkbox-group1"
                />
            </label>
        </div>
    </fieldset>
</form>
`;
CustomCheckbox.storyName = 'Custom checkboxes';

export const SpecialInputs = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Email input</span>
            <input
                class="kb-form__input"
                type="email"
                autocomplete="email"
                placeholder="email@domain.com"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Tel input</span>
            <input
                class="kb-form__input"
                type="tel"
                autocomplete="tel"
                pattern="^[0-9-+\s()]*$"
                placeholder="tel number, including +-() and spaces"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    ${htmlFragmentButtons}
</form>
`;
SpecialInputs.storyName = 'Special text input types';

export const RequiredFields = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Text input</span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
            <span
                class="kb-form__error"
                id="error1-text"
            >
                Error 1 text
            </span>
        </label>
    </div>

    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Select</span>
            <select
                class="kb-form__select"
                required
            >
                <option></option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
            <span
                class="kb-form__error"
                id="error2-text"
            >
                Error 2 text
            </span>
        </label>
    </div>

    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Textarea</span>
            <textarea
                class="kb-form__textarea"
                cols="30"
                rows="6"
                required
            ></textarea>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
            <span
                class="kb-form__error"
                id="error3-text"
            >
                Error 3 text
            </span>
        </label>
    </div>

    <div class="kb-form__field kb-form__field--checkbox">
        <label class="kb-form__label">
            <span>Single required checkbox</span>
            <input
                class="kb-form__input"
                type="checkbox"
                required
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
            <span
                class="kb-form__error"
                id="error4-text"
            >
                Error 4 text
            </span>
        </label>
    </div>

    ${htmlFragmentButtons}
</form>
`;
RequiredFields.storyName = 'Required fields';

export const GroupedRequiredFields = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Group1 required field 1</span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                data-validate-group="group1"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Group1 required field 2</span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                data-validate-group="group1"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Group2 required field 1</span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                data-validate-group="group2"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>Group2 required field 2</span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                data-validate-group="group2"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    ${htmlFragmentButtons}
</form>
`;
GroupedRequiredFields.storyName = '"Grouped" required fields';

export const FormErrors = () => `
<div class="kb-form__errors" role="alert">
    <h2 class="kb-form__errors__title">Form errors</h2>
    <ul>
        <li>
            <a href="#input-error2">Error 2...</a>
        </li>
        <li>
            <a href="#input-error3">Error 3...</a>
        </li>
    </ul>
</div>

<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field">
        <label class="kb-form__label">
            <span>
                Text input 1
            </span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                id="error1"
                value="example of valid field"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
        </label>
    </div>

    <div class="kb-form__field kb-form__field--has-error">
        <label class="kb-form__label">
            <span>
                Text input 2
            </span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                id="error2"
                aria-invalid="true"
                aria-describedby="error2-text"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
            <span
                class="kb-form__error"
                id="error2-text"
            >
                Error 2 text
            </span>
        </label>
    </div>

    <div class="kb-form__field kb-form__field--has-error">
        <label class="kb-form__label">
            <span>
                Text input 3
            </span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                required
                id="error3"
                aria-invalid="true"
                aria-describedby="error3-text"
            />
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon kb-form__icon--error"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG074" />
            </svg>
            <svg
                aria-hidden="true"
                focusable="false"
                class="kb-icon kb-form__icon"
            >
                <use href="${KBconfig.theme}.sprite.svg#SVG075" />
            </svg>
            <span
                class="kb-form__error"
                id="error3-text"
            >
                Error 3 text
            </span>
        </label>
    </div>

    ${htmlFragmentButtons}
</form>
`;
FormErrors.storyName = 'Form errors';

export const DisabledFields = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-form__field is-disabled">
        <label class="kb-form__label">
            <span>Text input</span>
            <input
                class="kb-form__input"
                type="text"
                placeholder="placeholder..."
                disabled
            />
        </label>
    </div>

    <div class="kb-form__field is-disabled">
        <label class="kb-form__label">
            <span>Select</span>
            <select
                class="kb-form__select"
                disabled
            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </label>
    </div>

    <div class="kb-form__field is-disabled">
        <label class="kb-form__label">
            <span>Textarea</span>
            <textarea
                class="kb-form__textarea"
                cols="30"
                rows="6"
                disabled
            ></textarea>
        </label>
    </div>

    <fieldset class="kb-form__fieldset kb-form__fieldset--checkbox is-disabled">
        <legend class="kb-form__legend">
            This is a <code>&lt;legend&gt;</code> for checkbox group.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Checkbox 1</span>
                <input
                    class="kb-form__input"
                    type="checkbox"
                    name="checkbox-group1"
                    disabled
                />
            </label>
        </div>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Checkbox 2</span>
                <input
                    class="kb-form__input"
                    type="checkbox"
                    name="checkbox-group1"
                    disabled
                />
            </label>
        </div>
    </fieldset>

    <fieldset class="kb-form__fieldset kb-form__fieldset--radio is-disabled">
        <legend class="kb-form__legend">
            This is a <code>&lt;legend&gt;</code> for radio group.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Radio 1</span>
                <input
                    class="kb-form__input"
                    type="radio"
                    name="radio-group1"
                    checked
                    disabled
                />
            </label>
        </div>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Radio 2</span>
                <input
                    class="kb-form__input"
                    type="radio"
                    name="radio-group1"
                    disabled
                />
            </label>
        </div>
    </fieldset>
</form>
`;
DisabledFields.storyName = 'Disabled fields';

export const RangeInput = () => `
<div class="kb-form__field kb-form__range">
    <label class="kb-form__label">
        <span class="kb-form__range__label">
            Range slider
        </span>
        <input
            class="kb-form__input"
            type="range"
            value="1"
            min="1"
            max="20"
            aria-valuenow="1"
            aria-valuemin="1"
            aria-valuemax="20"
        />
        <output class="kb-form__range__bubble"></output>
    </label>
</div>
`;
RangeInput.storyName = 'Range input slider';

export const RangeInputMultiple = () => `
<div class="kb-form__field kb-form__range kb-form__range--multiple">
    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Min
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
            type="range"
            data-range="min"
            step="1"
            value="1"
            min="1"
            max="19"
            aria-valuenow="1"
            aria-valuemin="1"
            aria-valuemax="19"
        />
        <output class="kb-form__range__bubble"></output>
    </label>
    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Max
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
            type="range"
            data-range="max"
            step="1"
            value="20"
            min="2"
            max="20"
            aria-valuenow="20"
            aria-valuemin="2"
            aria-valuemax="20"
        />
        <output class="kb-form__range__bubble"></output>
    </label>
</div>
`;
RangeInputMultiple.storyName = 'Multiple range input sliders';

export const RangeInputMultipleConversions = () => `
<div class="kb-form__field kb-form__range kb-form__range--multiple kb-form__range--unit-conversions">
    <fieldset class="kb-form__fieldset kb-form__fieldset--radio">
        <legend class="kb-form__legend">
            Range slider.
        </legend>
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>CC</span>
                <input
                    class="kb-form__input"
                    type="radio"
                    name="engine-size"
                    checked
                />
            </label>

            <!-- Hidden <input/> for JavaScript -->
            <input
                type="hidden"
                data-id="min"
                id="minUnitType-CC"
                name="minUnitType-CC"
                value="min-0,max-1990,step-10,value-0"
            />
            <input
                type="hidden"
                data-id="max"
                id="maxUnitType-CC"
                name="maxUnitType-CC"
                value="min-10,max-2000,step-10,value-2000"
            />
        </div>

        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>Ltr</span>
                <input
                    class="kb-form__input"
                    type="radio"
                    name="engine-size"
                />
            </label>

            <!-- Hidden <input/> for JavaScript -->
            <input
                type="hidden"
                data-id="min"
                id="minUnitType-LTR"
                name="minUnitType-LTR"
                value="min-0,max-1.8,step-0.2,value-0"
            />
            <input
                type="hidden"
                data-id="max"
                id="maxUnitType-LTR"
                name="maxUnitType-LTR"
                value="min-0.2,max-2.0,step-0.2,value-2.0"
            >
        </div>
    </fieldset>

    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Min
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
            type="range"
            data-range="min"
            step="10"
            value="0"
            min="0"
            max="1990"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="1990"
        />
        <output class="kb-form__range__bubble"></output>
    </label>

    <label class="kb-form__label">
        <span class="kb-form__range__label">
            <span class="kb-form__range__minmax">
                Max
            </span>
            Range slider
        </span>
        <input
            class="kb-form__input"
            type="range"
            data-range="max"
            step="10"
            value="2000"
            min="10"
            max="2000"
            aria-valuenow="2000"
            aria-valuemin="10"
            aria-valuemax="2000"
        />
        <output class="kb-form__range__bubble"></output>
    </label>
</div>
`;
RangeInputMultipleConversions.storyName =
    'Multiple range input sliders with unit conversion';

export const AjaxFormSubmission = () => `
<div role="region" aria-label="[meaningful label]">
    <form
        class="kb-form"
        action="#"
        data-action="/ajax/fragment-form.html"
        method="post"
    >
        <div class="kb-form__field">
            <label class="kb-form__label">
                <span>"onChange" event submits form</span>
                <select
                    class="kb-form__select"
                    data-ajax-submit
                >
                    <option value="option1">Select 1 option 1</option>
                    <option value="option2">Select 1 option 2</option>
                    <option value="option3">Select 1 option 3</option>
                </select>
            </label>

            <button
                type="submit"
                class="kb-button kb-button--text kb-button--secondary"
            >
                Go
            </button>
        </div>

        <div class="kb-form__field is-disabled">
            <label class="kb-form__label">
                <span>Disabled field until Ajax completes</span>
                <select
                    class="kb-form__select"
                    disabled
                >
                    <option value="option1">Select 2 option 1</option>
                    <option value="option2">Select 2 option 2</option>
                    <option value="option3">Select 2 option 3</option>
                </select>
            </label>
        </div>

        <div class="kb-form__buttons kb-button-group">
            <button
                type="submit"
                class="kb-button kb-button--text kb-button--positive"
            >
                Submit
            </button>
        </div>
    </form>
</div>
`;
AjaxFormSubmission.storyName = 'Ajax form submission';

export const FormFieldsInGrid = () => `
<form
    class="kb-form"
    action="#"
>
    <div class="kb-grid">
        ${htmlFragmentTextInputRequired}
        ${htmlFragmentSelectRequired}
        ${htmlFragmentEmailInputRequired}
        ${htmlFragmentTelInputRequired}
    </div>

    ${htmlFragmentTextareaRequired}
    ${htmlFragmentButtons}
</form>
`;
FormFieldsInGrid.storyName = 'Form fields in grid';
