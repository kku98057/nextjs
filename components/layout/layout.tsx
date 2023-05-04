export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="">
      <header className="w-full">
        <div className="container w-full m-auto xl">
          <div className="flex items-center justify-between w-full">
            <div className="w-32 bg-red-500 logo md:bg-blue-500 hover:bg-green-500">
              로고
            </div>
            <div className="w-[120px] bg-slate-100 w-30">네브</div>
          </div>
        </div>
      </header>
      {props.children}
      <footer className="w-full py-[30px] bg-slate-400">
        <div className="container"></div>
      </footer>
    </div>
  );
}
