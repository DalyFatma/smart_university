import React, { useState, useEffect, useMemo } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { sellerGrid } from "Common/data";
import { Link, useNavigate } from "react-router-dom";

const ListeActualite = () => {
  document.title = "Actualité | Smart Institute";
  const navigate = useNavigate();

  // Pagination
  const [pagination, setPagination] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [currentpages, setCurrentpages] = useState<any>([]);
  const perPageData = 8;

  const handleClick = (e: any) => {
    setCurrentPage(Number(e.target.id));
  };

  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;

  const currentdata = useMemo(
    () => sellerGrid.slice(indexOfFirst, indexOfLast),
    [indexOfFirst, indexOfLast]
  );

  useEffect(() => {
    setCurrentpages(currentdata);
  }, [currentPage, currentdata]);

  const searchTeamMember = (ele: any) => {
    let search = ele.target.value;
    if (search) {
      search = search.toLowerCase();
      setCurrentpages(
        sellerGrid.filter((data: any) =>
          data.sellerName.toLowerCase().includes(search)
        )
      );
      setPagination(false);
    } else {
      setCurrentpages(currentdata);
      setPagination(true);
    }
  };

  const pageNumbers: any = [];
  for (let i = 1; i <= Math.ceil(sellerGrid.length / perPageData); i++) {
    pageNumbers.push(i);
  }

  const handleprevPage = () => {
    let prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };

  const handlenextPage = () => {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    if (pageNumbers.length && pageNumbers.length < currentPage) {
      setCurrentPage(pageNumbers.length);
    }
  }, [currentPage, pageNumbers.length]);

  const tog_AddSellerModals = () => {
    navigate("/AjouterActualite");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Liste des actualités" pageTitle="Actualités" />
          <Row className="mb-4">
            <Col xxl={12}>
              <Card className="text-center bg-primary border-0 mb-0">
                <Card.Body className="p-5">
                  <h4 className="text-white">
                    Rechercher les nouvelles actualiés
                  </h4>
                  {/* <p className="text-center text-white-75 fs-17 mb-3">when you'r searching for a sellers, then are a things you can do to get the most out of your search</p> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={6} md={10} className="mx-auto">
              <form action="#!" className="mt-n4">
                <div className="seller-search-box position-relative">
                  <i className="ri-search-2-line position-absolute my-auto d-flex align-items-center"></i>
                  <input
                    type="text"
                    className="form-control rounded-pill border-0 shadow"
                    id="searchInputList"
                    autoComplete="off"
                    placeholder=" ..."
                    onChange={(e) => searchTeamMember(e)}
                  />
                  <Button
                    variant="soft-danger"
                    className="fw-normal position-absolute rounded-pill"
                  >
                    <i className="bi bi-search"></i>
                  </Button>
                </div>
              </form>
            </Col>
          </Row>

          <Row className="mb-4 justify-content-between">
            <Col xxl={2} sm={6}>
              <Button
                onClick={() => tog_AddSellerModals()}
                variant="success"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
              >
                Ajouter Actualité
              </Button>
            </Col>
            <Col xxl={2} sm={6}>
              <select
                className="form-select mt-3 mt-sm-0"
                data-choices
                data-choices-search-false
                name="choices-single-default"
                id="idStatus"
              >
                <option value="all">Toutes</option>
                <option value="Today">Aujourd'hui</option>
                <option value="Yesterday">Hier</option>
                <option value="Last 7 Days">7 derniers jours</option>
                <option value="Last 30 Days">30 derniers jours</option>
                <option defaultValue="This Month">Ce Mois</option>
                <option value="Last Month">Le Mois dernier</option>
              </select>
            </Col>
          </Row>

          {/* <Modal className="fade" id="createModal" show={modal_AddSellerModals} onHide={() => { tog_AddSellerModals(); }} centered>
                        <Modal.Header closeButton>
                            <h1 className="modal-title fs-5" id="createModalLabel">Add Seller</h1>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="create-form">
                                <input type="hidden" id="id-field" />  
                                <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                <div>
                                    <div className="text-center mb-3">
                                        <div className="position-relative d-inline-block">
                                            <div className="position-absolute top-100 start-100 translate-middle">
                                                <label htmlFor="companyLogo-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select company logo">
                                                    <span className="avatar-xs d-inline-block">
                                                        <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                            <i className="ri-image-fill"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                                <Form.Control className="d-none" id="companyLogo-image-input" type="file" accept="image/png, image/gif, image/jpeg"/>
                                            </div>
                                            <div className="avatar-lg">
                                                <div className="avatar-title bg-light rounded-3">
                                                    <img src="#" alt="" id="companyLogo-img" className="avatar-md h-auto rounded-3 object-fit-cover"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="sellerName-input">Seller Name</Form.Label>
                                        <Form.Control type="text" id="sellerName-input" placeholder="Enter seller name" required/>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="webUrl-input">Web url</Form.Label>
                                        <Form.Control type="text" id="webUrl-input" placeholder="Enter web url" required/>
                                    </div>
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="itemStock-input">Stock</Form.Label>
                                                <Form.Control type="text" id="itemStock-input" placeholder="Enter stock" required/>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="revenue-input">Revenue</Form.Label>
                                                <Form.Control type="text" id="revenue-input" placeholder="Enter revenue" required/>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant='light' onClick={() => { tog_AddSellerModals(); }}>Close</Button>
                                    <Button variant='success' id="addNew">Create</Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal> */}

          <Row id="seller-list">
            {(currentpages || []).map((item: any, key: number) => (
              <Col xxl={3} lg={6} key={key}>
                {/* <Card>
                                <Card.Body className="p-4">
                                    <div className="avatar-md mx-auto">
                                        <div className="avatar-title bg-light rounded">
                                            <img src={item.companyLogo} alt="" className="avatar-xs" />
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <Link to="/seller-overview"><h5 className="mb-1">
                                            {item.sellerName}
                                            {item.verified && <i className="ph-circle-wavy-check-fill text-primary align-middle fs-15 ms-1"></i>}
                                        </h5></Link>
                                        <p className="text-muted fs-16 mb-4">{item.webUrl}</p>
                                    </div>
                                    <Row>
                                        <div className="col-6">
                                            <div className="text-center">
                                                <p className="text-muted mb-2 fs-15">Auteur</p>
                                                <h5 className="mb-0">{item.stock}</h5>
                                            </div>
                                        </div>
                                        <div className="col-6 border-start border-start-dashed">
                                            <div className="text-center">
                                                <p className="text-muted mb-2 fs-15">Date</p>
                                                <h5 className="mb-0">${item.revenue}</h5>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="mt-4 hstack gap-2">
                                        <Link to = "/DetailsActualite" state={item}>
                                        <Button variant='soft-secondary' className="w-100">View Details</Button>
                                        </Link>
                                        
                                        <Dropdown className="flex-shrink-0">
                                            <Dropdown.Toggle className="btn btn-soft-info btn-icon arrow-none">
                                                <i className="ph-dots-three-outline-vertical-fill"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li> <Dropdown.Item href="#" className='edit-list'> Modifier </Dropdown.Item> </li>
                                                <li> <Dropdown.Item href="#" className='remove-list'> Supprimer </Dropdown.Item> </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                            </Card> */}
                <Card>
                  <Card.Header>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h4 className="card-title mb-2">{item.sellerName}</h4>
                        <h6 className="card-subtitle font-14 text-muted">
                          {item.stock}
                        </h6>
                      </div>
                      <div className="flex-shrink-0">
                        <ul className="list-inline card-toolbar-menu d-flex align-items-center mb-0">
                          <li className="list-inline-item">
                            <Button
                              type="button"
                              className="btn btn-danger btn-icon"
                            >
                              <i className="ri-delete-bin-5-line"></i>
                            </Button>
                          </li>
                          <li className="list-inline-item">
                            <Button
                              type="button"
                              className="btn btn-success btn-icon"
                            >
                              <i className="bi bi-pencil-square"></i>
                            </Button>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </Card.Header>
                 
                  <Card.Body>
                  <img
                    className="img-fluid"
                    src={item.companyLogo}
                    alt="Card cap"
                  />
                    <p className="card-text">
                      Objectively pursue diverse catalysts for change for
                      interoperable meta-services. Distinctively re-engineer
                      revolutionary meta-services.
                    </p>
                  </Card.Body>
                  <div className="card-footer mt-4 hstack gap-2">
                    <Link
                      to="/DetailsActualite"
                      state={item}
                      className="card-link link-secondary"
                    >
                      <Button variant="soft-secondary" className="w-100">
                        Voir plus
                        <i className="bi bi-plus-circle-fill ms-1 align-middle lh-1"></i>
                      </Button>{" "}
                    </Link>
                    <Link to={item.webUrl} className="card-link link-success">
                      <Button variant="soft-primary" className="w-100">
                        {" "}
                        Lien
                        <i className="bi bi-arrow-right-circle-fill align-middle ms-1 lh-1"></i>{" "}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {!currentpages && (
            <div id="noresult">
              <div className="text-center py-4">
                <div className="avatar-md mx-auto mb-4">
                  <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                    <i className="bi bi-search"></i>
                  </div>
                </div>
                <h5 className="mt-2">Sorry! No Result Found</h5>
              </div>
            </div>
          )}

          {pagination && (
            <Row className="mb-4" id="pagination-element">
              <Col lg={12}>
                <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                  <div
                    className={
                      currentPage <= 1 ? "page-item disabled" : "page-item"
                    }
                  >
                    <Button
                      variant="link"
                      href="#"
                      className="page-link"
                      id="page-prev"
                      onClick={() => handleprevPage()}
                    >
                      <i className="mdi mdi-chevron-left" />
                    </Button>
                  </div>
                  <span id="page-num" className="pagination">
                    {pageNumbers.map((item: any, key: any) => (
                      <React.Fragment key={key}>
                        <div
                          className={
                            currentPage === item
                              ? "page-item active"
                              : "page-item"
                          }
                        >
                          <Link
                            className="page-link clickPageNumber"
                            to="#"
                            key={key}
                            id={item}
                            onClick={(e) => handleClick(e)}
                          >
                            {item}
                          </Link>
                        </div>
                      </React.Fragment>
                    ))}
                  </span>
                  <div
                    className={
                      currentPage >= pageNumbers.length
                        ? "page-item disabled"
                        : "page-item"
                    }
                  >
                    <Button
                      variant="link"
                      href="#"
                      className="page-link"
                      id="page-next"
                      onClick={() => handlenextPage()}
                    >
                      <i className="mdi mdi-chevron-right" />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ListeActualite;