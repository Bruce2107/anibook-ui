import _image from './assets/imageError.png';

export default function imageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>
): void {
  event.currentTarget.src = _image;
}
