import React from "react";
import Header from "../../components/header";
import { theme } from "../../theme/theme";
import * as Styled from "./styles";
import Footer from "../../components/footer";
import BorderPage from "../../components/borderPage";

const Privacy: React.FC = () => {
  return (
    <>
      <Header />
      <BorderPage
        insideColor={theme.colors.orange.palete}
        outsideColor={theme.colors.orange.palete}
        children={
          <>
            <Styled.Container>
              <Styled.Span>Política de privacidade</Styled.Span>
              <Styled.SpanTitle>I - Dos dados pessoais</Styled.SpanTitle>
              <Styled.SpanDescription>
                1. A presente cláusula, integrante do Termo de uso de serviços
                do site Meu Ingresso, tem por objeto descrever a política de
                proteção de dados do SITE MEU INGRESSO
              </Styled.SpanDescription>
              <Styled.SpanDescription>
                2. O site Meu Ingresso se compromete a respeitar a sua
                privacidade e é contra o ‘spam’.
              </Styled.SpanDescription>
              <Styled.SpanDescription>
                3. O site Meu Ingresso encara seriamente a privacidade e a
                proteção dos dados disponibilizados pelos seus utilizadores e
                reconhece o valor da sua privacidade, pelo que tomamos as
                medidas necessárias para garantir a proteção dos seus dados
                pessoais em todos os momentos em que estiver a utilizar o SITE.
                Para uma total utilização do nosso site, são necessários alguns
                dados de informação pessoal.
              </Styled.SpanDescription>
              <Styled.SpanDescription>
                4. Os dados pessoais solicitados nos formulários do SITE (nome,
                telefone, CPF, etc.) servem para gestão, navegação e consulta do
                próprio SITE. O usuário reconhece e concorda que cede seus dados
                para dar continuidade à atividade prestada pelo site Meu
                Ingresso, ou se existir uma obrigatoriedade legal nesse sentido.
                Quando autorizado, o site Meu Ingresso poderá enviar informação
                relevante e específica para cada Utilizador, sobre produtos e
                serviços.
              </Styled.SpanDescription>
              <Styled.SpanDescription>
                5. Sempre que um usuário decida que não pretende ter seus dados
                vinculados deverá mencionar tal fato ao site Meu Ingresso,
                podendo tal ser feito por meio do email:
                contato.meuingresso.app@gmail.com
              </Styled.SpanDescription>
              <Styled.SpanTitle>
                II - Da responsabilidade dos dados
              </Styled.SpanTitle>

              <Styled.SpanDescription>
                6. A responsabilidade pela exatidão dos dados inseridos no SITE
                é exclusiva do Usuário e, por isso, caso o Usuário tenha
                fornecido informações falsas, o site Meu Ingresso reserva-se o
                direito de negar, doravante, o seu acesso ao SITE.
              </Styled.SpanDescription>
              <Styled.SpanDescription>
                7. Os dados de caráter pessoal que forem disponibilizados pelos
                Usuários serão objeto de tratamento automatizado e incorporados
                aos arquivos automáticos do site ‘Meu Ingresso’, os quais,
                conforme as normas legais vigentes encontram-se devidamente
                registrados.
              </Styled.SpanDescription>
            </Styled.Container>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default Privacy;
