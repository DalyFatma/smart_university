import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import RecentOrders from './ProfilEtudiant';

const Profil = () => {

    document.title = "Profils | Application Smart Institute";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Gestion des Etudiants" pageTitle="Profils" />
                    <RecentOrders />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Profil;