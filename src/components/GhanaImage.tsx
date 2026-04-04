type Props = {
  className?: string;
  alt?: string;
};

export default function GhanaImage({ className, alt = 'Ghana symbol' }: Props) {
  // Render as a masked element so the PNG can be recolored via CSS.
  // The mask uses the same file at `/assets/image.png` (in `public/`).
  return (
    <span
      role="img"
      aria-label={alt}
      className={`${className ?? ''} ghana-image-mask`}
    />
  );
}
