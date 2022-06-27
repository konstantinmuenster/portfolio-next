import { SvgProps } from '.';

export const ChevronLeftSvg: React.FC<SvgProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    focusable={false}
    role={props.title ? 'img' : undefined}
    aria-hidden={!props.title ? 'true' : 'false'}
    className={props.className}
    width={props.size ?? 24}
    height={props.size ?? 24}
    style={props.style}
  >
    {props.title ? <title>{props.title}</title> : undefined}
    <g>
      <g data-name="chevron-left">
        <rect transform="rotate(90 12 12)" opacity="0" />
        <path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z" />
      </g>
    </g>
  </svg>
);
