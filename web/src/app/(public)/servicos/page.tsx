import Administrative from '@/components/_Services/Administrative'
import Outsourcing from '@/components/_Services/Outsourcing'
import Container from '@/components/Container'

export default function ServicesPage() {
  return (
    <>
      <section className="flex h-[300px] items-center justify-center bg-rangoon text-white md:h-[400px]">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl">Conheça nossos serviços</h2>
            <p className="mt-4">
              Com um profundo conhecimento em diversas áreas do direito, estamos
              prontos para representá-lo e proteger seus interesses.
            </p>
          </div>
        </Container>
      </section>

      <Administrative />

      <Outsourcing />
    </>
  )
}
