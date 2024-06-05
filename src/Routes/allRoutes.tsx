import { Navigate } from "react-router-dom";

import Dashboard from "pages/Dashboard";

//new routes

//Product
import ListView from "pages/Products/ListView";
import GridView from "pages/Products/GridView";
import Overview from "pages/Products/Overview";
import CreateProduct from "pages/Products/CreateProduct";
import Categories from "pages/Products/Categories";
import SubCategories from "pages/Products/SubCategories";

// Orders
import OrdersListView from "pages/Orders/ListView";
import OrdersOverview from "pages/Orders/Overview";

// Calender
import Calendar from "pages/Calendar";

// Sellers
import SellersListView from "pages/Sellers/ListView";
import SellersGridView from "pages/Sellers/GridView";
import SellersOverview from "pages/Sellers/Overview";

// Invoice
import InvoiceList from "pages/Invoices/InvoiceList";
import InvoiceDetails from "pages/Invoices/InvoiceDetails";
import CreateInvoice from "pages/Invoices/CreateInvoice";

// User List
import UsersList from "pages/UsersList";

// Shipping
import Shipments from "pages/Shipping/Shipments";
import ShippingList from "pages/Shipping/ShippingList";

// Coupons
import Coupons from "pages/Coupons";

//Review & Rating
import ReviewRating from "pages/Reviews-Rating";

//Brands
import Brands from "pages/Brands";


// Localization
import Transactions from "pages/Localization/Transactions";
import CurrencyRates from "pages/Localization/CurrencyRates";

// Accounts
import MyAccount from "pages/Accounts/MyAccount";
import Settings from "pages/Accounts/Settings";
import SignUp from "pages/Accounts/AuthenticationInner/SignUp";
import SignIn from "pages/Accounts/AuthenticationInner/SignIn";
import PasswordReset from "pages/Accounts/AuthenticationInner/PasswordReset";
import PasswordCreate from "pages/Accounts/AuthenticationInner/PasswordCreate";
import SuccessMessage from "pages/Accounts/AuthenticationInner/SuccessMessage";
import TwoStepVerify from "pages/Accounts/AuthenticationInner/TwoStepVerify";
import BasicLogout from "pages/Accounts/AuthenticationInner/Logout";
import Error404 from "pages/Accounts/AuthenticationInner/Error404";
import Error500 from "pages/Accounts/AuthenticationInner/Error500";
import ComingSoon from "pages/Accounts/AuthenticationInner/ComingSoon";

// Authentication
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/Logout";
import Register from "pages/Authentication/Register";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import UserProfile from "pages/Authentication/user-profile";
import GestionEnseignant from "pages/Gestion-enseignant/GestionEnseignant";
import DemandeEnseignant from "pages/Demande-enseignant/DemandeEnseignant";
import ReclamationEnseignant from "pages/ReclamationEnseignant/ReclamationEnseignant";
import AjouterEnseignant from "pages/GestionsEnseignants/AjouterEnseignant";

import AjouterAvisEtudiant from "pages/avis-etudiant/AjouterAvisEtudiant";
import ListeAvisEtudiant from "pages/avis-etudiant/ListeAvisEtudiant";
import ListeAvisEnseignant from "pages/avis-enseignant/ListeAvisEnseignant";
import AjouterAvisEnseignant from "pages/avis-enseignant/AjouterAvisEnseignant";
import AjouterAvisPersonnel from "pages/avis-personnel/AjouterAvisEtudiant";
import ListeAvisPersonnel from "pages/avis-personnel/ListeAvisEtudiant";
import AjouterEtudiant from "pages/GestionsEtudiants/AjouterEtudiant";
import ListEtudiants from "pages/GestionsEtudiants/ListeEtudiants";
import ListEnseignants from "pages/GestionsEnseignants/ListeEnseignants";
import AjouterPersonnels from "pages/GestionsPersonnels/AjouterPersonnels";
import ListPersonnels from "pages/GestionsPersonnels/ListePersonnels";
import ListParametresEtudiants from "pages/Parametres/ParametresEtudiants/EtatEtudiant/ListParametreEtudiants";
import ListeInscriptionEtudiants from "pages/Parametres/ParametresEtudiants/InscriptionEtudiant/ListeInscriptionEtudiants";
import ListEtatEnseignants from "pages/Parametres/ListEtatEnseignants";
import ListGradeEnseignants from "pages/Parametres/ListGradeEnseignant";
import ListePostEnseignants from "pages/Parametres/ListePostEnseignants";
import ListSpecialiteEnseignants from "pages/Parametres/ListSpecialiteEnseignants";
import ListEtatPersonnels from "pages/Parametres/ListEtatPersonnels";
import ListGradePersonnels from "pages/Parametres/ListGradePersonnels";
import ListePostPersonnels from "pages/Parametres/ListPostePersonnels";
import ListCategoriePersonnels from "pages/Parametres/ListCategoriePersonnels";
import ListMatieres from "pages/Departements/GestionMatieres/ListMatieres";
import ListSalles from "pages/Departements/GestionSalles/ListSalles";
import ListDepartement from "pages/Departements/GestionDepartements/ListDepartement";
import ListClasses from "pages/Departements/GestionClasses/ListClasses";
import Profil from "pages/GestionsEtudiants";
import ListNiveau from "pages/Departements/GestionClasses/NiveauScolaire/ListNiveau";
import ListSections from "pages/Departements/GestionClasses/Section/ListSections";



const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  // New Routes
  { path: "/GestionEnseignant", component: <GestionEnseignant /> },
  //avis etudiant
  { path: "/ListeAvisEtudiant", component: <ListeAvisEtudiant /> },
  { path: "/AjouterAvisEtudiant", component: <AjouterAvisEtudiant /> },
  //Ajouter Etudiant
  { path: "/AjouterEtudiant", component: <AjouterEtudiant /> },

  //Profil Etudiant
  { path: "/profil-etudiant", component: < Profil/> },
