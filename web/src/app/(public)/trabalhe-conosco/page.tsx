import Job from '@/components/_Career/Job'
import Container from '@/components/Container'

export default function CareerPage() {
  return (
    <>
      <section className="flex h-[300px] items-center justify-center bg-rangoon text-white md:h-[400px]">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl">Junte-se à Equipe</h2>
            <p className="mt-4">
              Estamos sempre em busca de profissionais apaixonados pelo direito
              e pela busca da justiça para se juntarem a nós.
            </p>
          </div>
        </Container>
      </section>

      {/* <AboutCareer /> */}

      <Job />
    </>
  )
}
