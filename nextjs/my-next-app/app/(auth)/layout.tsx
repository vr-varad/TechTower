export default function banner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="p-2 bg-cyan-400 text-blue-700">
        Sign In Now and get 20%off
      </div>
      {children}
    </>
  );
}
