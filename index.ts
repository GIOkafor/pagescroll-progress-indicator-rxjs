import './style.css';

import { map, fromEvent } from 'rxjs';

//elements
const progressBar: any = document.querySelector('.progress-bar');
//helpers
function calculateScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  map(({ target }: any) => calculateScrollPercent(target.documentElement))
);

progress$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`;
});
