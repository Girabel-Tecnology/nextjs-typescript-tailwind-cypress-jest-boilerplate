import { SignForm } from '../components/signForm';

const SignIn = () => {
  return (
    <div className={'w-screen bg-white h-screen flex'}>
      <aside className={'bg-blend-lighten w-3/12 bg-secondary p-12'}>
        <h1 className={'text-white text-5xl'}>Teste</h1>
        <h3 className={'text-white text-3xl mt-4'}>Teste 2</h3>
      </aside>
      <main className={'flex flex-1 items-center bg-amber-50 justify-center'}>
        <div className={'min-w-[25rem] p-4 rounded-3xl  focus:outline-none   flex flex-col '}>
          <section className={'flex flex-col'}>
            <h1>Entrar no codeWeavers</h1>
            <div>google e twiter</div>
          </section>

          <section className={'flex items-center my-4'}>
            <hr className={'h-[1px] bg-[#e0e0e0] w-1/2'} />
            <div className={'mx-4'}>Ou</div>
            <hr className={'h-[1px] bg-[#e0e0e0] w-1/2'} />
          </section>

          <SignForm />
        </div>
      </main>
    </div>
  );
};
export default SignIn;
