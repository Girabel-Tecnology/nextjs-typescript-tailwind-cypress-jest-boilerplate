import { SignForm } from '../components/signForm';

const SignIn = () => {
  return (
    <div className={'w-screen h-screen  bg-amber-50 flex md:p-0'}>
      <aside className={'bg-blend-lighten w-3/12 bg-secondary p-12'}>
        <h1 className={'text-white text-5xl'}>Teste</h1>
        <h3 className={'text-white text-3xl mt-4'}>Teste 2</h3>
      </aside>
      <main className={'flex flex-1 items-center  justify-center'}>
        <div className={'min-w-[25rem] p-4 rounded-3xl flex flex-col'}>
          <SignForm />
        </div>
      </main>
    </div>
  );
};
export default SignIn;
