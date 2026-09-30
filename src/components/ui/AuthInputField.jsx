export const AuthInputField = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  className = '',
  labelClassName = '',
  containerClassName = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2.5  ${containerClassName}`}>
      {label && (
        <label className={`text-[14px] font-satoshi font-medium text-[#000000] ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-5 py-3 font-satoshi text-[17px] text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${className}`}
        {...props}
      />
    </div>
  );
};
