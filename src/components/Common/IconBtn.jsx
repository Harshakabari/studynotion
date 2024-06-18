export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline ? " bg-transparent" : "bg-blue-900"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-blue-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-blue-900"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
