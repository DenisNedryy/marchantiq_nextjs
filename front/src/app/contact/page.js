
import { ContactForm } from "../components/forms/ContactForm";
import { ContactFlyer } from "../components/commons/ContactFlyer";


export const metadata = {
    title: "Marchantiq - Contact | Contacter le propriétaire",
    description: "Formulaire de contact Marchantiq : envoyez un message au propriétaire, posez vos questions et indiquez la référence d’un article pour obtenir plus d’informations.",
};


export default function Contact(){

     return (
        <div className="contact">
            <div className="box">
                <h2>Coordonées</h2>
                <div className="contact__coordonées" >
                <ContactFlyer/>
                </div>
            </div>
            <div className="box">
                <h2>Contacter Marchantiq</h2>
                <div className="contact__contact">
                    <p className="contact__contact__para">Vous avez une question sur l’un de nos objets ?</p>
                    <p className="contact__contact__para">Vous souhaitez obtenir une estimation et nous proposer un échange ou un achat ?</p>
                    <p className="contact__contact__para">Pour toute demande, merci d’utiliser le formulaire de contact ci-dessous.</p>
                    <p className="contact__contact__addresseEmail">Adresse email Marchantiq : march.jf@orange.fr</p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}