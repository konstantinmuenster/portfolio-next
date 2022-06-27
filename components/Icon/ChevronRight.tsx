import { SvgProps } from '.';

export const ChevronRightSvg: React.FC<SvgProps> = props => (
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
      <g data-name="chevron-right">
        <rect transform="rotate(-90 12 12)" opacity="0" />
        <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" />
      </g>
    </g>
  </svg>
);
