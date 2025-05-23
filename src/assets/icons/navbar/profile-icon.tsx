const ProfileIcon = ({ size = "12" }: { size?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_92_190)">
        <path
          d="M7.64646 2.13502C7.22837 1.68363 6.64443 1.43506 5.9999 1.43506C5.35193 1.43506 4.76605 1.68213 4.3499 2.13072C3.92923 2.58426 3.72427 3.20064 3.7724 3.86623C3.86779 5.17935 4.86703 6.24756 5.9999 6.24756C7.13277 6.24756 8.13029 5.17957 8.22718 3.86666C8.27595 3.20709 8.0697 2.59199 7.64646 2.13502Z"
          fill="currentColor"
        />
        <path
          d="M9.78125 11.0596H2.21875C2.11976 11.0609 2.02174 11.0401 1.9318 10.9987C1.84186 10.9573 1.76227 10.8964 1.69883 10.8204C1.55918 10.6535 1.50289 10.4256 1.54457 10.195C1.7259 9.18914 2.2918 8.34416 3.18125 7.75098C3.97145 7.22439 4.9724 6.93457 6 6.93457C7.0276 6.93457 8.02855 7.22461 8.81875 7.75098C9.7082 8.34394 10.2741 9.18893 10.4554 10.1948C10.4971 10.4254 10.4408 10.6533 10.3012 10.8202C10.2377 10.8963 10.1582 10.9572 10.0682 10.9986C9.97829 11.04 9.88025 11.0608 9.78125 11.0596Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_190">
          <rect
            width="11"
            height="11"
            fill="currentColor"
            transform="translate(0.499878 0.747559)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileIcon;
