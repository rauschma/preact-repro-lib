import { jsx as _jsx } from "preact/jsx-runtime";
import render from 'preact-render-to-string';
export function logRenderedView(View) {
    console.log('----------');
    console.log(render(_jsx(View, {}, void 0)));
    console.log('----------');
}
//# sourceMappingURL=index.js.map