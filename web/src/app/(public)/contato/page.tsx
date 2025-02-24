import Container from '@/components/Container'
import Informs from '@/components/_Contact/Informs'
import Form from '@/components/_Contact/Form'

export default function ContactPage() {
  return (
    <>
      <section className="flex h-[300px] items-center justify-center bg-rangoon text-white md:h-[400px]">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl">Contate-nos</h2>
            <p className="mt-4">
              Estamos ansiosos para ouvir suas necessidades legais e ajudá-lo a
              encontrar a melhor solução para seus desafios jurídicos.
            </p>
          </div>
        </Container>
      </section>

      <Informs />

      <Form />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.672342973148!2d-35.74028722405085!3d-9.623454701528397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145aba69a18e5%3A0x924e448ab679434!2sMonte%20e%20Cavalcante%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1696447569983!5m2!1spt-BR!2sbr"
        width="100%"
        height="300px"
        style={{ border: 0 }}
        loading="lazy"
        title="Localização Geográfica da Monte e Cavalcante Advogados"
        rel="noreferrer noopener"
      />
    </>
  )
}
