export default function imageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  image: string
): void {
  event.currentTarget.src = image;
}
