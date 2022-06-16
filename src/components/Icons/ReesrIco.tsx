interface Iprops {
  color: string;
}

export const ReestrIco: React.FC<Iprops> = ({ color }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3467 0H6.66667C2.98667 0 0 2.98667 0 6.66667V17.3467C0 21.0267 2.98667 24.0133 6.66667 24.0133H17.3467C21.0267 24.0133 24.0133 21.0267 24.0133 17.3467V6.66667C24.0133 2.98667 21.0267 0 17.3467 0ZM11.16 11.96L9.33333 12.8534V2.66667H14.68V12.8534L12.8533 11.96C12.32 11.6933 11.6933 11.6933 11.16 11.96ZM21.3467 17.3333C21.3467 19.5333 19.5467 21.3333 17.3467 21.3333H6.66667C4.46667 21.3333 2.66667 19.5333 2.66667 17.3333V6.65332C2.66667 4.45332 4.45332 2.66665 6.65332 2.65332V14.0533C6.65332 14.7066 6.98667 15.3067 7.54667 15.6667C8.12 16.0267 8.81333 16.0534 9.41333 15.7734L11.9867 14.52L14.56 15.7734C14.8266 15.9067 15.12 15.9733 15.4 15.9733C15.76 15.9733 16.1067 15.88 16.4267 15.68C16.9867 15.3333 17.32 14.7333 17.32 14.0666V2.66667C19.52 2.66667 21.32 4.46667 21.32 6.66667V17.3467L21.3467 17.3333Z"
        fill={color}
      />
    </svg>
  );
};
