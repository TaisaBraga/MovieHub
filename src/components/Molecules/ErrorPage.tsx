interface IErrorPage {
  errorCode: string;
  errorMessage: string;
}

export default function ErrorPage({ errorCode, errorMessage }: IErrorPage) {
  return (
    <div className="min-h-[380px] max-w-[780px] bg-zinc-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center m-auto text-center">
      <div>
        <h1 className="text-7xl/tight font-extrabold mb-8">{errorCode}</h1>
        <div>{errorMessage}</div>
      </div>
    </div>
  );
}
