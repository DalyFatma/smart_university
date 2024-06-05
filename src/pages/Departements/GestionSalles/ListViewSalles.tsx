


import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { salles } from "Common/data/salles";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ListViewSalles = () => {

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check"> <input className="form-check-input" type="checkbox" id="checkAll" value="option" /> </div>),
                Cell: (cellProps: any) => {
                    return (<div className="form-check"> <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" /> </div>);
                },
                id: '#',
            },
            {
                Header: "ID",
                accessor: "id",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Salle",
                accessor: "salle",
                disableFilters: true,
                filterable: true,
            },
           
            {
                Header: "Emplacement",
                accessor: "emplacement",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Type Salle",
                accessor: "type",
                disableFilters: true,
                filterable: true,
            },
            
        
            // {
            //     Header: "Activation",
            //     disableFilters: true,
            //     filterable: true,
            //     accessor: (cellProps: any) => {
            //         switch (cellProps.status) {
            //             case "Activé":
            //                 return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.status}</span>)
            //             case "Desactivé":
            //                 return (<span className="badge bg-danger-subtle text-danger text-uppercase"> {cellProps.status}</span>)
            //             default:
            //                 return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.status}</span>)
            //         }
            //     },
            // },
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <ul className="hstack gap-2 list-unstyled mb-0">
                          <li>
                            <Link
                              to="#"
                              className="badge bg-info-subtle text-info view-item-btn"
                   
                            >
                              <i
                                className="ph ph-eye"
                                style={{
                                  transition: "transform 0.3s ease-in-out",
                                  cursor: "pointer",
                                  fontSize: "1.5em",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform = "scale(1.4)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform = "scale(1)")
                                }
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="badge bg-primary-subtle text-primary edit-item-btn"
                        
                            >
                              <i
                                className="ph ph-pencil-line"
                                style={{
                                  transition: "transform 0.3s ease-in-out",
                                  cursor: "pointer",
                                  fontSize: "1.5em",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform = "scale(1.2)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform = "scale(1)")
                                }
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="badge bg-danger-subtle text-danger remove-item-btn"
                            >
                              <i
                                className="ph ph-trash"
                                style={{
                                  transition: "transform 0.3s ease-in-out",
                                  cursor: "pointer",
                                  fontSize: "1.5em",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform = "scale(1.2)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform = "scale(1)")
                                }
                                
                              ></i>
                            </Link>
                          </li>
                        </ul>
                      );
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <TableContainer
                columns={(columns || [])}
                data={(salles || [])}
                // isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css table align-middle table-nowrap"
                tableClass="table-centered align-middle table-nowrap mb-0"
                theadClass="text-muted table-light"
                SearchPlaceholder='Search Products...'
            />
        </React.Fragment>
    );
};

export default ListViewSalles;