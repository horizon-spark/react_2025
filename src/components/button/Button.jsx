export const Button = ({
  text,
  onClickAction,
  isDisabled,
  externalCssClasses,
}) => {
  return (
    <button
      onClick={onClickAction}
      disabled={isDisabled}
      className={externalCssClasses}
    >
      {text}
    </button>
  );
};
