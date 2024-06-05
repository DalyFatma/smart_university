import React, { useState } from "react";
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
import CountUp from "react-countup";
import { Link, useNavigate } from "react-router-dom";
import ListViewMatieres from "./ListViewMatieres";
import * as XLSX from "xlsx";
import { matiere } from "../../../Common/data/matiere";
import FileSaver from 'file-saver';

interface Matiere {
  codeMatiere: string;
  matiere: string;
  type: string;
  semestre: string;
  volume: number;
  nbrElimination: number;
}

const ListMatieres = () => {
  document.title = "Liste des matiéres | Application Smart Institute";

  const navigate = useNavigate();
  const [matiere, setMatiere] = useState<Matiere[]>([]);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [modal_AddParametreModals, setmodal_AddParametreModals] =
    useState<boolean>(false);
  const [modal_ImportModals, setmodal_ImportModals] = useState<boolean>(false);
  function tog_AddParametreModals() {
    setmodal_AddParametreModals(!modal_AddParametreModals);
  }
  function tog_ImportModals() {
    setmodal_ImportModals(!modal_ImportModals);
  }
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(matiere);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Matieres");
    XLSX.writeFile(workbook, "Matieres.xlsx");
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: Matiere[] = XLSX.utils.sheet_to_json(worksheet) as Matiere[];
        setMatiere(jsonData);
        setFilePath(file.name);
    };
    reader.readAsArrayBuffer(file);
};

const createAndDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(ws, [
        ["codeMatiere", "matiere", "type", "semestre", "volume", "nbrElimination"]
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Matières");
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, "template_matiere.xlsx");
};


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb
            title="Gestion des départements"
            pageTitle="Liste des matiéres"
          />

          <Row id="sellersList">
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Row className="g-3">
                    <Col lg={3}>
                      <div className="search-box">
                        <input
                          type="text"
                          className="form-control search"
                          placeholder="Chercher..."
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <Col className="col-lg-auto">
                      <select
                        className="form-select"
                        id="idStatus"
                        name="choices-single-default"
                      >
                        <option defaultValue="All">Status</option>
                        <option value="All">tous</option>
                        <option value="Active">Activé</option>
                        <option value="Inactive">Desactivé</option>
                      </select>
                    </Col>

                    <Col className="col-lg-auto ms-auto">
                      <div className="hstack gap-3">
                        <Button
                          variant="primary"
                          className="add-btn"
                          onClick={() => tog_AddParametreModals()}
                        >
                          Ajouter matiére
                        </Button>
                        <Button
                          variant="primary"
                          className="add-btn"
                          onClick={() => tog_ImportModals()}
                          // onClick={exportToExcel}
                        >
                          Importer
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Modal
                className="fade modal-fullscreen"
                show={modal_AddParametreModals}
                onHide={() => {
                  tog_AddParametreModals();
                }}
                centered
              >
                <Modal.Header className="px-4 pt-4" closeButton>
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ajouter une matière
                  </h5>
                </Modal.Header>
                <Form className="tablelist-form">
                  <Modal.Body className="p-4">
                    <div
                      id="alert-error-msg"
                      className="d-none alert alert-danger py-2"
                    ></div>
                    <input type="hidden" id="id-field" />

                    <div className="mb-3">
                      <Form.Label htmlFor="item-stock-field">
                        Nom matière
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="item-stock-field"
                        placeholder=""
                        required
                      />
                    </div>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Form.Label htmlFor="civilStatus">
                            Type matière
                          </Form.Label>
                          <select
                            className="form-select text-muted"
                            name="civilStatus"
                            id="civilStatus"
                          >
                            <option value="">Cours</option>
                            <option value="Married">1/2 Cours</option>
                            <option value="Single">TP/TD</option>
                            <option value="Divorced">TD</option>
                            <option value="Widowed">TP</option>
                            <option value="Widowed">½ TP</option>
                            <option value="Widowed">½ TD</option>
                            <option value="Widowed">Cours Intégré</option>
                          </select>
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <div className="form-check form-switch mt-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="SwitchCheck1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SwitchCheck1"
                            >
                              S1
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col lg={2}>
                        <div className="mb-3">
                          <div className="form-check form-switch mt-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="SwitchCheck2"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="SwitchCheck2"
                            >
                              S2
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    {/* <div className="mb-3">
                      <Form.Label htmlFor="civilStatus">Semestre</Form.Label>
                      <select
                        className="form-select text-muted"
                        name="civilStatus"
                        id="civilStatus"
                      >
                        <option value="">Choisir semestre</option>
                        <option value="Married">S1</option>
                        <option value="Single">S2</option>
                      </select>
                    </div> */}

                    <div className="mb-3">
                      <Form.Label htmlFor="phone-field">
                        Volume horaire
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="phone-field"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <Form.Label htmlFor="phone-field">
                        Nombre d'élimination
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="phone-field"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Form.Label htmlFor="phone-field">
                        Code matière
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="phone-field"
                        placeholder=""
                        required
                      />
                    </div>
                  </Modal.Body>
                  <div className="modal-footer">
                    <div className="hstack gap-2 justify-content-end">
                      <Button
                        className="btn-ghost-danger"
                        onClick={() => {
                          tog_AddParametreModals();
                        }}
                      >
                        Fermer
                      </Button>
                      <Button variant="success" id="add-btn">
                        Ajouter
                      </Button>
                    </div>
                  </div>
                </Form>
              </Modal>
              <Modal
                className="fade modal-fullscreen"
                show={modal_ImportModals}
                onHide={tog_ImportModals}
                centered
            >
                <Modal.Header className="px-4 pt-4" closeButton>
                    <h5 className="modal-title" id="exampleModalLabel">
                        Importer matières
                    </h5>
                </Modal.Header>
                <Form className="tablelist-form">
                    <Modal.Body className="p-4">
                        Vous pouvez importer plusieurs matières à partir de ce
                        template <a href="#" onClick={createAndDownloadExcel}>Cliquer ici pour télécharger</a>
                        <Form.Group controlId="formFile" className="mt-3">
                            <Form.Label>Upload Excel File</Form.Label>
                            <Form.Control type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
                        </Form.Group>
                        {filePath && <p>File Path: {filePath}</p>}
                    </Modal.Body>
                    <div className="modal-footer">
                        <div className="hstack gap-2 justify-content-end">
                            <Button
                                className="btn-ghost-danger"
                                onClick={tog_ImportModals}
                            >
                                Fermer
                            </Button>
                            <Button variant="success" id="add-btn">
                                Importer
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>

              <Card>
                <Card.Body className="p-0">
                  {/* <div className="table-responsive table-card mb-1"> */}
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                  >
                    <ListViewMatieres />
                  </table>
                  <div className="noresult" style={{ display: "none" }}>
                    <div className="text-center py-4">
                      <div className="avatar-md mx-auto mb-4">
                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                          <i className="bi bi-search"></i>
                        </div>
                      </div>
                      <h5 className="mt-2">Sorry! No Result Found</h5>
                      <p className="text-muted mb-0">
                        We've searched more than 150+ seller We did not find any
                        seller for you search.
                      </p>
                    </div>
                  </div>
                  {/* </div> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ListMatieres;
