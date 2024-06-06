


import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { LienUtils } from "Common/data/lienUtils";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ListViewLienUtils = () => {

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check"> <input className="form-check-input" type="checkbox" id="checkAll" value="option" /> </div>),
                Cell: (cellProps: any) => {
                    return (<div className="form-check"> <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" /> </div>);
                },
                id: '#',
            },
            // {
            //     Header: "ID",
            //     accessor: "id",
            //     disableFilters: true,
            //     filterable: true,
            // },
            {
                Header: "Titre",
                accessor: "titre",
                disableFilters: true,
                filterable: true,
            },
           
            {
                Header: "Description",
                accessor: "description",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Cible",
                accessor: "category",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Lien",
                accessor: "link",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Date d'ajout",
                accessor: "date",
                disableFilters: true,
                filterable: true,
            },
          
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <ul className="hstack gap-2 list-unstyled mb-0">
                          {/* <li>
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
                          </li> */}
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
                data={(LienUtils || [])}
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

export default ListViewLienUtils;