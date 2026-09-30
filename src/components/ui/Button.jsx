const Button = ({
  children,
  onClick,
  type = 'button',
  width = '',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-[#D4FB20]
        text-black
        px-6
        py-3
        font-satoshi
        transition-all
        duration-200
        hover:opacity-90
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
