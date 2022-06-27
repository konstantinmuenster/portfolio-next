import { SvgProps } from '.';

export const ArrowRightUpSvg: React.FC<SvgProps> = props => {
  return (
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
        <g data-name="diagonal-arrow-right-up">
          <rect transform="rotate(180 12 12)" opacity="0" />
          <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
        </g>
      </g>
    </svg>
  );
};
