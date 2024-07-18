import type { SVGProps } from 'react';

const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      fill="#fbc02d"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#e53935"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4caf50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1565c0"
      d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <linearGradient
      id="a"
      x1={37.087}
      x2={10.76}
      y1={10.967}
      y2={37.294}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#6560fe" />
      <stop offset={0.033} stopColor="#6f6afe" />
      <stop offset={0.197} stopColor="#9a97fe" />
      <stop offset={0.362} stopColor="#bfbdff" />
      <stop offset={0.525} stopColor="#dbdaff" />
      <stop offset={0.687} stopColor="#efeeff" />
      <stop offset={0.846} stopColor="#fbfbff" />
      <stop offset={1} stopColor="#fff" />
    </linearGradient>
    <circle cx={23.924} cy={24.13} r={18.615} fill="url(#a)" />
    <path
      fill="none"
      stroke="#8251fe"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M35.054 38.836A18.422 18.422 0 0 1 24 42.5C13.783 42.5 5.5 34.217 5.5 24c0-2.917.675-5.676 1.878-8.13M13.869 8.518A18.415 18.415 0 0 1 24 5.5c10.217 0 18.5 8.283 18.5 18.5 0 2.941-.686 5.721-1.907 8.19"
    />
    <path
      fill="#8251fe"
      d="M34 23c0-1.574-.576-3.038-1.558-4.275.442-1.368.93-3.771-.242-5.648-2.251 0-3.73 1.545-4.436 2.514C26.602 15.213 25.333 15 24 15s-2.602.213-3.764.591c-.706-.969-2.184-2.514-4.436-2.514-1.328 2.126-.526 4.45-.073 5.43C14.638 19.788 14 21.334 14 23c0 3.78 3.281 6.94 7.686 7.776-1.309.673-2.287 1.896-2.587 3.38h-1.315c-1.297 0-1.801-.526-2.502-1.415-.692-.889-1.437-1.488-2.331-1.736-.482-.051-.806.316-.386.641 1.419.966 1.516 2.548 2.085 3.583.518.932 1.579 1.771 2.779 1.771H19v5.942h10v-7.806c0-1.908-1.098-3.544-2.686-4.36C30.719 29.94 34 26.78 34 23z"
    />
  </svg>
);

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <linearGradient
      id="a"
      x1={10.341}
      x2={40.798}
      y1={8.312}
      y2={38.769}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#2aa4f4" />
      <stop offset={1} stopColor="#007ad9" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M46.105 11.02a17.56 17.56 0 0 1-4.979 1.362 8.65 8.65 0 0 0 3.812-4.758 17.395 17.395 0 0 1-5.502 2.082A8.653 8.653 0 0 0 33.122 7c-4.783 0-8.661 3.843-8.661 8.582 0 .671.079 1.324.226 1.958A24.678 24.678 0 0 1 6.838 8.566a8.482 8.482 0 0 0-1.172 4.322c0 2.979 1.525 5.602 3.851 7.147a8.798 8.798 0 0 1-3.926-1.072v.101c0 4.163 2.986 7.63 6.944 8.419a8.617 8.617 0 0 1-2.276.308 9.204 9.204 0 0 1-1.632-.158c1.102 3.402 4.299 5.889 8.087 5.963A17.499 17.499 0 0 1 5.958 37.27c-.701 0-1.387-.04-2.065-.122A24.75 24.75 0 0 0 17.171 41c15.927 0 24.641-13.079 24.641-24.426 0-.372-.012-.742-.029-1.108a17.032 17.032 0 0 0 4.322-4.446"
    />
  </svg>
);

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
      opacity={0.25}
    />
    <path d="M10.14 1.16a11 11 0 0 0-9 8.92A1.59 1.59 0 0 0 2.46 12a1.52 1.52 0 0 0 1.65-1.3 8 8 0 0 1 6.66-6.61A1.42 1.42 0 0 0 12 2.69a1.57 1.57 0 0 0-1.86-1.53Z">
      <animateTransform
        attributeName="transform"
        dur="0.75s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </path>
  </svg>
);

export { GithubIcon, GoogleIcon, LoadingIcon, LogoIcon };
