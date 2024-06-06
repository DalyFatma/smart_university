import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [isAvisEtudiant, setIsAvisEtudiant] = useState(false);
    const [isAvisEnseignant, setIsAvisEnseignant] = useState(false);
    const [isAvisPersonnel, setIsAvisPersonnel] = useState(false);
    const [isDeaprtement, setIsDeaprtement] = useState(false);
    const [isSellers, setIsSellers] = useState(false);
    const [isInvoice, setIsInvoice] = useState(false);
    const [isParametre, setIsParametre] = useState(false);
    const [isLocalization, setIsLocalization] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);
    const [isLevel3, setIsLevel3] = useState(false);
    const [isLevel4, setIsLevel4] = useState(false);
    const [isLevel5, setIsLevel5] = useState(false);
    

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                // var id: any = item.getAttribute("subitems");
                // if (document.getElementById(id)){
                //     document.getElementById(id).classList.remove("show");
                // }
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Ecommerce') {
            setIsEcommerce(false);
        }
        if (iscurrentState !== 'Orders') {
            setIsOrder(false);
        }
        if (iscurrentState !== 'Sellers') {
            setIsSellers(false);
        }
        if (iscurrentState !== 'Invoice') {
            setIsInvoice(false);
        }
        if (iscurrentState !== 'Parametre') {
            setIsParametre(false);
        }
        if (iscurrentState !== 'Localization') {
            setIsLocalization(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'AvisEtudiant') {
            setIsAvisEtudiant(false);
        }
        if (iscurrentState !== 'AvisEnseignant') {
            setIsAvisEnseignant(false);
        }
        if (iscurrentState !== 'AvisPersonnel') {
            setIsAvisPersonnel(false);
        }
        if (iscurrentState !== 'Departement') {
            setIsDeaprtement(false);
        }
    }, [
        iscurrentState,
        isEcommerce,
        isOrder,
        isInvoice,
        isParametre,
        isLocalization,
        isAuth,
        isMultiLevel,
        isAvisEtudiant,
        isAvisEnseignant,
        isAvisPersonnel,
        isDeaprtement
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        //dashboard
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "bi bi-speedometer2",
            link: "/dashboard",
            badgeName : "Hot",
            badgeColor : "danger"
        },
     // gestion etudiant
        {
            id: "Gestion-des-Etudiants",
            label: "Gestion des Etudiants",
            link: "/#",
            icon: "bi bi-person-fill-gear",
            click: function (e: any) {
                e.preventDefault();
                setIsAvisEtudiant(!isAvisEtudiant);
                setIscurrentState('AvisEtudiant');
                updateIconSidebar(e);
            },
            stateVariables: isAvisEtudiant,
            subItems: [
                {
                    id: "AjouterEtudiant",
                    label: "Ajouter un Etudiant",
                    link: "/AjouterEtudiant",
                    parentId: "Gestion-des-Etudiant",
                    icon: "bi bi-person-fill-add"
                },
                {
                    id: "GestionEtudiant",
                    label: "Liste Des Etudiants",
                    link: "/ListeEtudiants",
                    parentId: "Gestion-des-Etudiants",
                    icon: "bi bi-person-lines-fill"
                },
            ],
           
        },
        // gestion enseignant
        {
            id: "gestion-enseignant",
            label: "Gestion Enseignants",
            link: "/#",
            icon: "bi bi-person-fill-gear",
            click: function (e: any) {
                e.preventDefault();
                setIsAvisEnseignant(!isAvisEnseignant);
                setIscurrentState('AvisEnseignant');
                updateIconSidebar(e);
            },
            stateVariables: isAvisEnseignant,
            subItems: [
                {
                    id: "AjouterEnseignant",
                    label: "Ajouter un Enseignant",
                    link: "/AjouterEnseignant",
                    parentId: "Gestion-enseignant",
                    icon: "bi bi-person-fill-add"
                },
                {
                    id: "GestionEnseignant",
                    label: "Liste Des Enseignants",
                    link: "/ListeEnseignants",
                    parentId: "Gestion-enseignant",
                    icon: "bi bi-person-lines-fill"
                },
            ],
           
        },
        //avis personnel
        {
            id: "Gestion-Personnel",
            label: "Gestion Personnels",
            link: "/#",
            icon: "bi bi-person-fill-gear",
            click: function (e: any) {
                e.preventDefault();
                setIsAvisPersonnel(!isAvisPersonnel);
                setIscurrentState('AvisPersonnel');
                updateIconSidebar(e);
            },
            stateVariables: isAvisPersonnel,
            subItems: [
                {
                    id: "AjouterPersonnel",
                    label: "Ajouter un Personnel",
                    link: "/AjouterPersonnel",
                    parentId: "Gestion-Personnel",
                    icon: "bi bi-person-fill-add"
                },
                {
                    id: "GestionPersonnel",
                    label: "Liste Des Personnels",
                    link: "/ListePersonnels",
                    parentId: "Gestion-Personnel",
                    icon: "bi bi-person-lines-fill"
                },
            ],
           
        },
        // {
        //     id: "Gestion-des-avis-Enseignants",
        //     label: "Gestion des Enseignants",
        //     link: "/GestionEnseignant",
        //     icon: "bi bi-person-gear",
           
        // },
       
        // {
        //     id: "Demande-enseignants",
        //     label: "Demande Enseignants",
        //     link: "/DemandeEnseignant",
        //     icon: "bi bi-telephone-forward-fill",
           
        // },
        // {
        //     id: "Réclamation-enseignants",
        //     label: "Réclamation Enseignants",
        //     link: "/ReclamationEnseignant",
        //     icon: "bi bi-pencil-square",
           
        // },
        // {
        //     id: "Avis-rattrapage",
        //     label: "Avis Rattrapage",
        //     link: "/AvisRattrapage",
        //     icon: "bi bi-book-half",
           
        // },
       
        // {
        //     id: "gestionPresence",
        //     label: "Gestion des Présences",
        //     icon: "bi bi-person-check",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsOrder(!isOrder);
        //         setIscurrentState('Orders');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isOrder,
        //     subItems: [
        //         {
        //             id: "Pointages-enseignants",
        //             label: "Pointage Enseignant",
        //             link: "/orders-list-view",
        //             parentId: "gestionPresence",
        //             icon: "bi bi-fingerprint"
        //         },
        //         {
        //             id: "Absence-enseignant",
        //             label: "Absence Enseignant",
        //             link: "/orders-overview",
        //             parentId: "gestionPresence",
        //             icon: "bi bi-person-exclamation"
        //         },
        //     ],
        // },
        // {
        //     id: "parametre",
        //     label: "Paramètres Comptes",
        //     icon: "bi bi-sliders",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsParametre(!isParametre);
        //         setIscurrentState('Parametre');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isParametre,
        //     subItems: [
        //         {
        //             id: "Etudiants",
        //             label: "Etudiants",
        //             link: "/parametre/parametre-etudiants",
        //             parentId: "parametre",
        //             icon: "bi bi-mortarboard-fill"
        //         },
        //         {
        //             id: "Enseignants",
        //             label: "Enseignants",
        //             link: "/parametre/parametre-enseignants",
        //             parentId: "parametre",
        //             icon: "bi bi-person-fill"
        //         },
        //         {
        //             id: "Personnels",
        //             label: "Personnels",
        //             link: "/parametre/parametre-personnels",
        //             parentId: "parametre",
        //             icon: "bi bi-person-workspace"
        //         },
               
        //     ],
            
        // },
       
        {
            id: "parametre",
            label: "Paramètres Comptes",
            icon: "bi bi-sliders",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsParametre(!isParametre);
                setIscurrentState('Parametre');
                updateIconSidebar(e);
            },
            stateVariables: isParametre,
            subItems: [  
                {
                    id: "Etudiants",
                    label: "Etudiants",
                    icon: "bi bi-mortarboard-fill",
                    link: "",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Etat", link: "/parametre/etat-etudiants" , icon:"bi bi-person-fill-exclamation"},
                        { id: 1, label: "Inscription", link: "/parametre/inscription-etudiants",  icon: "bi bi-person-plus-fill"},
                       
                    ]
                },
                {
                    id: "Enseignants",
                    label: "Enseignants",
                    icon: "bi bi-briefcase-fill",
                    link: "/parametre/parametre-enseignants",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel2(!isLevel2);
                    },
                    stateVariables: isLevel2,
                    childItems: [
                        { id: 1, label: "Etat", link: "/parametre/etat-enseignants", icon: "bi bi-person-fill-exclamation" },
                        { id: 1, label: "Grade", link: "/parametre/grade-enseignants", icon: "bi bi-award-fill"},
                        { id: 1, label: "Poste", link: "/parametre/poste-enseignants", icon: "bi bi-book"},
                        { id: 1, label: "Spécialité", link: "/parametre/specialite-enseignants", icon: "bi bi-briefcase-fill"},
                       
                    ]
                },
                {
                    id: "Personnels",
                    label: "Personnels",
                    icon: "bi bi-person-workspace",
                    link: "/parametre/parametre-personnels",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel3(!isLevel3);
                    },
                    stateVariables: isLevel3,
                    childItems: [
                        { id: 1, label: "Etat", link: "/parametre/etat-personnels", icon: "bi bi-person-fill-exclamation"},
                        { id: 1, label: "Grade", link: "/parametre/grade-personnels", icon: "bi bi-award-fill" },
                        { id: 1, label: "Poste", link: "/parametre/poste-personnels", icon: "bi bi-book"},
                        { id: 1, label: "Catégorie", link: "/parametre/categorie-personnels" , icon :"bi bi-grid"},
                       
                    ]
                },
            ],
        },
        {
            id: "departement",
            label: "Gestion Département",
            icon: "bi bi-house-gear-fill",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsDeaprtement(!isDeaprtement);
                setIscurrentState('Departement');
                updateIconSidebar(e);
            },
            stateVariables: isDeaprtement,
            subItems: [  
                {
                    id: "matieres",
                    label: "Matières",
                    icon: "bi bi-journals",
                    link: "",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Liste Des Matières", link: "/gestion-matieres/liste-matieres" , icon:"bi bi-journal-text"},   
                       
                    ]
                },
                {
                    id: "salles",
                    label: "Gestions Des Salles",
                    icon: "bi bi-door-closed-fill",
                    link: "",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel2(!isLevel2);
                    },
                    stateVariables: isLevel2,
                    childItems: [
                        { id: 1, label: "Liste Des Salles", link: "/gestion-salles/liste-salles" , icon:"bi bi-person-fill-exclamation"},
                        // { id: 1, label: "Ajouter Une Salle", link: "/gestion-salles/Ajout-salle",  icon: "bi bi-person-plus-fill"},
                       
                    ]
                },
                {
                    id: "classes",
                    label: "Classes",
                    icon: "bi bi-people-fill",
                    link: "",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel3(!isLevel3);
                    },
                    stateVariables: isLevel3,
                    childItems: [
                        { id: 1, label: "Liste des classes", link: "/gestion-classes/liste-classes" , icon:"bi bi-people-fill"},
                        { id: 1, label: "Ajouter un niveau", link: "/gestion-classes/Ajout-niveau",  icon: "bi bi-plus-lg"},
                        { id: 1, label: "Ajouter une séction", link: "/gestion-classes/Ajout-section",  icon: "bi bi-plus-lg"},
                       
                    ]
                },
                {
                    id: "departements",
                    label: "Départements",
                    icon: "bi bi-house-gear-fill",
                    link: "",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel4(!isLevel4);
                    },
                    stateVariables: isLevel4,
                    childItems: [
                        { id: 1, label: "Liste Des Départements", link: "/gestion-departements/liste-departements" , icon:"bi bi-diagram-3-fill"},
                        // { id: 1, label: "Ajouter Un Département", link: "/gestion-departements/Ajout-departement",  icon: "bi bi-person-plus-fill"},
                       
                    ]
                },
                {
                    id: "emplois",
                    label: "Emplois de Temps Enseignants",
                    icon: "bi bi-calendar-week-fill",
                    link: "",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel5(!isLevel5);
                    },
                    stateVariables: isLevel5,
                    childItems: [
                        { id: 1, label: "Liste Des Emplois", link: "/gestion-emplois/liste-emplois" , icon:"bi bi-list-task"},
                        // { id: 1, label: "Ajouter Un Département", link: "/gestion-departements/Ajout-departement",  icon: "bi bi-person-plus-fill"},
                       
                    ]
                },
               
            ],
        },

        {
            id: "telechargement",
            label: "Espace téléchargement",
            icon: "bi bi-cloud-arrow-down-fill",
            link: "/espace-telechargement",
           
        },
        {
            id: "lien",
            label: "Liens Utils",
            icon: "bi bi-link-45deg",
            link: "/liens-utils",
           
        },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;