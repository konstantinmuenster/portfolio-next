import { theme } from '@config/stitches.config';

import { SvgProps } from '.';

export const UnderlineSvg: React.FC<SvgProps> = props => (
  <svg
    width="180"
    height="17"
    viewBox="0 0 180 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M98.464 7.50574C77.6588 7.94524 56.8537 9.03215 36.1359 10.802C24.8201 11.7684 11.6777 11.6526 0.699798 14.9465C-0.165016 15.2064 0.0074798 15.9979 0.0263828 16.0759C0.0641889 16.239 0.222504 16.78 0.914828 16.806C0.969174 16.8084 1.34015 16.7612 1.48429 16.7423C4.71671 16.3169 7.93968 15.8207 11.1745 15.419C22.3485 14.0273 33.5509 12.9782 44.7722 12.0567C59.6678 10.8327 74.6887 10.1781 89.6244 9.67012C97.8024 9.38894 106.174 9.7599 114.38 9.18572C117.386 9.16918 120.396 9.16687 123.407 9.17632C135.994 9.22121 148.566 9.69851 161.137 10.353C165.177 10.5633 168.263 10.7902 172.224 10.9437C173.729 11.0028 176.118 11.043 177.776 11.069C178.017 11.0737 178.622 11.0784 178.885 11.0808C178.92 11.0855 178.955 11.0855 178.991 11.0855C179.118 11.0831 179.182 11.076 179.194 11.0737C180.094 10.9413 180.012 10.0954 179.986 9.96312C179.981 9.93476 179.849 9.21881 179.078 9.19282C178.963 9.18809 178.128 9.18341 177.807 9.17868C176.16 9.15269 173.79 9.11252 172.297 9.05581C168.346 8.90222 165.267 8.67538 161.234 8.46509C148.635 7.81057 136.031 7.33091 123.414 7.28601C121.939 7.28129 120.467 7.27892 118.997 7.28128C118.889 7.13951 118.721 7.00951 118.454 6.94098C118.211 6.87719 116.462 6.8158 115.786 6.7591C110.905 6.35977 111.049 6.37631 105.675 6.04787C97.5377 5.5493 96.2996 5.43583 87.8381 5.22553C77.4816 4.96798 67.1227 4.89711 56.7639 4.89002C71.6405 4.17171 86.6165 4.26857 101.472 4.05119C108.19 3.95431 114.905 3.77947 121.623 3.83145C123.929 3.85036 126.233 3.93544 128.539 3.96379C129.016 3.97088 130.242 4.05357 130.42 4.0134C131.006 3.88344 131.131 3.4463 131.166 3.23364C131.185 3.11077 131.27 2.38302 130.398 2.12783C126.507 0.993645 119.326 1.03853 115.545 0.814053C94.3738 -0.438274 73.1599 -0.0885743 51.979 0.806957C43.234 1.17557 34.5173 1.70252 25.8078 2.55316C22.762 2.84852 19.7092 3.10135 16.6752 3.49831C16.1837 3.56211 15.0756 3.65422 14.5392 3.7511C14.2627 3.80308 14.0666 3.87869 13.9745 3.92831C13.5444 4.17169 13.4712 4.53086 13.4688 4.77188C13.4664 4.94673 13.5113 5.60124 14.3809 5.769C23.2251 7.501 32.8468 6.82524 41.7383 6.80161C57.0899 6.7638 72.4439 6.73305 87.7908 7.11584C92.9821 7.24579 95.4442 7.33798 98.464 7.50574ZM102.885 2.13965C85.9478 1.61273 68.9918 1.97894 52.057 2.6949C43.3474 3.06351 34.6662 3.58809 25.9921 4.434C24.6098 4.56869 23.2299 4.6939 21.8499 4.82858C28.4731 5.30352 35.2995 4.93021 41.7336 4.91131L46.1498 4.90185C46.1144 4.81206 46.0907 4.71519 46.0836 4.61595C46.0435 4.09611 46.4333 3.64007 46.9532 3.5999C65.0339 2.22706 83.3273 2.42553 101.446 2.16088C101.926 2.15379 102.405 2.14674 102.885 2.13965Z"
      fill={props.color ?? theme.colors.subtext.value}
    />
  </svg>
);