//Liste Etudiant
{ path: "/ListeEtudiants", component: <ListEtudiants /> },

//Ajouter Enseignant
{ path: "/AjouterEnseignant", component: <AjouterEnseignant /> },
//Liste Enseignant
{ path: "/ListeEnseignants", component: <ListEnseignants /> },

//Ajouter Personnel
{ path: "/AjouterPersonnel", component: <AjouterPersonnels /> },
//Liste Personnels
{ path: "/ListePersonnels", component: <ListPersonnels /> },

//Liste Etat Etudiants 
{ path: "/parametre/etat-etudiants", component: <ListParametresEtudiants/> },

//Liste Inscriptions Etudiants 
{ path: "/parametre/inscription-etudiants", component: <ListeInscriptionEtudiants/> },

//Liste Etat Enseignants
{ path: "/parametre/etat-enseignants", component: <ListEtatEnseignants/> },

//Liste Grade Enseignants
{ path: "/parametre/grade-enseignants", component: <ListGradeEnseignants/> },

//Liste Poste Enseignants
{ path: "/parametre/poste-enseignants", component: <ListePostEnseignants/> },

//Liste Specialite Enseignants
{ path: "/parametre/specialite-enseignants", component: <ListSpecialiteEnseignants/> },


//Liste Etat Personnels 
{ path: "/parametre/etat-personnels", component: <ListEtatPersonnels/> },

//Liste Grade Personnels 
{ path: "/parametre/grade-personnels", component: <ListGradePersonnels/> },

//Liste Poste Personnels 
{ path: "/parametre/poste-personnels", component: <ListePostPersonnels/> },
  // Liste Categorie
{ path: "/parametre/categorie-personnels", component: <ListCategoriePersonnels/> },


  // Liste Des Matieres
  { path: "/gestion-matieres/liste-matieres", component: <ListMatieres/> },


  // Liste Des Salles
  { path: "/gestion-salles/liste-salles", component: <ListSalles/> },


  // Liste Des Departements
  { path: "/gestion-departements/liste-departements", component: <ListDepartement/> },

    // Liste Des classes
    { path: "/gestion-classes/liste-classes", component: <ListClasses/> },

  //Ajouter Niveau
  { path: "/gestion-classes/Ajout-niveau", component: <ListNiveau /> },

//Ajouter section
{ path: "/gestion-classes/Ajout-section", component: <ListSections /> },




  //avis enseignant
  { path: "/ListeAvisEnseignant", component: <ListeAvisEnseignant /> },
  { path: "/AjouterAvisEnseignant", component: <AjouterAvisEnseignant /> },
  // avis personnel
  { path: "/ListeAvisPersonnel", component: <ListeAvisPersonnel /> },
  { path: "/AjouterAvisPersonnel", component: <AjouterAvisPersonnel /> },

  { path: "/DemandeEnseignant", component: <DemandeEnseignant /> },
  { path: "/ReclamationEnseignant", component: <ReclamationEnseignant /> },
  { path: "/AvisRattrapage", component: <ReclamationEnseignant /> },
  {
    path: "/GestionEnseignant/AjouterEnseignant",
    component: <AjouterEnseignant />,
  },

  //Product
  { path: "/products-list", component: <ListView /> },
  { path: "/products-grid", component: <GridView /> },
  { path: "/product-overview", component: <Overview /> },
  { path: "/product-create", component: <CreateProduct /> },
  { path: "/categories", component: <Categories /> },
  { path: "/sub-categories", component: <SubCategories /> },

  // Orders
  { path: "/orders-list-view", component: <OrdersListView /> },
  { path: "/orders-overview", component: <OrdersOverview /> },

  // Sellers
  { path: "/sellers-list-view", component: <SellersListView /> },
  { path: "/seller-grid-view", component: <SellersGridView /> },
  { path: "/seller-overview", component: <SellersOverview /> },

  // Invoice
  { path: "/invoices-list", component: <InvoiceList /> },
  { path: "/invoices-details", component: <InvoiceDetails /> },
  { path: "/invoices-create", component: <CreateInvoice /> },

  // User List
  { path: "/users-list", component: <UsersList /> },

  // Shipping
  { path: "/shipping-list", component: <ShippingList /> },
  { path: "/shipments", component: <Shipments /> },

  // Coupons
  { path: "/coupons", component: <Coupons /> },

  { path: "/calendar", component: <Calendar /> },

  //Review & Rating
  { path: "/reviews-ratings", component: <ReviewRating /> },

  //Review & Rating
  { path: "/brands", component: <Brands /> },


  // Localization
  { path: "/transactions", component: <Transactions /> },
  { path: "/currency-rates", component: <CurrencyRates /> },

  // Accounts
  { path: "/account", component: <MyAccount /> },
  { path: "/settings", component: <Settings /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },
  { path: "/user-profile", component: <UserProfile /> },
];

const publicRoutes = [
  // Authentication
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/register", component: <Register /> },
  { path: "/forgot-password", component: <ForgotPassword /> },

  // AuthenticationInner
  { path: "/auth-signup-basic", component: <SignUp /> },
  { path: "/auth-signin-basic", component: <SignIn /> },
  { path: "/auth-pass-reset-basic", component: <PasswordReset /> },
  { path: "/auth-pass-change-basic", component: <PasswordCreate /> },
  { path: "/auth-success-msg-basic", component: <SuccessMessage /> },
  { path: "/auth-twostep-basic", component: <TwoStepVerify /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-404", component: <Error404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/coming-soon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
