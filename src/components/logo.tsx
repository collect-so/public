export const Logo = ({
  className,
  bgFill = "white",
  strokeColor = "#282828",
  width = 60,
  height = 60,
}: {
  className?: string;
  bgFill?: string;
  strokeColor?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Collect logo"
    className={className}
  >
    <path
      d="M53.8365 42.7248C47.1923 45.9076 41.3934 47.4765 37.1959 48.3125C34.3264 48.8843 33.3183 48.8714 32.694 48.8714C24.2447 48.8714 17.393 43.1807 17.393 36.1595C17.393 29.1383 24.2428 23.4475 32.694 23.4475C36.6414 23.4475 40.2398 24.691 42.9541 26.7302L53.8365 21.5098C48.786 16.4843 41.1898 13.287 32.694 13.287C17.4899 13.2886 5.16309 23.5297 5.16309 36.1611C5.16309 48.7925 17.4899 59.0336 32.694 59.0336C41.1898 59.0336 48.786 55.8346 53.8365 50.8107V42.7248Z"
      fill={bgFill}
    />
    <path
      d="M32.6942 60C16.8717 60 4 49.3063 4 36.1611C4 23.0158 16.8717 12.3221 32.6942 12.3221C41.2249 12.3221 49.2554 15.4454 54.7305 20.8929C54.9515 21.1119 55.0427 21.4003 54.9826 21.6805C54.9225 21.9608 54.7169 22.2056 54.4184 22.349L43.5359 27.5694C43.0997 27.7788 42.5491 27.7305 42.1729 27.4486C39.5711 25.4932 36.2034 24.4156 32.6942 24.4156C24.8983 24.4156 18.5565 29.6843 18.5565 36.1611C18.5565 42.6379 24.8983 47.9066 32.6942 47.9066H32.7349C33.2991 47.9034 34.251 47.9066 36.9246 47.3734C42.4696 46.2685 47.9641 44.4226 53.2551 41.8872C53.6157 41.7149 54.0578 41.7149 54.4184 41.8872C54.779 42.0596 55 42.3785 55 42.7248V50.8107C55 51.0379 54.905 51.2569 54.7305 51.4309C49.2573 56.8768 41.2249 60.0016 32.6942 60.0016V60ZM32.6942 14.255C18.1551 14.255 6.32655 24.0821 6.32655 36.1611C6.32655 48.24 18.1551 58.0671 32.6942 58.0671C40.3931 58.0671 47.652 55.2966 52.6735 50.4548V44.3694C47.7276 46.5842 42.6208 48.2239 37.4675 49.2515C34.5244 49.8379 33.398 49.8346 32.7329 49.8379H32.6942C23.6167 49.8379 16.2299 43.7026 16.2299 36.1595C16.2299 28.6164 23.6148 22.4811 32.6942 22.4811C36.4981 22.4811 40.1547 23.5667 43.0861 25.5511L52.0259 21.2634C47.0374 16.7936 40.0693 14.2534 32.6942 14.2534V14.255Z"
      fill={strokeColor}
    />
    <path
      d="M53.8365 15.3503C51.9908 13.5544 47.741 9.91893 40.8408 8.1455C38.2661 7.48349 35.5304 7.12752 32.694 7.12752C17.4899 7.12752 5.16309 17.3686 5.16309 30C5.16309 42.6314 17.4899 52.8725 32.694 52.8725C41.1898 52.8725 48.786 49.6736 53.8365 44.6497V38.6932C47.3726 40.2008 41.7462 41.3235 37.1959 42.153C34.5126 42.6427 33.7603 42.712 32.694 42.712C24.2447 42.712 17.393 37.0212 17.393 30C17.393 22.9788 24.2428 17.2881 32.694 17.2881C36.6414 17.2881 40.2398 18.5315 42.9541 20.5707L53.8365 15.3503Z"
      fill={bgFill}
    />
    <path
      d="M32.6942 53.8389C16.8717 53.8389 4 43.1452 4 30C4 16.8548 16.8717 6.16108 32.6942 6.16108C35.5888 6.16108 38.4466 6.51866 41.1861 7.22255C46.3646 8.55302 51.0449 11.1479 54.7228 14.7238C54.9477 14.9428 55.0427 15.2328 54.9845 15.5146C54.9263 15.7965 54.7189 16.0446 54.4203 16.1879L43.5378 21.4083C43.1016 21.6177 42.551 21.5694 42.1749 21.2875C39.573 19.3321 36.2053 18.2545 32.6961 18.2545C24.9002 18.2545 18.5584 23.5232 18.5584 30C18.5584 36.4768 24.9002 41.7455 32.6961 41.7455C33.6267 41.7455 34.2723 41.6972 36.9479 41.2091C42.4405 40.2073 48.0184 39.0475 53.5246 37.7622C53.8736 37.68 54.2516 37.7396 54.5424 37.9216C54.8333 38.1036 55.0039 38.3887 55.0039 38.6915V44.6481C55.0039 44.8752 54.9089 45.0942 54.7344 45.2682C49.2612 50.7141 41.2287 53.8389 32.698 53.8389H32.6942ZM32.6942 8.09396C18.1551 8.09396 6.32655 17.9211 6.32655 30C6.32655 42.0789 18.1551 51.906 32.6942 51.906C40.3931 51.906 47.652 49.1356 52.6735 44.2937V39.9624C47.6074 41.1222 42.4909 42.174 37.4462 43.0953C34.7183 43.593 33.8671 43.6768 32.6942 43.6768C23.6167 43.6768 16.2299 37.5415 16.2299 29.9984C16.2299 22.4553 23.6148 16.32 32.6942 16.32C36.4981 16.32 40.1547 17.4056 43.0861 19.3901L52.0123 15.1087C49.5656 12.9552 45.7752 10.4247 40.4978 9.06846C37.9813 8.42094 35.3561 8.09396 32.6942 8.09396Z"
      fill={strokeColor}
    />
    <path
      d="M42.9541 33.2682C40.2398 35.3074 36.6414 36.5509 32.694 36.5509C24.2447 36.5509 17.393 30.8601 17.393 23.8389C17.393 16.8177 24.2428 11.127 32.694 11.127C36.6414 11.127 40.2398 12.3705 42.9541 14.4097L53.8365 9.18926C48.786 4.16537 41.1898 0.966442 32.694 0.966442C17.4899 0.966442 5.16309 11.2075 5.16309 23.8389C5.16309 36.4703 17.4899 46.7114 32.694 46.7114C41.1898 46.7114 48.786 43.5125 53.8365 38.4886L42.9541 33.2682Z"
      fill={bgFill}
    />
    <path
      d="M32.6942 47.6779C16.8717 47.6779 4 36.9842 4 23.8389C4 10.6937 16.8717 0 32.6942 0C41.2249 0 49.2554 3.12322 54.7305 8.57074C54.9515 8.7898 55.0427 9.07812 54.9826 9.35839C54.9225 9.63866 54.7169 9.88349 54.4184 10.0268L43.5359 15.2472C43.0997 15.4566 42.5491 15.4083 42.1729 15.1264C39.5711 13.171 36.2034 12.0934 32.6942 12.0934C24.8983 12.0934 18.5565 17.3621 18.5565 23.8389C18.5565 30.3157 24.8983 35.5844 32.6942 35.5844C36.2053 35.5844 39.5711 34.5068 42.1729 32.5514C42.5471 32.2695 43.0977 32.2212 43.5359 32.4306L54.4184 37.651C54.715 37.7944 54.9225 38.0376 54.9826 38.3195C55.0427 38.5997 54.9496 38.8897 54.7305 39.1071C49.2573 44.553 41.2249 47.6779 32.6942 47.6779ZM32.6942 1.93289C18.1551 1.93289 6.32655 11.76 6.32655 23.8389C6.32655 35.9179 18.1551 45.745 32.6942 45.745C40.0694 45.745 47.0374 43.2048 52.0259 38.735L43.0861 34.4472C40.1547 36.4317 36.4981 37.5173 32.6942 37.5173C23.6167 37.5173 16.2299 31.382 16.2299 23.8389C16.2299 16.2958 23.6148 10.1605 32.6942 10.1605C36.4981 10.1605 40.1547 11.2462 43.0861 13.2306L52.0259 8.94282C47.0374 4.47302 40.0694 1.93289 32.6942 1.93289Z"
      fill={strokeColor}
    />
    <path
      d="M42.9541 26.756V20.5949V14.4338L53.8366 9.21503V15.3761V21.5372L42.9541 26.756Z"
      fill={bgFill}
    />
    <path
      d="M42.9543 27.7224C42.7527 27.7224 42.553 27.6789 42.3727 27.5936C42.012 27.4212 41.791 27.1023 41.791 26.756V14.4338C41.791 14.0891 42.012 13.7702 42.3727 13.5962L53.2551 8.37584C53.6157 8.20349 54.0578 8.20349 54.4184 8.37584C54.779 8.54819 55 8.86711 55 9.21342V21.5356C55 21.8803 54.779 22.1992 54.4184 22.3731L43.5359 27.5936C43.3556 27.6805 43.1559 27.7224 42.9543 27.7224ZM44.1176 14.9911V25.0808L52.6735 20.9766V10.887L44.1176 14.9911Z"
      fill={strokeColor}
    />
    <path
      d="M5.16328 37.1275C4.52154 37.1275 4 36.6942 4 36.1611V23.8389C4 23.3058 4.52154 22.8725 5.16328 22.8725C5.80502 22.8725 6.32655 23.3058 6.32655 23.8389V36.1611C6.32655 36.6942 5.80502 37.1275 5.16328 37.1275Z"
      fill={strokeColor}
    />
  </svg>
);
