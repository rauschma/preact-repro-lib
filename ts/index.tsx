import { VNode } from 'preact';
import render from 'preact-render-to-string';

export type SimpleView = () => VNode;

export function logRenderedView(View: SimpleView) {
  console.log('----------');
  console.log(render(<View/>));
  console.log('----------');
}
