import "./style.scss";
import cv from "./CV chaala.pdf"
const About = () => {
    return(
        <>
<h1>Hello,</h1>
{/*<h2> Web Developer</h2>*/}
<p> En tant que développeuse frontend passionnée, je crée des expériences web uniques en utilisant des technologies modernes et des techniques de design innovantes. Je suis spécialisée dans le développement d'interfaces utilisateur interactives et réactives en HTML, CSS et JavaScript.
Avec mes connaissances en développement backend, je suis en mesure de concevoir des sites web dynamiques et performants. Je suis constamment à l'affût des dernières tendances du domaine pour proposer des solutions esthétiques et fonctionnelles.
Ma véritable passion est de créer des expériences en ligne qui marquent les esprits et qui répondent aux besoins uniques de chaque projet. En travaillant avec moi, vous bénéficierez d'une professionnelle dévouée, soucieuse de la qualité et toujours prête à relever de nouveaux défis.
Faisons équipe pour créer quelque chose d'exceptionnel et mémorable pour votre projet..</p>
<div className="rowabout">
<a href={cv} target="_blank" rel="noreferrer">
  <button className="button">Download CV</button>
</a>
<ul className="socialinks">
	            <li>
	            <a href="mailto:chaalaadhif@gmail.com "  target="_blank" rel="noreferrer" >
	            <i aria-hidden className="fas fa-envelope"></i>
	            </a>
	            </li>
                <li>
                <a href="https://github.com/chaala90"   target="_blank" rel="noreferrer" >
                <i aria-hidden className="fab fa-github"></i>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/chaala-dhif-588335176/"  target="_blank" rel="noreferrer" >
                <i aria-hidden className="fab fa-linkedin-in"></i>
                </a>
                </li>
                <li>
<a href="https://discord.com/channels/@me/1103608195370450944"  target="_blank" rel="noreferrer" >
<i aria-hidden className="fa-brands fa-discord"></i>
</a>
</li>
</ul>
</div>
</>)}
export default About;

