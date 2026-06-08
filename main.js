const competences=document.getElementById("competences");

const Competences=[
    {
        image:"",
        titre:"Sourcing en Chine",
        paragraph:"Nous trouvons pour vous les meilleurs fournisseurs et produit en Chine."
    },
    {
        image:"",
        titre:"Transport & Logistique",
        paragraph:"Solution de transport maritime et aèrien fiable et Sécurisées jusqu'au Sénégal."

    },
    {
        image:"",
        titre:"Suivi de commande",
        paragraph:"Un Suivi rigoureux à chaque étape pour une livraison sans souci."
    },
    {
        image:"",
        titre:"Dédouanement",
        paragraph:"Assistance et accompagnement pour un dédouanement rapide et conforme."
    },
    {
        image:"",
        titre:"Conseil & Assistance",
        paragraph:"Nous vous conseillons et restons disponible pour toutes vos Préoccupations."
    }

];

const list=()=>{
    Competences.forEach((value)=>{
        const skills =document.createElement("div");
        skills.innerHTML=`
        <img src="" alt="image">
        <i class="fa-solid fa-box-open"></i>
        <div class="texte">
        <h3> ${value.titre} </h3>
        <p>  ${value.paragraph} </p>
        `;
        skills.classList.add("skill");
        competences.appendChild(skills);

    });
}
list();