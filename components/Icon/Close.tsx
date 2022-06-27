import { SvgProps } from '.';

export const CloseSvg: React.FC<SvgProps> = props => (
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
      <g data-name="close">
        <rect transform="rotate(180 12 12)" opacity="0" />
        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
      </g>
    </g>
  </svg>
);
